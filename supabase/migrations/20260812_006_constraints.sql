-- ============================================================
-- MIGRATION 006 — Contraintes de validité des données
-- ------------------------------------------------------------
-- Migration ordonnée et idempotente. À exécuter dans l'ordre du
-- dossier : voir supabase/migrations/README.md.
-- Reprise de supabase/phase-g-contraintes.sql.
-- ============================================================

-- ============================================================
-- Comprendre le Coran — Schéma Supabase
-- PHASE G : validité des données stockées
-- ------------------------------------------------------------
-- À exécuter dans Supabase → SQL Editor, après phase-f-security.sql.
-- Idempotent.
--
-- LE PROBLÈME
-- La colonne user_progress.data accepte n'importe quel JSON, alors que
-- admin_stats() y applique jsonb_array_length(). Il suffisait donc qu'un
-- seul utilisateur enregistre par exemple {"wordsLearned": "bonjour"}
-- pour que le panel d'administration cesse entièrement de fonctionner
-- (« cannot get array length of a scalar »).
--
-- LA CORRECTION — deux niveaux :
--   1. Des contraintes qui refusent les données mal formées à l'écriture
--      (user_progress) et les valeurs aberrantes (srs_cards).
--   2. admin_stats() rendu tolérant : une ligne inattendue est ignorée
--      au lieu de faire échouer tout le calcul. Indispensable, car des
--      données invalides peuvent déjà être enregistrées.
-- ============================================================

-- ============================================================
-- 0. Réparation préalable des documents mal formés
-- ------------------------------------------------------------
-- Les contraintes ci-dessous seraient refusées si des données déjà
-- enregistrées ne les respectaient pas. On répare donc d'abord, de façon
-- ciblée : seule la clé mal typée est retirée, le reste de la progression
-- est conservé. Le client la réécrira correctement à sa prochaine visite.
-- ============================================================
do $$
declare n integer;
begin
  -- Document qui n'est pas un objet : on repart d'un document vide.
  update public.user_progress set data = '{}'::jsonb where jsonb_typeof(data) <> 'object';
  get diagnostics n = row_count;
  if n > 0 then raise notice 'documents non-objet reinitialises : %', n; end if;

  update public.user_progress set data = data - 'wordsLearned'
   where data ? 'wordsLearned' and jsonb_typeof(data->'wordsLearned') <> 'array';
  get diagnostics n = row_count;
  if n > 0 then raise notice 'cle wordsLearned mal formee retiree : % ligne(s)', n; end if;

  update public.user_progress set data = data - 'surahsRead'
   where data ? 'surahsRead' and jsonb_typeof(data->'surahsRead') <> 'array';
  get diagnostics n = row_count;
  if n > 0 then raise notice 'cle surahsRead mal formee retiree : % ligne(s)', n; end if;

  update public.user_progress set data = data - 'words'
   where data ? 'words' and jsonb_typeof(data->'words') <> 'object';
  get diagnostics n = row_count;
  if n > 0 then raise notice 'cle words mal formee retiree : % ligne(s)', n; end if;

  update public.user_progress set data = data - 'surahs'
   where data ? 'surahs' and jsonb_typeof(data->'surahs') <> 'object';
  get diagnostics n = row_count;
  if n > 0 then raise notice 'cle surahs mal formee retiree : % ligne(s)', n; end if;

  update public.user_progress set data = data - 'quiz'
   where data ? 'quiz' and jsonb_typeof(data->'quiz') <> 'object';
  get diagnostics n = row_count;
  if n > 0 then raise notice 'cle quiz mal formee retiree : % ligne(s)', n; end if;
end $$;

-- ============================================================
-- 1. user_progress : forme du document
-- ============================================================
-- Chaque clé est facultative (la valeur par défaut '{}' reste valide),
-- mais si elle est présente elle doit avoir le bon type.
alter table public.user_progress drop constraint if exists user_progress_forme;
alter table public.user_progress add constraint user_progress_forme check (
  jsonb_typeof(data) = 'object'
  and (not data ? 'wordsLearned' or jsonb_typeof(data->'wordsLearned') = 'array')
  and (not data ? 'surahsRead'   or jsonb_typeof(data->'surahsRead')   = 'array')
  and (not data ? 'words'        or jsonb_typeof(data->'words')        = 'object')
  and (not data ? 'surahs'       or jsonb_typeof(data->'surahs')       = 'object')
  and (not data ? 'quiz'         or jsonb_typeof(data->'quiz')         = 'object')
);

-- Garde-fou de volume : empêche un compte de stocker un document énorme.
-- 512 Ko est très large — une progression complète pèse quelques dizaines de Ko.
alter table public.user_progress drop constraint if exists user_progress_taille;
alter table public.user_progress add constraint user_progress_taille
  check (pg_column_size(data) < 524288);

-- ============================================================
-- 2. srs_cards : valeurs dans des bornes plausibles
-- ============================================================
-- La borne haute de word_id est volontairement large : le vocabulaire
-- compte aujourd'hui 1 000 mots, mais il grandira.
alter table public.srs_cards drop constraint if exists srs_cards_word_id_valide;
alter table public.srs_cards add constraint srs_cards_word_id_valide
  check (word_id between 1 and 100000);

-- 1.3 est le plancher de l'algorithme SM-2 ; au-delà de 5 la valeur n'a
-- plus de sens.
alter table public.srs_cards drop constraint if exists srs_cards_ease_valide;
alter table public.srs_cards add constraint srs_cards_ease_valide
  check (ease >= 1.3 and ease <= 5.0);

alter table public.srs_cards drop constraint if exists srs_cards_compteurs_valides;
alter table public.srs_cards add constraint srs_cards_compteurs_valides
  check (interval_days >= 0 and interval_days <= 36500   -- 100 ans
         and reps >= 0 and lapses >= 0);

-- ============================================================
-- 3. admin_stats() tolérant aux documents inattendus
-- ============================================================
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
    -- jsonb_array_length n'est appliqué que si la valeur est bien un
    -- tableau : une ligne mal formée compte 0 au lieu de tout interrompre.
    'words_learned_total',(select coalesce(sum(case when jsonb_typeof(data->'wordsLearned') = 'array'
                                                   then jsonb_array_length(data->'wordsLearned') else 0 end), 0)
                           from public.user_progress),
    'surahs_read_total',  (select coalesce(sum(case when jsonb_typeof(data->'surahsRead') = 'array'
                                                   then jsonb_array_length(data->'surahsRead') else 0 end), 0)
                           from public.user_progress),
    'quiz_sessions_total',(select coalesce(sum(case when jsonb_typeof(data->'quiz'->'history') = 'array'
                                                   then jsonb_array_length(data->'quiz'->'history') else 0 end), 0)
                           from public.user_progress),
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

-- ============================================================
-- EN CAS D'ERREUR À L'EXÉCUTION
-- ------------------------------------------------------------
-- Si une contrainte est refusée, c'est que des données déjà enregistrées
-- ne la respectent pas. Pour les repérer sans rien supprimer :
--
--   select user_id, jsonb_typeof(data) as type_document,
--          jsonb_typeof(data->'wordsLearned') as type_mots,
--          jsonb_typeof(data->'surahsRead')   as type_sourates
--     from public.user_progress
--    where jsonb_typeof(data) <> 'object'
--       or (data ? 'wordsLearned' and jsonb_typeof(data->'wordsLearned') <> 'array')
--       or (data ? 'surahsRead'   and jsonb_typeof(data->'surahsRead')   <> 'array');
--
-- Puis, pour une ligne identifiée, remettre un document vide (la
-- progression locale de la personne sera renvoyée à sa prochaine visite) :
--
--   update public.user_progress set data = '{}'::jsonb where user_id = '...';
-- ============================================================
