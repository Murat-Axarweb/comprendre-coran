#!/usr/bin/env node
// ============================================================
// Complément des gloses turques — Comprendre le Coran
//
//   node scripts/complete-turkish.mjs --verifier
//   node scripts/complete-turkish.mjs --appliquer
//
// Le jeu de données turc mot à mot est un travail collaboratif encore en
// cours : environ un mot sur dix n'y figure pas. Ces mots ne sont pourtant
// pas rares — « la terre », « le ciel », « Allah » y manquent à certaines
// positions alors qu'ils sont traduits ailleurs.
//
// Ce script comble ces trous **depuis la source turque elle-même** : quand
// une forme reçoit presque toujours la même traduction dans le reste du
// corpus, on la reporte aux positions vides.
//
// PRUDENCE — le turc est agglutinant et la traduction suit le cas
// grammatical : « هُمْ » donne onlar, onlara, onların selon le contexte.
// Le report n'a donc lieu que si une variante domine à 90 % au moins ;
// sinon la position reste vide et le lecteur se replie sur l'anglais.
// Les gloses ainsi reportées portent la marque « tr_report ».
// ============================================================
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const appliquer = process.argv.includes('--appliquer');
const SEUIL = 0.9;

const base = JSON.parse(readFileSync(join(root, 'build', 'base.json'), 'utf8'));

// Traductions observées pour chaque forme, dans tout le corpus.
const observees = new Map();
for (let n = 1; n <= 114; n++) {
  const mod = await import(`file://${join(root, 'sourates', `s${String(n).padStart(3, '0')}.js`)}?o=${Date.now()}`);
  const d = mod.default || Object.values(mod)[0];
  d.versets.forEach(v => (v.mots || []).forEach(m => {
    if (!m.tr) return;
    if (!observees.has(m.ar)) observees.set(m.ar, new Map());
    const c = observees.get(m.ar);
    c.set(m.tr, (c.get(m.tr) || 0) + 1);
  }));
}

// Forme -> traduction dominante, si elle l'est assez nettement.
const dominante = new Map();
for (const [forme, variantes] of observees) {
  const tri = [...variantes.entries()].sort((a, b) => b[1] - a[1]);
  const total = tri.reduce((a, [, c]) => a + c, 0);
  if (tri[0][1] / total >= SEUIL) dominante.set(forme, tri[0][0]);
}

let vides = 0, reportes = 0, fichiers = 0;
for (let n = 1; n <= 114; n++) {
  const nom = `s${String(n).padStart(3, '0')}`;
  const mod = await import(`file://${join(root, 'sourates', nom + '.js')}?a=${Date.now()}`);
  const d = mod.default || Object.values(mod)[0];
  let touche = false;

  d.versets.forEach(v => (v.mots || []).forEach(m => {
    if (m.tr) return;
    vides++;
    const t = dominante.get(m.ar);
    if (!t) return;
    m.tr = t;
    m.tr_report = true;      // signale un report, pour la relecture
    reportes++; touche = true;
  }));

  if (appliquer && touche) {
    const varName = 'S' + String(n).padStart(3, '0');
    const src = readFileSync(join(root, 'sourates', nom + '.js'), 'utf8');
    const entete = src.split('\n').filter(l => l.startsWith('//')).join('\n');
    writeFileSync(join(root, 'sourates', nom + '.js'),
      (entete ? entete + '\n' : '') +
      `const ${varName} = ${JSON.stringify(d, null, 2)};\n\nexport { ${varName} };\n`);
    fichiers++;
  }
}

const total = 77428;
console.log(`  formes à traduction stable (≥${SEUIL * 100} %) : ${dominante.size}`);
console.log(`  positions sans glose turque              : ${vides}`);
console.log(`  complétées par report                    : ${reportes}`);
console.log(`\n  COUVERTURE TURQUE : ${((total - vides) / total * 100).toFixed(1)} %  ->  ${((total - vides + reportes) / total * 100).toFixed(1)} %`);
if (appliquer) console.log(`\n✓ ${fichiers} fichiers mis à jour.`);
else console.log('\n  (mode vérification : aucun fichier modifié)');
