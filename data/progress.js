// ============================================================
// PROGRESSION LOCALE — Comprendre le Coran
// Simulation de la progression utilisateur via localStorage
// (sera migrée vers Supabase en Phase 2)
// ============================================================

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
}
