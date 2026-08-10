-- ============================================================
-- Comprendre le Coran — Schéma Supabase
-- PHASE F : correctif de sécurité — auto-promotion administrateur
-- ------------------------------------------------------------
-- À exécuter dans Supabase → SQL Editor. Idempotent.
--
-- IMPORTANT : ce fichier doit être exécuté EN DERNIER. Si vous rejouez un
-- jour un autre script, ou si Supabase ré-accorde des privilèges (option
-- « expose new tables »), réexécutez celui-ci ensuite pour restaurer les
-- restrictions de colonnes.
--
-- LE PROBLÈME
-- La policy « profiles_update_own » n'autorise l'écriture que sur SA
-- PROPRE ligne, mais ne dit rien des COLONNES. Un utilisateur connecté
-- pouvait donc appeler l'API directement (en contournant le site) et
-- écrire role = 'admin' sur son profil, puis accéder au panel admin,
-- puisque is_admin() se fonde sur cette colonne.
--
-- LA CORRECTION — deux niveaux indépendants :
--   1. Droits par colonne : « authenticated » ne peut plus écrire que
--      display_name et lang.
--   2. Déclencheur de protection : même si les droits étaient un jour
--      ré-élargis par erreur, toute écriture venant de l'API ne peut
--      plus modifier role, id ni created_at.
--
-- Les modifications faites depuis le SQL Editor restent possibles
-- (auth.uid() y est nul) : c'est ainsi qu'on nomme un administrateur.
-- ============================================================

-- ----- 1. Droits par colonne -----
revoke update, insert on public.profiles from authenticated;
revoke update, insert on public.profiles from anon;

-- Seules ces colonnes restent modifiables par la personne elle-même
-- (prévu pour une future page « modifier mon profil »).
grant update (display_name, lang) on public.profiles to authenticated;
grant insert (id, display_name, lang) on public.profiles to authenticated;

-- Note : le déclencheur handle_new_user() est SECURITY DEFINER ; il
-- continue donc de créer les profils normalement, sans être concerné
-- par ces restrictions.

-- ----- 2. Déclencheur de protection des colonnes sensibles -----
create or replace function public.protect_profile_columns()
returns trigger
language plpgsql
as $$
begin
  -- On se fonde sur le rôle de connexion, pas sur auth.uid() : « anon » et
  -- « authenticated » sont les rôles utilisés par l'API publique. Le SQL
  -- Editor (postgres) et service_role ne sont donc pas bridés, ce qui
  -- permet de nommer un administrateur.
  if current_user in ('authenticated', 'anon') then
    new.role       := old.role;
    new.id         := old.id;
    new.created_at := old.created_at;
  end if;
  return new;
end;
$$;

-- Nommé pour s'exécuter avant profiles_touch (ordre alphabétique).
drop trigger if exists profiles_protect_columns on public.profiles;
create trigger profiles_protect_columns
  before update on public.profiles
  for each row execute function public.protect_profile_columns();

-- ============================================================
-- VÉRIFICATIONS (à lancer séparément, en lecture seule)
-- ------------------------------------------------------------
-- a) Qui est administrateur aujourd'hui ? Utile pour s'assurer que
--    personne ne s'est promu avant l'application de ce correctif :
--
--      select p.id, p.display_name, p.role, u.email
--      from public.profiles p
--      join auth.users u on u.id = p.id
--      where p.role = 'admin';
--
-- b) Retirer un rôle indûment obtenu :
--
--      update public.profiles set role = 'user'
--      where id = '...';
--
-- c) Nommer un administrateur (depuis le SQL Editor uniquement) :
--
--      update public.profiles set role = 'admin'
--      where id = (select id from auth.users where email = 'vous@exemple.com');
-- ============================================================
