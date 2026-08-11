#!/usr/bin/env node
// ============================================================
// Marquage des groupes de traduction — Comprendre le Coran
//
//   node scripts/mark-translation-groups.mjs --verifier
//   node scripts/mark-translation-groups.mjs --appliquer
//
// Certaines traductions rendent plusieurs versets liés en un seul bloc :
// c'est notamment le cas du turc de Diyanet, qui couvre ainsi environ un
// verset sur cinq. Reprise telle quelle, la même traduction se répétait
// à l'identique sur chaque verset du groupe.
//
// Ce script détecte ces répétitions et ajoute, sur chaque verset
// concerné, un champ « groupes » :
//
//   groupes: { tr: { debut: 117, fin: 119, principal: true } }
//
//   principal = true  -> premier verset du groupe : le lecteur affiche
//                        la traduction, précédée de « Versets 117-119 ».
//   principal = false -> versets suivants : le lecteur renvoie au verset
//                        principal au lieu de répéter le même texte.
//
// Le texte des traductions n'est jamais modifié : on n'ajoute qu'une
// indication de structure, ce qui respecte l'exigence de reproduction
// verbatim de Tanzil.
// ============================================================
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const LANGS = ['fr', 'en', 'tr'];
const appliquer = process.argv.includes('--appliquer');

const stats = {};
LANGS.forEach(l => { stats[l] = { groupes: 0, versets: 0 }; });
let fichiersEcrits = 0;

for (let n = 1; n <= 114; n++) {
  const nom = `s${String(n).padStart(3, '0')}`;
  const varName = 'S' + String(n).padStart(3, '0');
  const mod = await import(`file://${join(root, 'sourates', nom + '.js')}?v=${Date.now()}`);
  const d = mod.default || Object.values(mod)[0];

  // On repart d'un état propre : le script doit être rejouable.
  d.versets.forEach(v => { delete v.groupes; });

  let marqueDansCeFichier = false;

  for (const lang of LANGS) {
    let i = 0;
    while (i < d.versets.length) {
      const texte = (d.versets[i].traductions?.[lang]?.texte || '').trim();
      let j = i + 1;
      while (j < d.versets.length && (d.versets[j].traductions?.[lang]?.texte || '').trim() === texte && texte) j++;

      const taille = j - i;
      if (taille > 1) {
        const debut = d.versets[i].numero;
        const fin = d.versets[j - 1].numero;
        for (let k = i; k < j; k++) {
          const v = d.versets[k];
          if (!v.groupes) v.groupes = {};
          v.groupes[lang] = { debut, fin, principal: k === i };
        }
        stats[lang].groupes++;
        stats[lang].versets += taille;
        marqueDansCeFichier = true;
      }
      i = j;
    }
  }

  if (appliquer && marqueDansCeFichier) {
    const entete = `// Traductions : Hamidullah (fr), Saheeh International (en), Diyanet (tr)\n`
                 + `// Source : quran-json / Tanzil.net — reproduction verbatim, usage non commercial.\n`;
    writeFileSync(join(root, 'sourates', nom + '.js'),
      `${entete}const ${varName} = ${JSON.stringify(d, null, 2)};\n\nexport { ${varName} };\n`);
    fichiersEcrits++;
  }
}

for (const lang of LANGS) {
  const s = stats[lang];
  console.log(`  ${lang} : ${s.groupes} groupe(s), ${s.versets} verset(s) concerné(s)`);
}
if (appliquer) console.log(`✓ ${fichiersEcrits} fichiers mis à jour.`);
else console.log('  (mode vérification : aucun fichier modifié)');
