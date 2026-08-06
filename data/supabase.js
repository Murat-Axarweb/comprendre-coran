// ============================================================
// Client Supabase partagé — Comprendre le Coran (Phase 2)
// ------------------------------------------------------------
// Mise en route :
//   1. Créez un projet sur https://supabase.com
//   2. Project Settings → API : copiez « Project URL » et la clé « anon public »
//   3. Collez-les dans les deux constantes ci-dessous
//   4. SQL Editor : exécutez supabase/schema.sql
//
// Note sécurité : la clé « anon public » est conçue pour être exposée côté
// navigateur. La protection des données repose sur les policies RLS (Row Level
// Security) définies dans schema.sql, jamais sur le secret de cette clé.
// ============================================================
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://dktyvexclitlooatwawu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrdHl2ZXhjbGl0bG9vYXR3YXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMzIzNjksImV4cCI6MjEwMTYwODM2OX0.nRMaedgWUzJyw04Jvjq2i-h2l5N6i3cv6nCPiIq5_TQ';

// Vrai une fois les deux constantes renseignées.
export function isConfigured() {
  return !SUPABASE_URL.includes('VOTRE-') && !SUPABASE_ANON_KEY.includes('VOTRE_');
}

// null tant que non configuré : chaque appelant doit vérifier avant usage.
export const supabase = isConfigured()
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true }
    })
  : null;
