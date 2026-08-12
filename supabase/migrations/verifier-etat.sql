-- ============================================================
-- VÉRIFICATION DE L'ÉTAT DE LA BASE — Comprendre le Coran
-- ------------------------------------------------------------
-- À exécuter dans Supabase → SQL Editor APRÈS les migrations.
-- Lecture seule : ne modifie rien.
--
-- Répond à la question que le dépôt seul ne permet pas de trancher :
-- les migrations sont-elles réellement appliquées en production ?
-- Chaque ligne du résultat doit afficher « OK ».
-- ============================================================

with controles as (

  -- 1. Tables attendues
  select 'table profiles' as controle,
         (select count(*) from information_schema.tables
           where table_schema='public' and table_name='profiles') = 1 as ok
  union all
  select 'table user_progress',
         (select count(*) from information_schema.tables
           where table_schema='public' and table_name='user_progress') = 1
  union all
  select 'table srs_cards',
         (select count(*) from information_schema.tables
           where table_schema='public' and table_name='srs_cards') = 1

  -- 2. RLS active partout
  union all
  select 'RLS activée sur les 3 tables',
         (select count(*) from pg_tables
           where schemaname='public'
             and tablename in ('profiles','user_progress','srs_cards')
             and rowsecurity) = 3

  -- 3. SÉCURITÉ : le rôle authenticated ne doit PAS pouvoir écrire role
  union all
  select 'profiles.role non modifiable par authenticated',
         not exists (
           select 1 from information_schema.column_privileges
            where table_schema='public' and table_name='profiles'
              and column_name='role' and grantee='authenticated'
              and privilege_type='UPDATE')
  union all
  select 'profiles.display_name modifiable par authenticated',
         exists (
           select 1 from information_schema.column_privileges
            where table_schema='public' and table_name='profiles'
              and column_name='display_name' and grantee='authenticated'
              and privilege_type='UPDATE')

  -- 4. Déclencheur de protection des colonnes sensibles
  union all
  select 'déclencheur profiles_protect_columns',
         exists (select 1 from pg_trigger
                  where tgname='profiles_protect_columns' and not tgisinternal)

  -- 5. Création automatique du profil à l'inscription
  union all
  select 'déclencheur on_auth_user_created',
         exists (select 1 from pg_trigger
                  where tgname='on_auth_user_created' and not tgisinternal)

  -- 6. Fonctions d'administration
  union all
  select 'fonctions is_admin / admin_stats',
         (select count(*) from pg_proc p join pg_namespace n on n.oid=p.pronamespace
           where n.nspname='public' and p.proname in ('is_admin','admin_stats')) = 2

  -- 7. Contraintes de validité
  union all
  select 'contraintes user_progress',
         (select count(*) from pg_constraint
           where conname in ('user_progress_forme','user_progress_taille')) = 2
  union all
  select 'contraintes srs_cards',
         (select count(*) from pg_constraint
           where conname in ('srs_cards_word_id_valide','srs_cards_ease_valide',
                             'srs_cards_compteurs_valides')) = 3
)
select controle,
       case when ok then 'OK' else '*** MANQUANT ***' end as etat
  from controles
 order by ok, controle;

-- ------------------------------------------------------------
-- Contrôle complémentaire : qui est administrateur ?
-- Doit ne renvoyer que les comptes légitimes.
--
--   select p.display_name, u.email
--     from public.profiles p join auth.users u on u.id = p.id
--    where p.role = 'admin';
-- ------------------------------------------------------------
