// ============================================================
// ADMINISTRATION — Comprendre le Coran (Phase 2E)
// Appelle les fonctions SQL sécurisées (SECURITY DEFINER) qui vérifient
// elles-mêmes le rôle admin côté serveur. Le contrôle fait ici est donc
// un confort d'affichage, pas une protection : la vraie barrière est en base.
// ============================================================
import { getSupabase, isConfigured } from './supabase.js';

export { isConfigured };

// L'utilisateur courant est-il admin ? (false si déconnecté / hors ligne)
export async function isAdmin() {
  try {
    const sb = await getSupabase();
    if (!sb) return false;
    const { data, error } = await sb.rpc('is_admin');
    return !error && data === true;
  } catch (e) { return false; }
}

// Statistiques agrégées globales. Renvoie null si non autorisé ou indisponible.
export async function getStats() {
  try {
    const sb = await getSupabase();
    if (!sb) return null;
    const { data, error } = await sb.rpc('admin_stats');
    return error ? null : data;
  } catch (e) { return null; }
}

// Inscriptions par jour sur 30 jours : [{ day, n }]. Renvoie [] si indisponible.
export async function getSignupsDaily() {
  try {
    const sb = await getSupabase();
    if (!sb) return [];
    const { data, error } = await sb.rpc('admin_signups_daily');
    return error || !Array.isArray(data) ? [] : data;
  } catch (e) { return []; }
}
