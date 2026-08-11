// Contenu rédactionnel — sourate 112 (Al-Ikhlas)
//
// Fichier source destiné à la relecture et à la correction. Après toute
// modification : node build/build_surah.js 112
//
// Le champ « t » (traductions) reste vide : les traductions proviennent de
// sources externes (Hamidullah, Saheeh International, Diyanet) et sont
// préservées automatiquement lors de la régénération.
module.exports = {
  n: 112, couche: 1, type: "mecquoise",
  nom_fr: "La sincérité", nom_en: "The Sincerity", nom_tr: "İhlâs (Samimiyet)",
  theme: "L'unicité absolue d'Allah — le tawhid en 4 versets",
  note: "Sourate idéale pour débuter : courte, dense, vocabulaire fondamental. Équivalente au tiers du Coran selon la tradition.",
  prerequis: [], suivant: [113,114],
  racines: ["أ-ح-د","ص-م-د","و-ل-د","ك-ف-أ"],
  resume: {
    mots: [],
    racines: [],
    declic: ""
  },

  // Traductions : gérées hors de ce fichier (voir en-tête).
  t: [],

  // Gloses mot à mot — [mot arabe, traduction, racine, fréquence dans le Coran]
  // Tous les mots ne sont pas glosés : seuls ceux présents ici le seront.
  mots: {
    1: [
      ["قُلْ", "dis", "ق-و-ل", 332],
      ["هُوَ", "il est / lui", "h-w (pronom)", 657],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["أَحَدٌ", "unique / un absolu", "أ-ح-د", 86]
    ],
    2: [
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["الصَّمَدُ", "l'Imploré absolu / le Permanent", "ص-م-د", 1]
    ],
    3: [
      ["لَمْ", "ne... pas (passé)", "particule de négation", 1317],
      ["يَلِدْ", "il engendre / il génère", "و-ل-د", 23],
      ["وَلَمْ", "et ne... pas", "particule", 400],
      ["يُولَدْ", "il est engendré / il naît", "و-ل-د", 3]
    ],
    4: [
      ["وَلَمْ", "et ne... pas", "particule", 400],
      ["يَكُن", "il y a / il est (subjonctif)", "ك-و-ن", 1360],
      ["لَّهُ", "pour lui / à lui", "pronom", 1243],
      ["كُفُوًا", "égal / équivalent / homologue", "ك-ف-أ", 1],
      ["أَحَدٌ", "quiconque / personne", "أ-ح-د", 86]
    ]
  },

  // Analyses de versets
  analyses: {
    1: "Quatre mots seulement, mais une déclaration totale. La structure huwa + Allah + aḥad est une mise en emphase progressive : on isole, on nomme, on qualifie. Le verset répond à la question 'Qui est ton Dieu ?' avec une économie de mots absolue.",
    2: "Le verset le plus court de la sourate mais peut-être le plus dense. Deux mots, deux noms — aucun verbe. En arabe, l'absence de verbe 'est' crée une vérité intemporelle : pas 'Allah EST As-Samad' (à un moment), mais 'Allah — As-Samad' (toujours, par nature).",
    3: "Ce verset est une réponse directe aux conceptions polythéistes et trinitaires de l'époque. La symétrie parfaite active/passive (yalid / yūlad) est intentionnelle — elle ferme toutes les directions de la filiation. Un seul verset liquide des siècles de théologie comparative.",
    4: "La sourate se referme en boucle parfaite : aḥad au verset 1 (Allah est Unique) répond à aḥad au verset 4 (nul n'est Son égal). Même mot, deux usages, une seule idée : l'unicité absolue et sans comparaison d'Allah."
  }
};
