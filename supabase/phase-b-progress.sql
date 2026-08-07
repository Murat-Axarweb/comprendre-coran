-- ============================================================
-- Comprendre le Coran — Schéma Supabase
-- PHASE B : synchronisation de la progression
-- ------------------------------------------------------------
-- À exécuter dans Supabase → SQL Editor après schema.sql.
-- Idempotent : réexécutable sans risque.
--
-- Modèle « blob » : une ligne par utilisateur, toute la progression
-- (mots appris, sourates lues, quiz) stockée dans une colonne jsonb.
-- Choix assumé pour la simplicité et une migration triviale depuis
-- localStorage ; les phases suivantes ajouteront des tables dédiées
-- (ex. répétition espacée) là où un grain plus fin est nécessaire.
-- ============================================================

create table if not exists public.user_progress (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_progress enable row level security;

-- Chaque utilisateur ne lit et n'écrit que sa propre ligne.
drop policy if exists "user_progress_select_own" on public.user_progress;
create policy "user_progress_select_own" on public.user_progress
  for select using (auth.uid() = user_id);

drop policy if exists "user_progress_insert_own" on public.user_progress;
create policy "user_progress_insert_own" on public.user_progress
  for insert with check (auth.uid() = user_id);

drop policy if exists "user_progress_update_own" on public.user_progress;
create policy "user_progress_update_own" on public.user_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Entretien de updated_at (réutilise la fonction créée en Phase A).
drop trigger if exists user_progress_touch on public.user_progress;
create trigger user_progress_touch
  before update on public.user_progress
  for each row execute function public.touch_updated_at();
