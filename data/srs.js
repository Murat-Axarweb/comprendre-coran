// ============================================================
// RÉPÉTITION ESPACÉE (SM-2) — Comprendre le Coran
// Local-first : les cartes vivent en localStorage (fonctionne sans
// compte, hors ligne). La synchro Supabase se branche paresseusement
// (getSupabase) et ne bloque jamais le chargement de la page.
// ============================================================
import { getSupabase, isConfigured } from './supabase.js';

const KEY = 'cc_srs_v1';
const DAY = 86400000;

export const RATINGS = ['again', 'hard', 'good', 'easy'];
const QUALITY = { again: 1, hard: 3, good: 4, easy: 5 };

function _load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) { const o = JSON.parse(raw); if (o && typeof o === 'object') return o; }
  } catch (e) {}
  return {};
}
function _save() { try { localStorage.setItem(KEY, JSON.stringify(cards)); } catch (e) {} }

let cards = _load();

const _listeners = new Set();
export function subscribe(fn) { _listeners.add(fn); return () => _listeners.delete(fn); }
function _notify() { _listeners.forEach(fn => { try { fn(); } catch (e) {} }); }

export function cloudEnabled() { return isConfigured(); }

function _newCard() {
  const now = Date.now();
  return { ease: 2.5, interval: 0, reps: 0, lapses: 0, due: now, last: null, created: now };
}
export function hasCard(id) { return Object.prototype.hasOwnProperty.call(cards, id); }
export function getCard(id) { return cards[id] || null; }
export function ensureCard(id) {
  if (!hasCard(id)) { cards[id] = _newCard(); _save(); _markDirty(id); }
  return cards[id];
}

function _applySM2(card, q) {
  if (q < 3) {
    card.reps = 0;
    card.lapses = (card.lapses || 0) + 1;
    card.interval = 0;
  } else {
    if (card.reps === 0) card.interval = 1;
    else if (card.reps === 1) card.interval = 6;
    else card.interval = Math.round(card.interval * card.ease);
    card.reps += 1;
  }
  const ef = card.ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  card.ease = Math.max(1.3, ef);
  const now = Date.now();
  card.last = now;
  card.due = now + card.interval * DAY;
  return card;
}

export function review(id, rating) {
  const q = QUALITY[rating];
  if (q === undefined) return null;
  const card = ensureCard(id);
  _applySM2(card, q);
  _save();
  _markDirty(id);
  return card;
}

export function dueIds(ids, now) {
  now = now || Date.now();
  return ids.filter(id => hasCard(id) && cards[id].due <= now)
            .sort((a, b) => cards[a].due - cards[b].due);
}
export function newIds(ids) { return ids.filter(id => !hasCard(id)); }

export function stats(now) {
  now = now || Date.now();
  const ids = Object.keys(cards);
  return { total: ids.length, due: ids.filter(id => cards[id].due <= now).length };
}

// ============================================================
// SYNCHRONISATION CLOUD (paresseuse, non bloquante)
// ============================================================
const _dirty = new Set();
function _markDirty(id) { _dirty.add(Number(id)); _schedulePush(); }

let _pushTimer = null;
function _schedulePush() {
  if (!isConfigured()) return;
  clearTimeout(_pushTimer);
  _pushTimer = setTimeout(_flush, 800);
}
function _rowFromCard(userId, id) {
  const c = cards[id]; if (!c) return null;
  return {
    user_id: userId, word_id: Number(id),
    ease: c.ease, interval_days: c.interval, reps: c.reps, lapses: c.lapses,
    due_at: new Date(c.due).toISOString(),
    last_reviewed_at: c.last ? new Date(c.last).toISOString() : null,
    created_at: new Date(c.created).toISOString()
  };
}
async function _flush() {
  if (_dirty.size === 0) return;
  try {
    const sb = await getSupabase();
    if (!sb) return;
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return;
    const ids = [..._dirty]; _dirty.clear();
    const rows = ids.map(id => _rowFromCard(user.id, id)).filter(Boolean);
    if (rows.length) await sb.from('srs_cards').upsert(rows, { onConflict: 'user_id,word_id' });
  } catch (e) { /* hors ligne : reprise ultérieure */ }
}

function _mergeRow(row) {
  const id = row.word_id;
  const remote = {
    ease: row.ease, interval: row.interval_days, reps: row.reps, lapses: row.lapses,
    due: Date.parse(row.due_at),
    last: row.last_reviewed_at ? Date.parse(row.last_reviewed_at) : null,
    created: Date.parse(row.created_at)
  };
  const local = cards[id];
  if (!local) { cards[id] = remote; return; }
  if ((remote.last || 0) > (local.last || 0)) cards[id] = remote;
}

async function _cloudPull() {
  try {
    const sb = await getSupabase();
    if (!sb) return;
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return;
    const { data, error } = await sb.from('srs_cards').select('*').eq('user_id', user.id);
    if (!error && Array.isArray(data)) {
      data.forEach(_mergeRow);
      _save();
      _notify();
      Object.keys(cards).forEach(id => _dirty.add(Number(id)));
      _schedulePush();
    }
  } catch (e) { /* silencieux */ }
}

// Amorçage en arrière-plan (ne bloque jamais l'exécution du module).
(async () => {
  const sb = await getSupabase();
  if (!sb) return;
  _cloudPull();
  sb.auth.onAuthStateChange((event) => { if (event === 'SIGNED_IN') _cloudPull(); });
})();
