#!/usr/bin/env node
// ============================================================
// Validation du dictionnaire de traductions — Comprendre le Coran
//
//   node scripts/validate-i18n.mjs
//
// Vérifie trois choses, et sort en erreur (code 1) si l'une échoue :
//   1. Aucune clé définie deux fois dans une même langue.
//      En JavaScript, { a: "x", a: "y" } ne lève aucune erreur : la
//      seconde écrase silencieusement la première. Une traduction peut
//      donc disparaître sans que personne ne s'en aperçoive.
//   2. Les trois langues ont exactement le même jeu de clés.
//   3. Aucune valeur vide.
// ============================================================
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const file = join(root, 'data', 'i18n.js');
const src = readFileSync(file, 'utf8');
const LANGS = ['fr', 'en', 'tr'];
let erreurs = 0;

// Extrait toutes les clés d'un bloc, y compris quand plusieurs sont
// écrites sur la même ligne. Un simple regex par ligne en raterait
// (« a: "x", b: "y" » n'en donnerait qu'une) ; on parcourt donc le texte
// en ignorant l'intérieur des chaînes, pour ne pas confondre le contenu
// d'une traduction avec un nom de clé.
function extraireCles(bloc) {
  const cles = [];
  let i = 0, profondeur = 0;
  while (i < bloc.length) {
    const c = bloc[i];
    if (c === '"' || c === "'") {              // saute la chaîne entière
      const quote = c;
      i++;
      while (i < bloc.length && bloc[i] !== quote) i += (bloc[i] === '\\' ? 2 : 1);
      i++;
      continue;
    }
    if (c === '{') { profondeur++; i++; continue; }
    if (c === '}') { profondeur--; i++; continue; }
    if (c === '/' && bloc[i + 1] === '/') {    // saute un commentaire
      while (i < bloc.length && bloc[i] !== '\n') i++;
      continue;
    }
    const reste = bloc.slice(i);
    const m = /^([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/.exec(reste);
    // profondeur 1 = niveau des clés de traduction du bloc de langue
    if (m && profondeur === 1) { cles.push(m[1]); i += m[0].length; continue; }
    i++;
  }
  return cles;
}

function bloc(lang) {
  const debut = src.indexOf(`  ${lang}: {`);
  if (debut < 0) return null;
  let profondeur = 0, i = src.indexOf('{', debut);
  for (; i < src.length; i++) {
    if (src[i] === '{') profondeur++;
    else if (src[i] === '}' && --profondeur === 0) break;
  }
  return src.slice(debut, i);
}

// ----- 1. Doublons (analyse du texte source, seul moyen de les voir) -----
const clesParLangue = {};
for (const lang of LANGS) {
  const b = bloc(lang);
  if (!b) { console.error(`✗ bloc « ${lang} » introuvable`); erreurs++; continue; }
  const cles = extraireCles(b);
  const vues = new Map();
  const doublons = [];
  for (const k of cles) {
    vues.set(k, (vues.get(k) || 0) + 1);
    if (vues.get(k) === 2) doublons.push(k);
  }
  if (doublons.length) {
    console.error(`✗ ${lang} : ${doublons.length} clé(s) en double (la dernière écrase les autres) → ${doublons.join(', ')}`);
    erreurs++;
  }
  clesParLangue[lang] = new Set(cles);
}

// ----- 2. Parité entre langues -----
const reference = clesParLangue.fr;
if (reference) {
  for (const lang of LANGS.filter(l => l !== 'fr')) {
    const s = clesParLangue[lang];
    if (!s) continue;
    const manquantes = [...reference].filter(k => !s.has(k));
    const enTrop = [...s].filter(k => !reference.has(k));
    if (manquantes.length) { console.error(`✗ ${lang} : ${manquantes.length} clé(s) manquante(s) → ${manquantes.slice(0, 8).join(', ')}${manquantes.length > 8 ? '…' : ''}`); erreurs++; }
    if (enTrop.length) { console.error(`✗ ${lang} : ${enTrop.length} clé(s) absente(s) du français → ${enTrop.slice(0, 8).join(', ')}${enTrop.length > 8 ? '…' : ''}`); erreurs++; }
  }
}

// ----- 3. Valeurs vides -----
const { I18N } = await import(`file://${file}`);
for (const lang of LANGS) {
  const vides = Object.entries(I18N[lang] || {}).filter(([, v]) => typeof v !== 'string' || v.trim() === '').map(([k]) => k);
  if (vides.length) { console.error(`✗ ${lang} : valeur vide → ${vides.join(', ')}`); erreurs++; }
}

if (erreurs === 0) {
  console.log(`✓ i18n valide — ${reference.size} clés × ${LANGS.length} langues, aucun doublon, parité stricte.`);
  process.exit(0);
}
console.error(`\n${erreurs} problème(s) détecté(s).`);
process.exit(1);
