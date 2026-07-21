# Comprendre le Coran — القرآن

Plateforme web statique trilingue (**FR / EN / TR**) pour apprendre l'arabe coranique par le vocabulaire à haute fréquence et l'analyse verset par verset.

**Public visé** : francophones, anglophones et turcophones sachant déjà lire l'alphabet arabe.

## Fonctionnalités

- **Vocabulaire (1000 mots)** — les lemmes les plus fréquents du Coran, avec translittération scientifique, racine trilitère, thème, traductions FR/EN/TR, famille de mots et note de profondeur. Filtres par thème, recherche, tri, vues grille/liste, paliers de couverture du corpus (Top 10 → Top 1000).
- **Sourates (106 disponibles)** — Fatiha + sourates 10 à 114 (de Yūnus jusqu'à la fin) : texte arabe (rasm uthmani simplifié), translittération, traductions pédagogiques originales en 3 langues, analyse mot à mot (complète sur les sourates courtes, partielle par appariement automatique au glossaire sur les plus longues), analyses de versets et résumé pédagogique (mots clés, racines, « déclic fréquence »).
- **Racines** — explorateur des ~600 racines trilitères du glossaire : fréquence cumulée, mots dérivés et familles.
- **Exercices** — QCM de traduction et quiz d'identification de racine (plage de mots réglable, 10 questions), scores conservés localement.
- **Progression** — mots appris, sourates lues et meilleurs scores stockés dans `localStorage` (module `data/progress.js`).
- **Interface** — 3 langues commutables, thème sombre/clair, aucune dépendance externe (vanilla JS, modules ES).

## Structure

```
index.html          Accueil
sourates.html       Liste + lecteur de sourates
vocabulaire.html    Les 1000 mots
racines.html        Explorateur de racines
exercices.html      QCM et quiz de racines
data/
  i18n.js           Dictionnaires FR/EN/TR
  vocab.js …vocab4.js   1000 mots en 4 modules
  progress.js       Progression localStorage
sourates/
  s001.js, s078.js … s114.js
```

## Déploiement

Site 100 % statique : n'importe quel hébergeur convient. Le dépôt est branché sur **Netlify** (déploiement automatique à chaque push sur `main`). En local :

```bash
npx serve .        # ou : python3 -m http.server
```

(Les modules ES exigent un serveur HTTP — ouvrir les fichiers en `file://` ne fonctionne pas.)

## Notes sur les données

- Texte arabe et découpage issus du rasm uthmani (tanzil via quran-json), signes de pause retirés.
- Translittérations générées par script (`build/extract.js`) selon une convention scientifique simplifiée — relecture humaine bienvenue.
- Fréquences des mots 1–300 : compilées depuis les corpus classiques ; **fréquences 301–1000 : estimations à affiner**.
- Traductions des versets : traductions pédagogiques originales « Comprendre le Coran » (non des citations de traducteurs publiés).
- Gloses automatiques (sourates 36–102) : appariement par squelette consonantique contre le glossaire ; ~50 % des mots couverts, marge d'erreur possible sur les homographes — relecture recommandée.

## Feuille de route (Phase 2)

- Migration de la progression vers **Supabase** (comptes, synchronisation).
- Gloses manuelles complètes pour les sourates 36–102.
- Extension du corpus de sourates (les longues : 2–9).
- Audio verset par verset.

## Licence

Contenu pédagogique original du projet. Texte coranique : domaine public.
