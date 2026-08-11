#!/usr/bin/env node
// ============================================================
// Import des traductions de référence — Comprendre le Coran
//
//   node scripts/import-translations.mjs --verifier   (aucune écriture)
//   node scripts/import-translations.mjs --appliquer
//
// Remplace les traductions de versets par celles de traducteurs
// reconnus, issues du paquet quran-json (données Tanzil.net) :
//
//   Français : Muhammad Hamidullah
//   Anglais  : Saheeh International
//   Turc     : Diyanet İşleri Başkanlığı
//
// Seul le bloc « traductions » de chaque verset est modifié : texte
// arabe, translittération, découpage mot à mot, analyses et
// métadonnées sont conservés à l'identique.
//
// Prérequis : npm pack quran-json && tar xzf quran-json-*.tgz
// (ou --source pour indiquer un autre dossier dist/).
//
// CONDITIONS D'UTILISATION (Tanzil.net) : usage non commercial,
// reproduction verbatim sans modification, source et lien vers
// tanzil.net à mentionner. Voir README.
// ============================================================
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const appliquer = args.includes('--appliquer');
const iSource = args.indexOf('--source');
const dist = iSource >= 0 ? args[iSource + 1] : '/home/claude/package/dist';

const SOURCES = {
  fr: { fichier: 'quran_fr.json', auteur: 'Muhammad Hamidullah' },
  en: { fichier: 'quran_en.json', auteur: 'Saheeh International' },
  tr: { fichier: 'quran_tr.json', auteur: 'Diyanet İşleri Başkanlığı' }
};

// ----- Chargement des sources -----
const data = {};
for (const [lang, s] of Object.entries(SOURCES)) {
  const chemin = join(dist, s.fichier);
  if (!existsSync(chemin)) {
    console.error(`✗ source introuvable : ${chemin}`);
    console.error('  Lancer d\'abord : npm pack quran-json && tar xzf quran-json-*.tgz');
    process.exit(1);
  }
  data[lang] = JSON.parse(readFileSync(chemin, 'utf8'));
  if (data[lang].length !== 114) { console.error(`✗ ${s.fichier} : ${data[lang].length} sourates`); process.exit(1); }
}

// ----- Contrôle d'alignement, avant toute écriture -----
let erreurs = 0;
const modules = {};
for (let n = 1; n <= 114; n++) {
  const nom = `s${String(n).padStart(3, '0')}`;
  const mod = await import(`file://${join(root, 'sourates', nom + '.js')}`);
  const d = mod.default || Object.values(mod)[0];
  modules[n] = d;
  for (const lang of Object.keys(SOURCES)) {
    const src = data[lang][n - 1];
    if (src.id !== n) { console.error(`✗ ${lang} : la sourate ${n} est indexée ${src.id}`); erreurs++; }
    if (src.verses.length !== d.versets.length) {
      console.error(`✗ ${nom} (${lang}) : ${d.versets.length} versets ici, ${src.verses.length} dans la source`); erreurs++;
    }
  }
}
if (erreurs) { console.error(`\n${erreurs} problème(s) d'alignement — aucune écriture effectuée.`); process.exit(1); }
console.log('✓ alignement vérifié : 114 sourates, numérotation identique dans les 3 langues.');

// ----- Remplacement -----
let versetsTraites = 0, fichiersEcrits = 0;
for (let n = 1; n <= 114; n++) {
  const nom = `s${String(n).padStart(3, '0')}`;
  const d = modules[n];
  const varName = 'S' + String(n).padStart(3, '0');

  d.versets.forEach((v, i) => {
    const trads = {};
    for (const [lang, s] of Object.entries(SOURCES)) {
      trads[lang] = { auteur: s.auteur, texte: data[lang][n - 1].verses[i].translation };
    }
    v.traductions = trads;
    versetsTraites++;
  });

  // Résumé de sourate dans meta : concaténation des versets.
  if (d.meta && d.meta.traductions) {
    const resume = {};
    for (const [lang, s] of Object.entries(SOURCES)) {
      resume[lang] = { auteur: s.auteur, texte: data[lang][n - 1].verses.map(v => v.translation).join(' ') };
    }
    d.meta.traductions = resume;
  }

  if (appliquer) {
    const entete = `// Traductions : Hamidullah (fr), Saheeh International (en), Diyanet (tr)\n`
                 + `// Source : quran-json / Tanzil.net — reproduction verbatim, usage non commercial.\n`;
    const contenu = `${entete}const ${varName} = ${JSON.stringify(d, null, 2)};\n\nexport { ${varName} };\n`;
    writeFileSync(join(root, 'sourates', nom + '.js'), contenu);
    fichiersEcrits++;
  }
}

console.log(`✓ ${versetsTraites} versets × 3 langues préparés.`);
if (appliquer) console.log(`✓ ${fichiersEcrits} fichiers réécrits.`);
else console.log('  (mode vérification : aucun fichier modifié — relancer avec --appliquer)');
