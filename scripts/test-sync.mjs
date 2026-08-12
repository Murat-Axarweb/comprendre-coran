#!/usr/bin/env node
// ============================================================
// Tests de synchronisation — Comprendre le Coran
//
//   npm test
//
// Couvre les règles métier de la synchronisation, celles dont une
// régression est invisible à l'œil nu et coûteuse en production :
// isolation entre comptes, dernière écriture gagnante, reprise après
// échec réseau, propagation d'un reset.
//
// Chaque test recrée un environnement complet : un localStorage par
// « appareil », un faux client Supabase avec plusieurs comptes, et un
// import frais des modules pour repartir d'un état vierge.
// ============================================================
import { strict as assert } from 'node:assert';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';

const racine = join(dirname(fileURLToPath(import.meta.url)), '..');
const tmp = mkdtempSync(join(tmpdir(), 'cc-tests-'));

// ----- Faux client Supabase, écrit sur disque pour être importable -----
writeFileSync(join(tmp, 'faux-supabase.mjs'), `
const CLOUD = {};
let USER = null, ERREUR = false, ECHEC_ECRITURE = false;
export const journal = { upserts: 0, selects: 0 };
export function connecter(id) { USER = { id }; }
export function deconnecter() { USER = null; }
export function definirErreurLecture(v) { ERREUR = v; }
export function definirEchecEcriture(v) { ECHEC_ECRITURE = v; }
export function cloud(id) { return CLOUD[id]; }
export function definirCloud(id, d) { CLOUD[id] = d; }
export function reinitialiser() {
  for (const k of Object.keys(CLOUD)) delete CLOUD[k];
  USER = null; ERREUR = false; ECHEC_ECRITURE = false;
  journal.upserts = 0; journal.selects = 0;
}
export function isConfigured() { return true; }
export function getSupabase() {
  return Promise.resolve({
    auth: {
      async getUser() { return { data: { user: USER } }; },
      onAuthStateChange() { return { data: { subscription: { unsubscribe() {} } } }; }
    },
    from(table) {
      return {
        _t: table,
        select() { return this; },
        eq(_, v) { this._id = v; return this; },
        async maybeSingle() {
          journal.selects++;
          if (ERREUR) return { data: null, error: { message: 'réseau indisponible' } };
          const d = CLOUD[this._id + ':' + this._t];
          return { data: d ? { data: d } : null, error: null };
        },
        async single() { return this.maybeSingle(); },
        async upsert(rows) {
          journal.upserts++;
          if (ECHEC_ECRITURE) return { error: { message: 'réseau indisponible' } };
          const liste = Array.isArray(rows) ? rows : [rows];
          liste.forEach(r => {
            if (r.data !== undefined) CLOUD[r.user_id + ':' + this._t] = JSON.parse(JSON.stringify(r.data));
            else {
              const k = r.user_id + ':' + this._t;
              CLOUD[k] = CLOUD[k] || {};
              CLOUD[k][r.word_id] = r;
            }
          });
          return { error: null };
        },
        async then() { return { error: null }; }
      };
    }
  });
}
`);

// Copie des modules testés, avec le faux client injecté.
for (const f of ['progress.js', 'srs-engine.js']) {
  const src = readFileSync(join(racine, 'data', f), 'utf8')
    .replace("'./supabase.js'", `'${join(tmp, 'faux-supabase.mjs')}'`);
  writeFileSync(join(tmp, f), src);
}

const faux = await import(join(tmp, 'faux-supabase.mjs'));
const attendre = (ms) => new Promise(r => setTimeout(r, ms));
let compteur = 0;
const chargerProgress = () => import(`${join(tmp, 'progress.js')}?n=${++compteur}`);
const chargerSrs = () => import(`${join(tmp, 'srs-engine.js')}?n=${++compteur}`);

// Un « appareil » = un localStorage distinct.
function appareil(store) {
  globalThis.localStorage = {
    getItem: k => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: k => { delete store[k]; }
  };
}

// ----- Micro-cadre de test -----
const tests = [];
const test = (nom, fn) => tests.push({ nom, fn });
let echecs = 0;

// ============================================================
test('isolation : le compte B ne voit ni ne pousse les données de A', async () => {
  faux.reinitialiser();
  const navigateur = {};
  appareil(navigateur);

  faux.connecter('A');
  const a = await chargerProgress();
  await attendre(150);
  a.toggleWord(42); a.toggleSurah(2);
  await attendre(1100);
  assert.deepEqual(faux.cloud('A:user_progress').wordsLearned, [42], 'le cloud de A doit contenir le mot 42');

  faux.deconnecter();
  faux.connecter('B');
  const b = await chargerProgress();
  await attendre(1100);

  assert.equal(b.isWordLearned(42), false, 'B ne doit pas voir le mot appris par A');
  assert.equal(b.isSurahRead(2), false, 'B ne doit pas voir la sourate lue par A');
  const cloudB = faux.cloud('B:user_progress');
  assert.equal((cloudB && cloudB.wordsLearned || []).length, 0, 'le cloud de B doit rester vide');
  assert.deepEqual(faux.cloud('A:user_progress').wordsLearned, [42], 'le cloud de A doit être intact');
});

test('isolation : A retrouve son état après le passage de B', async () => {
  faux.reinitialiser();
  const navigateur = {};
  appareil(navigateur);

  faux.connecter('A');
  let a = await chargerProgress();
  await attendre(150);
  a.toggleWord(42);
  await attendre(1100);

  faux.deconnecter(); faux.connecter('B');
  const b = await chargerProgress();
  await attendre(1100);
  b.toggleWord(7);
  await attendre(1100);

  faux.deconnecter(); faux.connecter('A');
  a = await chargerProgress();
  await attendre(1100);
  assert.equal(a.isWordLearned(42), true, 'A doit retrouver son mot');
  assert.equal(a.isWordLearned(7), false, 'A ne doit pas hériter du mot de B');
});

test('progression anonyme : aucune fusion sans choix explicite', async () => {
  faux.reinitialiser();
  const navigateur = {};
  appareil(navigateur);

  const anon = await chargerProgress();
  await attendre(100);
  anon.toggleWord(11); anon.toggleWord(12);

  faux.connecter('C');
  const c = await chargerProgress();
  await attendre(1100);
  assert.equal(c.wordsLearnedCount(), 0, 'le compte doit rester vierge');

  const dispo = c.progressionAnonymeDisponible();
  assert.ok(dispo && dispo.mots === 2, 'la progression anonyme doit être proposée');

  c.fusionnerProgressionAnonyme();
  await attendre(1100);
  assert.equal(c.wordsLearnedCount(), 2, 'la fusion explicite doit fonctionner');
  assert.equal(c.progressionAnonymeDisponible(), false, 'elle ne doit pas être reproposée');
});

test('dernière écriture gagnante : un retrait n’est pas ressuscité', async () => {
  faux.reinitialiser();
  const tel = {}, pc = {};

  appareil(tel); faux.connecter('D');
  let t = await chargerProgress(); await attendre(150);
  t.toggleWord(42); await attendre(1100);

  appareil(pc);
  let p = await chargerProgress(); await attendre(1100);
  assert.equal(p.isWordLearned(42), true, 'le PC doit recevoir le mot');

  appareil(tel); await attendre(30);
  t = await chargerProgress(); await attendre(1100);
  t.toggleWord(42);                       // retrait
  await attendre(1100);

  appareil(pc);
  p = await chargerProgress(); await attendre(1200);
  assert.equal(p.isWordLearned(42), false, 'le retrait doit être appliqué, pas annulé');
});

test('lecture cloud en erreur : aucun envoi de l’état local', async () => {
  faux.reinitialiser();
  const navigateur = {};
  appareil(navigateur);
  // local ancien, cloud plus récent
  navigateur['cc_progress_v2:E'] = JSON.stringify({
    words: { '1': { v: true, t: 1000 } }, wordsLearned: [1], surahs: {}, quiz: { history: [], best: {} }
  });
  faux.definirCloud('E:user_progress', {
    words: { '1': { v: true, t: 1000 }, '99': { v: true, t: 9e12 } },
    wordsLearned: [1, 99], surahs: {}, quiz: { history: [], best: {} }
  });

  faux.connecter('E');
  faux.definirErreurLecture(true);
  const p = await chargerProgress();
  await attendre(1400);

  assert.equal(faux.journal.upserts, 0, 'aucune écriture ne doit partir après une lecture en erreur');
  assert.equal(p.pullEffectue(), false, 'le pull ne doit pas être marqué réussi');
  assert.ok(faux.cloud('E:user_progress').wordsLearned.includes(99), 'le cloud ne doit pas être écrasé');

  faux.definirErreurLecture(false);
  await attendre(6200);                   // première reprise à 5 s
  assert.equal(p.pullEffectue(), true, 'le pull doit aboutir au rétablissement');
  assert.equal(p.isWordLearned(99), true, 'la donnée distante doit être fusionnée');
});

test('reset des quiz : propagé et non ressuscité', async () => {
  faux.reinitialiser();
  const a = {}, b = {};

  appareil(a); faux.connecter('F');
  let pa = await chargerProgress(); await attendre(150);
  for (let i = 0; i < 5; i++) pa.saveQuizResult('qcm', 8, 10);
  await attendre(1100);

  appareil(b);
  let pb = await chargerProgress(); await attendre(1100);
  assert.equal(pb.quizStats().sessions, 5, 'le second appareil doit voir les 5 sessions');

  appareil(a);
  pa = await chargerProgress(); await attendre(1100);
  pa.resetProgress(); await attendre(1100);

  appareil(b);
  pb = await chargerProgress(); await attendre(1300);
  assert.equal(pb.quizStats().sessions, 0, 'le reset doit se propager');
  await attendre(1100);
  const cloudF = faux.cloud('F:user_progress');
  assert.equal((cloudF.quiz.history || []).length, 0, 'les sessions ne doivent pas revenir par le cloud');
});

test('SRS : la file est conservée tant que l’écriture échoue', async () => {
  faux.reinitialiser();
  const navigateur = {};
  appareil(navigateur);
  faux.connecter('G');

  const srs = await chargerSrs();
  await attendre(150);
  faux.definirEchecEcriture(true);
  srs.review(10, 'good'); srs.review(20, 'good'); srs.review(30, 'again');
  await attendre(1200);
  assert.equal(Object.keys(faux.cloud('G:srs_cards') || {}).length, 0, 'rien ne doit être enregistré pendant la panne');

  faux.definirEchecEcriture(false);
  await attendre(6500);                   // reprise
  const envoyees = Object.keys(faux.cloud('G:srs_cards') || {});
  assert.equal(envoyees.length, 3, 'les 3 cartes doivent être envoyées après rétablissement');
});

test('SRS : les cartes ne passent pas d’un compte à l’autre', async () => {
  faux.reinitialiser();
  const navigateur = {};
  appareil(navigateur);

  faux.connecter('H');
  const h = await chargerSrs(); await attendre(150);
  h.review(5, 'good');
  await attendre(1100);

  faux.deconnecter(); faux.connecter('I');
  const i = await chargerSrs(); await attendre(1100);
  assert.equal(i.hasCard(5), false, 'le compte I ne doit pas hériter de la carte de H');
});

test('migration : les anciennes clés sont reprises sans perte', async () => {
  faux.reinitialiser();
  const navigateur = {};
  appareil(navigateur);
  navigateur['cc_progress_v1'] = JSON.stringify({
    wordsLearned: [1, 2, 3], surahsRead: [1],
    quiz: { history: [{ type: 'qcm', score: 8, total: 10, date: '2026-08-01T10:00:00Z' }], best: { qcm: 80 } },
    bestStreak: 9
  });
  const p = await chargerProgress();
  await attendre(150);
  assert.equal(p.wordsLearnedCount(), 3, 'les mots doivent être conservés');
  assert.equal(p.surahsReadCount(), 1, 'les sourates doivent être conservées');
  assert.equal(p.quizBest('qcm'), 80, 'le record doit être conservé');
  assert.equal(p.getBestStreak(), 9, 'la meilleure série doit être conservée');
});

// ============================================================
console.log('Tests de synchronisation\n');
for (const { nom, fn } of tests) {
  try {
    await fn();
    console.log(`  ✓ ${nom}`);
  } catch (e) {
    echecs++;
    console.error(`  ✗ ${nom}`);
    console.error(`      ${e.message}`);
  }
}
console.log('');
if (echecs === 0) {
  console.log(`✓ ${tests.length} tests passés.`);
  process.exit(0);
}
console.error(`${echecs} test(s) en échec sur ${tests.length}.`);
process.exit(1);
