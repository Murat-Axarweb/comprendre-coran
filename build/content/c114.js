// Contenu rédactionnel — sourate 114 (An-Nas)
//
// Fichier source destiné à la relecture et à la correction. Après toute
// modification : node build/build_surah.js 114
//
// Le champ « t » (traductions) reste vide : les traductions proviennent de
// sources externes (Hamidullah, Saheeh International, Diyanet) et sont
// préservées automatiquement lors de la régénération.
module.exports = {
  n: 114, couche: 1, type: "mecquoise",
  nom_fr: "Les hommes", nom_en: "Mankind", nom_tr: "İnsanlar (Nâs)",
  theme: "Refuge contre le tentateur invisible — clôture du Coran",
  note: "Dernière sourate du Coran. Trois attributs divins en 3 versets, puis le danger du chuchoteur. An-nās revient 6 fois — une fois par verset.",
  prerequis: [112,113], suivant: [1],
  racines: ["ع-و-ذ","ر-ب-ب","م-ل-ك","أ-ل-ه","و-س-و-س","ج-ن-ن"],
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
      ["أَعُوذُ", "je cherche refuge", "ع-و-ذ", 17],
      ["بِرَبِّ", "auprès du Seigneur de", "ر-ب-ب", 980],
      ["النَّاسِ", "des hommes / de l'humanité", "أ-ن-س", 241]
    ],
    2: [
      ["مَلِكِ", "Roi / Souverain", "م-ل-ك", 90],
      ["النَّاسِ", "des hommes", "أ-ن-س", 241]
    ],
    3: [
      ["إِلَٰهِ", "Dieu / Divinité", "أ-ل-ه", 147],
      ["النَّاسِ", "des hommes", "أ-ن-س", 241]
    ],
    4: [
      ["مِن شَرِّ", "contre le mal de", "ش-ر-ر", 84],
      ["الْوَسْوَاسِ", "le chuchoteur / le tentateur", "و-س-و-س", 2],
      ["الْخَنَّاسِ", "le furtif / celui qui se retire", "خ-ن-س", 1]
    ],
    5: [
      ["الَّذِي", "celui qui", "pronom relatif", 1464],
      ["يُوَسْوِسُ", "il chuchote / il souffle des doutes", "و-س-و-س", 2],
      ["فِي", "dans", "particule", 4381],
      ["صُدُورِ", "les poitrines / les cœurs", "ص-د-ر", 44],
      ["النَّاسِ", "des hommes", "أ-ن-س", 241]
    ],
    6: [
      ["مِنَ", "parmi / de", "particule", 3226],
      ["الْجِنَّةِ", "les djinns", "ج-ن-ن", 32],
      ["وَالنَّاسِ", "et les hommes", "أ-ن-س", 241]
    ]
  },

  // Analyses de versets
  analyses: {
    1: "Même structure d'ouverture qu'Al-Falaq mais destinataire différent : non plus le Seigneur de l'aube mais le Seigneur DES HOMMES. On passe du cosmique à l'humain.",
    2: "Deux mots, un attribut divin complet. Malik ajoute la dimension du pouvoir souverain à celle du soin (Rabb). Un roi protège ses sujets différemment d'un père qui nourrit ses enfants.",
    3: "La triple invocation (vv.1-3) est un chef-d'œuvre de concision théologique. Six mots, trois dimensions de la relation Allah-humanité. Les versets suivants basculent : de Qui protège à contre quoi.",
    4: "L'ennemi nommé ici n'est pas un objet ni un phénomène mais une entité intelligente avec une stratégie : approcher, chuchoter, reculer. L'ennemi le plus subtil est celui qu'on ne voit pas mais qu'on entend dedans.",
    5: "Le lieu du danger est révélé : la poitrine, siège du cœur et des décisions. Le mal ne vient pas de l'extérieur mais s'infiltre de l'intérieur. La protection contre un ennemi intérieur est aussi intérieure : le dhikr, le souvenir d'Allah.",
    6: "Clôture magistrale du Coran : le tentateur peut être djinn ou humain — peut-être ton voisin, ton collègue. Du cosmique à l'intime. Et avec ce dernier mot — an-nās — le Coran entier se referme sur l'humanité qu'il a accompagnée du premier au dernier verset."
  }
};
