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

  // Une page qui affiche la barre de navigation doit charger nav.css,
  // sans quoi le menu burger et le sélecteur de langue perdent leur mise
  // en forme — la navigation devient inutilisable sur mobile.
  if (html.includes('class="navbar"') && !html.includes('data/nav.css')) {
    console.error(`✗ ${page} : affiche la navbar mais ne charge pas data/nav.css`);
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

// ----- 5. Contraste des couleurs de texte (WCAG AA) -----
// Une couleur trop pâle reste lisible pour qui a une bonne vue et devient
// illisible pour les autres : le défaut ne se voit pas à la relecture.
function luminance(hex) {
  const h = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16) / 255);
  const f = c => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
function contraste(a, b) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}
function variables(bloc) {
  const m = new RegExp(bloc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*\\{([^}]*)\\}', 's').exec(theme);
  const out = {};
  if (m) for (const v of m[1].matchAll(/(--[a-z0-9-]+)\s*:\s*(#[0-9a-f]{6})/gi)) out[v[1]] = v[2];
  return out;
}
const TEXTES = ['--text', '--text2', '--text3', '--gold', '--green', '--blue', '--red'];
for (const [nom, bloc] of [['sombre', ':root'], ['clair', '[data-theme="light"]']]) {
  const v = variables(bloc);
  if (!v['--bg']) continue;
  for (const t of TEXTES) {
    if (!v[t]) continue;
    const r = contraste(v[t], v['--bg']);
    if (r < 4.5) {
      console.error(`✗ thème ${nom} : ${t} contraste ${r.toFixed(2)} sur --bg, sous le seuil WCAG AA de 4.5`);
      erreurs++;
    }
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
