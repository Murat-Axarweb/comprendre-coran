-- ============================================================
-- MIGRATION 001 — Profils, RLS et création automatique du profil
-- ------------------------------------------------------------
-- Migration ordonnée et idempotente. À exécuter dans l'ordre du
-- dossier : voir supabase/migrations/README.md.
-- Reprise de supabase/schema.sql.
-- ============================================================

-- ============================================================
-- Comprendre le Coran — Schéma Supabase (Phase 2)
-- PHASE A : comptes utilisateurs
-- ------------------------------------------------------------
-- À exécuter dans Supabase → SQL Editor → New query → Run.
-- Idempotent : réexécutable sans risque.
-- ============================================================

-- ----- Table profils (1:1 avec auth.users) -----
create table if not exists public.profiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  lang         text not null default 'fr' check (lang in ('fr','en','tr')),
  role         text not null default 'user' check (role in ('user','admin')),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Chaque utilisateur ne voit et ne modifie que son propre profil.
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

-- SÉCURITÉ : cette policy autorise l'écriture sur SA PROPRE ligne, mais ne
-- dit rien des COLONNES. Les droits par colonne et le déclencheur de la
-- migration 005 sont donc indispensables. Ils sont posés ici même, de sorte
-- qu'un environnement neuf ne soit jamais vulnérable, même brièvement,
-- entre l'exécution de cette migration et celle de la 005.
drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

revoke update, insert on public.profiles from authenticated;
revoke update, insert on public.profiles from anon;
grant update (display_name, lang) on public.profiles to authenticated;
grant insert (id, display_name, lang) on public.profiles to authenticated;

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);

-- ----- Création automatique du profil à l'inscription -----
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, lang)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'lang', 'fr')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ----- Entretien updated_at -----
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch on public.profiles;
create trigger profiles_touch
  before update on public.profiles
  for each row execute function public.touch_updated_at();
