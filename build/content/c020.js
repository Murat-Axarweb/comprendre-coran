// Contenu rédactionnel — sourate 20 (Taha)
//
// Fichier source destiné à la relecture et à la correction. Après toute
// modification : node build/build_surah.js 20
//
// Le champ « t » (traductions) reste vide : les traductions proviennent de
// sources externes (Hamidullah, Saheeh International, Diyanet) et sont
// préservées automatiquement lors de la régénération.
module.exports = {
  n: 20, couche: 3, type: "mecquoise",
  nom_fr: "Ṭā-Hā", nom_en: "Ta-Ha", nom_tr: "Tâhâ",
  theme: "L'histoire complète de Moïse — le buisson ardent, la mission auprès de Pharaon, les magiciens convertis, la traversée, le veau d'or — et le récit d'Adam, encadrés par la douceur d'une révélation qui n'est pas venue pour accabler",
  note: "La grande sourate mecquoise de Moïse, réputée avoir provoqué la conversion de ʿUmar. Elle s'ouvre sur une tendresse : « Nous n'avons pas fait descendre sur toi le Coran pour que tu sois malheureux. » Le dialogue au buisson ardent y est le plus intime du Coran — « Et qu'est-ce donc dans ta main droite, ô Moïse ? » Elle culmine sur le veau d'or et la faute d'Adam, tempérée de repentir.",
  prerequis: [1], suivant: [21],
  racines: ["ش-ق-ي","و-ح-ي","ه-د-ي","ط-غ-ي","خ-ش-ي"],
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
    2: [
      ["مَا", "ce que", "particule", 1010],
      ["عَلَيْكَ", "sur toi", "عَلَى + كَ", 56]
    ],
    3: [
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["تَذْكِرَةً", "rappel", "ذ-ك-ر", 7],
      ["لِّمَن", "pour celui qui", "لِ + مَنْ", 55]
    ],
    4: [
      ["خَلَقَ", "il a créé", "خ-ل-ق", 261],
      ["الْأَرْضَ", "la terre", "أ-ر-ض", 219],
      ["الْعُلَى", "sur", "particule", 1430]
    ],
    5: [
      ["الرَّحْمَٰنُ", "Le Tout Miséricordieux", "ر-ح-م", 133],
      ["عَلَى", "sur", "particule", 1430],
      ["الْعَرْشِ", "le Trône", "ع-ر-ش", 43]
    ],
    6: [
      ["لَهُ", "à lui", "لِ + هُ", 275],
      ["مَا", "ce que", "particule", 1010],
      ["فِي", "dans", "particule", 4381],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["فِي", "dans", "particule", 4381],
      ["الْأَرْضِ", "la terre", "أ-ر-ض", 219],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["تَحْتَ", "sous", "ت-ح-ت", 51]
    ],
    7: [
      ["وَإِن", "et si", "و + إِنْ", 170],
      ["بِالْقَوْلِ", "parole", "ق-و-ل", 92],
      ["فَإِنَّهُ", "alors certes il", "ف + إِنَّ + هُ", 47],
      ["يَعْلَمُ", "il sait", "ع-ل-م", 62],
      ["السِّرَّ", "secret", "س-ر-ر", 6]
    ],
    8: [
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["لَا", "non", "particule", 812],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["هُوَ", "il", "pronom personnel", 265],
      ["لَهُ", "à lui", "لِ + هُ", 275],
      ["الْحُسْنَىٰ", "la plus belle (récompense)", "ح-س-ن", 9]
    ],
    9: [
      ["وَهَلْ", "est-ce que ?", "particule interrogative", 66],
      ["حَدِيثُ", "propos", "ح-د-ث", 23],
      ["مُوسَىٰ", "Moïse", "nom propre", 129]
    ],
    10: [
      ["إِذْ", "quand", "particule temporelle", 156],
      ["فَقَالَ", "il a dit", "ق-و-ل", 1722],
      ["إِنِّي", "certes moi", "إِنَّ + ي", 131],
      ["لَّعَلِّي", "Très-Haut", "ع-ل-و", 11],
      ["مِّنْهَا", "d’elle", "مِن + هَا", 86],
      ["أَوْ", "ou", "particule de choix", 264],
      ["عَلَى", "sur", "particule", 1430],
      ["النَّارِ", "le Feu", "ن-و-ر", 70],
      ["هُدًى", "guidance", "ه-د-ي", 46]
    ],
    11: [
      ["فَلَمَّا", "puis lorsque", "ف + لَمَّا", 101]
    ],
    12: [
      ["إِنِّي", "certes moi", "إِنَّ + ي", 131],
      ["أَنَا", "certes Nous", "إِنَّ + نَا", 156],
      ["رَبُّكَ", "ton Seigneur", "ر-ب-ب", 116],
      ["إِنَّكَ", "certes tu", "إِنَّ + كَ", 49],
      ["بِالْوَادِ", "vallée", "و-د-ي", 7],
      ["طُوًى", "plier", "ط-و-ي", 6]
    ],
    13: [
      ["وَأَنَا", "certes Nous", "إِنَّ + نَا", 156],
      ["لِمَا", "ce que", "particule", 1010]
    ],
    14: [
      ["أَنَا", "certes Nous", "إِنَّ + نَا", 156],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["لَا", "non", "particule", 812],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["أَنَا", "certes Nous", "إِنَّ + نَا", 156]
    ],
    15: [
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["السَّاعَةَ", "Heure (du Jugement)", "س-و-ع", 48],
      ["كُلُّ", "de tout", "ك-ل-ل", 123],
      ["نَفْسٍ", "âme", "ن-ف-س", 298],
      ["بِمَا", "par ce que", "بِ + مَا", 296]
    ],
    16: [
      ["فَلَا", "alors ne... pas", "ف + لَا", 156],
      ["مَن", "de", "particule", 3226],
      ["لَّا", "non", "particule", 812],
      ["بِهَا", "par elle", "بِ + هَا", 79],
      ["وَاتَّبَعَ", "suivre", "ت-ب-ع", 78]
    ],
    17: [
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["تِلْكَ", "celle-là", "—", 43]
    ],
    18: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["هِيَ", "elle", "pronom personnel", 47],
      ["عَلَيْهَا", "sur elle", "عَلَى + هَا", 51],
      ["بِهَا", "par elle", "بِ + هَا", 79],
      ["عَلَىٰ", "sur", "particule", 1430],
      ["وَلِيَ", "allié", "و-ل-ي", 86],
      ["فِيهَا", "en elle", "فِي + هَا", 241]
    ],
    19: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722]
    ],
    20: [
      ["فَإِذَا", "alors quand", "ف + إِذَا", 86],
      ["هِيَ", "elle", "pronom personnel", 47]
    ],
    21: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["وَلَا", "et ne... pas", "و + لَا", 658]
    ],
    22: [
      ["إِلَىٰ", "vers", "particule", 742],
      ["مِنْ", "de", "particule", 3226],
      ["غَيْرِ", "autre que", "غ-ي-ر", 147],
      ["سُوءٍ", "mal", "س-و-أ", 14]
    ],
    23: [
      ["مِنْ", "de", "particule", 3226]
    ],
    24: [
      ["إِلَىٰ", "vers", "particule", 742],
      ["فِرْعَوْنَ", "Pharaon", "nom propre", 48],
      ["إِنَّهُ", "certes il", "إِنَّ + هُ", 147],
      ["طَغَىٰ", "transgresser", "ط-غ-ي", 8]
    ],
    25: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["رَبِّ", "Seigneur", "ر-ب-ب", 980],
      ["لِي", "à moi", "لِ + ي", 59]
    ],
    26: [
      ["وَيَسِّرْ", "facilité", "ي-س-ر", 12],
      ["لِي", "à moi", "لِ + ي", 59]
    ],
    27: [
      ["مِّن", "de", "particule", 3226]
    ],
    29: [
      ["لِّي", "à moi", "لِ + ي", 59],
      ["مِّنْ", "de", "particule", 3226]
    ],
    31: [
      ["بِهِ", "par lui", "بِ + هُ", 327]
    ],
    32: [
      ["فِي", "dans", "particule", 4381]
    ],
    33: [
      ["كَثِيرًا", "beaucoup", "ك-ث-ر", 46]
    ],
    34: [
      ["كَثِيرًا", "beaucoup", "ك-ث-ر", 46]
    ],
    35: [
      ["إِنَّكَ", "certes tu", "إِنَّ + كَ", 49]
    ],
    36: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["قَدْ", "déjà", "particule d’aspect", 120]
    ],
    37: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["عَلَيْكَ", "sur toi", "عَلَى + كَ", 56]
    ],
    38: [
      ["إِذْ", "quand", "particule temporelle", 156],
      ["إِلَىٰ", "vers", "particule", 742],
      ["مَا", "ce que", "particule", 1010]
    ],
    39: [
      ["أَنِ", "certes", "particule d’insistance", 609],
      ["فِي", "dans", "particule", 4381],
      ["فِي", "dans", "particule", 4381],
      ["عَدُوٌّ", "ennemi", "ع-د-و", 53],
      ["لِّي", "à moi", "لِ + ي", 59],
      ["وَعَدُوٌّ", "ennemi", "ع-د-و", 53],
      ["لَّهُ", "à lui", "لِ + هُ", 275],
      ["عَلَيْكَ", "sur toi", "عَلَى + كَ", 56],
      ["عَلَىٰ", "sur", "particule", 1430]
    ],
    40: [
      ["إِذْ", "quand", "particule temporelle", 156],
      ["هَلْ", "est-ce que ?", "particule interrogative", 66],
      ["عَلَىٰ", "sur", "particule", 1430],
      ["مَن", "de", "particule", 3226],
      ["إِلَىٰ", "vers", "particule", 742],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["مِنَ", "de", "particule", 3226],
      ["فِي", "dans", "particule", 4381],
      ["مَدْيَنَ", "Madyan (peuple)", "—", 10],
      ["ثُمَّ", "puis", "particule de succession", 337],
      ["عَلَىٰ", "sur", "particule", 1430]
    ],
    42: [
      ["أَنتَ", "toi", "pronom personnel", 55],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["فِي", "dans", "particule", 4381]
    ],
    43: [
      ["إِلَىٰ", "vers", "particule", 742],
      ["فِرْعَوْنَ", "Pharaon", "nom propre", 48],
      ["إِنَّهُ", "certes il", "إِنَّ + هُ", 147],
      ["طَغَىٰ", "transgresser", "ط-غ-ي", 8]
    ],
    44: [
      ["لَهُ", "à lui", "لِ + هُ", 275],
      ["أَوْ", "ou", "particule de choix", 264]
    ],
    45: [
      ["رَبَّنَا", "notre Seigneur", "ر-ب-ب", 72],
      ["أَن", "certes", "particule d’insistance", 609],
      ["عَلَيْنَا", "sur nous", "عَلَى + نَا", 51],
      ["أَوْ", "ou", "particule de choix", 264],
      ["أَن", "certes", "particule d’insistance", 609]
    ],
    46: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["لَا", "non", "particule", 812]
    ],
    47: [
      ["إِنَّا", "certes Nous", "إِنَّ + نَا", 156],
      ["رَسُولَا", "un messager", "ر-س-ل", 50],
      ["رَبِّكَ", "ton Seigneur", "ر-ب-ب", 116],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["قَدْ", "déjà", "particule d’aspect", 120],
      ["مِّن", "de", "particule", 3226],
      ["رَّبِّكَ", "ton Seigneur", "ر-ب-ب", 116],
      ["وَالسَّلَٰمُ", "paix", "س-ل-م", 6],
      ["عَلَىٰ", "sur", "particule", 1430],
      ["مَنِ", "de", "particule", 3226],
      ["اتَّبَعَ", "suivre", "ت-ب-ع", 78],
      ["الْهُدَىٰ", "guidance", "ه-د-ي", 46]
    ],
    48: [
      ["إِنَّا", "certes Nous", "إِنَّ + نَا", 156],
      ["قَدْ", "déjà", "particule d’aspect", 120],
      ["أَنَّ", "certes", "particule d’insistance", 609],
      ["الْعَذَابَ", "châtiment", "ع-ذ-ب", 373],
      ["عَلَىٰ", "sur", "particule", 1430],
      ["مَن", "de", "particule", 3226],
      ["كَذَّبَ", "traiter de mensonge", "ك-ذ-ب", 80]
    ],
    49: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["فَمَن", "donc celui qui", "ف + مَنْ", 67]
    ],
    50: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["رَبُّنَا", "notre Seigneur", "ر-ب-ب", 72],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["أَعْطَىٰ", "donner", "ع-ط-و", 14],
      ["كُلَّ", "de tout", "ك-ل-ل", 123],
      ["شَيْءٍ", "une chose", "ش-ي-ء", 179],
      ["ثُمَّ", "puis", "particule de succession", 337],
      ["هَدَىٰ", "guidance", "ه-د-ي", 46]
    ],
    51: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["فَمَا", "alors quoi", "ف + مَا", 86],
      ["بَالُ", "famille (de)", "أ-و-ل", 26]
    ],
    52: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["عِندَ", "auprès de", "adverbe / préposition", 98],
      ["رَبِّي", "mon Seigneur", "ر-ب-ب", 91],
      ["فِي", "dans", "particule", 4381],
      ["لَّا", "non", "particule", 812],
      ["رَبِّي", "mon Seigneur", "ر-ب-ب", 91],
      ["وَلَا", "et ne... pas", "و + لَا", 658]
    ],
    53: [
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["جَعَلَ", "il a fait", "ج-ع-ل", 44],
      ["لَكُمُ", "à vous", "لِ + كُمْ", 294],
      ["الْأَرْضَ", "la terre", "أ-ر-ض", 219],
      ["لَكُمْ", "à vous", "لِ + كُمْ", 294],
      ["فِيهَا", "en elle", "فِي + هَا", 241],
      ["وَأَنزَلَ", "il a été descendu", "ن-ز-ل", 47],
      ["مِنَ", "de", "particule", 3226],
      ["السَّمَاءِ", "du ciel", "س-م-و", 81],
      ["بِهِ", "par lui", "بِ + هُ", 327],
      ["مِّن", "de", "particule", 3226],
      ["نَّبَاتٍ", "végétation", "ن-ب-ت", 4]
    ],
    54: [
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["فِي", "dans", "particule", 4381],
      ["ذَٰلِكَ", "cela", "pronom démonstratif", 280],
      ["النُّهَىٰ", "interdire", "ن-ه-ي", 8]
    ],
    55: [
      ["مِنْهَا", "d’elle", "مِن + هَا", 86],
      ["وَفِيهَا", "en elle", "فِي + هَا", 241],
      ["وَمِنْهَا", "d’elle", "مِن + هَا", 86]
    ],
    56: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["كُلَّهَا", "à elle", "لِ + هَا", 51],
      ["فَكَذَّبَ", "traiter de mensonge", "ك-ذ-ب", 80],
      ["وَأَبَىٰ", "refuser", "أ-ب-ي", 13]
    ],
    57: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["مِنْ", "de", "particule", 3226]
    ],
    58: [
      ["بِسِحْرٍ", "magie", "س-ح-ر", 8],
      ["لَّا", "non", "particule", 812],
      ["نَحْنُ", "nous", "pronom personnel", 65],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["أَنتَ", "toi", "pronom personnel", 55]
    ],
    59: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["يَوْمُ", "jour", "ي-و-م", 405],
      ["الزِّينَةِ", "parure", "ز-ي-ن", 19],
      ["وَأَن", "et si", "و + إِنْ", 170],
      ["النَّاسُ", "les gens", "ن-و-س / أ-ن-س", 92],
      ["ضُحًى", "matinée claire", "ض-ح-و", 5]
    ],
    60: [
      ["فِرْعَوْنُ", "Pharaon", "nom propre", 48],
      ["فَجَمَعَ", "rassembler", "ج-م-ع", 4],
      ["ثُمَّ", "puis", "particule de succession", 337],
      ["أَتَىٰ", "donner", "أ-ت-ي", 90]
    ],
    61: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["لَهُم", "à eux", "لِ + هُمْ", 325],
      ["مُّوسَىٰ", "Moïse", "nom propre", 129],
      ["لَا", "non", "particule", 812],
      ["عَلَى", "sur", "particule", 1430],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["بِعَذَابٍ", "châtiment", "ع-ذ-ب", 373],
      ["وَقَدْ", "et certes", "و + قَدْ", 43],
      ["مَنِ", "de", "particule", 3226]
    ],
    62: [
      ["بَيْنَهُمْ", "entre eux", "ب-ي-ن", 54],
      ["النَّجْوَىٰ", "conciliabule", "ن-ج-و", 6]
    ],
    63: [
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["إِنْ", "certes", "particule d’insistance", 609],
      ["أَن", "certes", "particule d’insistance", 609],
      ["مِّنْ", "de", "particule", 3226]
    ],
    64: [
      ["ثُمَّ", "puis", "particule de succession", 337],
      ["وَقَدْ", "et certes", "و + قَدْ", 43],
      ["الْيَوْمَ", "jour", "ي-و-م", 405],
      ["مَنِ", "de", "particule", 3226]
    ],
    65: [
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["إِمَّا", "soit... soit", "—", 4],
      ["أَن", "certes", "particule d’insistance", 609],
      ["وَإِمَّا", "soit... soit", "—", 4],
      ["أَن", "certes", "particule d’insistance", 609],
      ["أَوَّلَ", "premier", "أ-و-ل", 82],
      ["مَنْ", "de", "particule", 3226],
      ["أَلْقَىٰ", "jeter", "ل-ق-ي", 71]
    ],
    66: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["بَلْ", "plutôt", "particule de correction", 113],
      ["فَإِذَا", "alors quand", "ف + إِذَا", 86],
      ["إِلَيْهِ", "vers lui", "إِلَى + هُ", 76],
      ["مِن", "de", "particule", 3226]
    ],
    67: [
      ["فِي", "dans", "particule", 4381],
      ["مُّوسَىٰ", "Moïse", "nom propre", 129]
    ],
    68: [
      ["لَا", "non", "particule", 812],
      ["إِنَّكَ", "certes tu", "إِنَّ + كَ", 49],
      ["أَنتَ", "toi", "pronom personnel", 55]
    ],
    69: [
      ["مَا", "ce que", "particule", 1010],
      ["فِي", "dans", "particule", 4381],
      ["مَا", "ce que", "particule", 1010],
      ["إِنَّمَا", "seulement", "particule de restriction", 113],
      ["كَيْدُ", "ruse", "ك-ي-د", 35],
      ["سَٰحِرٍ", "magie", "س-ح-ر", 8],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["حَيْثُ", "là où", "—", 31],
      ["أَتَىٰ", "donner", "أ-ت-ي", 90]
    ],
    70: [
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["بِرَبِّ", "Seigneur", "ر-ب-ب", 980],
      ["وَمُوسَىٰ", "Moïse", "nom propre", 129]
    ],
    71: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["لَهُ", "à lui", "لِ + هُ", 275],
      ["قَبْلَ", "avant", "ق-ب-ل", 70],
      ["أَنْ", "certes", "particule d’insistance", 609],
      ["لَكُمْ", "à vous", "لِ + كُمْ", 294],
      ["إِنَّهُ", "certes il", "إِنَّ + هُ", 147],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["السِّحْرَ", "magie", "س-ح-ر", 8],
      ["مِّنْ", "de", "particule", 3226],
      ["خِلَٰفٍ", "derrière", "خ-ل-ف", 22],
      ["فِي", "dans", "particule", 4381],
      ["النَّخْلِ", "palmiers", "ن-خ-ل", 20]
    ],
    72: [
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["لَن", "ne... jamais", "particule de négation future", 59],
      ["عَلَىٰ", "sur", "particule", 1430],
      ["مَا", "ce que", "particule", 1010],
      ["مِنَ", "de", "particule", 3226],
      ["وَالَّذِي", "celui qui", "pronom", 1464],
      ["مَا", "ce que", "particule", 1010],
      ["أَنتَ", "toi", "pronom personnel", 55],
      ["إِنَّمَا", "seulement", "particule de restriction", 113],
      ["هَٰذِهِ", "celle-ci", "pronom démonstratif", 46],
      ["الدُّنْيَا", "la vie d’ici-bas", "د-ن-و", 115]
    ],
    73: [
      ["إِنَّا", "certes Nous", "إِنَّ + نَا", 156],
      ["بِرَبِّنَا", "notre Seigneur", "ر-ب-ب", 72],
      ["لَنَا", "à nous", "لِ + نَا", 83],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["عَلَيْهِ", "sur lui", "عَلَى + هُ", 145],
      ["مِنَ", "de", "particule", 3226],
      ["السِّحْرِ", "magie", "س-ح-ر", 8],
      ["وَاللَّهُ", "et Allah", "و + أ-ل-ه", 239],
      ["خَيْرٌ", "meilleur", "خ-ي-ر", 78]
    ],
    74: [
      ["إِنَّهُ", "certes il", "إِنَّ + هُ", 147],
      ["مَن", "de", "particule", 3226],
      ["رَبَّهُ", "son Seigneur", "ر-ب-ب", 44],
      ["فَإِنَّ", "alors si", "ف + إِنْ", 89],
      ["لَهُ", "à lui", "لِ + هُ", 275],
      ["جَهَنَّمَ", "Jahannam", "nom propre", 54],
      ["لَا", "non", "particule", 812],
      ["فِيهَا", "en elle", "فِي + هَا", 241],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["يَحْيَىٰ", "Jean-Baptiste (prophète)", "—", 5]
    ],
    75: [
      ["وَمَن", "et celui qui", "و + مَنْ", 234],
      ["قَدْ", "déjà", "particule d’aspect", 120],
      ["عَمِلَ", "il a fait", "ع-م-ل", 359],
      ["فَأُوْلَـٰئِكَ", "alors ceux-là", "ف + pronom démonstratif", 46],
      ["لَهُمُ", "à eux", "لِ + هُمْ", 325],
      ["الْعُلَىٰ", "sur", "particule", 1430]
    ],
    76: [
      ["عَدْنٍ", "Éden (séjour éternel)", "ع-د-ن", 11],
      ["تَجْرِي", "elle coule", "ج-ر-ي", 48],
      ["مِن", "de", "particule", 3226],
      ["فِيهَا", "en elle", "فِي + هَا", 241],
      ["وَذَٰلِكَ", "cela", "pronom démonstratif", 280],
      ["جَزَاءُ", "rétribution", "ج-ز-ي", 42],
      ["مَن", "de", "particule", 3226]
    ],
    77: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["إِلَىٰ", "vers", "particule", 742],
      ["مُوسَىٰ", "Moïse", "nom propre", 129],
      ["أَنْ", "certes", "particule d’insistance", 609],
      ["بِعِبَادِي", "Mes serviteurs", "ع-ب-د", 40],
      ["لَهُمْ", "à eux", "لِ + هُمْ", 325],
      ["فِي", "dans", "particule", 4381],
      ["الْبَحْرِ", "mer", "ب-ح-ر", 41],
      ["لَّا", "non", "particule", 812],
      ["وَلَا", "et ne... pas", "و + لَا", 658]
    ],
    78: [
      ["فِرْعَوْنُ", "Pharaon", "nom propre", 48],
      ["مِّنَ", "de", "particule", 3226],
      ["مَا", "ce que", "particule", 1010]
    ],
    79: [
      ["فِرْعَوْنُ", "Pharaon", "nom propre", 48],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["هَدَىٰ", "guidance", "ه-د-ي", 46]
    ],
    80: [
      ["قَدْ", "déjà", "particule d’aspect", 120],
      ["مِّنْ", "de", "particule", 3226],
      ["جَانِبَ", "côté", "ج-ن-ب", 10],
      ["الطُّورِ", "mont (Sinaï)", "ط-و-ر", 4],
      ["عَلَيْكُمُ", "sur vous", "عَلَى + كُمْ", 146],
      ["الْمَنَّ", "de", "particule", 3226]
    ],
    81: [
      ["مِن", "de", "particule", 3226],
      ["مَا", "ce que", "particule", 1010],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["فِيهِ", "en lui", "فِي + هُ", 127],
      ["عَلَيْكُمْ", "sur vous", "عَلَى + كُمْ", 146],
      ["وَمَن", "et celui qui", "و + مَنْ", 234],
      ["عَلَيْهِ", "sur lui", "عَلَى + هُ", 145],
      ["فَقَدْ", "alors certes", "ف + قَدْ", 50],
      ["هَوَىٰ", "passion", "ه-و-ي", 30]
    ],
    82: [
      ["وَإِنِّي", "certes moi", "إِنَّ + ي", 131],
      ["لَغَفَّارٌ", "Grand Pardonneur", "غ-ف-ر", 5],
      ["لِّمَن", "pour celui qui", "لِ + مَنْ", 55],
      ["وَعَمِلَ", "il a fait", "ع-م-ل", 359],
      ["ثُمَّ", "puis", "particule de succession", 337]
    ],
    83: [
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["عَن", "de", "préposition", 153]
    ],
    84: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["هُمْ", "eux", "pronom personnel", 180],
      ["عَلَىٰ", "sur", "particule", 1430],
      ["إِلَيْكَ", "vers toi", "إِلَى + كَ", 74],
      ["رَبِّ", "Seigneur", "ر-ب-ب", 980]
    ],
    85: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["فَإِنَّا", "certes Nous", "إِنَّ + نَا", 156],
      ["قَدْ", "déjà", "particule d’aspect", 120],
      ["مِن", "de", "particule", 3226]
    ],
    86: [
      ["فَرَجَعَ", "revenir", "ر-ج-ع", 79],
      ["مُوسَىٰ", "Moïse", "nom propre", 129],
      ["إِلَىٰ", "vers", "particule", 742],
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["أَلَمْ", "n’a-t-il pas ?", "أ + لَمْ", 78],
      ["رَبُّكُمْ", "votre Seigneur", "ر-ب-ب", 46],
      ["عَلَيْكُمُ", "sur vous", "عَلَى + كُمْ", 146],
      ["الْعَهْدُ", "pacte", "ع-ه-د", 30],
      ["أَمْ", "ou bien", "particule d’alternative", 110],
      ["أَن", "certes", "particule d’insistance", 609],
      ["عَلَيْكُمْ", "sur vous", "عَلَى + كُمْ", 146],
      ["غَضَبٌ", "colère", "غ-ض-ب", 24],
      ["مِّن", "de", "particule", 3226],
      ["رَّبِّكُمْ", "votre Seigneur", "ر-ب-ب", 46]
    ],
    87: [
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["مَا", "ce que", "particule", 1010],
      ["مِّن", "de", "particule", 3226],
      ["زِينَةِ", "parure", "ز-ي-ن", 19],
      ["الْقَوْمِ", "mon peuple", "ق-و-م", 58],
      ["فَكَذَٰلِكَ", "ainsi", "كَ + ذَلِكَ", 83],
      ["أَلْقَى", "jeter", "ل-ق-ي", 71]
    ],
    88: [
      ["فَأَخْرَجَ", "faire sortir", "خ-ر-ج", 99],
      ["لَهُمْ", "à eux", "لِ + هُمْ", 325],
      ["لَّهُ", "à lui", "لِ + هُ", 275],
      ["فَقَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["هَٰذَا", "ceci", "pronom démonstratif", 190],
      ["مُوسَىٰ", "Moïse", "nom propre", 129],
      ["فَنَسِيَ", "oublier", "ن-س-ي", 36]
    ],
    89: [
      ["أَفَلَا", "ne... donc pas ?", "أ + ف + لَا", 45],
      ["أَلَّا", "sauf", "particule d’exception", 662],
      ["إِلَيْهِمْ", "vers eux", "إِلَى + هُمْ", 51],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["لَهُمْ", "à eux", "لِ + هُمْ", 325],
      ["وَلَا", "et ne... pas", "و + لَا", 658]
    ],
    90: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["لَهُمْ", "à eux", "لِ + هُمْ", 325],
      ["مِن", "de", "particule", 3226],
      ["قَبْلُ", "avant", "ق-ب-ل", 70],
      ["إِنَّمَا", "seulement", "particule de restriction", 113],
      ["بِهِ", "par lui", "بِ + هُ", 327],
      ["وَإِنَّ", "et si", "و + إِنْ", 170],
      ["رَبَّكُمُ", "votre Seigneur", "ر-ب-ب", 46],
      ["الرَّحْمَٰنُ", "Le Tout Miséricordieux", "ر-ح-م", 133]
    ],
    91: [
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["لَن", "ne... jamais", "particule de négation future", 59],
      ["عَلَيْهِ", "sur lui", "عَلَى + هُ", 145],
      ["حَتَّىٰ", "jusqu’à", "particule de limite", 142],
      ["مُوسَىٰ", "Moïse", "nom propre", 129]
    ],
    92: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["مَا", "ce que", "particule", 1010],
      ["إِذْ", "quand", "particule temporelle", 156]
    ],
    93: [
      ["أَلَّا", "sauf", "particule d’exception", 662]
    ],
    94: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["لَا", "non", "particule", 812],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["إِنِّي", "certes moi", "إِنَّ + ي", 131],
      ["أَن", "certes", "particule d’insistance", 609],
      ["بَيْنَ", "entre", "ب-ي-ن", 70],
      ["وَلَمْ", "et ne... pas", "و + لَمْ", 47]
    ],
    95: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["فَمَا", "alors quoi", "ف + مَا", 86]
    ],
    96: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["بِمَا", "par ce que", "بِ + مَا", 296],
      ["لَمْ", "ne... pas", "particule de négation", 163],
      ["بِهِ", "par lui", "بِ + هُ", 327],
      ["مِّنْ", "de", "particule", 3226],
      ["أَثَرِ", "trace", "أ-ث-ر", 8],
      ["الرَّسُولِ", "le Messager", "ر-س-ل", 41],
      ["وَكَذَٰلِكَ", "ainsi", "كَ + ذَلِكَ", 83],
      ["لِي", "à moi", "لِ + ي", 59]
    ],
    97: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["فَإِنَّ", "alors si", "ف + إِنْ", 89],
      ["لَكَ", "à toi", "لِ + كَ", 69],
      ["فِي", "dans", "particule", 4381],
      ["أَن", "certes", "particule d’insistance", 609],
      ["لَا", "non", "particule", 812],
      ["وَإِنَّ", "et si", "و + إِنْ", 170],
      ["لَكَ", "à toi", "لِ + كَ", 69],
      ["لَّن", "ne... jamais", "particule de négation future", 59],
      ["إِلَىٰ", "vers", "particule", 742],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["عَلَيْهِ", "sur lui", "عَلَى + هُ", 145],
      ["ثُمَّ", "puis", "particule de succession", 337],
      ["فِي", "dans", "particule", 4381]
    ],
    98: [
      ["إِنَّمَا", "seulement", "particule de restriction", 113],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["لَا", "non", "particule", 812],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["هُوَ", "il", "pronom personnel", 265],
      ["كُلَّ", "de tout", "ك-ل-ل", 123],
      ["شَيْءٍ", "une chose", "ش-ي-ء", 179]
    ],
    99: [
      ["كَذَٰلِكَ", "ainsi", "كَ + ذَلِكَ", 83],
      ["نَقُصُّ", "diminuer", "ن-ق-ص", 11],
      ["عَلَيْكَ", "sur toi", "عَلَى + كَ", 56],
      ["مِنْ", "de", "particule", 3226],
      ["مَا", "ce que", "particule", 1010],
      ["قَدْ", "déjà", "particule d’aspect", 120],
      ["سَبَقَ", "devancer", "س-ب-ق", 37],
      ["وَقَدْ", "et certes", "و + قَدْ", 43],
      ["مِن", "de", "particule", 3226]
    ],
    100: [
      ["مَّنْ", "de", "particule", 3226],
      ["فَإِنَّهُ", "alors certes il", "ف + إِنَّ + هُ", 47],
      ["يَوْمَ", "jour", "ي-و-م", 405]
    ],
    101: [
      ["فِيهِ", "en lui", "فِي + هُ", 127],
      ["لَهُمْ", "à eux", "لِ + هُمْ", 325],
      ["يَوْمَ", "jour", "ي-و-م", 405]
    ],
    102: [
      ["يَوْمَ", "jour", "ي-و-م", 405],
      ["فِي", "dans", "particule", 4381],
      ["الصُّورِ", "Trompette (du Jugement)", "ص-و-ر", 10],
      ["يَوْمَئِذٍ", "ce jour-là", "ي-و-م + إِذْ", 63]
    ],
    103: [
      ["بَيْنَهُمْ", "entre eux", "ب-ي-ن", 54],
      ["إِن", "certes", "particule d’insistance", 609],
      ["إِلَّا", "sauf", "particule d’exception", 662]
    ],
    104: [
      ["نَّحْنُ", "nous", "pronom personnel", 65],
      ["أَعْلَمُ", "Je sais", "ع-ل-م", 55],
      ["بِمَا", "par ce que", "بِ + مَا", 296],
      ["يَقُولُونَ", "ils disent", "ق-و-ل", 51],
      ["إِذْ", "quand", "particule temporelle", 156],
      ["إِن", "certes", "particule d’insistance", 609],
      ["إِلَّا", "sauf", "particule d’exception", 662]
    ],
    105: [
      ["عَنِ", "de", "préposition", 153],
      ["فَقُلْ", "dis !", "ق-و-ل", 263],
      ["رَبِّي", "mon Seigneur", "ر-ب-ب", 91]
    ],
    107: [
      ["لَّا", "non", "particule", 812],
      ["فِيهَا", "en elle", "فِي + هَا", 241],
      ["وَلَا", "et ne... pas", "و + لَا", 658]
    ],
    108: [
      ["يَوْمَئِذٍ", "ce jour-là", "ي-و-م + إِذْ", 63],
      ["لَا", "non", "particule", 812],
      ["لَهُ", "à lui", "لِ + هُ", 275],
      ["فَلَا", "alors ne... pas", "ف + لَا", 156],
      ["إِلَّا", "sauf", "particule d’exception", 662]
    ],
    109: [
      ["يَوْمَئِذٍ", "ce jour-là", "ي-و-م + إِذْ", 63],
      ["لَّا", "non", "particule", 812],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["مَنْ", "de", "particule", 3226],
      ["أَذِنَ", "oreille", "أ-ذ-ن", 8],
      ["لَهُ", "à lui", "لِ + هُ", 275],
      ["الرَّحْمَٰنُ", "Le Tout Miséricordieux", "ر-ح-م", 133],
      ["وَرَضِيَ", "agréer", "ر-ض-و", 57],
      ["لَهُ", "à lui", "لِ + هُ", 275]
    ],
    110: [
      ["يَعْلَمُ", "il sait", "ع-ل-م", 62],
      ["مَا", "ce que", "particule", 1010],
      ["بَيْنَ", "entre", "ب-ي-ن", 70],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["بِهِ", "par lui", "بِ + هُ", 327]
    ],
    111: [
      ["لِلْحَيِّ", "Vivant", "ح-ي-ي", 19],
      ["الْقَيُّومِ", "qui subsiste par Soi et fait subsister", "ق-و-م", 2],
      ["وَقَدْ", "et certes", "و + قَدْ", 43],
      ["مَنْ", "de", "particule", 3226],
      ["حَمَلَ", "porter", "ح-م-ل", 64]
    ],
    112: [
      ["وَمَن", "et celui qui", "و + مَنْ", 234],
      ["مِنَ", "de", "particule", 3226],
      ["وَهُوَ", "et Il", "و + pronom", 171],
      ["فَلَا", "alors ne... pas", "ف + لَا", 156],
      ["وَلَا", "et ne... pas", "و + لَا", 658]
    ],
    113: [
      ["وَكَذَٰلِكَ", "ainsi", "كَ + ذَلِكَ", 83],
      ["فِيهِ", "en lui", "فِي + هُ", 127],
      ["مِنَ", "de", "particule", 3226],
      ["لَعَلَّهُمْ", "afin qu’ils", "لَعَلَّ + هُمْ", 46],
      ["أَوْ", "ou", "particule de choix", 264],
      ["لَهُمْ", "à eux", "لِ + هُمْ", 325]
    ],
    114: [
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["الْمَلِكُ", "royauté", "م-ل-ك", 48],
      ["الْحَقُّ", "la vérité", "ح-ق-ق", 48],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["مِن", "de", "particule", 3226],
      ["قَبْلِ", "avant", "ق-ب-ل", 70],
      ["أَن", "certes", "particule d’insistance", 609],
      ["إِلَيْكَ", "vers toi", "إِلَى + كَ", 74],
      ["وَقُل", "dis !", "ق-و-ل", 263],
      ["رَّبِّ", "Seigneur", "ر-ب-ب", 980]
    ],
    115: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["إِلَىٰ", "vers", "particule", 742],
      ["مِن", "de", "particule", 3226],
      ["قَبْلُ", "avant", "ق-ب-ل", 70],
      ["فَنَسِيَ", "oublier", "ن-س-ي", 36],
      ["وَلَمْ", "et ne... pas", "و + لَمْ", 47],
      ["لَهُ", "à lui", "لِ + هُ", 275]
    ],
    116: [
      ["وَإِذْ", "et quand", "و + إِذْ", 69],
      ["لِأدَمَ", "Adam", "—", 25],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["إِبْلِيسَ", "Iblis (le diable)", "—", 11],
      ["أَبَىٰ", "refuser", "أ-ب-ي", 13]
    ],
    117: [
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["هَٰذَا", "ceci", "pronom démonstratif", 190],
      ["عَدُوٌّ", "ennemi", "ع-د-و", 53],
      ["لَّكَ", "à toi", "لِ + كَ", 69],
      ["فَلَا", "alors ne... pas", "ف + لَا", 156],
      ["مِنَ", "de", "particule", 3226],
      ["الْجَنَّةِ", "paradis", "ج-ن-ن", 147]
    ],
    118: [
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["لَكَ", "à toi", "لِ + كَ", 69],
      ["أَلَّا", "sauf", "particule d’exception", 662],
      ["فِيهَا", "en elle", "فِي + هَا", 241],
      ["وَلَا", "et ne... pas", "و + لَا", 658]
    ],
    119: [
      ["وَأَنَّكَ", "certes tu", "إِنَّ + كَ", 49],
      ["لَا", "non", "particule", 812],
      ["فِيهَا", "en elle", "فِي + هَا", 241],
      ["وَلَا", "et ne... pas", "و + لَا", 658]
    ],
    120: [
      ["فَوَسْوَسَ", "chuchoter", "و-س-و-س", 5],
      ["إِلَيْهِ", "vers lui", "إِلَى + هُ", 76],
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["هَلْ", "est-ce que ?", "particule interrogative", 66],
      ["عَلَىٰ", "sur", "particule", 1430],
      ["شَجَرَةِ", "arbre", "ش-ج-ر", 26],
      ["الْخُلْدِ", "éternité", "خ-ل-د", 3],
      ["وَمُلْكٍ", "royauté", "م-ل-ك", 48],
      ["لَّا", "non", "particule", 812]
    ],
    121: [
      ["مِنْهَا", "d’elle", "مِن + هَا", 86],
      ["مِن", "de", "particule", 3226],
      ["الْجَنَّةِ", "paradis", "ج-ن-ن", 147],
      ["وَعَصَىٰ", "désobéir", "ع-ص-ي", 32],
      ["رَبَّهُ", "son Seigneur", "ر-ب-ب", 44],
      ["فَغَوَىٰ", "s'égarer", "غ-و-ي", 5]
    ],
    122: [
      ["ثُمَّ", "puis", "particule de succession", 337],
      ["رَبُّهُ", "son Seigneur", "ر-ب-ب", 44],
      ["عَلَيْهِ", "sur lui", "عَلَى + هُ", 145],
      ["وَهَدَىٰ", "guidance", "ه-د-ي", 46]
    ],
    123: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["مِنْهَا", "d’elle", "مِن + هَا", 86],
      ["جَمِيعًا", "tous ensemble", "ج-م-ع", 49],
      ["عَدُوٌّ", "ennemi", "ع-د-و", 53],
      ["فَإِمَّا", "soit... soit", "—", 4],
      ["هُدًى", "guidance", "ه-د-ي", 46],
      ["فَمَنِ", "donc celui qui", "ف + مَنْ", 67],
      ["اتَّبَعَ", "suivre", "ت-ب-ع", 78],
      ["فَلَا", "alors ne... pas", "ف + لَا", 156],
      ["وَلَا", "et ne... pas", "و + لَا", 658]
    ],
    124: [
      ["وَمَنْ", "et celui qui", "و + مَنْ", 234],
      ["عَن", "de", "préposition", 153],
      ["فَإِنَّ", "alors si", "ف + إِنْ", 89],
      ["لَهُ", "à lui", "لِ + هُ", 275],
      ["يَوْمَ", "jour", "ي-و-م", 405],
      ["أَعْمَىٰ", "aveugle", "ع-م-ي", 33]
    ],
    125: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["رَبِّ", "Seigneur", "ر-ب-ب", 980],
      ["لِمَ", "ne... pas", "particule de négation", 163],
      ["أَعْمَىٰ", "aveugle", "ع-م-ي", 33],
      ["وَقَدْ", "et certes", "و + قَدْ", 43]
    ],
    126: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["كَذَٰلِكَ", "ainsi", "كَ + ذَلِكَ", 83],
      ["وَكَذَٰلِكَ", "ainsi", "كَ + ذَلِكَ", 83],
      ["الْيَوْمَ", "jour", "ي-و-م", 405]
    ],
    127: [
      ["وَكَذَٰلِكَ", "ainsi", "كَ + ذَلِكَ", 83],
      ["مَنْ", "de", "particule", 3226],
      ["وَلَمْ", "et ne... pas", "و + لَمْ", 47],
      ["رَبِّهِ", "son Seigneur", "ر-ب-ب", 44],
      ["الْأخِرَةِ", "l’au-delà", "أ-خ-ر", 55]
    ],
    128: [
      ["لَهُمْ", "à eux", "لِ + هُمْ", 325],
      ["كَمْ", "combien (de)", "—", 4],
      ["مِّنَ", "de", "particule", 3226],
      ["فِي", "dans", "particule", 4381],
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["فِي", "dans", "particule", 4381],
      ["ذَٰلِكَ", "cela", "pronom démonstratif", 280],
      ["النُّهَىٰ", "interdire", "ن-ه-ي", 8]
    ],
    129: [
      ["وَلَوْلَا", "si ce n'était", "—", 75],
      ["كَلِمَةٌ", "parole", "ك-ل-م", 42],
      ["مِن", "de", "particule", 3226],
      ["رَّبِّكَ", "ton Seigneur", "ر-ب-ب", 116],
      ["لَكَانَ", "il était", "ك-و-ن", 1360],
      ["وَأَجَلٌ", "terme", "أ-ج-ل", 56]
    ],
    130: [
      ["عَلَىٰ", "sur", "particule", 1430],
      ["مَا", "ce que", "particule", 1010],
      ["يَقُولُونَ", "ils disent", "ق-و-ل", 51],
      ["وَسَبِّحْ", "glorifier", "س-ب-ح", 47],
      ["بِحَمْدِ", "louange", "ح-م-د", 68],
      ["رَبِّكَ", "ton Seigneur", "ر-ب-ب", 116],
      ["قَبْلَ", "avant", "ق-ب-ل", 70],
      ["الشَّمْسِ", "soleil", "ش-م-س", 33],
      ["وَقَبْلَ", "avant", "ق-ب-ل", 70],
      ["وَمِنْ", "et celui qui", "و + مَنْ", 234],
      ["فَسَبِّحْ", "glorifier", "س-ب-ح", 47],
      ["النَّهَارِ", "le jour", "ن-ه-ر", 50]
    ],
    131: [
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["إِلَىٰ", "vers", "particule", 742],
      ["مَا", "ce que", "particule", 1010],
      ["بِهِ", "par lui", "بِ + هُ", 327],
      ["مِّنْهُمْ", "d’eux", "مِن + هُمْ", 145],
      ["الدُّنْيَا", "la vie d’ici-bas", "د-ن-و", 115],
      ["فِيهِ", "en lui", "فِي + هُ", 127],
      ["رَبِّكَ", "ton Seigneur", "ر-ب-ب", 116],
      ["خَيْرٌ", "meilleur", "خ-ي-ر", 78]
    ],
    132: [
      ["وَأْمُرْ", "ordre", "أ-م-ر", 166],
      ["عَلَيْهَا", "sur elle", "عَلَى + هَا", 51],
      ["لَا", "non", "particule", 812],
      ["رِزْقًا", "subsistance", "ر-ز-ق", 43],
      ["نَّحْنُ", "nous", "pronom personnel", 65],
      ["وَالْعَٰقِبَةُ", "pente raide", "ع-ق-ب", 2],
      ["لِلتَّقْوَىٰ", "piété", "و-ق-ي", 158]
    ],
    133: [
      ["وَقَالُواْ", "et ils dirent", "ق-و-ل", 61],
      ["لَوْلَا", "si ce n'était", "—", 75],
      ["مِّن", "de", "particule", 3226],
      ["رَّبِّهِ", "son Seigneur", "ر-ب-ب", 44],
      ["بَيِّنَةُ", "preuve évidente", "ب-ي-ن", 28],
      ["مَا", "ce que", "particule", 1010],
      ["فِي", "dans", "particule", 4381],
      ["الصُّحُفِ", "feuillets", "ص-ح-ف", 6]
    ],
    134: [
      ["وَلَوْ", "et si", "و + لَوْ", 108],
      ["أَنَّا", "certes Nous", "إِنَّ + نَا", 156],
      ["بِعَذَابٍ", "châtiment", "ع-ذ-ب", 373],
      ["مِّن", "de", "particule", 3226],
      ["لَقَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["رَبَّنَا", "notre Seigneur", "ر-ب-ب", 72],
      ["لَوْلَا", "si ce n'était", "—", 75],
      ["رَسُولًا", "un messager", "ر-س-ل", 50],
      ["مِن", "de", "particule", 3226],
      ["قَبْلِ", "avant", "ق-ب-ل", 70],
      ["أَن", "certes", "particule d’insistance", 609]
    ],
    135: [
      ["قُلْ", "dis !", "ق-و-ل", 263],
      ["كُلٌّ", "de tout", "ك-ل-ل", 123],
      ["مَنْ", "de", "particule", 3226],
      ["وَمَنِ", "et celui qui", "و + مَنْ", 234]
    ]
  },

  // Analyses de versets
  analyses: {
    2: "Mā anzalnā ʿalayka l-qurʾāna li-tashqā : « Nous n'avons pas fait descendre sur toi le Coran pour que tu sois malheureux ». Verset d'ouverture qui donne le ton de toute la sourate : la révélation n'est pas un fardeau accablant. Le Prophète, épuisé de veilles et de peine devant l'incroyance, reçoit ce réconfort — le Coran est venu alléger, non écraser. Le mot shaqāʾ (l'infortune, la peine) est l'exact contraire de ce que la guidance apporte. La religion coranique se présente d'emblée comme miséricorde, non comme épreuve destinée à briser.",
    14: "Innanī anā Llāhu lā ilāha illā ana fa-ʿbudnī wa-aqimi ṣ-ṣalāta li-dhikrī : au buisson ardent, la première parole après la révélation de l'unicité est l'ordre de prier « pour Te souvenir de Moi » (li-dhikrī). La prière est définie par sa finalité : le dhikr, le souvenir constant de Dieu. Elle n'est pas un rite formel mais l'instrument par lequel l'homme maintient présente à sa conscience la réalité divine. C'est la première prescription de l'islam de Moïse, et le cœur de toute vie spirituelle.",
    44: "Fa-qūlā lahu qawlan layyinan : « adressez-lui une parole douce ». L'ordre est adressé à Moïse et Aaron partant affronter Pharaon — le tyran qui se disait dieu, qui égorgeait les enfants. Et pourtant : parole DOUCE. Le layyin (souplesse, douceur) est prescrit face au pire des oppresseurs, « peut-être se rappellera-t-il ou craindra-t-il ». Leçon immense sur la méthode de la prédication : même face à l'injustice extrême, la porte du repentir reste ouverte, et la douceur est plus efficace que la violence pour l'entrebâiller. La fermeté du message n'exige pas la dureté du ton.",
    124: "Wa-man aʿraḍa ʿan dhikrī fa-inna lahu maʿīshatan ḍankan : « quiconque se détourne de Mon rappel aura une vie étroite ». Le ḍank, c'est l'étroitesse, l'oppression, l'étouffement. Le verset énonce une loi psychologique et spirituelle : se couper de Dieu ne libère pas, cela rétrécit l'existence. La richesse matérielle n'y change rien — on peut avoir tout et vivre dans l'angoisse. À l'inverse, suivre la guidance délivre du shaqāʾ (v.123) évoqué en écho au v.2 : le fil de toute la sourate. La détresse n'est pas dans les circonstances mais dans l'oubli de Dieu."
  }
};
