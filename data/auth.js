// ============================================================
// Authentification — Comprendre le Coran (Phase 2)
// Enveloppe fine autour de supabase.auth. Chaque fonction est
// sûre même si Supabase n'est pas encore configuré (renvoie
// { error:{ code:'NOT_CONFIGURED' } } plutôt que de planter).
// ============================================================
import { supabase, isConfigured } from './supabase.js';

export { isConfigured };

const NOT_CONFIGURED = { error: { code: 'NOT_CONFIGURED', message: 'Supabase non configuré' } };

// ----- Inscription -----
// displayName / lang sont stockés dans user_metadata et repris par le
// trigger handle_new_user() pour peupler la table profiles.
export async function signUp(email, password, displayName, lang) {
  if (!supabase) return NOT_CONFIGURED;
  return await supabase.auth.signUp({
    email,
    password,
    options: { data: { display_name: displayName || '', lang: lang || 'fr' } }
  });
}

// ----- Connexion -----
export async function signIn(email, password) {
  if (!supabase) return NOT_CONFIGURED;
  return await supabase.auth.signInWithPassword({ email, password });
}

// ----- Déconnexion -----
export async function signOut() {
  if (!supabase) return NOT_CONFIGURED;
  return await supabase.auth.signOut();
}

// ----- Session courante (ou null) -----
export async function getSession() {
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session;
}

// ----- Utilisateur courant (ou null) -----
export async function getUser() {
  if (!supabase) return null;
  const { data } = await supabase.auth.getUser();
  return data.user;
}

// ----- Profil applicatif (table profiles) -----
export async function getProfile() {
  if (!supabase) return null;
  const { data: u } = await supabase.auth.getUser();
  if (!u || !u.user) return null;
  const { data, error } = await supabase
    .from('profiles')
    .select('id, display_name, lang, role, created_at')
    .eq('id', u.user.id)
    .single();
  return error ? null : data;
}

// ----- Écoute des changements de session -----
// cb(session) est appelé à chaque connexion/déconnexion.
// Renvoie une fonction de désabonnement.
export function onAuthChange(cb) {
  if (!supabase) return () => {};
  const { data } = supabase.auth.onAuthStateChange((_event, session) => cb(session));
  return () => data.subscription.unsubscribe();
}
