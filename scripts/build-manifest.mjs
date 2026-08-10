#!/usr/bin/env node
// ============================================================
// Génère sourates/manifest.js — Comprendre le Coran
//
//   node scripts/build-manifest.mjs
//
// La page « Sourates » n'a besoin, pour afficher sa liste, que du nombre
// de versets analysés par sourate (badge « ✓ analysée » et compteurs).
// Sans ce manifeste, elle importait les 114 fichiers de données — environ
// 16 Mo de JavaScript — juste pour connaître ces 114 nombres.
//
// À relancer après toute modification des fichiers sourates/sNNN.js.
// ============================================================
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dossier = join(root, 'sourates');
const sortie = join(dossier, 'manifest.js');

const fichiers = readdirSync(dossier)
  .filter(f => /^s\d{3}\.js$/.test(f))
  .sort();

const entrees = [];
let totalVersets = 0;

for (const f of fichiers) {
  const num = parseInt(f.slice(1, 4), 10);
  const src = readFileSync(join(dossier, f), 'utf8');

  // Import réel du module : plus fiable qu'une analyse textuelle.
  const mod = await import(`file://${join(dossier, f)}`);
  const data = mod.default || Object.values(mod)[0];

  const versets = Array.isArray(data?.versets) ? data.versets.length : 0;
  totalVersets += versets;
  entrees.push({ num, versets, octets: Buffer.byteLength(src) });
}

const lignes = entrees
  .map(e => `  ${e.num}: ${e.versets}`)
  .join(',\n');

const contenu = `// ============================================================
// MANIFESTE DES SOURATES — généré, ne pas modifier à la main.
// Régénérer avec : node scripts/build-manifest.mjs
//
// Associe chaque numéro de sourate à son nombre de versets analysés.
// Permet à la liste de s'afficher sans charger les fichiers de données :
// ceux-ci ne sont importés que lorsqu'une sourate est ouverte.
// ============================================================
export const SOURATES_MANIFEST = {
${lignes}
};

// Total des versets analysés (pré-calculé pour éviter une somme au chargement).
export const TOTAL_ANALYSES = ${totalVersets};
`;

writeFileSync(sortie, contenu);

const poidsTotal = entrees.reduce((a, e) => a + e.octets, 0);
const poidsManifest = Buffer.byteLength(contenu);
console.log(`✓ manifest.js généré : ${entrees.length} sourates, ${totalVersets} versets analysés`);
console.log(`  données complètes : ${(poidsTotal / 1048576).toFixed(1)} Mo`);
console.log(`  manifeste         : ${(poidsManifest / 1024).toFixed(1)} Ko`);
console.log(`  réduction au chargement de la liste : ${(poidsTotal / poidsManifest).toFixed(0)}×`);
