-- ============================================================
-- MIGRATION 004 — Fonctions d'agrégation pour le panneau d'administration
-- ------------------------------------------------------------
-- Migration ordonnée et idempotente. À exécuter dans l'ordre du
-- dossier : voir supabase/migrations/README.md.
-- Reprise de supabase/phase-e-admin.sql.
-- ============================================================

-- ============================================================
-- Comprendre le Coran — Schéma Supabase
-- PHASE E : panel d'administration (statistiques agrégées)
-- ------------------------------------------------------------
-- À exécuter dans Supabase → SQL Editor après phase-c-srs.sql.
-- Idempotent : réexécutable sans risque.
--
-- PRINCIPE DE SÉCURITÉ
-- On n'ouvre PAS le RLS aux admins : les policies « chacun ne voit que
-- ses lignes » restent intactes. À la place, on expose des fonctions
-- SECURITY DEFINER qui ne renvoient que des AGRÉGATS (des nombres), et
-- qui vérifient elles-mêmes que l'appelant a le rôle 'admin'.
-- Conséquence : même un admin ne peut pas lire la progression nominative
-- d'un utilisateur — seulement des totaux.
-- ============================================================

-- ----- Helper : l'appelant est-il admin ? -----
-- SECURITY DEFINER pour pouvoir lire profiles sans être bloqué par RLS,
-- mais ne renvoie qu'un booléen sur l'appelant lui-même.
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

-- ----- Statistiques globales (agrégats seulement) -----
create or replace function public.admin_stats()
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  result json;
begin
  if not public.is_admin() then
    raise exception 'forbidden: admin role required';
  end if;

  select json_build_object(
    'users_total',        (select count(*) from public.profiles),
    'users_last_7d',      (select count(*) from public.profiles where created_at > now() - interval '7 days'),
    'users_last_30d',     (select count(*) from public.profiles where created_at > now() - interval '30 days'),
    'progress_rows',      (select count(*) from public.user_progress),
    'active_last_7d',     (select count(*) from public.user_progress where updated_at > now() - interval '7 days'),
    'words_learned_total',(select coalesce(sum(jsonb_array_length(coalesce(data->'wordsLearned', '[]'::jsonb))), 0) from public.user_progress),
    'surahs_read_total',  (select coalesce(sum(jsonb_array_length(coalesce(data->'surahsRead', '[]'::jsonb))), 0) from public.user_progress),
    'quiz_sessions_total',(select coalesce(sum(jsonb_array_length(coalesce(data->'quiz'->'history', '[]'::jsonb))), 0) from public.user_progress),
    'srs_cards_total',    (select count(*) from public.srs_cards),
    'srs_users',          (select count(distinct user_id) from public.srs_cards),
    'srs_due_now',        (select count(*) from public.srs_cards where due_at <= now()),
    'lang_breakdown',     (select coalesce(json_object_agg(lang, n), '{}'::json)
                           from (select lang, count(*) as n from public.profiles group by lang) s)
  ) into result;

  return result;
end;
$$;

revoke all on function public.admin_stats() from public;
grant execute on function public.admin_stats() to authenticated;

-- ----- Inscriptions par jour (30 derniers jours) -----
create or replace function public.admin_signups_daily()
returns table (day date, n bigint)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'forbidden: admin role required';
  end if;

  return query
    select d::date as day,
           (select count(*) from public.profiles p where p.created_at::date = d::date) as n
    from generate_series(now() - interval '29 days', now(), interval '1 day') d
    order by day;
end;
$$;

revoke all on function public.admin_signups_daily() from public;
grant execute on function public.admin_signups_daily() to authenticated;

-- ============================================================
-- SE DÉSIGNER COMME ADMIN
-- ------------------------------------------------------------
-- Après avoir créé votre compte sur le site, exécutez cette ligne en
-- remplaçant l'adresse par la vôtre. C'est volontairement manuel :
-- aucun utilisateur ne peut se promouvoir admin depuis le site.
--
--   update public.profiles set role = 'admin'
--   where id = (select id from auth.users where email = 'vous@exemple.com');
-- ============================================================
