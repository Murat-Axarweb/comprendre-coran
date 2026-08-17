// Génère sourates/sNNN.js à partir de base.json + fichiers de contenu build/content/cNNN.js
const fs = require('fs');
const path = require('path');
const base = require('./base.json');

// --- Charger tout le vocabulaire (1000 mots) pour l'auto-glossaire ---
function loadVocab(f, name) {
  const s = fs.readFileSync(f, 'utf8').replace(/export.*$/m, '');
  return new Function(s + '; return ' + name + ';')();
}
const ROOT = '../data/';
const ALL = [
  ...loadVocab(ROOT + 'vocab.js', 'VOCAB'),
  ...loadVocab(ROOT + 'vocab2.js', 'VOCAB2'),
  ...loadVocab(ROOT + 'vocab3.js', 'VOCAB3'),
  ...loadVocab(ROOT + 'vocab4.js', 'VOCAB4'),
];

function skel(w) {
  return w.replace(/[\u064B-\u0652\u0670\u0653\u0640]/g, '')
    .replace(/\u0671/g, 'ا').replace(/[أإآ]/g, 'ا');
}
const vmap = new Map();
for (const w of ALL) {
  const k = skel(w.ar);
  if (!vmap.has(k)) vmap.set(k, w);
}
const PREFIXES = ['وال','فال','بال','كال','ولل','فلل','لل','ال','و','ف','ب','ل','ك','س'];
function autoGloss(arWord) {
  const s = skel(arWord);
  const candidates = [s];
  for (const p of PREFIXES) if (s.startsWith(p) && s.length - p.length >= 2) candidates.push(s.slice(p.length));
  for (const c of candidates) {
    const hit = vmap.get(c);
    if (hit) return hit;
  }
  return null;
}

function esc(s) { return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"'); }

// Traductions déjà présentes dans sourates/sNNN.js. Elles proviennent de
// traducteurs publiés (Hamidullah, Saheeh International, Diyanet) et NE
// DOIVENT PAS être écrasées par les anciennes traductions de content/.
// Voir scripts/import-translations.mjs.
function traductionsExistantes(n) {
  const f = path.join(__dirname, '..', 'sourates', 's' + String(n).padStart(3, '0') + '.js');
  if (!fs.existsSync(f)) return null;
  try {
    const src = fs.readFileSync(f, 'utf8');
    // Délimitation par comptage d'accolades : lastIndexOf('};') tomberait
    // sur une occurrence interne aux données et casserait la lecture.
    const i = src.indexOf('{');
    if (i < 0) return null;
    let prof = 0, j = i, dansChaine = false, echap = false;
    for (; j < src.length; j++) {
      const c = src[j];
      if (dansChaine) {
        if (echap) echap = false;
        else if (c === '\\') echap = true;
        else if (c === '"') dansChaine = false;
        continue;
      }
      if (c === '"') dansChaine = true;
      else if (c === '{') prof++;
      else if (c === '}' && --prof === 0) break;
    }
    const data = JSON.parse(src.slice(i, j + 1));
    const out = {};
    (data.versets || []).forEach(v => { out[v.numero] = v.traductions; });
    return Object.keys(out).length ? out : null;
  } catch (e) { return null; }
}

// Marquage des groupes de versets déjà présent dans sourates/sNNN.js.
function groupesExistantsDe(n) {
  const f = path.join(__dirname, '..', 'sourates', 's' + String(n).padStart(3, '0') + '.js');
  if (!fs.existsSync(f)) return null;
  try {
    const src = fs.readFileSync(f, 'utf8');
    const i = src.indexOf('{');
    if (i < 0) return null;
    let prof = 0, j = i, ds = false, ec = false;
    for (; j < src.length; j++) {
      const c = src[j];
      if (ds) { if (ec) ec = false; else if (c === '\\') ec = true; else if (c === '"') ds = false; continue; }
      if (c === '"') ds = true; else if (c === '{') prof++; else if (c === '}' && --prof === 0) break;
    }
    const data = JSON.parse(src.slice(i, j + 1));
    const out = {};
    (data.versets || []).forEach(v => { if (v.groupes) out[v.numero] = v.groupes; });
    return Object.keys(out).length ? out : null;
  } catch (e) { return null; }
}

function buildSurah(n) {
  const content = require('./content/c' + String(n).padStart(3, '0') + '.js');
  const dejaTraduit = traductionsExistantes(n);
  const groupesExistants = groupesExistantsDe(n);
  const b = base[n];
  if (!b) throw new Error('base manquante ' + n);
  // Le champ « t » est facultatif : les traductions viennent désormais de
  // sourates/sNNN.js (sources externes préservées par traductionsExistantes).
  // On ne le contrôle que s'il est renseigné.
  const aTraductions = Array.isArray(content.t) && content.t.length > 0;
  if (aTraductions && content.t.length !== b.verses.length) {
    throw new Error(`s${n}: ${content.t.length} traductions pour ${b.verses.length} versets`);
  }
  if (!aTraductions && !dejaTraduit) {
    throw new Error(`s${n}: ni traductions dans content/, ni sourates/s${String(n).padStart(3,'0')}.js existant`);
  }

  const versets = b.verses.map((v, vi) => {
    const [fr, en, tr] = aTraductions ? content.t[vi] : ['', '', ''];
    let mots = [];
    const manual = content.mots && content.mots[v.n];
    if (manual) {
      // Deux formats acceptés :
      //  - historique : une glose par mot, dans l'ordre, [texte, racine, fréq]
      //  - étendu     : [motArabe, texte, racine, fréq] — permet de ne gloser
      //                 qu'une partie des mots, ce qui est le cas courant
      //                 (57 % du corpus est glosé).
      const etendu = manual.length > 0 && manual[0].length === 4;
      if (!etendu && manual.length !== v.words.length) {
        throw new Error(`s${n} v${v.n}: ${manual.length} gloses pour ${v.words.length} mots — [${v.words.map(w => w.tr).join(' | ')}]`);
      }
      if (etendu) {
        // On suit l'ordre des mots du verset et on consomme les gloses
        // fournies : un mot sans glose est simplement omis.
        const file = manual.slice();
        mots = [];
        v.words.forEach((w, wi) => {
          if (file.length && file[0][0] === w.ar) {
            const [, gfr, racine, freq] = file.shift();
            const note = content.motNotes && content.motNotes[v.n + '_' + wi];
            mots.push({ ar: w.ar, translit: w.tr, fr: gfr, racine, frequence_coran: freq, ...(note || {}) });
          }
        });
        if (file.length) {
          throw new Error(`s${n} v${v.n}: ${file.length} glose(s) sans mot correspondant — première : ${file[0][0]}`);
        }
      } else {
        mots = v.words.map((w, wi) => {
          const [gfr, racine, freq] = manual[wi];
          const note = content.motNotes && content.motNotes[v.n + '_' + wi];
          return { ar: w.ar, translit: w.tr, fr: gfr, racine, frequence_coran: freq, ...(note || {}) };
        });
      }
    } else if (content.autogloss !== false) {
      mots = v.words.map(w => {
        const hit = autoGloss(w.ar);
        if (!hit) return null;
        return { ar: w.ar, translit: w.tr, fr: hit.traductions.fr.split('/')[0].trim(), racine: hit.racine, frequence_coran: hit.frequence };
      }).filter(Boolean);
    }
    return {
      numero: v.n,
      ar: v.ar,
      translit: v.translit,
      // Priorité aux traductions de référence déjà installées ; celles de
      // content/ ne servent que si la sourate n'existe pas encore.
      traductions: (dejaTraduit && dejaTraduit[v.n]) || {
        fr: { auteur: 'Comprendre le Coran', texte: fr },
        en: { auteur: 'Comprendre le Coran', texte: en },
        tr: { auteur: 'Comprendre le Coran', texte: tr }
      },
      mots,
      niveau_couche: content.couche || 2,
      // Marquage des versets rendus en bloc par une traduction : posé par
      // scripts/mark-translation-groups.mjs, il doit survivre au rebuild.
      ...(groupesExistants && groupesExistants[v.n] ? { groupes: groupesExistants[v.n] } : {})
    };
  });

  const S = {
    meta: {
      numero: n,
      nom_ar: b.ar_name,
      nom_translit: b.name,
      nom_fr: content.nom_fr,
      nom_en: content.nom_en || '',
      nom_tr: content.nom_tr || '',
      type: content.type || 'mecquoise',
      versets_count: b.total,
      theme: content.theme || '',
      note_pedagogique: content.note || '',
      progression: { couche: content.couche || 2, prerequis: content.prerequis || [], suivant: content.suivant || [] },
      racines_cles: content.racines || [],
      // Attribution réelle : voir scripts/import-translations.mjs. Cette note
      // annonçait encore des traductions originales, ce qui est faux depuis
      // l'intégration des traductions publiées.
      traduction_note: dejaTraduit
        ? 'Hamidullah (fr) · Saheeh International (en) · Diyanet İşleri Başkanlığı (tr) — via Tanzil.net'
        : 'Traductions à intégrer'
    },
    versets,
    ...(content.resume ? {
      resume_pedagogique: {
        mots_cles_a_retenir: content.resume.mots || [],
        racines_a_retenir: content.resume.racines || [],
        declic_frequence: content.resume.declic || ''
      }
    } : {})
  };

  const constName = 'S' + String(n).padStart(3, '0');
  // En-tête d'attribution : exigé par les conditions d'utilisation de
  // Tanzil.net, il doit figurer dans tout fichier contenant ces traductions.
  const entete = dejaTraduit
    ? '// Traductions : Hamidullah (fr), Saheeh International (en), Diyanet (tr)\n'
      + '// Source : quran-json / Tanzil.net — reproduction verbatim, usage non commercial.\n'
    : '';
  const js = entete + 'const ' + constName + ' = ' + JSON.stringify(S, null, 2) + ';\n\nexport { ' + constName + ' };\n';
  const out = path.join(__dirname, '..', 'sourates', 's' + String(n).padStart(3, '0') + '.js');
  fs.writeFileSync(out, js);
  const nGloss = versets.reduce((a, v) => a + v.mots.length, 0);
  const nWords = b.verses.reduce((a, v) => a + v.words.length, 0);
  console.log(`s${n}: ${versets.length} versets, ${nGloss}/${nWords} mots glosés`);
}

const args = process.argv.slice(2).map(Number);
for (const n of args) buildSurah(n);
