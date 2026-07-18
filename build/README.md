# Chaîne de build

- `extract.js` — télécharge/lit le texte uthmani (quran-json), produit `base.json` (texte simplifié + translittération + tokens par mot) pour les sourates 1 et 78-114.
- `v3.txt`, `v4.txt` — vocabulaire 301-1000 au format pipe 14 champs.
- `expand.js` — parse + contrôle qualité → génère `../data/vocab3.js` et `../data/vocab4.js`.
- `content/cNNN.js` — contenu rédactionnel par sourate (traductions FR/EN/TR, gloses, analyses, résumé).
- `build_surah.js` — fusionne `content/cNNN.js` + `base.json` → `../sourates/sNNN.js`, avec auto-glossaire par squelette consonantique contre les 1000 mots. Usage : `node build_surah.js 78 79 80`.

Note : les chemins dans `expand.js` et `build_surah.js` pointent vers le dépôt ; les exécuter depuis ce dossier.
