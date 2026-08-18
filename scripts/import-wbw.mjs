#!/usr/bin/env node
// ============================================================
// Traductions mot à mot — Comprendre le Coran
//
//   node scripts/import-wbw.mjs --verifier
//   node scripts/import-wbw.mjs --appliquer
//
// Deux problèmes résolus en même temps :
//
//   1. COUVERTURE — l'appariement par lemme laissait environ un mot sur dix
//      sans traduction. Les jeux de données mot à mot fournissent une glose
//      pour chaque position du texte, ce qui permet d'atteindre la totalité.
//
//   2. LANGUES — les gloses n'existaient qu'en français : un lecteur anglais
//      ou turc voyait du français dans l'analyse mot à mot. Les trois langues
//      du site sont désormais servies.
//
// PRÉCÉDENCE DES SOURCES, de la plus fiable à la moins fiable :
//   - glose rédigée pour le projet (français) : conservée telle quelle ;
//   - glose issue des jeux mot à mot : elle vaut pour une position précise du
//     texte, donc tient compte du contexte ;
//   - glose appariée par lemme (marquée « auto ») : elle donne le sens d'une
//     entrée du glossaire, qui peut différer de l'emploi dans le verset —
//     elle est donc remplacée quand une glose mot à mot existe.
//
// Racine et fréquence proviennent des données existantes ; ces fichiers ne
// contiennent que des traductions.
//
// Source : Quranic Universal Library (qul.tarteel.ai). Voir sources.html.
// ============================================================
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const appliquer = process.argv.includes('--appliquer');
const dossier = join(root, '..', 'wbw');

const SOURCES = {
  fr: 'french-wbw-translation_json/french-wbw-translation.json',
  en: 'colored-english-wbw-translation_json/colored-english-wbw-translation.json',
  tr: 'turkish-wbw-translation_json/turkish-wbw-translation.json'
};

// Le jeu anglais est balisé pour la coloration grammaticale : on ne garde
// que le texte, la mise en forme n'a pas de sens hors de son contexte.
const nettoyer = (s) => String(s || '')
  .replace(/<[^>]*>/g, '')
  .replace(/\s+/g, ' ')
  .trim();

const data = {};
for (const [lang, fichier] of Object.entries(SOURCES)) {
  const chemin = join(dossier, fichier);
  if (!existsSync(chemin)) { console.error(`✗ introuvable : ${chemin}`); process.exit(1); }
  const brut = JSON.parse(readFileSync(chemin, 'utf8'));
  data[lang] = new Map(Object.entries(brut).map(([k, v]) => [k, nettoyer(v)]));
  console.log(`  ${lang} : ${data[lang].size} traductions chargées`);
}

const base = JSON.parse(readFileSync(join(root, 'build', 'base.json'), 'utf8'));

const stats = { total: 0, conserves: 0, remplaces: 0, ajoutes: 0, sansTraduction: 0,
                langues: { fr: 0, en: 0, tr: 0 } };
let fichiersEcrits = 0;

for (let n = 1; n <= 114; n++) {
  const nom = `s${String(n).padStart(3, '0')}`;
  const mod = await import(`file://${join(root, 'sourates', nom + '.js')}?v=${Date.now()}`);
  const d = mod.default || Object.values(mod)[0];

  d.versets.forEach((verset) => {
    const versetBase = base[n].verses[verset.numero - 1];
    if (!versetBase) return;

    // Gloses existantes, indexées par forme pour retrouver racine et fréquence.
    const existantes = new Map();
    (verset.mots || []).forEach((m) => { if (!existantes.has(m.ar)) existantes.set(m.ar, m); });

    const mots = versetBase.words.map((mot, i) => {
      stats.total++;
      const cle = `${n}:${verset.numero}:${i + 1}`;
      const ancien = existantes.get(mot.ar);
      const wbw = { fr: data.fr.get(cle), en: data.en.get(cle), tr: data.tr.get(cle) };

      // Français : la rédaction du projet prime ; sinon la glose mot à mot ;
      // en dernier recours l'appariement par lemme.
      let fr, origine;
      if (ancien && !ancien.auto) { fr = ancien.fr; origine = 'redige'; stats.conserves++; }
      else if (wbw.fr) { fr = wbw.fr; origine = 'wbw'; ancien ? stats.remplaces++ : stats.ajoutes++; }
      else if (ancien) { fr = ancien.fr; origine = 'lemme'; stats.conserves++; }
      else { stats.sansTraduction++; }

      if (!fr && !wbw.en && !wbw.tr) return null;   // rien à afficher

      const sortie = {
        ar: mot.ar,
        translit: (ancien && ancien.translit) || mot.tr,
        fr: fr || '',
        en: wbw.en || '',
        tr: wbw.tr || ''
      };
      ['fr', 'en', 'tr'].forEach(l => { if (sortie[l]) stats.langues[l]++; });

      if (ancien && ancien.racine) sortie.racine = ancien.racine;
      if (ancien && ancien.frequence_coran !== undefined) sortie.frequence_coran = ancien.frequence_coran;
      if (ancien && ancien.famille) sortie.famille = ancien.famille;
      if (ancien && ancien.profondeur) sortie.profondeur = ancien.profondeur;
      // Marque la provenance de la glose française, pour la relecture.
      if (origine && origine !== 'redige') sortie.src = origine;

      return sortie;
    }).filter(Boolean);

    verset.mots = mots;
  });

  if (appliquer) {
    const varName = 'S' + String(n).padStart(3, '0');
    const src = readFileSync(join(root, 'sourates', nom + '.js'), 'utf8');
    const entete = src.split('\n').filter(l => l.startsWith('//')).join('\n');
    writeFileSync(join(root, 'sourates', nom + '.js'),
      (entete ? entete + '\n' : '') +
      `const ${varName} = ${JSON.stringify(d, null, 2)};\n\nexport { ${varName} };\n`);
    fichiersEcrits++;
  }
}

const pct = (x) => (x / stats.total * 100).toFixed(1);
console.log(`\n  mots du corpus            : ${stats.total}`);
console.log(`  gloses rédigées conservées: ${stats.conserves}`);
console.log(`  remplacées (appariement)  : ${stats.remplaces}`);
console.log(`  ajoutées (aucune avant)   : ${stats.ajoutes}`);
console.log(`  sans traduction française : ${stats.sansTraduction}`);
console.log(`\n  COUVERTURE  fr ${pct(stats.langues.fr)} %   en ${pct(stats.langues.en)} %   tr ${pct(stats.langues.tr)} %`);
if (appliquer) console.log(`\n✓ ${fichiersEcrits} fichiers mis à jour.`);
else console.log('\n  (mode vérification : aucun fichier modifié)');
