#!/usr/bin/env node
// ============================================================
// Validation des feuilles de style — Comprendre le Coran
//
//   node scripts/validate-css.mjs
//
// Les couleurs, arrondis et styles de base sont définis une seule fois
// dans data/theme.css. Une page qui les redéfinit dans son propre
// <style> réintroduit le risque de divergence : c'est ainsi que
// --radius avait fini par valoir 10px sur cinq pages et 12px sur trois.
//
// Vérifie que chaque page :
//   1. charge data/theme.css, et avant son propre <style> ;
//   2. ne redéfinit ni :root ni [data-theme="light"] ;
//   3. n'utilise pas de variable absente du thème (faute de frappe) ;
//   4. n'écrit pas de couleur en dur là où une variable existe.
// ============================================================
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const theme = readFileSync(join(root, 'data', 'theme.css'), 'utf8');
const pages = readdirSync(root).filter(f => f.endsWith('.html')).sort();

// Variables déclarées par le thème.
const declarees = new Set([...theme.matchAll(/^\s*(--[a-z0-9-]+)\s*:/gm)].map(m => m[1]));

// Couleurs du thème : leur présence en dur dans une page signale une
// valeur qui devrait passer par une variable.
const couleursTheme = new Set(
  [...theme.matchAll(/--[a-z0-9-]+\s*:\s*(#[0-9a-f]{3,8})\s*;/gi)].map(m => m[1].toLowerCase())
);

let erreurs = 0, avertissements = 0;

for (const page of pages) {
  const html = readFileSync(join(root, page), 'utf8');
  const iTheme = html.indexOf('data/theme.css');
  const iStyle = html.indexOf('<style>');

  // 1. chargement du thème
  if (iTheme === -1) { console.error(`✗ ${page} : ne charge pas data/theme.css`); erreurs++; continue; }
  if (iStyle !== -1 && iTheme > iStyle) {
    console.error(`✗ ${page} : theme.css est chargé après <style> ; la page ne pourrait plus rien surcharger`);
    erreurs++;
  }

  const m = /<style>([\s\S]*?)<\/style>/.exec(html);
  if (!m) continue;
  const css = m[1];

  // 2. redéfinition des blocs de thème
  for (const bloc of [':root', '[data-theme="light"]']) {
    const re = new RegExp(bloc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*\\{');
    if (re.test(css)) {
      console.error(`✗ ${page} : redéfinit ${bloc} — à retirer, le thème est dans data/theme.css`);
      erreurs++;
    }
  }

  // 3. variables inconnues
  const utilisees = new Set([...css.matchAll(/var\((--[a-z0-9-]+)\)/g)].map(x => x[1]));
  const definiesIci = new Set([...css.matchAll(/(--[a-z0-9-]+)\s*:/g)].map(x => x[1]));
  const inconnues = [...utilisees].filter(v => !declarees.has(v) && !definiesIci.has(v));
  if (inconnues.length) {
    console.error(`✗ ${page} : variable(s) inconnue(s) → ${inconnues.join(', ')}`);
    erreurs++;
  }

  // 4. couleurs du thème écrites en dur
  const enDur = [...new Set(
    [...css.matchAll(/:\s*(#[0-9a-f]{3,8})\b/gi)].map(x => x[1].toLowerCase())
  )].filter(c => couleursTheme.has(c));
  if (enDur.length) {
    console.warn(`⚠ ${page} : couleur(s) du thème écrite(s) en dur → ${enDur.join(', ')}`);
    avertissements += enDur.length;
  }
}

console.log('');
if (erreurs === 0) {
  console.log(`✓ CSS valide — ${pages.length} pages, thème unique dans data/theme.css (${declarees.size} variables).`);
  if (avertissements) console.log(`  (${avertissements} couleur(s) en dur, à remplacer par des variables quand l'occasion se présente)`);
  process.exit(0);
}
console.error(`${erreurs} problème(s) détecté(s).`);
process.exit(1);
