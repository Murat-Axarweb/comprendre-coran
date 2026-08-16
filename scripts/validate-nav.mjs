#!/usr/bin/env node
// ============================================================
// Validation des barres de navigation — Comprendre le Coran
//
//   node scripts/validate-nav.mjs
//
// Les liens de navigation sont volontairement écrits dans le HTML de
// chaque page (la navigation reste ainsi visible même si le JavaScript
// échoue). Le revers est qu'ils peuvent diverger d'un fichier à l'autre.
// Ce script garantit qu'ils restent identiques, ce qui rend inutile
// toute logique défensive côté navigateur.
//
// Vérifie :
//   1. chaque page a une navbar avec le même jeu de liens, dans le même
//      ordre et avec les mêmes libellés ;
//   2. exactement un lien « active », correspondant à la page courante
//      (sauf admin.html, volontairement absente du menu) ;
//   3. le conteneur du sélecteur de langue est présent ;
//   4. le lien compte ne porte pas data-i18n (son libellé est géré par
//      data/nav.js ; un data-i18n le ferait écraser au rendu).
// ============================================================
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pages = readdirSync(root).filter(f => f.endsWith('.html')).sort();
// Pages volontairement absentes du menu : l'administration (réservée) et
// la page de sources (accessible depuis le pied de page).
const SANS_ENTREE_MENU = ['admin.html', 'sources.html'];
let erreurs = 0;

function navbar(html) {
  const m = /<nav class="navbar">([\s\S]*?)<\/nav>/.exec(html);
  return m ? m[1] : null;
}

const signatures = new Map();

for (const page of pages) {
  const html = readFileSync(join(root, page), 'utf8');
  const nav = navbar(html);
  if (!nav) { console.error(`✗ ${page} : aucune navbar trouvée`); erreurs++; continue; }

  // --- liens : href + libellé, dans l'ordre ---
  const liens = [...nav.matchAll(/<a\s[^>]*href="([^"]+)"[^>]*>([^<]*)<\/a>/g)]
    .map(m => `${m[1]}|${m[2].trim()}`);
  const signature = liens.join(' → ');
  if (!signatures.has(signature)) signatures.set(signature, []);
  signatures.get(signature).push(page);

  // --- lien actif ---
  const actifs = [...nav.matchAll(/<a\s[^>]*class="[^"]*\bactive\b[^"]*"[^>]*href="([^"]+)"/g)].map(m => m[1]);
  if (SANS_ENTREE_MENU.includes(page)) {
    if (actifs.length) { console.error(`✗ ${page} : ne devrait pas avoir de lien actif (page hors menu)`); erreurs++; }
  } else if (actifs.length !== 1) {
    console.error(`✗ ${page} : ${actifs.length} lien(s) actif(s), attendu 1`); erreurs++;
  } else if (actifs[0] !== page) {
    console.error(`✗ ${page} : le lien actif pointe vers ${actifs[0]}`); erreurs++;
  }

  // --- sélecteur de langue ---
  if (!nav.includes('id="lang-select"')) { console.error(`✗ ${page} : conteneur #lang-select manquant`); erreurs++; }

  // --- lien compte sans data-i18n ---
  const compte = /<a\s[^>]*href="compte\.html"[^>]*>/.exec(nav);
  if (!compte) { console.error(`✗ ${page} : lien compte.html absent de la navbar`); erreurs++; }
  else if (compte[0].includes('data-i18n')) {
    console.error(`✗ ${page} : le lien compte porte data-i18n ; son libellé serait écrasé au rendu`); erreurs++;
  }
}

// --- toutes les pages doivent partager la même signature ---
if (signatures.size > 1) {
  console.error(`✗ ${signatures.size} versions différentes de la navbar :`);
  for (const [sig, pgs] of signatures) console.error(`   [${pgs.join(', ')}]\n     ${sig}`);
  erreurs++;
}

if (erreurs === 0) {
  const [sig] = signatures.keys();
  console.log(`✓ navbars valides — ${pages.length} pages, ${sig.split(' → ').length} liens identiques partout.`);
  process.exit(0);
}
console.error(`\n${erreurs} problème(s) détecté(s).`);
process.exit(1);
