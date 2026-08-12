// ============================================================
// PROGRESSION — Comprendre le Coran
// ------------------------------------------------------------
// Local-first : localStorage est la source de vérité pour toutes les
// lectures (API synchrone). La synchronisation Supabase se fait en
// arrière-plan, sans jamais bloquer le chargement d'une page.
//
// CHAQUE ÉTAT EST HORODATÉ. Auparavant la fusion faisait l'union des
// listes : retirer un mot sur le téléphone était annulé dès que le PC,
// qui l'avait encore, se synchronisait. Désormais chaque mot et chaque
// sourate portent la date de leur dernier changement, et c'est la
// modification la plus récente qui l'emporte — y compris un retrait.
// ============================================================
import { getSupabase, isConfigured } from './supabase.js';

// ============================================================
// ESPACES DE STOCKAGE PAR UTILISATEUR
// ------------------------------------------------------------
// Une clé unique était partagée par tous les comptes d'un même
// navigateur : après une déconnexion, la progression du compte
// précédent était chargée puis poussée vers le compte suivant.
// Chaque compte a désormais son propre espace, et l'espace anonyme
// reste distinct. Aucune fusion n'a lieu sans choix explicite.
// ============================================================
const KEY_PREFIX = 'cc_progress_v2';
const KEY_LEGACY = 'cc_progress_v1';
const ANON = 'anonymous';

let _ns = ANON;                       // espace courant
const cleDe = (ns) => `${KEY_PREFIX}:${ns}`;
const cleFusion = (uid) => `cc_merged_progress:${uid}`;

// ----- Structure interne -----
// words  : { "42": { v: true, t: 1786312542000 } }
// surahs : { "2":  { v: true, t: 1786312542000 } }
function _vide() {
  return { words: {}, surahs: {}, quiz: { history: [], best: {} }, quizResetAt: 0,
           lastVisit: null, streak: 0, bestStreak: 0, lastDay: null };
}

// Convertit une ancienne liste d'identifiants en états horodatés. La date
// 0 signifie « antérieur à tout changement connu » : ces valeurs ne
// peuvent donc jamais écraser une modification datée.
function _depuisListe(liste) {
  const out = {};
  (Array.isArray(liste) ? liste : []).forEach(id => { out[String(id)] = { v: true, t: 0 }; });
  return out;
}

function _normaliserEtats(obj) {
  const out = {};
  if (obj && typeof obj === 'object') {
    for (const [k, e] of Object.entries(obj)) {
      if (e && typeof e === 'object') out[String(k)] = { v: !!e.v, t: Number(e.t) || 0 };
    }
  }
  return out;
}

function _load(ns) {
  ns = ns || _ns;
  try {
    // Migration unique de l'ancienne clé globale vers l'espace anonyme.
    if (ns === ANON && !localStorage.getItem(cleDe(ANON))) {
      const legacy = localStorage.getItem(KEY_LEGACY);
      if (legacy) localStorage.setItem(cleDe(ANON), legacy);
    }
    const raw = localStorage.getItem(cleDe(ns));
    if (raw) {
      const p = JSON.parse(raw);
      const base = _vide();
      // Format horodaté si présent, sinon migration depuis les listes.
      base.words  = p.words  ? _normaliserEtats(p.words)  : _depuisListe(p.wordsLearned);
      base.surahs = p.surahs ? _normaliserEtats(p.surahs) : _depuisListe(p.surahsRead);
      if (p.quiz && typeof p.quiz === 'object') {
        base.quiz = { history: Array.isArray(p.quiz.history) ? p.quiz.history : [],
                      best: (p.quiz.best && typeof p.quiz.best === 'object') ? p.quiz.best : {} };
      }
      base.quizResetAt = Number(p.quizResetAt) || 0;
      base.lastVisit  = p.lastVisit || null;
      base.streak     = p.streak || 0;
      base.bestStreak = p.bestStreak || 0;
      base.lastDay    = p.lastDay || null;
      return base;
    }
  } catch (e) { /* localStorage indisponible ou corrompu */ }
  return _vide();
}

// Identifiants actuellement « vrais », pour l'API et la rétrocompatibilité.
function _actifs(etats) {
  return Object.keys(etats).filter(k => etats[k].v).map(Number).sort((a, b) => a - b);
}

// L'objet écrit sur disque et dans le cloud contient AUSSI les anciennes
// listes : un appareil resté sur la version précédente continue de
// fonctionner, et la fonction SQL admin_stats() (qui compte la longueur
// de wordsLearned) reste valide.
function _serialiser() {
  return {
    words: progress.words,
    surahs: progress.surahs,
    wordsLearned: _actifs(progress.words),
    surahsRead: _actifs(progress.surahs),
    quiz: progress.quiz,
    quizResetAt: progress.quizResetAt || 0,
    lastVisit: progress.lastVisit,
    streak: progress.streak,
    bestStreak: progress.bestStreak,
    lastDay: progress.lastDay
  };
}

function _save() {
  try { localStorage.setItem(cleDe(_ns), JSON.stringify(_serialiser())); } catch (e) { /* quota / privé */ }
}

let progress = _load();

// ----- Série de jours consécutifs -----
// Date LOCALE du navigateur : avec une date UTC, une session à 01 h 30 à
// Istanbul serait comptée la veille et casserait la série.
function _jourLocal(d) {
  d = d || new Date();
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function _majSerie() {
  const today = _jourLocal();
  if (progress.lastDay !== today) {
    if (progress.lastDay) {
      const diff = Math.round((Date.parse(today) - Date.parse(progress.lastDay)) / 86400000);
      progress.streak = diff === 1 ? (progress.streak || 0) + 1 : 1;
    } else {
      progress.streak = 1;
    }
    progress.lastDay = today;
    if (!progress.bestStreak || progress.streak > progress.bestStreak) progress.bestStreak = progress.streak;
  }
}

_majSerie();
progress.lastVisit = new Date().toISOString();
_save();

export function getStreak() { return progress.streak || 0; }
export function getBestStreak() { return progress.bestStreak || 0; }

// ----- Mots -----
export function isWordLearned(id) {
  const e = progress.words[String(id)];
  return !!(e && e.v);
}

export function toggleWord(id) {
  const k = String(id);
  const etait = isWordLearned(id);
  progress.words[k] = { v: !etait, t: Date.now() };
  _save();
  _scheduleCloudPush();
  return !etait;
}

export function wordsLearnedCount() { return _actifs(progress.words).length; }

// ----- Sourates -----
export function isSurahRead(n) {
  const e = progress.surahs[String(n)];
  return !!(e && e.v);
}

export function toggleSurah(n) {
  const k = String(n);
  const etait = isSurahRead(n);
  progress.surahs[k] = { v: !etait, t: Date.now() };
  _save();
  _scheduleCloudPush();
  return !etait;
}

export function surahsReadCount() { return _actifs(progress.surahs).length; }

// ----- Quiz -----
// Identifiant de session : la date seule ne suffit pas comme clé de
// déduplication, deux sessions enregistrées dans la même milliseconde
// se confondraient lors d'une fusion entre appareils.
let _seqQuiz = 0;
function _idSession() {
  _seqQuiz = (_seqQuiz + 1) % 1000;
  return `${Date.now().toString(36)}${_seqQuiz.toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

export function saveQuizResult(type, score, total, missedIds) {
  const entry = { id: _idSession(), type, score, total, date: new Date().toISOString() };
  if (Array.isArray(missedIds) && missedIds.length) entry.missed = missedIds.slice(0, 50);
  progress.quiz.history.push(entry);
  if (progress.quiz.history.length > 200) progress.quiz.history.shift();
  const pct = total ? Math.round(score / total * 100) : 0;
  if (!progress.quiz.best[type] || pct > progress.quiz.best[type]) progress.quiz.best[type] = pct;
  _save();
  _scheduleCloudPush();
}

// Mots les plus souvent ratés en quiz, du plus fréquent au moins fréquent.
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

export function quizStats(type) {
  const hs = progress.quiz.history.filter(h => !type || h.type === type);
  if (!hs.length) return { sessions: 0, avg: 0, last: null, best: type ? quizBest(type) : 0 };
  const pcts = hs.map(h => (h.total ? Math.round(h.score / h.total * 100) : 0));
  const avg = Math.round(pcts.reduce((a, b) => a + b, 0) / pcts.length);
  return { sessions: hs.length, avg, last: pcts[pcts.length - 1], best: type ? quizBest(type) : 0 };
}

export function quizBest(type) { return progress.quiz.best[type] || 0; }
export function quizHistory() { return progress.quiz.history.slice(); }

export function getSummary() {
  return {
    words: wordsLearnedCount(),
    surahs: surahsReadCount(),
    quizzes: progress.quiz.history.length,
    best: { ...progress.quiz.best }
  };
}

export function resetProgress() {
  const now = Date.now();
  // On date le retrait, sinon la synchronisation ferait revenir les états
  // encore présents sur les autres appareils.
  Object.keys(progress.words).forEach(k => { progress.words[k] = { v: false, t: now }; });
  Object.keys(progress.surahs).forEach(k => { progress.surahs[k] = { v: false, t: now }; });
  // Le vidage des quiz est daté : sans cela, la fusion réintroduisait les
  // sessions encore présentes sur les autres appareils.
  progress.quiz = { history: [], best: {} };
  progress.quizResetAt = now;
  _save();
  _scheduleCloudPush();
}

// ============================================================
// SYNCHRONISATION CLOUD
// ============================================================
const _listeners = new Set();
export function subscribe(fn) { _listeners.add(fn); return () => _listeners.delete(fn); }
function _notify() { _listeners.forEach(fn => { try { fn(); } catch (e) {} }); }

export function cloudEnabled() { return isConfigured(); }

// Fusion élément par élément : la modification la plus récente gagne.
function _fusionnerEtats(local, distant) {
  for (const [k, r] of Object.entries(distant || {})) {
    const l = local[k];
    if (!l || (r.t || 0) > (l.t || 0)) local[k] = { v: !!r.v, t: Number(r.t) || 0 };
  }
}

function _merge(remote) {
  if (!remote || typeof remote !== 'object') return;

  // Format horodaté si disponible ; sinon anciennes listes, datées à 0
  // pour ne jamais écraser un changement local daté.
  _fusionnerEtats(progress.words,  remote.words  ? _normaliserEtats(remote.words)  : _depuisListe(remote.wordsLearned));
  _fusionnerEtats(progress.surahs, remote.surahs ? _normaliserEtats(remote.surahs) : _depuisListe(remote.surahsRead));

  if (remote.bestStreak && remote.bestStreak > (progress.bestStreak || 0)) progress.bestStreak = remote.bestStreak;
  if (remote.streak && remote.lastDay === progress.lastDay && remote.streak > (progress.streak || 0)) progress.streak = remote.streak;

  if (remote.quiz && typeof remote.quiz === 'object') {
    // Le reset le plus récent des deux côtés fait autorité : toute session
    // antérieure est écartée, y compris celles déjà présentes localement.
    const resetAt = Math.max(progress.quizResetAt || 0, Number(remote.quizResetAt) || 0);
    if (resetAt > (progress.quizResetAt || 0)) progress.quizResetAt = resetAt;
    if (resetAt > 0) {
      progress.quiz.history = progress.quiz.history.filter(h => Date.parse(h.date) > resetAt);
    }
    const cle = (h) => h.id || (h.type + '|' + h.date);   // repli : sessions d'avant l'identifiant
    const seen = new Set(progress.quiz.history.map(cle));
    (remote.quiz.history || []).forEach(h => {
      if (resetAt > 0 && !(Date.parse(h.date) > resetAt)) return;   // antérieure au reset
      const k = cle(h);
      if (!seen.has(k)) { progress.quiz.history.push(h); seen.add(k); }
    });
    progress.quiz.history.sort((a, b) => (a.date < b.date ? -1 : 1));
    if (progress.quiz.history.length > 200) progress.quiz.history = progress.quiz.history.slice(-200);
    // Après un reset, les records distants antérieurs ne doivent pas revenir.
    const memeReset = (Number(remote.quizResetAt) || 0) >= (progress.quizResetAt || 0);
    if (memeReset) {
      const rb = remote.quiz.best || {};
      Object.keys(rb).forEach(t => {
        if (!progress.quiz.best[t] || rb[t] > progress.quiz.best[t]) progress.quiz.best[t] = rb[t];
      });
    }
  }
}

// ----- Envoi (débouncé, avec reprise en cas d'échec) -----
let _pushTimer = null;
let _retard = 0;
const DELAIS_REPRISE = [5000, 15000, 60000];

function _scheduleCloudPush(delai) {
  if (!isConfigured()) return;
  clearTimeout(_pushTimer);
  _pushTimer = setTimeout(_cloudPush, delai === undefined ? 800 : delai);
}
function _reprogrammer() {
  const d = DELAIS_REPRISE[Math.min(_retard, DELAIS_REPRISE.length - 1)];
  _retard++;
  _scheduleCloudPush(d);
}

async function _cloudPush() {
  try {
    const sb = await getSupabase();
    if (!sb) return;
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return;
    // Jamais d'envoi avant d'avoir lu le cloud au moins une fois : sinon un
    // état local ancien écraserait des données distantes plus récentes.
    if (!_pullReussi) return;
    const { error } = await sb.from('user_progress').upsert(
      { user_id: user.id, data: _serialiser(), updated_at: new Date().toISOString() },
      { onConflict: 'user_id' }
    );
    if (error) { _reprogrammer(); return; }
    _retard = 0;
  } catch (e) { _reprogrammer(); }
}

// Vrai une fois qu'une lecture cloud a abouti pour l'espace courant.
// Tant qu'elle n'a pas eu lieu, l'état local n'a pas été confronté au
// cloud : l'envoyer écraserait des données distantes potentiellement
// plus récentes. Une lecture en erreur n'est PAS un cloud vide.
let _pullReussi = false;
let _pullRetard = 0;

export function pullEffectue() { return _pullReussi; }

async function _cloudPull() {
  let sb;
  try {
    sb = await getSupabase();
    if (!sb) return;
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return;

    const { data, error } = await sb
      .from('user_progress').select('data').eq('user_id', user.id).maybeSingle();

    if (error) {
      // Échec de lecture : on ne fusionne rien, on n'envoie rien, on réessaie.
      const d = DELAIS_REPRISE[Math.min(_pullRetard, DELAIS_REPRISE.length - 1)];
      _pullRetard++;
      setTimeout(_cloudPull, d);
      return;
    }

    // Succès : avec donnée (fusion) ou sans donnée (compte neuf).
    if (data && data.data) _merge(data.data);
    _pullReussi = true;
    _pullRetard = 0;
    _save();
    _notify();
    _cloudPush();
  } catch (e) {
    // Réseau indisponible : même règle, on réessaie sans rien envoyer.
    if (sb) {
      const d = DELAIS_REPRISE[Math.min(_pullRetard, DELAIS_REPRISE.length - 1)];
      _pullRetard++;
      setTimeout(_cloudPull, d);
    }
  }
}

// ============================================================
// BASCULE D'ESPACE
// ============================================================
// Change d'espace de stockage et recharge l'état correspondant. Aucune
// donnée n'est transportée d'un espace à l'autre : c'est précisément ce
// qui provoquait la fuite entre comptes.
function _basculer(ns) {
  if (ns === _ns) return false;
  clearTimeout(_pushTimer);          // annule un envoi préparé pour l'ancien espace
  _pullReussi = false;               // le nouvel espace n'a pas encore été confronté au cloud
  _pullRetard = 0;
  _ns = ns;
  progress = _load(ns);
  progress.lastVisit = new Date().toISOString();
  _majSerie();
  _save();
  _notify();
  return true;
}

// L'espace anonyme contient-il quelque chose à proposer à la fusion ?
export function progressionAnonymeDisponible() {
  if (_ns === ANON) return false;
  try {
    if (localStorage.getItem(cleFusion(_ns))) return false;   // déjà proposé
    const raw = localStorage.getItem(cleDe(ANON));
    if (!raw) return false;
    const p = JSON.parse(raw);
    // Les deux formats coexistent après migration : on ne compte qu'une fois.
    const mots = p.words ? Object.values(p.words).filter(e => e && e.v).length
                         : (p.wordsLearned || []).length;
    const sourates = p.surahs ? Object.values(p.surahs).filter(e => e && e.v).length
                              : (p.surahsRead || []).length;
    const quiz = ((p.quiz || {}).history || []).length;
    return (mots + sourates + quiz) > 0 ? { mots, sourates, quiz } : false;
  } catch (e) { return false; }
}

// Fusionne l'espace anonyme dans le compte courant. Sur choix explicite
// de la personne uniquement, et une seule fois.
export function fusionnerProgressionAnonyme() {
  if (_ns === ANON) return false;
  try {
    const raw = localStorage.getItem(cleDe(ANON));
    if (raw) _merge(JSON.parse(raw));
    localStorage.setItem(cleFusion(_ns), new Date().toISOString());
    _save(); _notify(); _scheduleCloudPush();
    return true;
  } catch (e) { return false; }
}

// Refuse la fusion : on ne la reproposera plus pour ce compte.
export function refuserProgressionAnonyme() {
  if (_ns === ANON) return;
  try { localStorage.setItem(cleFusion(_ns), 'refuse'); } catch (e) {}
}

// Amorçage en arrière-plan (ne bloque jamais l'exécution du module).
(async () => {
  const sb = await getSupabase();
  if (!sb) return;
  try {
    const { data: { user } } = await sb.auth.getUser();
    if (user) _basculer(user.id);
  } catch (e) { /* session indisponible : on reste en anonyme */ }
  _cloudPull();
  sb.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session && session.user) {
      _basculer(session.user.id);
      _cloudPull();
    } else if (event === 'SIGNED_OUT') {
      _basculer(ANON);              // l'état du compte quitté n'est plus en mémoire
    }
  });
})();
