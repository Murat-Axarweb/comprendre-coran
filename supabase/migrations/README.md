# Migrations Supabase

Séquence ordonnée et idempotente. Un environnement neuf est sécurisé après
l'exécution complète de ce dossier, dans l'ordre des noms de fichiers.

## Déploiement

Dans Supabase → **SQL Editor**, exécuter dans cet ordre :

| Ordre | Fichier | Contenu |
|---|---|---|
| 1 | `20260812_001_profiles.sql` | Table `profiles`, RLS, création automatique du profil, **droits par colonne** |
| 2 | `20260812_002_progress.sql` | Table `user_progress` |
| 3 | `20260812_003_srs.sql` | Table `srs_cards` et index d'échéance |
| 4 | `20260812_004_admin.sql` | Fonctions d'agrégation `is_admin` / `admin_stats` |
| 5 | `20260812_005_security.sql` | Déclencheur de protection de `role`, `id`, `created_at` |
| 6 | `20260812_006_constraints.sql` | Contraintes de validité et `admin_stats` tolérant |

Puis, pour confirmer que tout est en place :

```
supabase/migrations/verifier-etat.sql
```

Ce script est en **lecture seule** et affiche 11 contrôles. Chacun doit
indiquer `OK` ; un contrôle manquant apparaît en tête de liste.

## Sécurité dès la première migration

La migration 001 pose elle-même les droits par colonne, alors qu'ils
n'arrivaient auparavant qu'avec la phase F. Un environnement neuf n'est donc
**jamais vulnérable, même brièvement**, entre deux migrations : vérifié en
testant l'élévation de rôle après chacune des six.

Les fichiers `phase-*.sql` à la racine de `supabase/` sont conservés pour
l'historique. **Sur un nouvel environnement, utiliser ce dossier**, pas eux.

## Nommer un administrateur

Volontairement manuel — aucun compte ne peut se promouvoir depuis le site :

```sql
update public.profiles set role = 'admin'
where id = (select id from auth.users where email = 'vous@exemple.com');
```

Le déclencheur de protection ne bride que les rôles `anon` et
`authenticated` : cette commande fonctionne depuis le SQL Editor.
