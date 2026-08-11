// Transforme les lignes compactes en fichiers vocab3.js / vocab4.js au schéma exact du projet
// Format : id|ar|translit|freq|racine|theme|fr|en|tr|famille(ar~translit~fr~en~tr;...)|prof_fr|prof_en|prof_tr|sourates
const fs = require('fs');
const path = require('path');
const THEMES = ["allah","foi","prophetie","creation","homme","morale","jugement","priere","communaute","temps","grammaire"];
const existing = require('./existing.json');
const seenAr = new Map(existing.map(w => [w.ar, w.id]));
const seenTr = new Map(existing.map(w => [w.t.toLowerCase(), w.id]));

function parse(file) {
  const lines = fs.readFileSync(file, 'utf8').split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));
  const out = [], errors = [];
  for (const line of lines) {
    const p = line.split('|');
    if (p.length !== 14) { errors.push(`champs=${p.length} : ${line.slice(0,60)}`); continue; }
    const [id, ar, translit, freq, racine, theme, fr, en, tr, fam, pfr, pen, ptr, srt] = p;
    const e = {
      id: +id, ar, translit, frequence: +freq, rang: +id, racine, theme,
      traductions: { fr, en, tr },
      famille: fam ? fam.split(';').map(f => { const [a,t2,f2,e2,t3] = f.split('~'); return { ar:a, translit:t2, fr:f2, en:e2, tr:t3 }; }).filter(f => f.ar && f.ar !== '—') : [],
      profondeur: { fr: pfr, en: pen, tr: ptr },
      sourates_cles: srt.split(',').map(Number)
    };
    if (!THEMES.includes(theme)) errors.push(`theme invalide "${theme}" (id ${id})`);
    if (!ar || !translit || !fr || !en || !tr || !racine) errors.push(`champ vide (id ${id})`);
    if (e.famille.some(f => !f.ar || !f.fr || !f.tr)) errors.push(`famille incomplete (id ${id})`);
    if (e.sourates_cles.some(s => !(s >= 1 && s <= 114))) errors.push(`sourate invalide (id ${id})`);
    out.push(e);
  }
  return { out, errors };
}

function check(all) {
  const errors = [], warnings = [];
  const ids = new Set();
  let prevFreq = Infinity;
  for (const w of all) {
    if (ids.has(w.id)) errors.push(`id duplique ${w.id}`);
    ids.add(w.id);
    if (seenAr.has(w.ar)) errors.push(`DOUBLON arabe "${w.ar}" (id ${w.id}) = existant id ${seenAr.get(w.ar)}`);
    if (seenTr.has(w.translit.toLowerCase())) warnings.push(`translit deja vue "${w.translit}" (id ${w.id}) = id ${seenTr.get(w.translit.toLowerCase())}`);
    seenAr.set(w.ar, w.id); seenTr.set(w.translit.toLowerCase(), w.id);
    if (w.frequence > prevFreq + 8) warnings.push(`freq non decroissante id ${w.id} (${w.frequence} > ${prevFreq})`);
    prevFreq = w.frequence;
  }
  // continuité des ids
  const sorted = [...ids].sort((a,b)=>a-b);
  for (let i = 1; i < sorted.length; i++) if (sorted[i] !== sorted[i-1]+1) errors.push(`trou d'ids : ${sorted[i-1]} -> ${sorted[i]}`);
  return { errors, warnings };
}

function emit(list, constName, file, range) {
  const body = list.map(w => JSON.stringify(w, null, 0)
    .replace(/^\{/, '  {\n    ').replace(/\}$/, '\n  }')
    .replace(/,"(translit|frequence|rang|racine|theme|traductions|famille|profondeur|sourates_cles)":/g, ',\n    "$1":')
  ).join(',\n');
  const header = `// ${constName} — mots ${range} les plus fréquents du Coran (fréquences estimées, à valider)\n// Généré pour Comprendre le Coran — schéma identique à vocab.js / vocab2.js\nconst ${constName} = [\n${body}\n];\n\nexport { ${constName} };\n`;
  fs.writeFileSync(file, header);
}

const a = parse(path.join(__dirname, 'v3.txt'));
const b = parse(path.join(__dirname, 'v4.txt'));
const all = [...a.out, ...b.out].sort((x,y)=>x.id-y.id);
const chk = check(all);
const allErrors = [...a.errors, ...b.errors, ...chk.errors];
console.log('entrees:', all.length, '| ids', all[0]?.id, '->', all[all.length-1]?.id);
if (allErrors.length) { console.log('ERREURS:\n' + allErrors.join('\n')); process.exit(1); }
if (chk.warnings.length) console.log('Avertissements (' + chk.warnings.length + '):\n' + chk.warnings.slice(0,40).join('\n'));
emit(a.out, 'VOCAB3', '../data/vocab3.js', '301–650');
emit(b.out, 'VOCAB4', '../data/vocab4.js', '651–1000');
console.log('vocab3.js + vocab4.js generes');
