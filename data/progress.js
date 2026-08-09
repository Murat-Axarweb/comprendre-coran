// ============================================================
// PROGRESSION — Comprendre le Coran
// Local-first : localStorage est la source de vérité pour toutes les
// lectures (API synchrone, inchangée). La synchro Supabase se branche
// en arrière-plan, sans jamais bloquer le chargement de la page :
// la librairie est chargée paresseusement (getSupabase). Si elle
// n'arrive pas, tout continue en localStorage sans régression.
// ============================================================
import { getSupabase, isConfigured } from './supabase.js';

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
        lastVisit: p.lastVisit || null,
        streak: p.streak || 0,
        bestStreak: p.bestStreak || 0,
        lastDay: p.lastDay || null
      };
    }
  } catch (e) { /* localStorage indisponible ou corrompu */ }
  return { wordsLearned: [], surahsRead: [], quiz: { history: [], best: {} }, lastVisit: null, streak: 0, bestStreak: 0, lastDay: null };
}

function _save(p) {
  try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* quota / privé */ }
}

const progress = _load();
// --- Série de jours consécutifs (streak) ---
(function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const last = progress.lastDay || null;
  if (last !== today) {
    if (last) {
      const diff = Math.round((Date.parse(today) - Date.parse(last)) / 86400000);
      progress.streak = diff === 1 ? (progress.streak || 0) + 1 : 1;
    } else {
      progress.streak = 1;
    }
    progress.lastDay = today;
    if (!progress.bestStreak || progress.streak > progress.bestStreak) progress.bestStreak = progress.streak;
  }
})();
progress.lastVisit = new Date().toISOString();
_save(progress);

// Série de jours consécutifs de visite.
export function getStreak() { return progress.streak || 0; }
export function getBestStreak() { return progress.bestStreak || 0; }

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
export function saveQuizResult(type, score, total, missedIds) {
  const entry = { type, score, total, date: new Date().toISOString() };
  if (Array.isArray(missedIds) && missedIds.length) entry.missed = missedIds.slice(0, 50);
  progress.quiz.history.push(entry);
  if (progress.quiz.history.length > 200) progress.quiz.history.shift();
  const pct = total ? Math.round(score / total * 100) : 0;
  if (!progress.quiz.best[type] || pct > progress.quiz.best[type]) progress.quiz.best[type] = pct;
  _save(progress);
  _scheduleCloudPush();
}

// Mots les plus souvent ratés en quiz, du plus fréquent au moins fréquent.
// Renvoie [{ id, count }]. Base de la révision ciblée des erreurs.
export function missedWords(limit) {
  const counts = new Map();
  progress.quiz.history.forEach(h => {
    (h.missed || []).forEach(id => counts.set(id, (counts.get(id) || 0) + 1));
  });
  const out = [...counts.entries()]
    .map(([id, count]) => ({ id: Number(id), count }))
    .sort((a, b) => b.count - a.count);
  return limit ? out.slice(0, limit) : out;
}

// Statistiques par type de quiz (moyenne, nombre de sessions, dernier score).
export function quizStats(type) {
  const hs = progress.quiz.history.filter(h => !type || h.type === type);
  if (!hs.length) return { sessions: 0, avg: 0, last: null, best: type ? quizBest(type) : 0 };
  const pcts = hs.map(h => (h.total ? Math.round(h.score / h.total * 100) : 0));
  const avg = Math.round(pcts.reduce((a, b) => a + b, 0) / pcts.length);
  return { sessions: hs.length, avg, last: pcts[pcts.length - 1], best: type ? quizBest(type) : 0 };
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
// SYNCHRONISATION CLOUD (paresseuse, non bloquante)
// ============================================================
const _listeners = new Set();
export function subscribe(fn) { _listeners.add(fn); return () => _listeners.delete(fn); }
function _notify() { _listeners.forEach(fn => { try { fn(); } catch (e) {} }); }

export function cloudEnabled() { return isConfigured(); }

// Fusion d'un état distant dans l'état local (union — pas d'effacement par absence).
function _merge(remote) {
  if (!remote || typeof remote !== 'object') return;
  const rw = Array.isArray(remote.wordsLearned) ? remote.wordsLearned : [];
  const rs = Array.isArray(remote.surahsRead) ? remote.surahsRead : [];
  progress.wordsLearned = Array.from(new Set([...progress.wordsLearned, ...rw]));
  progress.surahsRead = Array.from(new Set([...progress.surahsRead, ...rs]));
  if (remote.bestStreak && remote.bestStreak > (progress.bestStreak || 0)) progress.bestStreak = remote.bestStreak;
  if (remote.streak && remote.lastDay === progress.lastDay && remote.streak > (progress.streak || 0)) progress.streak = remote.streak;
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

let _pushTimer = null;
function _scheduleCloudPush() {
  if (!isConfigured()) return;
  clearTimeout(_pushTimer);
  _pushTimer = setTimeout(_cloudPush, 800);
}
async function _cloudPush() {
  try {
    const sb = await getSupabase();
    if (!sb) return;
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return;
    await sb.from('user_progress').upsert(
      { user_id: user.id, data: progress, updated_at: new Date().toISOString() },
      { onConflict: 'user_id' }
    );
  } catch (e) { /* hors ligne : reprise ultérieure */ }
}

async function _cloudPull() {
  try {
    const sb = await getSupabase();
    if (!sb) return;
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return;
    const { data, error } = await sb
      .from('user_progress').select('data').eq('user_id', user.id).maybeSingle();
    if (!error && data && data.data) _merge(data.data);
    _save(progress);
    _notify();
    _cloudPush();
  } catch (e) { /* silencieux */ }
}

// Amorçage en arrière-plan (ne bloque jamais l'exécution du module).
(async () => {
  const sb = await getSupabase();
  if (!sb) return;
  _cloudPull();
  sb.auth.onAuthStateChange((event) => { if (event === 'SIGNED_IN') _cloudPull(); });
})();
