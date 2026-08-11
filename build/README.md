# Chaîne de build

Scripts de génération du corpus. **Aucun n'est nécessaire au fonctionnement
du site** : les données sont versionnées dans `sourates/` et `data/`. Ils ne
servent qu'à régénérer ou étendre le corpus.

## Mise en route

```bash
npm install            # installe quran-json (source du texte coranique)
npm run build:base     # génère build/base.json pour les 114 sourates (~1 s)
```

`base.json` n'est pas versionné : il se régénère en une seconde et pèse
7,6 Mo. Il n'est utilisé que par cette chaîne, jamais par le site.

Tous les chemins sont relatifs au dépôt : aucune configuration machine
n'est requise. La variable d'environnement `QURAN_JSON` permet d'indiquer
un autre fichier source si besoin.

## Scripts

| Fichier | Rôle |
|---|---|
| `extract.js` | Lit le texte uthmani et produit `base.json` (texte simplifié, translittération, découpage par mot). `--tout` traite les 114 sourates ; sinon passer des numéros — `node build/extract.js 12 36 55`. Les sourates déjà présentes sont conservées, le fichier est complété et non écrasé. |
| `extract_s2.js` | Même chose pour les sourates longues, en complétant `base.json`. |
| `v3.txt`, `v4.txt` | Vocabulaire 301-1000, format pipe à 14 champs. |
| `expand.js` | Contrôle et convertit ces fichiers en `data/vocab3.js` et `data/vocab4.js`. |
| `content/cNNN.js` | Contenu rédactionnel par sourate : gloses, analyses, résumé. |
| `build_surah.js` | Fusionne `content/cNNN.js` + `base.json` → `sourates/sNNN.js`. Usage : `node build_surah.js 78 79 80`. |

## Traductions des versets — important

Les traductions présentes dans `content/cNNN.js` sont **d'anciennes
traductions non sourcées**, conservées pour l'historique.

Le corpus utilise désormais des traductions publiées de référence
(Hamidullah, Saheeh International, Diyanet), installées par
`scripts/import-translations.mjs`. `build_surah.js` **relit et préserve**
les traductions déjà présentes dans `sourates/sNNN.js` : régénérer une
sourate n'écrase donc pas ces traductions.

Après toute régénération, lancer :

```bash
npm run validate          # corpus, i18n, navbars
npm run build:manifest    # met à jour sourates/manifest.js
npm run translations:groups   # remarque les groupes de versets
```

## Couverture

`base.json` couvre les **114 sourates** (`npm run build:base`) : texte
arabe, translittération et découpage mot à mot sont donc régénérables
intégralement.

`content/` ne couvre en revanche que 36 sourates (1, 2 et 78-111). Ces
fichiers contiennent le travail rédactionnel — gloses manuelles, analyses
de versets, résumés pédagogiques — qui ne peut pas être généré
automatiquement. Pour les 78 autres sourates, ce contenu existe dans
`sourates/` mais n'a pas de fichier source correspondant : `build_surah.js`
ne peut donc pas les reconstruire à l'identique.

Concrètement, cela n'empêche rien aujourd'hui — les données sont
versionnées et complètes. C'est une limite à connaître si l'on veut un
jour retravailler le contenu rédactionnel d'une sourate hors de cette
plage : il faudra d'abord créer son `content/cNNN.js`.
