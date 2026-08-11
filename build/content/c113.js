// Contenu rédactionnel — sourate 113 (Al-Falaq)
//
// Fichier source destiné à la relecture et à la correction. Après toute
// modification : node build/build_surah.js 113
//
// Le champ « t » (traductions) reste vide : les traductions proviennent de
// sources externes (Hamidullah, Saheeh International, Diyanet) et sont
// préservées automatiquement lors de la régénération.
module.exports = {
  n: 113, couche: 1, type: "mecquoise",
  nom_fr: "L'aube", nom_en: "The Daybreak", nom_tr: "Felak (Şafak)",
  theme: "Chercher refuge auprès d'Allah contre les maux de la création",
  note: "Avec An-Nas (114), forme les 'deux protectrices' (al-muʿawwiḏatayn). Vocabulaire riche en images concrètes : nuit, nœuds, envie. Idéale pour la couche 1-2.",
  prerequis: [112], suivant: [114],
  racines: ["ع-و-ذ","ف-ل-ق","ش-ر-ر","خ-ل-ق","ح-س-د"],
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
      ["الْفَلَقِ", "l'aube / la fissure de lumière", "ف-ل-ق", 2]
    ],
    2: [
      ["مِن", "de / contre / depuis", "particule", 3226],
      ["شَرِّ", "le mal de", "ش-ر-ر", 84],
      ["مَا", "ce que / tout ce que", "particule relative", 2487],
      ["خَلَقَ", "Il a créé", "خ-ل-ق", 261]
    ],
    3: [
      ["وَمِن", "et contre", "particule", 800],
      ["شَرِّ", "le mal de", "ش-ر-ر", 84],
      ["غَاسِقٍ", "l'obscurité profonde / la nuit dense", "غ-س-ق", 2],
      ["إِذَا", "quand / lorsque", "particule temporelle", 408],
      ["وَقَبَ", "elle s'étend / elle pénètre / elle envahit", "و-ق-ب", 1]
    ],
    4: [
      ["النَّفَّاثَاتِ", "celles qui soufflent (avec intensité)", "ن-ف-ث", 1],
      ["فِي", "sur / dans", "particule", 4381],
      ["الْعُقَدِ", "les nœuds", "ع-ق-د", 7]
    ],
    5: [
      ["حَاسِدٍ", "l'envieux / celui qui envie", "ح-س-د", 4],
      ["إِذَا", "quand / au moment où", "particule temporelle", 408],
      ["حَسَدَ", "il envie", "ح-س-د", 4]
    ]
  },

  // Analyses de versets
  analyses: {
    1: "L'ouverture pose le cadre : un 'je' actif qui cherche refuge, auprès d'un Seigneur précis (de l'aube), image de la lumière qui vainc le noir. Tout le reste de la sourate détaille 'contre quoi' ce refuge est demandé.",
    2: "Le verset 2 pose une protection générale avant les protections spécifiques. Structure pédagogique : d'abord le cadre large (tout ce qu'Il a créé), puis zoom sur trois menaces précises (vv. 3, 4, 5).",
    3: "La nuit n'est pas passive — elle 's'étend', elle 'pénètre'. Le Coran personnalise les forces naturelles pour en montrer la puissance. Protection demandée non contre la nuit elle-même mais contre ce qu'elle permet et cache.",
    4: "Ce verset ancre la sourate dans la réalité culturelle de l'Arabie du VIIe siècle tout en posant un principe universel : il existe des influences invisibles et malveillantes. La protection n'est pas dans l'ignorance de ces réalités mais dans le refuge auprès d'Allah.",
    5: "La sourate se clôt sur le danger le plus humain : l'envie. Après les forces cosmiques (nuit), occultes (sorcellerie), elle ramène au quotidien — le voisin, le collègue, le proche qui désire notre perte. Du cosmique à l'intime en 5 versets."
  }
};
