// Contenu rédactionnel — sourate 15 (Al-Hijr)
//
// Fichier source destiné à la relecture et à la correction. Après toute
// modification : node build/build_surah.js 15
//
// Le champ « t » (traductions) reste vide : les traductions proviennent de
// sources externes (Hamidullah, Saheeh International, Diyanet) et sont
// préservées automatiquement lors de la régénération.
module.exports = {
  n: 15, couche: 3, type: "mecquoise",
  nom_fr: "Al-Ḥijr", nom_en: "The Rocky Tract", nom_tr: "Hicr",
  theme: "La préservation du Rappel par Dieu, les signes cosmiques, le dialogue Adam-Iblīs, l'hospitalité d'Abraham, le sort de Loth et des gens d'al-Ḥijr, et le réconfort du Prophète face à la moquerie",
  note: "Sourate mecquoise nommée d'après al-Ḥijr, la contrée rocheuse des Thamūd. Elle contient la promesse capitale : « C'est Nous qui avons fait descendre le Rappel, et c'est Nous qui en sommes les gardiens » — garantie de la préservation du Coran. Elle déroule la création d'Adam, la révolte d'Iblīs, les hôtes d'Abraham, et se clôt sur une consolation : « Nous t'avons donné les sept versets répétés. »",
  prerequis: [1], suivant: [16],
  racines: ["ذ-ك-ر","ح-ف-ظ","س-ج-د","ط-ي-ن","س-ب-ع"],
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
      ["تِلْكَ", "celle-là", "—", 43],
      ["مُّبِينٍ", "clair", "ب-ي-ن", 45]
    ],
    2: [
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["كَفَرُواْ", "ils ont mécru", "ك-ف-ر", 189],
      ["لَوْ", "si", "particule conditionnelle", 77],
      ["كَانُواْ", "ils étaient", "ك-و-ن", 229]
    ],
    3: [
      ["فَسَوْفَ", "particule du futur (bientôt", "—", 42],
      ["يَعْلَمُونَ", "ils savent", "ع-ل-م", 81]
    ],
    4: [
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["مِن", "de", "particule", 3226],
      ["قَرْيَةٍ", "cité", "ق-ر-ي", 56],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["وَلَهَا", "à elle", "لِ + هَا", 51],
      ["كِتَابٌ", "livre", "ك-ت-ب", 261]
    ],
    5: [
      ["مَّا", "ce que", "particule", 1010],
      ["مِنْ", "de", "particule", 3226],
      ["أُمَّةٍ", "communauté", "أ-م-م", 64],
      ["وَمَا", "et ce que", "و + مَا", 646]
    ],
    6: [
      ["وَقَالُواْ", "et ils dirent", "ق-و-ل", 61],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["عَلَيْهِ", "sur lui", "عَلَى + هُ", 145],
      ["الذِّكْرُ", "souvenir", "ذ-ك-ر", 256],
      ["إِنَّكَ", "certes tu", "إِنَّ + كَ", 49],
      ["لَمَجْنُونٌ", "fou", "ج-ن-ن", 5]
    ],
    7: [
      ["لَّوْمَا", "et ce que", "و + مَا", 646],
      ["إِن", "certes", "particule d’insistance", 609],
      ["مِنَ", "de", "particule", 3226]
    ],
    8: [
      ["مَا", "ce que", "particule", 1010],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["بِالْحَقِّ", "avec vérité", "ح-ق-ق", 74],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["كَانُواْ", "ils étaient", "ك-و-ن", 229],
      ["إِذًا", "quand", "particule temporelle", 195]
    ],
    9: [
      ["إِنَّا", "certes Nous", "إِنَّ + نَا", 156],
      ["نَحْنُ", "nous", "pronom personnel", 65],
      ["الذِّكْرَ", "souvenir", "ذ-ك-ر", 256],
      ["وَإِنَّا", "certes Nous", "إِنَّ + نَا", 156],
      ["لَهُ", "à lui", "لِ + هُ", 275]
    ],
    10: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["أَرْسَلْنَا", "Nous avons envoyé", "ر-س-ل", 48],
      ["مِن", "de", "particule", 3226],
      ["فِي", "dans", "particule", 4381]
    ],
    11: [
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["مِّن", "de", "particule", 3226],
      ["رَّسُولٍ", "messager", "ر-س-ل", 332],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["كَانُواْ", "ils étaient", "ك-و-ن", 229],
      ["بِهِ", "par lui", "بِ + هُ", 327]
    ],
    12: [
      ["كَذَٰلِكَ", "ainsi", "كَ + ذَلِكَ", 83],
      ["فِي", "dans", "particule", 4381]
    ],
    13: [
      ["لَا", "non", "particule", 812],
      ["يُؤْمِنُونَ", "ils croient", "أ-م-ن", 86],
      ["بِهِ", "par lui", "بِ + هُ", 327],
      ["وَقَدْ", "et certes", "و + قَدْ", 43],
      ["سُنَّةُ", "année", "س-ن-و", 19]
    ],
    14: [
      ["وَلَوْ", "et si", "و + لَوْ", 108],
      ["عَلَيْهِم", "sur eux", "عَلَى + هُمْ", 183],
      ["مِّنَ", "de", "particule", 3226],
      ["السَّمَاءِ", "du ciel", "س-م-و", 81],
      ["فِيهِ", "en lui", "فِي + هُ", 127]
    ],
    15: [
      ["لَقَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["إِنَّمَا", "seulement", "particule de restriction", 113],
      ["بَلْ", "plutôt", "particule de correction", 113],
      ["نَحْنُ", "nous", "pronom personnel", 65],
      ["قَوْمٌ", "mon peuple", "ق-و-م", 58]
    ],
    16: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["فِي", "dans", "particule", 4381],
      ["السَّمَاءِ", "du ciel", "س-م-و", 81]
    ],
    17: [
      ["مِن", "de", "particule", 3226],
      ["كُلِّ", "de tout", "ك-ل-ل", 123]
    ],
    18: [
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["مَنِ", "de", "particule", 3226],
      ["السَّمْعَ", "entendre", "س-م-ع", 47],
      ["مُّبِينٌ", "clair", "ب-ي-ن", 45]
    ],
    19: [
      ["وَالْأَرْضَ", "et la terre", "و + أ-ر-ض", 108],
      ["فِيهَا", "en elle", "فِي + هَا", 241],
      ["فِيهَا", "en elle", "فِي + هَا", 241],
      ["مِن", "de", "particule", 3226],
      ["كُلِّ", "de tout", "ك-ل-ل", 123],
      ["شَيْءٍ", "une chose", "ش-ي-ء", 179]
    ],
    20: [
      ["لَكُمْ", "à vous", "لِ + كُمْ", 294],
      ["فِيهَا", "en elle", "فِي + هَا", 241],
      ["وَمَن", "et celui qui", "و + مَنْ", 234],
      ["لَهُ", "à lui", "لِ + هُ", 275]
    ],
    21: [
      ["وَإِن", "et si", "و + إِنْ", 170],
      ["مِّن", "de", "particule", 3226],
      ["شَيْءٍ", "une chose", "ش-ي-ء", 179],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["إِلَّا", "sauf", "particule d’exception", 662]
    ],
    22: [
      ["وَأَرْسَلْنَا", "Nous avons envoyé", "ر-س-ل", 48],
      ["الرِّيَٰحَ", "vent", "ر-و-ح", 29],
      ["مِنَ", "de", "particule", 3226],
      ["السَّمَاءِ", "du ciel", "س-م-و", 81],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["أَنتُمْ", "vous", "pronom personnel", 78],
      ["لَهُ", "à lui", "لِ + هُ", 275]
    ],
    23: [
      ["وَإِنَّا", "certes Nous", "إِنَّ + نَا", 156],
      ["لَنَحْنُ", "nous", "pronom personnel", 65],
      ["وَنَحْنُ", "nous", "pronom personnel", 65]
    ],
    24: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["مِنكُمْ", "de vous", "مِن + كُمْ", 105],
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124]
    ],
    25: [
      ["وَإِنَّ", "et si", "و + إِنْ", 170],
      ["رَبَّكَ", "ton Seigneur", "ر-ب-ب", 116],
      ["هُوَ", "il", "pronom personnel", 265],
      ["إِنَّهُ", "certes il", "إِنَّ + هُ", 147],
      ["عَلِيمٌ", "Savant", "ع-ل-م", 100]
    ],
    26: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["مِن", "de", "particule", 3226],
      ["مِّنْ", "de", "particule", 3226]
    ],
    27: [
      ["مِن", "de", "particule", 3226],
      ["قَبْلُ", "avant", "ق-ب-ل", 70],
      ["مِن", "de", "particule", 3226],
      ["نَّارِ", "feu", "ن-و-ر", 145]
    ],
    28: [
      ["وَإِذْ", "et quand", "و + إِذْ", 69],
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["رَبُّكَ", "ton Seigneur", "ر-ب-ب", 116],
      ["إِنِّي", "certes moi", "إِنَّ + ي", 131],
      ["خَٰلِقٌ", "il a créé", "خ-ل-ق", 261],
      ["مِّن", "de", "particule", 3226],
      ["مِّنْ", "de", "particule", 3226]
    ],
    29: [
      ["فَإِذَا", "alors quand", "ف + إِذَا", 86],
      ["فِيهِ", "en lui", "فِي + هُ", 127],
      ["مِن", "de", "particule", 3226],
      ["لَهُ", "à lui", "لِ + هُ", 275]
    ],
    30: [
      ["فَسَجَدَ", "se prosterner", "س-ج-د", 8],
      ["كُلُّهُمْ", "à eux", "لِ + هُمْ", 325]
    ],
    31: [
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["إِبْلِيسَ", "Iblis (le diable)", "—", 11],
      ["أَبَىٰ", "refuser", "أ-ب-ي", 13],
      ["أَن", "certes", "particule d’insistance", 609],
      ["مَعَ", "avec", "préposition", 58]
    ],
    32: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["مَا", "ce que", "particule", 1010],
      ["لَكَ", "à toi", "لِ + كَ", 69],
      ["أَلَّا", "sauf", "particule d’exception", 662],
      ["مَعَ", "avec", "préposition", 58]
    ],
    33: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["لَمْ", "ne... pas", "particule de négation", 163],
      ["لِبَشَرٍ", "annoncer (une bonne nouvelle)", "ب-ش-ر", 44],
      ["مِن", "de", "particule", 3226],
      ["مِّنْ", "de", "particule", 3226]
    ],
    34: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["فَاخْرُجْ", "faire sortir", "خ-ر-ج", 99],
      ["مِنْهَا", "d’elle", "مِن + هَا", 86],
      ["فَإِنَّكَ", "certes tu", "إِنَّ + كَ", 49]
    ],
    35: [
      ["وَإِنَّ", "et si", "و + إِنْ", 170],
      ["عَلَيْكَ", "sur toi", "عَلَى + كَ", 56],
      ["إِلَىٰ", "vers", "particule", 742],
      ["يَوْمِ", "jour", "ي-و-م", 405],
      ["الدِّينِ", "religion", "د-ي-ن", 94]
    ],
    36: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["رَبِّ", "Seigneur", "ر-ب-ب", 980],
      ["إِلَىٰ", "vers", "particule", 742],
      ["يَوْمِ", "jour", "ي-و-م", 405]
    ],
    37: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["فَإِنَّكَ", "certes tu", "إِنَّ + كَ", 49],
      ["مِنَ", "de", "particule", 3226]
    ],
    38: [
      ["إِلَىٰ", "vers", "particule", 742],
      ["يَوْمِ", "jour", "ي-و-م", 405]
    ],
    39: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["رَبِّ", "Seigneur", "ر-ب-ب", 980],
      ["بِمَا", "par ce que", "بِ + مَا", 296],
      ["لَهُمْ", "à eux", "لِ + هُمْ", 325],
      ["فِي", "dans", "particule", 4381],
      ["الْأَرْضِ", "la terre", "أ-ر-ض", 219]
    ],
    40: [
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["مِنْهُمُ", "d’eux", "مِن + هُمْ", 145]
    ],
    41: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["هَٰذَا", "ceci", "pronom démonstratif", 190],
      ["عَلَيَّ", "Très-Haut", "ع-ل-و", 11],
      ["مُسْتَقِيمٌ", "droit", "ق-و-م", 39]
    ],
    42: [
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["عِبَادِي", "Mes serviteurs", "ع-ب-د", 40],
      ["لَيْسَ", "n’est pas", "verbe de négation", 47],
      ["لَكَ", "à toi", "لِ + كَ", 69],
      ["عَلَيْهِمْ", "sur eux", "عَلَى + هُمْ", 183],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["مَنِ", "de", "particule", 3226],
      ["مِنَ", "de", "particule", 3226]
    ],
    43: [
      ["وَإِنَّ", "et si", "و + إِنْ", 170],
      ["جَهَنَّمَ", "Jahannam", "nom propre", 54]
    ],
    44: [
      ["لَهَا", "à elle", "لِ + هَا", 51],
      ["لِّكُلِّ", "de tout", "ك-ل-ل", 123],
      ["بَابٍ", "porte", "ب-و-ب", 19],
      ["مِّنْهُمْ", "d’eux", "مِن + هُمْ", 145]
    ],
    45: [
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["الْمُتَّقِينَ", "les pieux", "و-ق-ي", 44],
      ["فِي", "dans", "particule", 4381]
    ],
    46: [
      ["بِسَلَٰمٍ", "paix", "س-ل-م", 6]
    ],
    47: [
      ["مَا", "ce que", "particule", 1010],
      ["فِي", "dans", "particule", 4381],
      ["مِّنْ", "de", "particule", 3226],
      ["عَلَىٰ", "sur", "particule", 1430],
      ["سُرُرٍ", "lits", "س-ر-ر", 5]
    ],
    48: [
      ["لَا", "non", "particule", 812],
      ["فِيهَا", "en elle", "فِي + هَا", 241],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["هُم", "eux", "pronom personnel", 180],
      ["مِّنْهَا", "d’elle", "مِن + هَا", 86]
    ],
    49: [
      ["عِبَادِي", "Mes serviteurs", "ع-ب-د", 40],
      ["أَنِّي", "certes moi", "إِنَّ + ي", 131],
      ["أَنَا", "certes Nous", "إِنَّ + نَا", 156],
      ["الْغَفُورُ", "Très Pardonneur", "غ-ف-ر", 51],
      ["الرَّحِيمُ", "Le Très Miséricordieux", "ر-ح-م", 118]
    ],
    50: [
      ["وَأَنَّ", "et si", "و + إِنْ", 170],
      ["هُوَ", "il", "pronom personnel", 265],
      ["الْعَذَابُ", "châtiment", "ع-ذ-ب", 373]
    ],
    51: [
      ["عَن", "de", "préposition", 153]
    ],
    52: [
      ["إِذْ", "quand", "particule temporelle", 156],
      ["عَلَيْهِ", "sur lui", "عَلَى + هُ", 145],
      ["فَقَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["إِنَّا", "certes Nous", "إِنَّ + نَا", 156],
      ["مِنكُمْ", "de vous", "مِن + كُمْ", 105]
    ],
    53: [
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["لَا", "non", "particule", 812],
      ["إِنَّا", "certes Nous", "إِنَّ + نَا", 156],
      ["عَلِيمٍ", "Savant", "ع-ل-م", 100]
    ],
    54: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["عَلَىٰ", "sur", "particule", 1430],
      ["أَن", "certes", "particule d’insistance", 609]
    ],
    55: [
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["بِالْحَقِّ", "avec vérité", "ح-ق-ق", 74],
      ["فَلَا", "alors ne... pas", "ف + لَا", 156],
      ["مِّنَ", "de", "particule", 3226]
    ],
    56: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["وَمَن", "et celui qui", "و + مَنْ", 234],
      ["مِن", "de", "particule", 3226],
      ["رَّحْمَةِ", "miséricorde", "ر-ح-م", 339],
      ["رَبِّهِ", "son Seigneur", "ر-ب-ب", 44],
      ["إِلَّا", "sauf", "particule d’exception", 662]
    ],
    57: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["فَمَا", "alors quoi", "ف + مَا", 86],
      ["أَيُّهَا", "ô vous", "particule d’appel", 150]
    ],
    58: [
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["إِنَّا", "certes Nous", "إِنَّ + نَا", 156],
      ["أُرْسِلْنَا", "Nous avons envoyé", "ر-س-ل", 48],
      ["إِلَىٰ", "vers", "particule", 742],
      ["قَوْمٍ", "mon peuple", "ق-و-م", 58]
    ],
    59: [
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["لُوطٍ", "Loth", "—", 27],
      ["إِنَّا", "certes Nous", "إِنَّ + نَا", 156]
    ],
    60: [
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["لَمِنَ", "pour celui qui", "لِ + مَنْ", 55]
    ],
    61: [
      ["فَلَمَّا", "puis lorsque", "ف + لَمَّا", 101],
      ["جَاءَ", "il est venu", "ج-ي-ء", 57],
      ["لُوطٍ", "Loth", "—", 27]
    ],
    62: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["قَوْمٌ", "mon peuple", "ق-و-م", 58]
    ],
    63: [
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["بَلْ", "plutôt", "particule de correction", 113],
      ["بِمَا", "par ce que", "بِ + مَا", 296],
      ["كَانُواْ", "ils étaient", "ك-و-ن", 229],
      ["فِيهِ", "en lui", "فِي + هُ", 127]
    ],
    64: [
      ["بِالْحَقِّ", "avec vérité", "ح-ق-ق", 74],
      ["وَإِنَّا", "certes Nous", "إِنَّ + نَا", 156]
    ],
    65: [
      ["بِقِطْعٍ", "couper", "ق-ط-ع", 36],
      ["مِّنَ", "de", "particule", 3226],
      ["وَاتَّبِعْ", "suivre", "ت-ب-ع", 78],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["مِنكُمْ", "de vous", "مِن + كُمْ", 105],
      ["أَحَدٌ", "un", "أ-ح-د", 85],
      ["حَيْثُ", "là où", "—", 31]
    ],
    66: [
      ["إِلَيْهِ", "vers lui", "إِلَى + هُ", 76],
      ["ذَٰلِكَ", "cela", "pronom démonstratif", 280],
      ["الْأَمْرَ", "ordre", "أ-م-ر", 166],
      ["أَنَّ", "certes", "particule d’insistance", 609],
      ["هَـٰؤُلَاءِ", "ceux-ci", "—", 46]
    ],
    67: [
      ["وَجَاءَ", "il est venu", "ج-ي-ء", 57],
      ["الْمَدِينَةِ", "ville", "م-د-ن", 17]
    ],
    68: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["هَـٰؤُلَاءِ", "ceux-ci", "—", 46],
      ["فَلَا", "alors ne... pas", "ف + لَا", 156]
    ],
    69: [
      ["اللَّهَ", "Allah", "أ-ل-ه", 2699],
      ["وَلَا", "et ne... pas", "و + لَا", 658]
    ],
    70: [
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["عَنِ", "de", "préposition", 153]
    ],
    71: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["هَـٰؤُلَاءِ", "ceux-ci", "—", 46],
      ["إِن", "certes", "particule d’insistance", 609],
      ["كُنتُمْ", "vous étiez", "ك-و-ن", 188]
    ],
    72: [
      ["إِنَّهُمْ", "certes ils", "إِنَّ + هُمْ", 62],
      ["لَفِي", "dans", "particule", 4381]
    ],
    73: [
      ["الصَّيْحَةُ", "cri (fulgurant)", "ص-ي-ح", 6]
    ],
    74: [
      ["عَٰلِيَهَا", "sur elle", "عَلَى + هَا", 51],
      ["عَلَيْهِمْ", "sur eux", "عَلَى + هُمْ", 183],
      ["حِجَارَةً", "pierres", "ح-ج-ر", 11],
      ["مِّن", "de", "particule", 3226]
    ],
    75: [
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["فِي", "dans", "particule", 4381],
      ["ذَٰلِكَ", "cela", "pronom démonstratif", 280]
    ],
    77: [
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["فِي", "dans", "particule", 4381],
      ["ذَٰلِكَ", "cela", "pronom démonstratif", 280],
      ["لَأيَةً", "verset", "أ-ي-ي", 382]
    ],
    78: [
      ["وَإِن", "et si", "و + إِنْ", 170],
      ["كَانَ", "il était", "ك-و-ن", 1360]
    ],
    79: [
      ["مِنْهُمْ", "d’eux", "مِن + هُمْ", 145],
      ["مُّبِينٍ", "clair", "ب-ي-ن", 45]
    ],
    80: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["كَذَّبَ", "traiter de mensonge", "ك-ذ-ب", 80]
    ],
    81: [
      ["فَكَانُواْ", "ils étaient", "ك-و-ن", 229]
    ],
    82: [
      ["وَكَانُواْ", "ils étaient", "ك-و-ن", 229],
      ["مِنَ", "de", "particule", 3226]
    ],
    83: [
      ["الصَّيْحَةُ", "cri (fulgurant)", "ص-ي-ح", 6]
    ],
    84: [
      ["فَمَا", "alors quoi", "ف + مَا", 86],
      ["عَنْهُم", "d’eux", "عَنْ + هُمْ", 67],
      ["مَّا", "ce que", "particule", 1010],
      ["كَانُواْ", "ils étaient", "ك-و-ن", 229]
    ],
    85: [
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["وَالْأَرْضَ", "et la terre", "و + أ-ر-ض", 108],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["بِالْحَقِّ", "avec vérité", "ح-ق-ق", 74],
      ["وَإِنَّ", "et si", "و + إِنْ", 170],
      ["السَّاعَةَ", "Heure (du Jugement)", "س-و-ع", 48],
      ["الصَّفْحَ", "passer outre", "ص-ف-ح", 5],
      ["الْجَمِيلَ", "beau (moralement)", "ج-م-ل", 5]
    ],
    86: [
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["رَبَّكَ", "ton Seigneur", "ر-ب-ب", 116],
      ["هُوَ", "il", "pronom personnel", 265],
      ["الْخَلَّـٰقُ", "il a créé", "خ-ل-ق", 261],
      ["الْعَلِيمُ", "Savant", "ع-ل-م", 100]
    ],
    87: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["مِّنَ", "de", "particule", 3226],
      ["الْعَظِيمَ", "immense", "ع-ظ-م", 107]
    ],
    88: [
      ["لَا", "non", "particule", 812],
      ["إِلَىٰ", "vers", "particule", 742],
      ["مَا", "ce que", "particule", 1010],
      ["بِهِ", "par lui", "بِ + هُ", 327],
      ["مِّنْهُمْ", "d’eux", "مِن + هُمْ", 145],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["عَلَيْهِمْ", "sur eux", "عَلَى + هُمْ", 183]
    ],
    89: [
      ["وَقُلْ", "dis !", "ق-و-ل", 263],
      ["إِنِّي", "certes moi", "إِنَّ + ي", 131],
      ["أَنَا", "certes Nous", "إِنَّ + نَا", 156],
      ["النَّذِيرُ", "avertisseur", "ن-ذ-ر", 44],
      ["الْمُبِينُ", "clair", "ب-ي-ن", 45]
    ],
    90: [
      ["كَمَا", "comme", "كَ + مَا", 59],
      ["عَلَى", "sur", "particule", 1430]
    ],
    91: [
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810]
    ],
    93: [
      ["عَمَّا", "au sujet de ce que", "عَنْ + مَا", 47],
      ["كَانُواْ", "ils étaient", "ك-و-ن", 229],
      ["يَعْمَلُونَ", "ils font", "ع-م-ل", 56]
    ],
    94: [
      ["بِمَا", "par ce que", "بِ + مَا", 296],
      ["عَنِ", "de", "préposition", 153],
      ["الْمُشْرِكِينَ", "les associateurs", "ش-ر-ك", 49]
    ],
    95: [
      ["إِنَّا", "certes Nous", "إِنَّ + نَا", 156]
    ],
    96: [
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["مَعَ", "avec", "préposition", 58],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["فَسَوْفَ", "particule du futur (bientôt", "—", 42],
      ["يَعْلَمُونَ", "ils savent", "ع-ل-م", 81]
    ],
    97: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["أَنَّكَ", "certes tu", "إِنَّ + كَ", 49],
      ["بِمَا", "par ce que", "بِ + مَا", 296],
      ["يَقُولُونَ", "ils disent", "ق-و-ل", 51]
    ],
    98: [
      ["فَسَبِّحْ", "glorifier", "س-ب-ح", 47],
      ["بِحَمْدِ", "louange", "ح-م-د", 68],
      ["رَبِّكَ", "ton Seigneur", "ر-ب-ب", 116],
      ["مِّنَ", "de", "particule", 3226]
    ],
    99: [
      ["رَبَّكَ", "ton Seigneur", "ر-ب-ب", 116],
      ["حَتَّىٰ", "jusqu’à", "particule de limite", 142],
      ["الْيَقِينُ", "certitude", "ي-ق-ن", 8]
    ]
  },

  // Analyses de versets
  analyses: {
    9: "Innā naḥnu nazzalnā dh-dhikra wa-innā lahu la-ḥāfiẓūn : « c'est Nous qui avons fait descendre le Rappel, et c'est Nous qui en sommes les gardiens ». L'une des promesses les plus lourdes de conséquences. Le dhikr (le Rappel = le Coran) est protégé par Dieu Lui-même contre toute altération. Le pronom emphatique (naḥnu... innā) souligne : ni les hommes, ni le temps, ni les ennemis ne peuvent corrompre le texte. Historiquement, cette garde s'est incarnée dans la mémorisation intégrale par des générations de ḥuffāẓ et la transmission écrite rigoureuse. Le verset explique la singulière stabilité du texte coranique à travers les siècles.",
    29: "Fa-idhā sawwaytuhu wa-nafakhtu fīhi min rūḥī : « quand Je l'aurai harmonieusement formé et lui aurai insufflé de Mon Esprit ». La création d'Adam en deux temps : le façonnement de l'argile (le corps), puis l'insufflation du rūḥ (l'esprit). Cette part divine insufflée fait la dignité de l'homme et fonde l'ordre de prosternation aux anges. Iblīs, en refusant, ne voit que l'argile et manque l'Esprit — son erreur est de juger sur la matière, pas sur ce que Dieu y a déposé. Le récit oppose deux regards : celui qui ne voit que la boue (Iblīs) et celui qui reconnaît le souffle divin.",
    39: "Rabbi bimā aghwaytanī la-uzayyinanna lahum fī l-arḍi : « parce que Tu m'as égaré, je leur enjoliverai le mal sur terre ». La stratégie d'Iblīs est nommée : le tazyīn, l'embellissement du mal. Il ne force personne ; il rend le péché séduisant, désirable, paré d'attraits. Mais Dieu lui oppose une limite absolue (v.42) : « sur Mes serviteurs élus, tu n'auras aucune autorité ». Le pouvoir du démon se réduit à la suggestion ; il ne contraint pas. La sincérité (ikhlāṣ) est le rempart : celui qui se voue purement à Dieu échappe à l'enjolivement. Le mal n'a de prise que sur qui lui ouvre la porte.",
    87: "Wa-laqad ātaynāka sabʿan mina l-mathānī wal-qurʾāna l-ʿaẓīm : « Nous t'avons donné les sept versets répétés et le Coran sublime ». Les sabʿ al-mathānī sont, selon l'interprétation dominante, les sept versets de la Fātiḥa, répétés (mathānī) dans chaque unité de prière. Le verset consolant place ce don au-dessus de toutes les richesses que Dieu accorde aux dénégateurs (v.88 : « ne tends pas tes yeux vers... »). Face à la moquerie et au dénuement matériel, le Prophète reçoit un trésor incomparable : la Fātiḥa et le Coran. La vraie richesse n'est pas dans ce qui s'épuise mais dans le Rappel qui demeure."
  }
};
