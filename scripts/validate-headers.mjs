#!/usr/bin/env node
// ============================================================
// Validation des en-têtes HTTP — Comprendre le Coran
//
//   node scripts/validate-headers.mjs
//
// Deux risques que ce contrôle prévient :
//
//   1. Un en-tête de sécurité disparaît d'une modification à l'autre,
//      sans que rien ne le signale — la page continue de s'afficher.
//   2. Le code se met à charger une ressource depuis un domaine absent
//      de la politique de contenu : la ressource est alors bloquée par
//      le navigateur, et le site casse en production alors que tout
//      fonctionnait en local (où aucun en-tête n'est appliqué).
// ============================================================
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const chemin = join(root, '_headers');
let erreurs = 0;

if (!existsSync(chemin)) {
  console.error('✗ _headers absent — les en-têtes de sécurité ne sont pas déployés');
  process.exit(1);
}
const headers = readFileSync(chemin, 'utf8');

// ----- 1. En-têtes attendus -----
const ATTENDUS = [
  'X-Frame-Options',
  'X-Content-Type-Options',
  'Referrer-Policy',
  'Permissions-Policy',
  'Strict-Transport-Security',
  'Content-Security-Policy'
];
for (const h of ATTENDUS) {
  if (!new RegExp(`^\\s*${h}\\s*:`, 'm').test(headers)) {
    console.error(`✗ en-tête manquant : ${h}`);
    erreurs++;
  }
}

// ----- 2. Domaines chargés par le code vs politique de contenu -----
const ligneCsp = (headers.match(/^\s*Content-Security-Policy\s*:.*$/m) || [''])[0];

// Domaines dont on charge réellement une ressource. Un lien href vers un
// site externe (attribution) n'a pas à figurer dans la politique.
const sources = [
  ...readdirSync(root).filter(f => f.endsWith('.html')).map(f => join(root, f)),
  ...readdirSync(join(root, 'data')).filter(f => f.endsWith('.js')).map(f => join(root, 'data', f))
];

const charges = new Set(['https://fonts.gstatic.com']);   // chargé par le CSS de Google Fonts
for (const f of sources) {
  const src = readFileSync(f, 'utf8');
  // <link rel=stylesheet>, <script src>, import(), fetch()
  for (const m of src.matchAll(/(?:href|src)=["'](https:\/\/[a-z0-9.-]+)/gi)) {
    if (/rel=["']stylesheet["']/.test(src.slice(Math.max(0, m.index - 120), m.index))) charges.add(m[1]);
  }
  for (const m of src.matchAll(/(?:import|fetch)\(\s*[`'"](https:\/\/[a-z0-9.-]+)/g)) charges.add(m[1]);
  for (const m of src.matchAll(/(?:SUPABASE_URL|CDN)\s*=\s*[`'"](https:\/\/[a-z0-9.-]+)/g)) charges.add(m[1]);
}

for (const d of [...charges].sort()) {
  if (!ligneCsp.includes(d)) {
    console.error(`✗ ${d} est chargé par le code mais absent de Content-Security-Policy — la ressource serait bloquée en production`);
    erreurs++;
  }
}

// ----- 3. Version de Supabase JS figée -----
const sb = readFileSync(join(root, 'data', 'supabase.js'), 'utf8');
if (/supabase-js@\d+\/|supabase-js@latest/.test(sb)) {
  console.error("✗ data/supabase.js utilise une plage de version (@2, @latest) : "
              + "n'importe quelle version future serait exécutée sur le site. Figer un numéro complet.");
  erreurs++;
}

if (erreurs === 0) {
  const nb = ATTENDUS.length;
  console.log(`✓ en-têtes valides — ${nb} en-têtes de sécurité, ${charges.size} domaine(s) autorisé(s), Supabase JS figé.`);
  process.exit(0);
}
console.error(`\n${erreurs} problème(s) détecté(s).`);
process.exit(1);
