#!/usr/bin/env node
// ============================================================
// Détection des textes en dur — Comprendre le Coran
//
//   node scripts/validate-hardcoded.mjs
//
// Le site est trilingue (FR/EN/TR), mais rien n'empêche d'écrire une
// phrase française directement dans le code : elle s'affichera alors
// telle quelle en anglais et en turc. Ce script relit le JavaScript de
// chaque page et signale les chaînes destinées à l'affichage qui ne
// passent ni par t(), ni par T().
//
// Sont volontairement ignorés :
//   - les dictionnaires de traduction et les replis locaux ;
//   - les commentaires ;
//   - les sélecteurs, classes, identifiants et clés techniques ;
//   - le texte arabe.
// ============================================================
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pages = readdirSync(root).filter(f => f.endsWith('.html')).sort();

// Mots français courants : leur présence dans une chaîne d'affichage
// signale un texte qui devrait être traduit.
const MOTS_FR = /\b(le|la|les|un|une|des|du|de|au|aux|et|ou|dans|sur|sous|avec|sans|pour|par|est|sont|a|ont|ce|cet|cette|ces|qui|que|quoi|plus|moins|tout|tous|aucun|aucune|votre|vos|votre|ton|ta|tes|mot|mots|verset|versets|sourate|sourates|racine|racines|appris|lu|lus|lue|trouvé|trouvée|chargement|erreur|réponse|score|terminé|recommencer|suivant|précédent|bravo|félicitations)\b/i;

let signalements = 0;

for (const page of pages) {
  const html = readFileSync(join(root, page), 'utf8');
  const m = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/.exec(html);
  if (!m) continue;

  let js = m[1];
  // Retire les dictionnaires (I18N_DICT, TEXTS, ACCOUNT_LABELS…) et les commentaires.
  js = js.replace(/(let|const)\s+(I18N_DICT|TEXTS|ACCOUNT_LABELS|NAV_ITEMS)\s*=\s*[\{\[][\s\S]*?\n\s*[\}\]];/g, '');
  js = js.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|\s)\/\/[^\n]*/g, '$1');

  const trouves = [];

  // 1. Gabarits `...` : on raisonne sur l'ensemble du gabarit, pas sur
  //    chaque fragment. Les ${...} découpent le texte en morceaux d'un
  //    seul mot (« Verset » / « sur »), qu'on ne peut pas juger isolément.
  for (const t of js.matchAll(/`([^`]{3,400})`/g)) {
    if (/\$\{\s*[tT]\s*\(/.test(t[1])) continue;          // déjà traduit
    let texte = t[1]
      .replace(/\$\{[^}]*\}/g, '§')                        // variables
      .replace(/<[^>]*>/g, ' ')                             // balises
      .replace(/<[a-z][^>]*$/i, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    // Mots réellement écrits en dur dans ce gabarit.
    const motsEnDur = (texte.match(/[a-zà-ü]{2,}/gi) || []).filter(w => MOTS_FR.test(w));
    if (motsEnDur.length === 0) continue;

    const estTechnique = /[a-z0-9]\/[a-z0-9]/i.test(texte) || /_[a-z]/i.test(texte)
                      || /^\.\//.test(texte) || /^§*$/.test(texte);
    // Deux mots français, ou un seul suivi d'une variable : « Verset § » est
    // bien un texte d'interface, « mot- » ne l'est pas.
    const estAffichage = motsEnDur.length >= 2 || /[a-zà-ü]{3,}\s*§/i.test(texte);
    if (estAffichage && !estTechnique) trouves.push(texte.slice(0, 60));
  }

  // 2. Affectations directes de texte visible.
  for (const t of js.matchAll(/\.(textContent|innerHTML|placeholder|title)\s*=\s*['"]([^'"]{4,120})['"]/g)) {
    const texte = t[2].replace(/<[^>]*>/g, ' ').trim();
    if (MOTS_FR.test(texte) && /[a-zà-ü]{3,}/i.test(texte)) trouves.push(texte.slice(0, 60));
  }

  const uniques = [...new Set(trouves)];
  if (uniques.length) {
    console.error(`✗ ${page} : ${uniques.length} texte(s) non traduit(s)`);
    uniques.slice(0, 10).forEach(t => console.error(`     « ${t} »`));
    if (uniques.length > 10) console.error(`     … et ${uniques.length - 10} autre(s)`);
    signalements += uniques.length;
  }
}

if (signalements === 0) {
  console.log(`✓ aucun texte en dur — ${pages.length} pages contrôlées.`);
  process.exit(0);
}
console.error(`\n${signalements} texte(s) à faire passer par t() ou T().`);
process.exit(1);
