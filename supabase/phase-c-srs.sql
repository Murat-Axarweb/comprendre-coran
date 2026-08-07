-- ============================================================
-- Comprendre le Coran — Schéma Supabase
-- PHASE C : répétition espacée (SM-2)
-- ------------------------------------------------------------
-- À exécuter dans Supabase → SQL Editor après phase-b-progress.sql.
-- Idempotent : réexécutable sans risque.
--
-- Table normalisée : une ligne par (utilisateur, mot). Contrairement
-- au blob de la Phase B, on interroge ici « quelles cartes sont dues »
-- (where due_at <= now), d'où le besoin d'un vrai grain par carte.
-- ============================================================

create table if not exists public.srs_cards (
  user_id          uuid not null references auth.users(id) on delete cascade,
  word_id          integer not null,
  ease             real not null default 2.5,      -- facteur de facilité SM-2
  interval_days    integer not null default 0,     -- intervalle courant (jours)
  reps             integer not null default 0,     -- répétitions réussies d'affilée
  lapses           integer not null default 0,     -- nombre d'oublis
  due_at           timestamptz not null default now(),
  last_reviewed_at timestamptz,
  created_at       timestamptz not null default now(),
  primary key (user_id, word_id)
);

alter table public.srs_cards enable row level security;

-- Requête d'échéance rapide.
create index if not exists srs_cards_due_idx on public.srs_cards (user_id, due_at);

-- Chaque utilisateur ne touche que ses propres cartes.
drop policy if exists "srs_cards_select_own" on public.srs_cards;
create policy "srs_cards_select_own" on public.srs_cards
  for select using (auth.uid() = user_id);

drop policy if exists "srs_cards_insert_own" on public.srs_cards;
create policy "srs_cards_insert_own" on public.srs_cards
  for insert with check (auth.uid() = user_id);

drop policy if exists "srs_cards_update_own" on public.srs_cards;
create policy "srs_cards_update_own" on public.srs_cards
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "srs_cards_delete_own" on public.srs_cards;
create policy "srs_cards_delete_own" on public.srs_cards
  for delete using (auth.uid() = user_id);
