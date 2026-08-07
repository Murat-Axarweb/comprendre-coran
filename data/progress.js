// ============================================================
// PROGRESSION — Comprendre le Coran
// Local-first : localStorage est la source de vérité pour toutes
// les lectures (API synchrone, inchangée). Quand l'utilisateur est
// connecté, la progression est synchronisée avec Supabase en
// arrière-plan (fusion à la connexion, push après chaque écriture).
// Si Supabase n'est pas configuré ou l'utilisateur non connecté,
// tout continue en localStorage sans aucune régression.
// ============================================================
import { supabase } from './supabase.js';

const KEY = 'cc_progress_v1';

function _load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return {
        wordsLearned: Array.isArray(p.wordsLearned) ? p.wordsLearned : [],
        surahsRead: Array.isArray(p.surahsRead) ? p.surahsRead : [],
        quiz: p.quiz && typeof p.quiz === 'object' ? p.quiz : { history: [], best: {} },
        lastVisit: p.lastVisit || null
      };
    }
  } catch (e) { /* localStorage indisponible ou corrompu */ }
  return { wordsLearned: [], surahsRead: [], quiz: { history: [], best: {} }, lastVisit: null };
}

function _save(p) {
  try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* quota / privé */ }
}

const progress = _load();
progress.lastVisit = new Date().toISOString();
_save(progress);

// ----- Mots -----
export function isWordLearned(id) { return progress.wordsLearned.includes(id); }

export function toggleWord(id) {
  const i = progress.wordsLearned.indexOf(id);
  if (i >= 0) progress.wordsLearned.splice(i, 1);
  else progress.wordsLearned.push(id);
  _save(progress);
  _scheduleCloudPush();
  return i < 0; // true si désormais appris
}

export function wordsLearnedCount() { return progress.wordsLearned.length; }

// ----- Sourates -----
export function isSurahRead(n) { return progress.surahsRead.includes(n); }

export function toggleSurah(n) {
  const i = progress.surahsRead.indexOf(n);
  if (i >= 0) progress.surahsRead.splice(i, 1);
  else progress.surahsRead.push(n);
  _save(progress);
  _scheduleCloudPush();
  return i < 0;
}

export function surahsReadCount() { return progress.surahsRead.length; }

// ----- Quiz -----
export function saveQuizResult(type, score, total) {
  progress.quiz.history.push({ type, score, total, date: new Date().toISOString() });
  if (progress.quiz.history.length > 200) progress.quiz.history.shift();
  const pct = total ? Math.round(score / total * 100) : 0;
  if (!progress.quiz.best[type] || pct > progress.quiz.best[type]) progress.quiz.best[type] = pct;
  _save(progress);
  _scheduleCloudPush();
}

export function quizBest(type) { return progress.quiz.best[type] || 0; }
export function quizHistory() { return progress.quiz.history.slice(); }

// ----- Résumé global -----
export function getSummary() {
  return {
    words: progress.wordsLearned.length,
    surahs: progress.surahsRead.length,
    quizzes: progress.quiz.history.length,
    best: { ...progress.quiz.best }
  };
}

export function resetProgress() {
  progress.wordsLearned = [];
  progress.surahsRead = [];
  progress.quiz = { history: [], best: {} };
  _save(progress);
  _scheduleCloudPush();
}

// ============================================================
// SYNCHRONISATION CLOUD (Supabase)
// ============================================================

// --- Abonnement : les pages peuvent se re-rendre après une synchro ---
const _listeners = new Set();
export function subscribe(fn) { _listeners.add(fn); return () => _listeners.delete(fn); }
function _notify() { _listeners.forEach(fn => { try { fn(); } catch (e) {} }); }

// --- Indique si la synchro cloud est disponible (Supabase configuré) ---
export function cloudEnabled() { return !!supabase; }

// --- Fusion d'un état distant dans l'état local (sémantique d'union) ---
// Les ensembles « appris/lu » sont unis (on n'efface pas par absence) ;
// l'historique de quiz est concaténé et dédupliqué ; les meilleurs
// scores prennent le maximum. Évite toute perte à la première connexion.
function _merge(remote) {
  if (!remote || typeof remote !== 'object') return;
  const rw = Array.isArray(remote.wordsLearned) ? remote.wordsLearned : [];
  const rs = Array.isArray(remote.surahsRead) ? remote.surahsRead : [];
  progress.wordsLearned = Array.from(new Set([...progress.wordsLearned, ...rw]));
  progress.surahsRead = Array.from(new Set([...progress.surahsRead, ...rs]));
  if (remote.quiz && typeof remote.quiz === 'object') {
    const seen = new Set(progress.quiz.history.map(h => h.type + '|' + h.date));
    (remote.quiz.history || []).forEach(h => {
      const k = h.type + '|' + h.date;
      if (!seen.has(k)) { progress.quiz.history.push(h); seen.add(k); }
    });
    progress.quiz.history.sort((a, b) => (a.date < b.date ? -1 : 1));
    if (progress.quiz.history.length > 200) progress.quiz.history = progress.quiz.history.slice(-200);
    const rb = remote.quiz.best || {};
    Object.keys(rb).forEach(t => {
      if (!progress.quiz.best[t] || rb[t] > progress.quiz.best[t]) progress.quiz.best[t] = rb[t];
    });
  }
}

// --- Push (débouncé) de l'état local complet vers le cloud ---
let _pushTimer = null;
function _scheduleCloudPush() {
  if (!supabase) return;
  clearTimeout(_pushTimer);
  _pushTimer = setTimeout(_cloudPush, 800);
}
async function _cloudPush() {
  if (!supabase) return;
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from('user_progress').upsert(
      { user_id: user.id, data: progress, updated_at: new Date().toISOString() },
      { onConflict: 'user_id' }
    );
  } catch (e) { /* hors ligne : la synchro reprendra plus tard */ }
}

// --- Pull + fusion à la connexion (puis re-push du résultat fusionné) ---
async function _cloudPull() {
  if (!supabase) return;
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data, error } = await supabase
      .from('user_progress').select('data').eq('user_id', user.id).maybeSingle();
    if (!error && data && data.data) _merge(data.data);
    _save(progress);
    _notify();          // rafraîchit l'UI des pages abonnées
    _cloudPush();        // renvoie l'état fusionné (inclut la progression anonyme locale)
  } catch (e) { /* silencieux : dégradation gracieuse */ }
}

// --- Amorçage : au chargement + à chaque connexion ---
if (supabase) {
  _cloudPull();
  supabase.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_IN') _cloudPull();
  });
}
