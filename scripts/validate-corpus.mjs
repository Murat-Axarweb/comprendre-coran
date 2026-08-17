#!/usr/bin/env node
// ============================================================
// Validation du corpus — Comprendre le Coran
//
//   node scripts/validate-corpus.mjs
//
// Vérifie la cohérence des données affichées par le site, pour que les
// erreurs de structure soient détectées ici plutôt que par un lecteur.
//
//   SOURATES  : les 114 fichiers présents, numérotation continue,
//               versets numérotés sans trou ni doublon, traductions
//               dans les trois langues, métadonnées complètes,
//               concordance avec le manifeste.
//   VOCABULAIRE : identifiants uniques, rangs uniques et continus,
//               traductions FR/EN/TR, thèmes déclarés, racines.
//
// Sortie en code 1 dès qu'une anomalie est trouvée.
// ============================================================
import { readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const LANGS = ['fr', 'en', 'tr'];
let erreurs = 0;
let avertissements = 0;

const err = (m) => { console.error(`✗ ${m}`); erreurs++; };
const avert = (m) => { console.warn(`⚠ ${m}`); avertissements++; };

// ============================================================
// SOURATES
// ============================================================
const dossier = join(root, 'sourates');
const fichiers = readdirSync(dossier).filter(f => /^s\d{3}\.js$/.test(f)).sort();

if (fichiers.length !== 114) err(`${fichiers.length} fichiers de sourate au lieu de 114`);

let totalVersets = 0;
const versetsParSourate = {};

for (const f of fichiers) {
  const num = parseInt(f.slice(1, 4), 10);
  const mod = await import(`file://${join(dossier, f)}`);
  const d = mod.default || Object.values(mod)[0];
  const nom = `s${String(num).padStart(3, '0')}`;

  if (!d || typeof d !== 'object') { err(`${nom} : contenu illisible`); continue; }
  if (!d.meta) { err(`${nom} : bloc meta absent`); continue; }
  if (d.meta.numero !== num) err(`${nom} : meta.numero vaut ${d.meta.numero}`);

  for (const champ of ['nom_ar', 'nom_translit', 'nom_fr', 'nom_en', 'nom_tr', 'type']) {
    if (!d.meta[champ]) err(`${nom} : meta.${champ} manquant`);
  }
  if (d.meta.type && !['mecquoise', 'medinoise'].includes(d.meta.type)) {
    err(`${nom} : type « ${d.meta.type} » inattendu`);
  }

  if (!Array.isArray(d.versets)) { err(`${nom} : versets absents ou non tableau`); continue; }

  // Numérotation continue, sans trou ni doublon.
  const numeros = d.versets.map(v => v.numero);
  const attendu = d.versets.length;
  if (d.meta.versets_count && d.meta.versets_count !== attendu) {
    err(`${nom} : meta.versets_count = ${d.meta.versets_count} mais ${attendu} versets présents`);
  }
  for (let i = 0; i < attendu; i++) {
    if (numeros[i] !== i + 1) { err(`${nom} : numérotation des versets incorrecte (position ${i + 1} porte le numéro ${numeros[i]})`); break; }
  }

  // Contenu de chaque verset.
  let sansTranslit = 0, sansMots = 0;
  d.versets.forEach(v => {
    const ref = `${nom}:${v.numero}`;
    if (!v.ar || typeof v.ar !== 'string') err(`${ref} : texte arabe manquant`);
    if (!v.translit) sansTranslit++;
    if (!v.traductions) err(`${ref} : traductions absentes`);
    else LANGS.forEach(l => {
      const t = v.traductions[l];
      if (!t || !t.texte || !String(t.texte).trim()) err(`${ref} : traduction ${l} vide`);
    });
    if (!Array.isArray(v.mots) || v.mots.length === 0) sansMots++;
    else v.mots.forEach((m, i) => { if (!m.ar) err(`${ref} : mot ${i + 1} sans forme arabe`); });
  });
  if (sansTranslit) avert(`${nom} : ${sansTranslit} verset(s) sans translittération`);
  if (sansMots) avert(`${nom} : ${sansMots} verset(s) sans découpage mot à mot`);

  versetsParSourate[num] = attendu;
  totalVersets += attendu;
}

// ----- Attribution des traductions -----
// Le corpus utilise des traductions publiées ; une régénération mal
// configurée pourrait réintroduire l'ancienne mention « traductions
// originales », devenue fausse et trompeuse sur un contenu coranique.
{
  const { readFileSync } = await import('node:fs');
  const fautifs = [];
  for (const f of fichiers) {
    const src = readFileSync(join(dossier, f), 'utf8');
    if (src.includes('Traductions pédagogiques originales')) fautifs.push(f);
  }
  if (fautifs.length) {
    err(`${fautifs.length} fichier(s) annoncent des « traductions pédagogiques originales », `
      + `mention obsolète depuis l'intégration des traductions publiées → ${fautifs.slice(0, 5).join(', ')}`
      + (fautifs.length > 5 ? '…' : ''));
  }
}

// Total canonique du Coran.
if (totalVersets !== 6236) err(`total de ${totalVersets} versets au lieu de 6236`);

// ----- Concordance avec le manifeste -----
const cheminManifest = join(dossier, 'manifest.js');
if (!existsSync(cheminManifest)) {
  err('sourates/manifest.js absent — lancer : node scripts/build-manifest.mjs');
} else {
  const { SOURATES_MANIFEST, TOTAL_ANALYSES } = await import(`file://${cheminManifest}`);
  let ecarts = 0;
  for (const [num, n] of Object.entries(versetsParSourate)) {
    if (SOURATES_MANIFEST[num] !== n) { ecarts++; if (ecarts <= 5) err(`manifeste : sourate ${num} annonce ${SOURATES_MANIFEST[num]} versets, le fichier en contient ${n}`); }
  }
  if (ecarts > 5) err(`… et ${ecarts - 5} autre(s) écart(s) — relancer node scripts/build-manifest.mjs`);
  if (TOTAL_ANALYSES !== totalVersets) err(`manifeste : TOTAL_ANALYSES = ${TOTAL_ANALYSES}, corpus = ${totalVersets}`);
}

// ============================================================
// VOCABULAIRE
// ============================================================
const { VOCAB, THEMES } = await import(`file://${join(root, 'data', 'vocab.js')}`);
const { VOCAB2 } = await import(`file://${join(root, 'data', 'vocab2.js')}`);
const { VOCAB3 } = await import(`file://${join(root, 'data', 'vocab3.js')}`);
const { VOCAB4 } = await import(`file://${join(root, 'data', 'vocab4.js')}`);
const { VOCAB5 } = await import(`file://${join(root, 'data', 'vocab5.js')}`);
const MOTS = [...VOCAB, ...VOCAB2, ...VOCAB3, ...VOCAB4, ...VOCAB5];

const vusId = new Map(), vusRang = new Map(), vusAr = new Map();
MOTS.forEach(m => {
  if (m.id == null) { err(`vocabulaire : mot sans identifiant (${m.ar || '?'})`); return; }
  if (vusId.has(m.id)) err(`vocabulaire : identifiant ${m.id} en double (${vusId.get(m.id)} et ${m.ar})`);
  vusId.set(m.id, m.ar);

  if (m.rang == null) err(`vocabulaire #${m.id} : rang manquant`);
  else if (vusRang.has(m.rang)) err(`vocabulaire : rang ${m.rang} en double (#${vusRang.get(m.rang)} et #${m.id})`);
  else vusRang.set(m.rang, m.id);

  if (!m.ar) err(`vocabulaire #${m.id} : forme arabe manquante`);
  else if (vusAr.has(m.ar)) avert(`vocabulaire : forme ${m.ar} présente deux fois (#${vusAr.get(m.ar)} et #${m.id})`);
  else vusAr.set(m.ar, m.id);

  if (!m.traductions) err(`vocabulaire #${m.id} : traductions absentes`);
  else LANGS.forEach(l => { if (!m.traductions[l] || !String(m.traductions[l]).trim()) err(`vocabulaire #${m.id} (${m.ar}) : traduction ${l} vide`); });

  if (!m.theme) err(`vocabulaire #${m.id} : thème manquant`);
  else if (Array.isArray(THEMES) && !THEMES.includes(m.theme)) err(`vocabulaire #${m.id} : thème « ${m.theme} » hors liste`);

  if (!m.racine) avert(`vocabulaire #${m.id} (${m.ar}) : racine manquante`);
});

// Les rangs doivent former une suite continue à partir de 1.
const rangs = [...vusRang.keys()].sort((a, b) => a - b);
if (rangs.length) {
  const trous = [];
  for (let r = 1; r <= rangs[rangs.length - 1]; r++) if (!vusRang.has(r)) trous.push(r);
  if (trous.length) err(`vocabulaire : ${trous.length} rang(s) manquant(s) — ex. ${trous.slice(0, 8).join(', ')}`);
}

// ============================================================
console.log('');
if (erreurs === 0) {
  console.log(`✓ corpus valide — ${fichiers.length} sourates, ${totalVersets} versets, ${MOTS.length} mots.`);
  if (avertissements) console.log(`  (${avertissements} avertissement(s), sans gravité)`);
  process.exit(0);
}
console.error(`${erreurs} erreur(s), ${avertissements} avertissement(s).`);
process.exit(1);
