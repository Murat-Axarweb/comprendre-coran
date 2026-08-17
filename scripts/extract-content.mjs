#!/usr/bin/env node
// ============================================================
// Génération des fichiers de contenu rédactionnel — Comprendre le Coran
//
//   node scripts/extract-content.mjs --verifier
//   node scripts/extract-content.mjs --appliquer
//   node scripts/extract-content.mjs --appliquer --force   (réécrit tout)
//
// Opération inverse de build_surah.js : reconstruit un fichier source
// build/content/cNNN.js à partir de sourates/sNNN.js déjà généré.
//
// POURQUOI
// Le contenu rédactionnel (gloses, analyses, résumés) n'existait en
// fichier source que pour 36 sourates. Pour les 78 autres, il fallait
// éditer directement le JSON généré — jusqu'à 1 Mo d'un seul tenant,
// impraticable pour une relecture par des spécialistes.
// Chaque sourate a désormais un fichier lisible et modifiable, et
// `node build/build_surah.js N` régénère la sourate correspondante.
//
// Les fichiers existants ne sont jamais écrasés sans --force : ils
// contiennent du travail rédactionnel d'origine (notes, prérequis,
// parcours) plus riche que ce qu'on peut reconstituer.
//
// Les traductions ne sont volontairement PAS reprises : elles
// proviennent de sources externes (Hamidullah, Saheeh, Diyanet) et sont
// préservées par build_surah.js. Le champ `t` est laissé vide.
// ============================================================
import { existsSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dossierContent = join(root, 'build', 'content');
const appliquer = process.argv.includes('--appliquer');
const force = process.argv.includes('--force');

// Échappement pour une chaîne JS entre guillemets doubles.
const s = (v) => JSON.stringify(v == null ? '' : String(v));

let crees = 0, existants = 0;
const aCreer = [];

for (let n = 1; n <= 114; n++) {
  const nom = String(n).padStart(3, '0');
  const cible = join(dossierContent, `c${nom}.js`);

  if (existsSync(cible) && !force) { existants++; continue; }

  const mod = await import(`file://${join(root, 'sourates', `s${nom}.js`)}?v=${Date.now()}`);
  const d = mod.default || Object.values(mod)[0];
  const meta = d.meta || {};

  // --- Gloses mot à mot, verset par verset ---
  // Format attendu par build_surah.js : [texte, racine, fréquence].
  const gloses = [];
  let versetsGloses = 0;
  d.versets.forEach(v => {
    if (!Array.isArray(v.mots) || v.mots.length === 0) return;
    versetsGloses++;
    // Format [motArabe, traduction, racine, fréquence] : le mot arabe rend
    // chaque ligne identifiable, et permet de ne gloser qu'une partie des
    // mots d'un verset sans décalage.
    const lignes = v.mots.map(m => `      [${s(m.ar)}, ${s(m.fr)}, ${s(m.racine)}, ${m.frequence_coran ?? 0}]`);
    gloses.push(`    ${v.numero}: [\n${lignes.join(',\n')}\n    ]`);
  });

  // Les analyses de versets ont été retirées du projet : le site décrit la
  // langue, il ne propose pas de lecture du sens. Un tafsir sourcé pourra
  // être ajouté plus tard, comme ressource attribuée et distincte.
  const analyses = [];

  const resume = meta.resume || {};
  // Le parcours pédagogique est rangé dans meta.progression.
  const prog = meta.progression || {};
  const couche = prog.couche ?? d.versets[0]?.niveau_couche ?? 2;

  const contenu = `// Contenu rédactionnel — sourate ${n} (${meta.nom_translit || ''})
//
// Fichier source destiné à la relecture et à la correction. Après toute
// modification : node build/build_surah.js ${n}
//
// Le champ « t » (traductions) reste vide : les traductions proviennent de
// sources externes (Hamidullah, Saheeh International, Diyanet) et sont
// préservées automatiquement lors de la régénération.
module.exports = {
  n: ${n}, couche: ${couche}, type: ${s(meta.type)},
  nom_fr: ${s(meta.nom_fr)}, nom_en: ${s(meta.nom_en)}, nom_tr: ${s(meta.nom_tr)},
  theme: ${s(meta.theme)},
  note: ${s(meta.note_pedagogique)},
  prerequis: ${JSON.stringify(prog.prerequis || meta.prerequis || [])}, suivant: ${JSON.stringify(prog.suivant || meta.suivant || [])},
  racines: ${JSON.stringify(meta.racines_cles || [], null, 0)},
  resume: {
    mots: ${JSON.stringify(resume.mots || [], null, 0)},
    racines: ${JSON.stringify(resume.racines || [], null, 0)},
    declic: ${s(resume.declic)}
  },

  // Traductions : gérées hors de ce fichier (voir en-tête).
  t: [],

  // Gloses mot à mot — [mot arabe, traduction, racine, fréquence dans le Coran]
  // Tous les mots ne sont pas glosés : seuls ceux présents ici le seront.
  mots: {
${gloses.join(',\n')}
  },

  // Analyses de versets
  analyses: {
${analyses.join(',\n')}
  }
};
`;

  aCreer.push({ n, nom, versetsGloses, analyses: analyses.length, octets: Buffer.byteLength(contenu) });
  if (appliquer) { writeFileSync(cible, contenu); crees++; }
}

console.log(`  fichiers déjà présents (conservés) : ${existants}`);
console.log(`  fichiers à créer                   : ${aCreer.length}`);
if (aCreer.length) {
  const totalGloses = aCreer.reduce((a, x) => a + x.versetsGloses, 0);
  const totalAnalyses = aCreer.reduce((a, x) => a + x.analyses, 0);
  const poids = aCreer.reduce((a, x) => a + x.octets, 0);
  console.log(`  → ${totalGloses} versets glosés, ${totalAnalyses} analyses, ${(poids / 1048576).toFixed(1)} Mo au total`);
}
if (appliquer) console.log(`✓ ${crees} fichiers écrits dans build/content/`);
else console.log('  (mode vérification : aucun fichier écrit)');
