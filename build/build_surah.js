// Génère sourates/sNNN.js à partir de base.json + fichiers de contenu build/content/cNNN.js
const fs = require('fs');
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

function buildSurah(n) {
  const content = require('./content/c' + String(n).padStart(3, '0') + '.js');
  const b = base[n];
  if (!b) throw new Error('base manquante ' + n);
  if (content.t.length !== b.verses.length) throw new Error(`s${n}: ${content.t.length} traductions pour ${b.verses.length} versets`);

  const versets = b.verses.map((v, vi) => {
    const [fr, en, tr] = content.t[vi];
    let mots = [];
    const manual = content.mots && content.mots[v.n];
    if (manual) {
      if (manual.length !== v.words.length) {
        throw new Error(`s${n} v${v.n}: ${manual.length} gloses pour ${v.words.length} mots — [${v.words.map(w => w.tr).join(' | ')}]`);
      }
      mots = v.words.map((w, wi) => {
        const [gfr, racine, freq] = manual[wi];
        const note = content.motNotes && content.motNotes[v.n + '_' + wi];
        return { ar: w.ar, translit: w.tr, fr: gfr, racine, frequence_coran: freq, ...(note || {}) };
      });
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
      traductions: {
        fr: { auteur: 'Comprendre le Coran', texte: fr },
        en: { auteur: 'Comprendre le Coran', texte: en },
        tr: { auteur: 'Comprendre le Coran', texte: tr }
      },
      mots,
      ...(content.analyses && content.analyses[v.n] ? { analyse_globale: content.analyses[v.n] } : {}),
      niveau_couche: content.couche || 2
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
      traduction_note: 'Traductions pédagogiques originales (FR/EN/TR) — Comprendre le Coran'
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
  const js = 'const ' + constName + ' = ' + JSON.stringify(S, null, 2) + ';\n\nexport { ' + constName + ' };\n';
  const out = '../sourates/s' + String(n).padStart(3, '0') + '.js';
  fs.writeFileSync(out, js);
  const nGloss = versets.reduce((a, v) => a + v.mots.length, 0);
  const nWords = b.verses.reduce((a, v) => a + v.words.length, 0);
  console.log(`s${n}: ${versets.length} versets, ${nGloss}/${nWords} mots glosés`);
}

const args = process.argv.slice(2).map(Number);
for (const n of args) buildSurah(n);
