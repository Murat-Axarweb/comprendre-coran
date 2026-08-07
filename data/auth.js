// ============================================================
// Authentification — Comprendre le Coran (Phase 2)
// Enveloppe autour de supabase.auth, avec chargement paresseux de la
// librairie (getSupabase). Chaque fonction est sûre même si Supabase
// n'est pas configuré ou si le CDN n'a pas répondu.
// ============================================================
import { getSupabase, isConfigured } from './supabase.js';

export { isConfigured };

const NOT_CONFIGURED = { error: { code: 'NOT_CONFIGURED', message: 'Supabase non configuré' } };

export async function signUp(email, password, displayName, lang) {
  const sb = await getSupabase();
  if (!sb) return NOT_CONFIGURED;
  return await sb.auth.signUp({
    email, password,
    options: { data: { display_name: displayName || '', lang: lang || 'fr' } }
  });
}

export async function signIn(email, password) {
  const sb = await getSupabase();
  if (!sb) return NOT_CONFIGURED;
  return await sb.auth.signInWithPassword({ email, password });
}

export async function signOut() {
  const sb = await getSupabase();
  if (!sb) return NOT_CONFIGURED;
  return await sb.auth.signOut();
}

export async function getSession() {
  const sb = await getSupabase();
  if (!sb) return null;
  const { data } = await sb.auth.getSession();
  return data.session;
}

export async function getUser() {
  const sb = await getSupabase();
  if (!sb) return null;
  const { data } = await sb.auth.getUser();
  return data.user;
}

export async function getProfile() {
  const sb = await getSupabase();
  if (!sb) return null;
  const { data: u } = await sb.auth.getUser();
  if (!u || !u.user) return null;
  const { data, error } = await sb
    .from('profiles')
    .select('id, display_name, lang, role, created_at')
    .eq('id', u.user.id)
    .single();
  return error ? null : data;
}

// Écoute des changements de session. Renvoie une fonction de désabonnement.
export function onAuthChange(cb) {
  let unsub = () => {};
  getSupabase().then((sb) => {
    if (!sb) return;
    const { data } = sb.auth.onAuthStateChange((_event, session) => cb(session));
    unsub = () => data.subscription.unsubscribe();
  });
  return () => unsub();
}
