// ============================================================
// Client Supabase partagé — Comprendre le Coran (Phase 2)
// ------------------------------------------------------------
// Mise en route :
//   1. Créez un projet sur https://supabase.com
//   2. Project Settings → API : copiez « Project URL » et la clé « anon public »
//   3. Collez-les dans les deux constantes ci-dessous
//   4. SQL Editor : exécutez les fichiers de supabase/*.sql
//
// Note sécurité : la clé « anon public » est conçue pour être exposée côté
// navigateur. La protection des données repose sur les policies RLS.
//
// Robustesse : la librairie est chargée dynamiquement depuis un CDN. Si ce
// chargement échoue (CDN indisponible, hors ligne), on retombe proprement en
// mode local (supabase = null) au lieu de casser toute la page.
// ============================================================

const SUPABASE_URL = 'https://dktyvexclitlooatwawu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrdHl2ZXhjbGl0bG9vYXR3YXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMzIzNjksImV4cCI6MjEwMTYwODM2OX0.nRMaedgWUzJyw04Jvjq2i-h2l5N6i3cv6nCPiIq5_TQ';

// Vrai une fois les deux constantes renseignées.
export function isConfigured() {
  return !SUPABASE_URL.includes('VOTRE-') && !SUPABASE_ANON_KEY.includes('VOTRE_');
}

let _client = null;
if (isConfigured()) {
  try {
    const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
    _client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true }
    });
  } catch (e) {
    // CDN injoignable : on continue en mode local seul, sans casser la page.
    console.warn('[Comprendre le Coran] Supabase indisponible — mode local seul.', e);
  }
}

// null si non configuré ou si le chargement a échoué : chaque appelant vérifie.
export const supabase = _client;
