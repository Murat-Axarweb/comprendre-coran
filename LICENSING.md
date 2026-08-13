# Licences et provenance

Récapitulatif des droits applicables aux contenus et dépendances du projet.
Ce document décrit ce qui est utilisé et sous quelles conditions ; il ne
constitue pas un avis juridique.

---

## Traductions des versets

| Langue | Traducteur | Statut |
|---|---|---|
| Français | Muhammad Hamidullah (1908-2002) | Sous droits |
| Anglais | Saheeh International | Sous droits |
| Turc | Diyanet İşleri Başkanlığı | Institution publique turque |

**Source** : paquet [quran-json](https://github.com/risan/quran-json),
données issues de [Tanzil.net](https://tanzil.net).

**Conditions Tanzil** — telles qu'énoncées par le projet Tanzil :

- usage **non commercial** uniquement ; tout autre usage suppose l'accord
  du traducteur ou de l'éditeur ;
- **reproduction verbatim** : le texte ne doit pas être modifié ;
- **attribution** du projet Tanzil et **lien** vers tanzil.net requis.

**Application dans le projet** :

- le nom du traducteur figure sous chaque verset ;
- l'attribution et le lien figurent en pied de page de l'accueil ;
- une mention est portée en en-tête des 114 fichiers `sourates/sNNN.js` ;
- les regroupements de versets propres à la traduction turque sont signalés
  **sans modifier le texte** (voir `scripts/mark-translation-groups.mjs`).

> **Point de vigilance** — la contrainte non commerciale est structurante.
> Une monétisation du site, même indirecte (publicité, abonnement, dons
> contre contrepartie), supposerait l'accord des ayants droit. Hamidullah et
> Saheeh International sont sous droits ; la traduction Diyanet relève d'une
> institution publique turque, dont les conditions propres restent à vérifier
> auprès d'elle.

---

## Texte arabe

Rasm uthmani simplifié, issu de la même source (quran-json / Tanzil.net).
Le texte coranique lui-même n'est pas une œuvre protégée ; les conditions
ci-dessus portent sur l'édition et la mise à disposition.

---

## Contenu produit pour le projet

Analyses de versets, notes pédagogiques, thèmes, résumés, glossaire,
fréquences et « déclic fréquence » : rédigés pour ce site.

Translittérations, gloses mot à mot et racines : produites automatiquement
par les scripts du dépôt, à partir du texte et du glossaire.

`data/provenance.js` documente, type par type, l'origine et le niveau de
fiabilité de chaque donnée, information affichée sur le site.

---

## Dépendances

| Dépendance | Licence | Usage |
|---|---|---|
| [quran-json](https://github.com/risan/quran-json) 3.1.2 | CC-BY-SA 4.0 (paquet) | Génération du corpus, hors production |
| [@supabase/supabase-js](https://github.com/supabase/supabase-js) 2.112.3 | MIT | Comptes et synchronisation |
| [Poppins](https://fonts.google.com/specimen/Poppins), [Amiri](https://fonts.google.com/specimen/Amiri), [Inter](https://fonts.google.com/specimen/Inter) | SIL Open Font License 1.1 | Typographie |

Le paquet quran-json déclare CC-BY-4.0 dans son `package.json` et
CC-BY-SA 4.0 dans son fichier de licence. **Cette licence porte sur le
paquet, pas sur les traductions qu'il contient** : celles-ci restent
soumises aux conditions Tanzil ci-dessus.

---

## Code du projet

Aucune licence publique n'est déclarée à ce jour. En l'absence de licence,
le code est protégé par défaut et sa réutilisation par un tiers suppose une
autorisation.

Si le dépôt doit être ouvert, une licence explicite est à choisir — et il
faudra alors distinguer clairement le **code** (librement licenciable) des
**données de traduction** (soumises aux conditions Tanzil, non
sous-licenciables).

---

## Vérifications recommandées avant ouverture large

1. Confirmer les conditions d'usage de la traduction Diyanet auprès de
   l'institution.
2. Trancher la question du modèle économique au regard de la contrainte non
   commerciale.
3. Choisir une licence pour le code si le dépôt devient public.
