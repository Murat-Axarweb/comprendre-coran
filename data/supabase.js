// ============================================================
// Client Supabase partagé — Comprendre le Coran (Phase 2)
// ------------------------------------------------------------
// IMPORTANT : ce module ne charge PAS Supabase au chargement de la page.
// La librairie n'est récupérée (depuis un CDN) que lors du premier appel à
// getSupabase(), et de façon paresseuse/asynchrone. Ainsi, aucune page ne
// dépend du CDN pour s'afficher ou fonctionner : si le CDN est lent ou
// indisponible, on retombe simplement en mode local (getSupabase → null).
//
// Mise en route : Project Settings → API dans Supabase, copier « Project URL »
// et la clé « anon public » ci-dessous. La clé anon est publique par design ;
// la sécurité repose sur les policies RLS.
// ============================================================

const SUPABASE_URL = 'https://dktyvexclitlooatwawu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrdHl2ZXhjbGl0bG9vYXR3YXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMzIzNjksImV4cCI6MjEwMTYwODM2OX0.nRMaedgWUzJyw04Jvjq2i-h2l5N6i3cv6nCPiIq5_TQ';

const CDN = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Vrai une fois les deux constantes renseignées.
export function isConfigured() {
  return !SUPABASE_URL.includes('VOTRE-') && !SUPABASE_ANON_KEY.includes('VOTRE_');
}

// Chargement paresseux + mémoïsé. Ne bloque jamais l'exécution du module
// appelant : renvoie une promesse vers le client, ou vers null en cas d'échec.
let _promise = null;
export function getSupabase() {
  if (!isConfigured()) return Promise.resolve(null);
  if (!_promise) {
    _promise = import(CDN)
      .then(({ createClient }) => createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: { persistSession: true, autoRefreshToken: true }
      }))
      .catch((e) => {
        console.warn('[Comprendre le Coran] Supabase indisponible — mode local seul.', e);
        return null;
      });
  }
  return _promise;
}

// Compat rétro : d'anciennes versions en cache peuvent encore importer
// { supabase }. On l'exporte à null pour éviter tout crash de module ;
// le code actuel utilise exclusivement getSupabase().
export const supabase = null;
