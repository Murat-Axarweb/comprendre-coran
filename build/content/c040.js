// Contenu rédactionnel — sourate 40 (Ghafir)
//
// Fichier source destiné à la relecture et à la correction. Après toute
// modification : node build/build_surah.js 40
//
// Le champ « t » (traductions) reste vide : les traductions proviennent de
// sources externes (Hamidullah, Saheeh International, Diyanet) et sont
// préservées automatiquement lors de la régénération.
module.exports = {
  n: 40, couche: 3, type: "mecquoise",
  nom_fr: "Le Pardonneur", nom_en: "The Forgiver", nom_tr: "Mü'min / Gâfir (Bağışlayan)",
  theme: "Le Pardonneur des péchés et Accueillant au repentir, les porteurs du Trône priant pour les croyants, et le croyant caché de la famille de Pharaon — le plus long plaidoyer de foi du Coran",
  note: "Aussi appelée « al-Muʾmin » : en son centre, un homme de la cour de Pharaon « qui cachait sa foi » prend la parole au péril de sa vie (v.28-45) — le plus long discours d'un croyant anonyme du texte. Son argument d'ouverture reste un classique du droit : « Tuerez-vous un homme parce qu'il dit : mon Seigneur est Allah ? »",
  prerequis: [39], suivant: [41],
  racines: ["غ-ف-ر","د-ع-و","ح-م-ل","ك-ت-م","ط-غ-ي"],
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
      ["تَنزِيلُ", "descente (révélation)", "ن-ز-ل", 4],
      ["مِنَ", "de", "particule", 3226],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["الْعَزِيزِ", "Le Puissant", "ع-ز-ز", 46],
      ["الْعَلِيمِ", "Savant", "ع-ل-م", 100]
    ],
    3: [
      ["الذَّنبِ", "péché", "ذ-ن-ب", 39],
      ["شَدِيدِ", "intense", "ش-د-د", 52],
      ["الْعِقَابِ", "punition", "ع-ق-ب", 10],
      ["لَا", "non", "particule", 812],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["هُوَ", "il", "pronom personnel", 265],
      ["إِلَيْهِ", "vers lui", "إِلَى + هُ", 76],
      ["الْمَصِيرُ", "destination", "ص-ي-ر", 8]
    ],
    4: [
      ["مَا", "ce que", "particule", 1010],
      ["فِي", "dans", "particule", 4381],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["كَفَرُواْ", "ils ont mécru", "ك-ف-ر", 189],
      ["فَلَا", "alors ne... pas", "ف + لَا", 156],
      ["فِي", "dans", "particule", 4381],
      ["الْبِلَٰدِ", "pays", "ب-ل-د", 7]
    ],
    5: [
      ["قَوْمُ", "mon peuple", "ق-و-م", 58],
      ["نُوحٍ", "Noé", "—", 43],
      ["مِن", "de", "particule", 3226],
      ["كُلُّ", "de tout", "ك-ل-ل", 123],
      ["أُمَّةٍ", "communauté", "أ-م-م", 64],
      ["بِهِ", "par lui", "بِ + هُ", 327],
      ["الْحَقَّ", "la vérité", "ح-ق-ق", 48],
      ["فَكَيْفَ", "comment ?", "particule interrogative", 62],
      ["كَانَ", "il était", "ك-و-ن", 1360],
      ["عِقَابِ", "punition", "ع-ق-ب", 10]
    ],
    6: [
      ["وَكَذَٰلِكَ", "ainsi", "كَ + ذَلِكَ", 83],
      ["رَبِّكَ", "ton Seigneur", "ر-ب-ب", 116],
      ["عَلَى", "sur", "particule", 1430],
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["كَفَرُواْ", "ils ont mécru", "ك-ف-ر", 189],
      ["أَنَّهُمْ", "certes ils", "إِنَّ + هُمْ", 62],
      ["النَّارِ", "le Feu", "ن-و-ر", 70]
    ],
    7: [
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["الْعَرْشَ", "le Trône", "ع-ر-ش", 43],
      ["وَمَنْ", "et celui qui", "و + مَنْ", 234],
      ["بِحَمْدِ", "louange", "ح-م-د", 68],
      ["رَبِّهِمْ", "leur Seigneur", "ر-ب-ب", 80],
      ["وَيُؤْمِنُونَ", "ils croient", "أ-م-ن", 86],
      ["بِهِ", "par lui", "بِ + هُ", 327],
      ["لِلَّذِينَ", "pour ceux qui", "لِ + pronom relatif", 79],
      ["رَبَّنَا", "notre Seigneur", "ر-ب-ب", 72],
      ["كُلَّ", "de tout", "ك-ل-ل", 123],
      ["شَيْءٍ", "une chose", "ش-ي-ء", 179],
      ["رَّحْمَةً", "miséricorde", "ر-ح-م", 339],
      ["لِلَّذِينَ", "pour ceux qui", "لِ + pronom relatif", 79],
      ["عَذَابَ", "châtiment", "ع-ذ-ب", 373],
      ["الْجَحِيمِ", "la Fournaise", "ج-ح-م", 43]
    ],
    8: [
      ["رَبَّنَا", "notre Seigneur", "ر-ب-ب", 72],
      ["عَدْنٍ", "Éden (séjour éternel)", "ع-د-ن", 11],
      ["الَّتِي", "celle qui", "pronom relatif", 57],
      ["وَمَن", "et celui qui", "و + مَنْ", 234],
      ["مِنْ", "de", "particule", 3226],
      ["إِنَّكَ", "certes tu", "إِنَّ + كَ", 49],
      ["أَنتَ", "toi", "pronom personnel", 55],
      ["الْعَزِيزُ", "Le Puissant", "ع-ز-ز", 46],
      ["الْحَكِيمُ", "Le Sage", "ح-ك-م", 42]
    ],
    9: [
      ["وَمَن", "et celui qui", "و + مَنْ", 234],
      ["يَوْمَئِذٍ", "ce jour-là", "ي-و-م + إِذْ", 63],
      ["فَقَدْ", "alors certes", "ف + قَدْ", 50],
      ["وَذَٰلِكَ", "cela", "pronom démonstratif", 280],
      ["هُوَ", "il", "pronom personnel", 265],
      ["الْعَظِيمُ", "immense", "ع-ظ-م", 107]
    ],
    10: [
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["كَفَرُواْ", "ils ont mécru", "ك-ف-ر", 189],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["مِن", "de", "particule", 3226],
      ["إِذْ", "quand", "particule temporelle", 156],
      ["إِلَى", "vers", "particule", 742]
    ],
    11: [
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["رَبَّنَا", "notre Seigneur", "ر-ب-ب", 72],
      ["فَهَلْ", "est-ce que ?", "particule interrogative", 66],
      ["إِلَىٰ", "vers", "particule", 742],
      ["مِّن", "de", "particule", 3226],
      ["سَبِيلٍ", "chemin", "س-ب-ل", 176]
    ],
    12: [
      ["بِأَنَّهُ", "certes il", "إِنَّ + هُ", 147],
      ["إِذَا", "quand", "particule temporelle", 195],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["وَإِن", "et si", "و + إِنْ", 170],
      ["بِهِ", "par lui", "بِ + هُ", 327],
      ["فَالْحُكْمُ", "juger", "ح-ك-م", 8],
      ["لِلَّهِ", "à Allah", "لِ + أ-ل-ه", 116],
      ["الْعَلِيِّ", "Très-Haut", "ع-ل-و", 11],
      ["الْكَبِيرِ", "Grand", "ك-ب-ر", 5]
    ],
    13: [
      ["هُوَ", "il", "pronom personnel", 265],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["لَكُم", "à vous", "لِ + كُمْ", 294],
      ["مِّنَ", "de", "particule", 3226],
      ["السَّمَاءِ", "du ciel", "س-م-و", 81],
      ["رِزْقًا", "subsistance", "ر-ز-ق", 43],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["مَن", "de", "particule", 3226]
    ],
    14: [
      ["اللَّهَ", "Allah", "أ-ل-ه", 2699],
      ["لَهُ", "à lui", "لِ + هُ", 275],
      ["الدِّينَ", "religion", "د-ي-ن", 94],
      ["وَلَوْ", "et si", "و + لَوْ", 108],
      ["كَرِهَ", "détester", "ك-ر-ه", 41]
    ],
    15: [
      ["الْعَرْشِ", "le Trône", "ع-ر-ش", 43],
      ["الرُّوحَ", "esprit", "ر-و-ح", 21],
      ["مِنْ", "de", "particule", 3226],
      ["عَلَىٰ", "sur", "particule", 1430],
      ["مَن", "de", "particule", 3226],
      ["يَشَاءُ", "Il veut", "ش-ي-ء", 108],
      ["مِنْ", "de", "particule", 3226],
      ["يَوْمَ", "jour", "ي-و-م", 405]
    ],
    16: [
      ["يَوْمَ", "jour", "ي-و-م", 405],
      ["هُم", "eux", "pronom personnel", 180],
      ["لَا", "non", "particule", 812],
      ["عَلَى", "sur", "particule", 1430],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["مِنْهُمْ", "d’eux", "مِن + هُمْ", 145],
      ["شَيْءٌ", "une chose", "ش-ي-ء", 179],
      ["لِّمَنِ", "pour celui qui", "لِ + مَنْ", 55],
      ["الْمُلْكُ", "royauté", "م-ل-ك", 48],
      ["الْيَوْمَ", "jour", "ي-و-م", 405],
      ["لِلَّهِ", "à Allah", "لِ + أ-ل-ه", 116],
      ["الْقَهَّارِ", "Dominateur suprême", "ق-ه-ر", 5]
    ],
    17: [
      ["الْيَوْمَ", "jour", "ي-و-م", 405],
      ["كُلُّ", "de tout", "ك-ل-ل", 123],
      ["نَفْسٍ", "âme", "ن-ف-س", 298],
      ["بِمَا", "par ce que", "بِ + مَا", 296],
      ["لَا", "non", "particule", 812],
      ["ظُلْمَ", "injustice", "ظ-ل-م", 315],
      ["الْيَوْمَ", "jour", "ي-و-م", 405],
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["اللَّهَ", "Allah", "أ-ل-ه", 2699],
      ["الْحِسَابِ", "compte", "ح-س-ب", 109]
    ],
    18: [
      ["يَوْمَ", "jour", "ي-و-م", 405],
      ["إِذِ", "quand", "particule temporelle", 156],
      ["مَا", "ce que", "particule", 1010],
      ["مِنْ", "de", "particule", 3226],
      ["حَمِيمٍ", "eau bouillante", "ح-م-م", 20],
      ["وَلَا", "et ne... pas", "و + لَا", 658]
    ],
    19: [
      ["يَعْلَمُ", "il sait", "ع-ل-م", 62],
      ["وَمَا", "et ce que", "و + مَا", 646]
    ],
    20: [
      ["وَاللَّهُ", "et Allah", "و + أ-ل-ه", 239],
      ["بِالْحَقِّ", "avec vérité", "ح-ق-ق", 74],
      ["وَالَّذِينَ", "et ceux qui", "و + pronom relatif", 164],
      ["مِن", "de", "particule", 3226],
      ["لَا", "non", "particule", 812],
      ["بِشَيْءٍ", "une chose", "ش-ي-ء", 179],
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["اللَّهَ", "Allah", "أ-ل-ه", 2699],
      ["هُوَ", "il", "pronom personnel", 265],
      ["السَّمِيعُ", "Audient", "س-م-ع", 41],
      ["الْبَصِيرُ", "Clairvoyant", "ب-ص-ر", 41]
    ],
    21: [
      ["فِي", "dans", "particule", 4381],
      ["الْأَرْضِ", "la terre", "أ-ر-ض", 219],
      ["كَيْفَ", "comment ?", "particule interrogative", 62],
      ["كَانَ", "il était", "ك-و-ن", 1360],
      ["عَٰقِبَةُ", "pente raide", "ع-ق-ب", 2],
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["كَانُواْ", "ils étaient", "ك-و-ن", 229],
      ["مِن", "de", "particule", 3226],
      ["كَانُواْ", "ils étaient", "ك-و-ن", 229],
      ["هُمْ", "eux", "pronom personnel", 180],
      ["مِنْهُمْ", "d’eux", "مِن + هُمْ", 145],
      ["قُوَّةً", "force", "ق-و-ي", 33],
      ["فِي", "dans", "particule", 4381],
      ["الْأَرْضِ", "la terre", "أ-ر-ض", 219],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["كَانَ", "il était", "ك-و-ن", 1360],
      ["لَهُم", "à eux", "لِ + هُمْ", 325],
      ["مِّنَ", "de", "particule", 3226],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["مِن", "de", "particule", 3226]
    ],
    22: [
      ["ذَٰلِكَ", "cela", "pronom démonstratif", 280],
      ["بِأَنَّهُمْ", "certes ils", "إِنَّ + هُمْ", 62],
      ["كَانَت", "toi", "pronom personnel", 55],
      ["فَكَفَرُواْ", "ils ont mécru", "ك-ف-ر", 189],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["إِنَّهُ", "certes il", "إِنَّ + هُ", 147],
      ["قَوِيٌّ", "Fort", "ق-و-ي", 11],
      ["شَدِيدُ", "intense", "ش-د-د", 52],
      ["الْعِقَابِ", "punition", "ع-ق-ب", 10]
    ],
    23: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["أَرْسَلْنَا", "Nous avons envoyé", "ر-س-ل", 48],
      ["مُوسَىٰ", "Moïse", "nom propre", 129],
      ["مُّبِينٍ", "clair", "ب-ي-ن", 45]
    ],
    24: [
      ["إِلَىٰ", "vers", "particule", 742],
      ["فِرْعَوْنَ", "Pharaon", "nom propre", 48],
      ["فَقَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["سَٰحِرٌ", "magie", "س-ح-ر", 8]
    ],
    25: [
      ["فَلَمَّا", "puis lorsque", "ف + لَمَّا", 101],
      ["بِالْحَقِّ", "avec vérité", "ح-ق-ق", 74],
      ["مِنْ", "de", "particule", 3226],
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["كَيْدُ", "ruse", "ك-ي-د", 35],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["فِي", "dans", "particule", 4381]
    ],
    26: [
      ["وَقَالَ", "et il a dit", "و + ق-و-ل", 85],
      ["فِرْعَوْنُ", "Pharaon", "nom propre", 48],
      ["مُوسَىٰ", "Moïse", "nom propre", 129],
      ["رَبَّهُ", "son Seigneur", "ر-ب-ب", 44],
      ["إِنِّي", "certes moi", "إِنَّ + ي", 131],
      ["أَن", "certes", "particule d’insistance", 609],
      ["أَوْ", "ou", "particule de choix", 264],
      ["أَن", "certes", "particule d’insistance", 609],
      ["فِي", "dans", "particule", 4381],
      ["الْأَرْضِ", "la terre", "أ-ر-ض", 219],
      ["الْفَسَادَ", "corruption", "ف-س-د", 11]
    ],
    27: [
      ["وَقَالَ", "et il a dit", "و + ق-و-ل", 85],
      ["مُوسَىٰ", "Moïse", "nom propre", 129],
      ["إِنِّي", "certes moi", "إِنَّ + ي", 131],
      ["بِرَبِّي", "mon Seigneur", "ر-ب-ب", 91],
      ["وَرَبِّكُم", "votre Seigneur", "ر-ب-ب", 46],
      ["مِّن", "de", "particule", 3226],
      ["كُلِّ", "de tout", "ك-ل-ل", 123],
      ["لَّا", "non", "particule", 812],
      ["بِيَوْمِ", "jour", "ي-و-م", 405],
      ["الْحِسَابِ", "compte", "ح-س-ب", 109]
    ],
    28: [
      ["وَقَالَ", "et il a dit", "و + ق-و-ل", 85],
      ["رَجُلٌ", "homme (individu)", "ر-ج-ل", 57],
      ["مِّنْ", "de", "particule", 3226],
      ["فِرْعَوْنَ", "Pharaon", "nom propre", 48],
      ["أَن", "certes", "particule d’insistance", 609],
      ["رَبِّيَ", "mon Seigneur", "ر-ب-ب", 91],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["وَقَدْ", "et certes", "و + قَدْ", 43],
      ["مِن", "de", "particule", 3226],
      ["رَّبِّكُمْ", "votre Seigneur", "ر-ب-ب", 46],
      ["وَإِن", "et si", "و + إِنْ", 170],
      ["فَعَلَيْهِ", "sur lui", "عَلَى + هُ", 145],
      ["وَإِن", "et si", "و + إِنْ", 170],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["اللَّهَ", "Allah", "أ-ل-ه", 2699],
      ["لَا", "non", "particule", 812],
      ["مَنْ", "de", "particule", 3226],
      ["هُوَ", "il", "pronom personnel", 265]
    ],
    29: [
      ["لَكُمُ", "à vous", "لِ + كُمْ", 294],
      ["الْمُلْكُ", "royauté", "م-ل-ك", 48],
      ["الْيَوْمَ", "jour", "ي-و-م", 405],
      ["فِي", "dans", "particule", 4381],
      ["الْأَرْضِ", "la terre", "أ-ر-ض", 219],
      ["فَمَن", "donc celui qui", "ف + مَنْ", 67],
      ["مِن", "de", "particule", 3226],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["إِن", "certes", "particule d’insistance", 609],
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["فِرْعَوْنُ", "Pharaon", "nom propre", 48],
      ["مَا", "ce que", "particule", 1010],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["مَا", "ce que", "particule", 1010],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["سَبِيلَ", "chemin", "س-ب-ل", 176]
    ],
    30: [
      ["وَقَالَ", "et il a dit", "و + ق-و-ل", 85],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["إِنِّي", "certes moi", "إِنَّ + ي", 131],
      ["عَلَيْكُم", "sur vous", "عَلَى + كُمْ", 146],
      ["مِّثْلَ", "parabole", "م-ث-ل", 169],
      ["يَوْمِ", "jour", "ي-و-م", 405]
    ],
    31: [
      ["مِثْلَ", "parabole", "م-ث-ل", 169],
      ["قَوْمِ", "mon peuple", "ق-و-م", 58],
      ["نُوحٍ", "Noé", "—", 43],
      ["وَعَادٍ", "Aad (peuple de Hud)", "—", 24],
      ["وَثَمُودَ", "Thamud (peuple de Salih)", "—", 26],
      ["وَالَّذِينَ", "et ceux qui", "و + pronom relatif", 164],
      ["مِن", "de", "particule", 3226],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["يُرِيدُ", "il veut", "ر-و-د", 40]
    ],
    32: [
      ["إِنِّي", "certes moi", "إِنَّ + ي", 131],
      ["عَلَيْكُمْ", "sur vous", "عَلَى + كُمْ", 146],
      ["يَوْمَ", "jour", "ي-و-م", 405]
    ],
    33: [
      ["يَوْمَ", "jour", "ي-و-م", 405],
      ["مَا", "ce que", "particule", 1010],
      ["لَكُم", "à vous", "لِ + كُمْ", 294],
      ["مِّنَ", "de", "particule", 3226],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["مِنْ", "de", "particule", 3226],
      ["وَمَن", "et celui qui", "و + مَنْ", 234],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["فَمَا", "alors quoi", "ف + مَا", 86],
      ["لَهُ", "à lui", "لِ + هُ", 275],
      ["مِنْ", "de", "particule", 3226]
    ],
    34: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["يُوسُفُ", "Joseph", "—", 27],
      ["مِن", "de", "particule", 3226],
      ["قَبْلُ", "avant", "ق-ب-ل", 70],
      ["فَمَا", "alors quoi", "ف + مَا", 86],
      ["فِي", "dans", "particule", 4381],
      ["شَكٍّ", "doute", "ش-ك-ك", 5],
      ["مِّمَّا", "de ce que", "مِن + مَا", 111],
      ["بِهِ", "par lui", "بِ + هُ", 327],
      ["حَتَّىٰ", "jusqu’à", "particule de limite", 142],
      ["إِذَا", "quand", "particule temporelle", 195],
      ["هَلَكَ", "périr", "ه-ل-ك", 68],
      ["لَن", "ne... jamais", "particule de négation future", 59],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["مِن", "de", "particule", 3226],
      ["رَسُولًا", "un messager", "ر-س-ل", 50],
      ["كَذَٰلِكَ", "ainsi", "كَ + ذَلِكَ", 83],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["مَنْ", "de", "particule", 3226],
      ["هُوَ", "il", "pronom personnel", 265]
    ],
    35: [
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["فِي", "dans", "particule", 4381],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["بِغَيْرِ", "autre que", "غ-ي-ر", 147],
      ["كَبُرَ", "piété", "ب-ر-ر", 5],
      ["عِندَ", "auprès de", "adverbe / préposition", 98],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["وَعِندَ", "auprès de", "adverbe / préposition", 98],
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["كَذَٰلِكَ", "ainsi", "كَ + ذَلِكَ", 83],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["عَلَىٰ", "sur", "particule", 1430],
      ["كُلِّ", "de tout", "ك-ل-ل", 123],
      ["قَلْبِ", "cœur", "ق-ل-ب", 168],
      ["جَبَّارٍ", "Contraignant", "ج-ب-ر", 5]
    ],
    36: [
      ["وَقَالَ", "et il a dit", "و + ق-و-ل", 85],
      ["فِرْعَوْنُ", "Pharaon", "nom propre", 48],
      ["لِي", "à moi", "لِ + ي", 59],
      ["لَّعَلِّي", "Très-Haut", "ع-ل-و", 11]
    ],
    37: [
      ["إِلَىٰ", "vers", "particule", 742],
      ["مُوسَىٰ", "Moïse", "nom propre", 129],
      ["وَإِنِّي", "certes moi", "إِنَّ + ي", 131],
      ["وَكَذَٰلِكَ", "ainsi", "كَ + ذَلِكَ", 83],
      ["لِفِرْعَوْنَ", "Pharaon", "nom propre", 48],
      ["سُوءُ", "mal", "س-و-أ", 14],
      ["عَنِ", "de", "préposition", 153],
      ["السَّبِيلِ", "chemin", "س-ب-ل", 176],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["كَيْدُ", "ruse", "ك-ي-د", 35],
      ["فِرْعَوْنَ", "Pharaon", "nom propre", 48],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["فِي", "dans", "particule", 4381]
    ],
    38: [
      ["وَقَالَ", "et il a dit", "و + ق-و-ل", 85],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["سَبِيلَ", "chemin", "س-ب-ل", 176]
    ],
    39: [
      ["إِنَّمَا", "seulement", "particule de restriction", 113],
      ["هَٰذِهِ", "celle-ci", "pronom démonstratif", 46],
      ["الدُّنْيَا", "la vie d’ici-bas", "د-ن-و", 115],
      ["وَإِنَّ", "et si", "و + إِنْ", 170],
      ["الْأخِرَةَ", "l’au-delà", "أ-خ-ر", 55],
      ["هِيَ", "elle", "pronom personnel", 47],
      ["دَارُ", "demeure", "د-و-ر", 8]
    ],
    40: [
      ["مَنْ", "de", "particule", 3226],
      ["عَمِلَ", "il a fait", "ع-م-ل", 359],
      ["سَيِّئَةً", "mauvaise action", "س-و-أ", 36],
      ["فَلَا", "alors ne... pas", "ف + لَا", 156],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["وَمَنْ", "et celui qui", "و + مَنْ", 234],
      ["عَمِلَ", "il a fait", "ع-م-ل", 359],
      ["مِّن", "de", "particule", 3226],
      ["ذَكَرٍ", "souvenir", "ذ-ك-ر", 256],
      ["أَوْ", "ou", "particule de choix", 264],
      ["وَهُوَ", "et Il", "و + pronom", 171],
      ["فَأُوْلَـٰئِكَ", "alors ceux-là", "ف + pronom démonstratif", 46],
      ["الْجَنَّةَ", "paradis", "ج-ن-ن", 147],
      ["فِيهَا", "en elle", "فِي + هَا", 241],
      ["بِغَيْرِ", "autre que", "غ-ي-ر", 147],
      ["حِسَابٍ", "compte", "ح-س-ب", 109]
    ],
    41: [
      ["مَا", "ce que", "particule", 1010],
      ["لِي", "à moi", "لِ + ي", 59],
      ["إِلَى", "vers", "particule", 742],
      ["إِلَى", "vers", "particule", 742],
      ["النَّارِ", "le Feu", "ن-و-ر", 70]
    ],
    42: [
      ["بِاللَّهِ", "par Allah", "بِ + أ-ل-ه", 139],
      ["بِهِ", "par lui", "بِ + هُ", 327],
      ["مَا", "ce que", "particule", 1010],
      ["لَيْسَ", "n’est pas", "verbe de négation", 47],
      ["لِي", "à moi", "لِ + ي", 59],
      ["بِهِ", "par lui", "بِ + هُ", 327],
      ["عِلْمٌ", "savoir", "ع-ل-م", 105],
      ["وَأَنَا", "certes Nous", "إِنَّ + نَا", 156],
      ["إِلَى", "vers", "particule", 742],
      ["الْعَزِيزِ", "Le Puissant", "ع-ز-ز", 46],
      ["الْغَفَّـٰرِ", "pardonner", "غ-ف-ر", 234]
    ],
    43: [
      ["لَا", "non", "particule", 812],
      ["أَنَّمَا", "seulement", "particule de restriction", 113],
      ["إِلَيْهِ", "vers lui", "إِلَى + هُ", 76],
      ["لَيْسَ", "n’est pas", "verbe de négation", 47],
      ["لَهُ", "à lui", "لِ + هُ", 275],
      ["فِي", "dans", "particule", 4381],
      ["الدُّنْيَا", "la vie d’ici-bas", "د-ن-و", 115],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["فِي", "dans", "particule", 4381],
      ["الْأخِرَةِ", "l’au-delà", "أ-خ-ر", 55],
      ["وَأَنَّ", "et si", "و + إِنْ", 170],
      ["إِلَى", "vers", "particule", 742],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["وَأَنَّ", "et si", "و + إِنْ", 170],
      ["هُمْ", "eux", "pronom personnel", 180],
      ["النَّارِ", "le Feu", "ن-و-ر", 70]
    ],
    44: [
      ["مَا", "ce que", "particule", 1010],
      ["لَكُمْ", "à vous", "لِ + كُمْ", 294],
      ["إِلَى", "vers", "particule", 742],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["اللَّهَ", "Allah", "أ-ل-ه", 2699],
      ["بَصِيرٌ", "Clairvoyant", "ب-ص-ر", 41]
    ],
    45: [
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["مَا", "ce que", "particule", 1010],
      ["فِرْعَوْنَ", "Pharaon", "nom propre", 48],
      ["سُوءُ", "mal", "س-و-أ", 14],
      ["الْعَذَابِ", "châtiment", "ع-ذ-ب", 373]
    ],
    46: [
      ["النَّارُ", "le Feu", "ن-و-ر", 70],
      ["عَلَيْهَا", "sur elle", "عَلَى + هَا", 51],
      ["وَيَوْمَ", "et le jour où", "و + ي-و-م", 44],
      ["السَّاعَةُ", "Heure (du Jugement)", "س-و-ع", 48],
      ["فِرْعَوْنَ", "Pharaon", "nom propre", 48],
      ["الْعَذَابِ", "châtiment", "ع-ذ-ب", 373]
    ],
    47: [
      ["وَإِذْ", "et quand", "و + إِذْ", 69],
      ["فِي", "dans", "particule", 4381],
      ["النَّارِ", "le Feu", "ن-و-ر", 70],
      ["لِلَّذِينَ", "pour ceux qui", "لِ + pronom relatif", 79],
      ["إِنَّا", "certes Nous", "إِنَّ + نَا", 156],
      ["كُنَّا", "nous étions", "ك-و-ن", 63],
      ["لَكُمْ", "à vous", "لِ + كُمْ", 294],
      ["فَهَلْ", "est-ce que ?", "particule interrogative", 66],
      ["أَنتُم", "vous", "pronom personnel", 78],
      ["مِّنَ", "de", "particule", 3226],
      ["النَّارِ", "le Feu", "ن-و-ر", 70]
    ],
    48: [
      ["قَالَ", "il a dit", "ق-و-ل", 1722],
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["إِنَّا", "certes Nous", "إِنَّ + نَا", 156],
      ["كُلٌّ", "de tout", "ك-ل-ل", 123],
      ["فِيهَا", "en elle", "فِي + هَا", 241],
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["اللَّهَ", "Allah", "أ-ل-ه", 2699],
      ["قَدْ", "déjà", "particule d’aspect", 120],
      ["حَكَمَ", "juger", "ح-ك-م", 8],
      ["بَيْنَ", "entre", "ب-ي-ن", 70]
    ],
    49: [
      ["وَقَالَ", "et il a dit", "و + ق-و-ل", 85],
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["فِي", "dans", "particule", 4381],
      ["النَّارِ", "le Feu", "ن-و-ر", 70],
      ["جَهَنَّمَ", "Jahannam", "nom propre", 54],
      ["رَبَّكُمْ", "votre Seigneur", "ر-ب-ب", 46],
      ["مِّنَ", "de", "particule", 3226],
      ["الْعَذَابِ", "châtiment", "ع-ذ-ب", 373]
    ],
    50: [
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["بَلَىٰ", "mais si !", "—", 22],
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["فِي", "dans", "particule", 4381]
    ],
    51: [
      ["إِنَّا", "certes Nous", "إِنَّ + نَا", 156],
      ["وَالَّذِينَ", "et ceux qui", "و + pronom relatif", 164],
      ["فِي", "dans", "particule", 4381],
      ["الدُّنْيَا", "la vie d’ici-bas", "د-ن-و", 115],
      ["وَيَوْمَ", "et le jour où", "و + ي-و-م", 44]
    ],
    52: [
      ["يَوْمَ", "jour", "ي-و-م", 405],
      ["لَا", "non", "particule", 812],
      ["وَلَهُمُ", "à eux", "لِ + هُمْ", 325],
      ["وَلَهُمْ", "à eux", "لِ + هُمْ", 325],
      ["سُوءُ", "mal", "س-و-أ", 14],
      ["الدَّارِ", "demeure", "د-و-ر", 8]
    ],
    53: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["مُوسَى", "Moïse", "nom propre", 129],
      ["الْهُدَىٰ", "guidance", "ه-د-ي", 46]
    ],
    54: [
      ["هُدًى", "guidance", "ه-د-ي", 46]
    ],
    55: [
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["وَعْدَ", "promettre", "و-ع-د", 7],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["حَقٌّ", "vérité", "ح-ق-ق", 287],
      ["وَاسْتَغْفِرْ", "demander pardon", "غ-ف-ر", 8],
      ["وَسَبِّحْ", "glorifier", "س-ب-ح", 47],
      ["بِحَمْدِ", "louange", "ح-م-د", 68],
      ["رَبِّكَ", "ton Seigneur", "ر-ب-ب", 116],
      ["بِالْعَشِيِّ", "soir", "ع-ش-و", 4]
    ],
    56: [
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["فِي", "dans", "particule", 4381],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["بِغَيْرِ", "autre que", "غ-ي-ر", 147],
      ["إِن", "certes", "particule d’insistance", 609],
      ["فِي", "dans", "particule", 4381],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["كِبْرٌ", "piété", "ب-ر-ر", 5],
      ["مَّا", "ce que", "particule", 1010],
      ["هُم", "eux", "pronom personnel", 180],
      ["بِاللَّهِ", "par Allah", "بِ + أ-ل-ه", 139],
      ["إِنَّهُ", "certes il", "إِنَّ + هُ", 147],
      ["هُوَ", "il", "pronom personnel", 265],
      ["السَّمِيعُ", "Audient", "س-م-ع", 41],
      ["الْبَصِيرُ", "Clairvoyant", "ب-ص-ر", 41]
    ],
    57: [
      ["لَخَلْقُ", "il a créé", "خ-ل-ق", 261],
      ["وَالْأَرْضِ", "et la terre", "و + أ-ر-ض", 108],
      ["مِنْ", "de", "particule", 3226],
      ["خَلْقِ", "il a créé", "خ-ل-ق", 261],
      ["النَّاسِ", "les gens", "ن-و-س / أ-ن-س", 92],
      ["وَلَٰكِنَّ", "mais", "و + لَكِنْ", 57],
      ["النَّاسِ", "les gens", "ن-و-س / أ-ن-س", 92],
      ["لَا", "non", "particule", 812],
      ["يَعْلَمُونَ", "ils savent", "ع-ل-م", 81]
    ],
    58: [
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["الْأَعْمَىٰ", "aveugle", "ع-م-ي", 33],
      ["وَالْبَصِيرُ", "Clairvoyant", "ب-ص-ر", 41],
      ["وَالَّذِينَ", "et ceux qui", "و + pronom relatif", 164],
      ["وَعَمِلُواْ", "et ils ont œuvré", "و + ع-م-ل", 53],
      ["وَلَا", "et ne... pas", "و + لَا", 658],
      ["قَلِيلًا", "peu", "ق-ل-ل", 55],
      ["مَّا", "ce que", "particule", 1010]
    ],
    59: [
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["السَّاعَةَ", "Heure (du Jugement)", "س-و-ع", 48],
      ["لَّا", "non", "particule", 812],
      ["رَيْبَ", "doute", "ر-ي-ب", 8],
      ["فِيهَا", "en elle", "فِي + هَا", 241],
      ["وَلَٰكِنَّ", "mais", "و + لَكِنْ", 57],
      ["النَّاسِ", "les gens", "ن-و-س / أ-ن-س", 92],
      ["لَا", "non", "particule", 812],
      ["يُؤْمِنُونَ", "ils croient", "أ-م-ن", 86]
    ],
    60: [
      ["وَقَالَ", "et il a dit", "و + ق-و-ل", 85],
      ["رَبُّكُمُ", "votre Seigneur", "ر-ب-ب", 46],
      ["لَكُمْ", "à vous", "لِ + كُمْ", 294],
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["عَنْ", "de", "préposition", 153],
      ["جَهَنَّمَ", "Jahannam", "nom propre", 54]
    ],
    61: [
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["جَعَلَ", "il a fait", "ج-ع-ل", 44],
      ["لَكُمُ", "à vous", "لِ + كُمْ", 294],
      ["فِيهِ", "en lui", "فِي + هُ", 127],
      ["وَالنَّهَارَ", "le jour", "ن-ه-ر", 50],
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["اللَّهَ", "Allah", "أ-ل-ه", 2699],
      ["فَضْلٍ", "grâce", "ف-ض-ل", 193],
      ["عَلَى", "sur", "particule", 1430],
      ["النَّاسِ", "les gens", "ن-و-س / أ-ن-س", 92],
      ["وَلَٰكِنَّ", "mais", "و + لَكِنْ", 57],
      ["النَّاسِ", "les gens", "ن-و-س / أ-ن-س", 92],
      ["لَا", "non", "particule", 812]
    ],
    62: [
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["رَبُّكُمْ", "votre Seigneur", "ر-ب-ب", 46],
      ["خَٰلِقُ", "il a créé", "خ-ل-ق", 261],
      ["كُلِّ", "de tout", "ك-ل-ل", 123],
      ["شَيْءٍ", "une chose", "ش-ي-ء", 179],
      ["لَّا", "non", "particule", 812],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["هُوَ", "il", "pronom personnel", 265],
      ["فَأَنَّىٰ", "comment", "—", 4]
    ],
    63: [
      ["كَذَٰلِكَ", "ainsi", "كَ + ذَلِكَ", 83],
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["كَانُواْ", "ils étaient", "ك-و-ن", 229],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699]
    ],
    64: [
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["جَعَلَ", "il a fait", "ج-ع-ل", 44],
      ["لَكُمُ", "à vous", "لِ + كُمْ", 294],
      ["الْأَرْضَ", "la terre", "أ-ر-ض", 219],
      ["وَالسَّمَاءَ", "ciel", "س-م-و", 310],
      ["فَأَحْسَنَ", "bien faire", "ح-س-ن", 33],
      ["مِّنَ", "de", "particule", 3226],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["رَبُّكُمْ", "votre Seigneur", "ر-ب-ب", 46],
      ["فَتَبَارَكَ", "être béni", "ب-ر-ك", 4],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["رَبُّ", "Seigneur", "ر-ب-ب", 980]
    ],
    65: [
      ["هُوَ", "il", "pronom personnel", 265],
      ["الْحَيُّ", "Vivant", "ح-ي-ي", 19],
      ["لَا", "non", "particule", 812],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["هُوَ", "il", "pronom personnel", 265],
      ["لَهُ", "à lui", "لِ + هُ", 275],
      ["الدِّينَ", "religion", "د-ي-ن", 94],
      ["الْحَمْدُ", "louange", "ح-م-د", 68],
      ["لِلَّهِ", "à Allah", "لِ + أ-ل-ه", 116],
      ["رَبِّ", "Seigneur", "ر-ب-ب", 980]
    ],
    66: [
      ["قُلْ", "dis !", "ق-و-ل", 263],
      ["إِنِّي", "certes moi", "إِنَّ + ي", 131],
      ["أَنْ", "certes", "particule d’insistance", 609],
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["مِن", "de", "particule", 3226],
      ["دُونِ", "en dehors de", "د-و-ن", 83],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["لَمَّا", "ce que", "particule", 1010],
      ["مِن", "de", "particule", 3226],
      ["رَّبِّي", "mon Seigneur", "ر-ب-ب", 91],
      ["أَنْ", "certes", "particule d’insistance", 609],
      ["لِرَبِّ", "Seigneur", "ر-ب-ب", 980]
    ],
    67: [
      ["هُوَ", "il", "pronom personnel", 265],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["مِّن", "de", "particule", 3226],
      ["تُرَابٍ", "poussière", "ت-ر-ب", 22],
      ["ثُمَّ", "puis", "particule de succession", 337],
      ["مِن", "de", "particule", 3226],
      ["نُّطْفَةٍ", "goutte (de sperme)", "ن-ط-ف", 12],
      ["ثُمَّ", "puis", "particule de succession", 337],
      ["مِنْ", "de", "particule", 3226],
      ["ثُمَّ", "puis", "particule de succession", 337],
      ["ثُمَّ", "puis", "particule de succession", 337],
      ["ثُمَّ", "puis", "particule de succession", 337],
      ["وَمِنكُم", "de vous", "مِن + كُمْ", 105],
      ["مَّن", "de", "particule", 3226],
      ["مِن", "de", "particule", 3226],
      ["قَبْلُ", "avant", "ق-ب-ل", 70],
      ["وَلَعَلَّكُمْ", "afin que vous", "particule d’espérance / finalité", 59]
    ],
    68: [
      ["هُوَ", "il", "pronom personnel", 265],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["فَإِذَا", "alors quand", "ف + إِذَا", 86],
      ["قَضَىٰ", "décréter", "ق-ض-ي", 63],
      ["فَإِنَّمَا", "seulement", "particule de restriction", 113],
      ["لَهُ", "à lui", "لِ + هُ", 275]
    ],
    69: [
      ["أَلَمْ", "n’a-t-il pas ?", "أ + لَمْ", 78],
      ["إِلَى", "vers", "particule", 742],
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["فِي", "dans", "particule", 4381],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["أَنَّىٰ", "comment", "—", 4]
    ],
    70: [
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["وَبِمَا", "par ce que", "بِ + مَا", 296],
      ["أَرْسَلْنَا", "Nous avons envoyé", "ر-س-ل", 48],
      ["بِهِ", "par lui", "بِ + هُ", 327],
      ["فَسَوْفَ", "particule du futur (bientôt", "—", 42],
      ["يَعْلَمُونَ", "ils savent", "ع-ل-م", 81]
    ],
    71: [
      ["إِذِ", "quand", "particule temporelle", 156],
      ["فِي", "dans", "particule", 4381]
    ],
    72: [
      ["فِي", "dans", "particule", 4381],
      ["الْحَمِيمِ", "eau bouillante", "ح-م-م", 20],
      ["ثُمَّ", "puis", "particule de succession", 337],
      ["فِي", "dans", "particule", 4381],
      ["النَّارِ", "le Feu", "ن-و-ر", 70]
    ],
    73: [
      ["ثُمَّ", "puis", "particule de succession", 337],
      ["لَهُمْ", "à eux", "لِ + هُمْ", 325],
      ["أَيْنَ", "où", "—", 4],
      ["مَا", "ce que", "particule", 1010],
      ["كُنتُمْ", "vous étiez", "ك-و-ن", 188]
    ],
    74: [
      ["مِن", "de", "particule", 3226],
      ["دُونِ", "en dehors de", "د-و-ن", 83],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["بَل", "plutôt", "particule de correction", 113],
      ["لَّمْ", "ne... pas", "particule de négation", 163],
      ["مِن", "de", "particule", 3226],
      ["قَبْلُ", "avant", "ق-ب-ل", 70],
      ["كَذَٰلِكَ", "ainsi", "كَ + ذَلِكَ", 83],
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699]
    ],
    75: [
      ["بِمَا", "par ce que", "بِ + مَا", 296],
      ["كُنتُمْ", "vous étiez", "ك-و-ن", 188],
      ["فِي", "dans", "particule", 4381],
      ["الْأَرْضِ", "la terre", "أ-ر-ض", 219],
      ["بِغَيْرِ", "autre que", "غ-ي-ر", 147],
      ["الْحَقِّ", "la vérité", "ح-ق-ق", 48],
      ["وَبِمَا", "par ce que", "بِ + مَا", 296],
      ["كُنتُمْ", "vous étiez", "ك-و-ن", 188]
    ],
    76: [
      ["جَهَنَّمَ", "Jahannam", "nom propre", 54],
      ["فِيهَا", "en elle", "فِي + هَا", 241]
    ],
    77: [
      ["إِنَّ", "certes", "particule d’insistance", 609],
      ["وَعْدَ", "promettre", "و-ع-د", 7],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["حَقٌّ", "vérité", "ح-ق-ق", 287],
      ["فَإِمَّا", "soit... soit", "—", 4],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["أَوْ", "ou", "particule de choix", 264]
    ],
    78: [
      ["وَلَقَدْ", "et certes", "و + لَ + قَدْ", 124],
      ["أَرْسَلْنَا", "Nous avons envoyé", "ر-س-ل", 48],
      ["مِّن", "de", "particule", 3226],
      ["مِنْهُم", "d’eux", "مِن + هُمْ", 145],
      ["مَّن", "de", "particule", 3226],
      ["عَلَيْكَ", "sur toi", "عَلَى + كَ", 56],
      ["وَمِنْهُم", "d’eux", "مِن + هُمْ", 145],
      ["مَّن", "de", "particule", 3226],
      ["لَّمْ", "ne... pas", "particule de négation", 163],
      ["عَلَيْكَ", "sur toi", "عَلَى + كَ", 56],
      ["وَمَا", "et ce que", "و + مَا", 646],
      ["كَانَ", "il était", "ك-و-ن", 1360],
      ["لِرَسُولٍ", "messager", "ر-س-ل", 332],
      ["أَن", "certes", "particule d’insistance", 609],
      ["إِلَّا", "sauf", "particule d’exception", 662],
      ["بِإِذْنِ", "par permission de", "أ-ذ-ن", 45],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["فَإِذَا", "alors quand", "ف + إِذَا", 86],
      ["جَاءَ", "il est venu", "ج-ي-ء", 57],
      ["أَمْرُ", "ordre", "أ-م-ر", 166],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["بِالْحَقِّ", "avec vérité", "ح-ق-ق", 74],
      ["وَخَسِرَ", "perdre", "خ-س-ر", 8]
    ],
    79: [
      ["اللَّهُ", "Allah", "أ-ل-ه", 2699],
      ["الَّذِي", "celui qui", "pronom", 1464],
      ["جَعَلَ", "il a fait", "ج-ع-ل", 44],
      ["لَكُمُ", "à vous", "لِ + كُمْ", 294],
      ["مِنْهَا", "d’elle", "مِن + هَا", 86],
      ["وَمِنْهَا", "d’elle", "مِن + هَا", 86]
    ],
    80: [
      ["وَلَكُمْ", "à vous", "لِ + كُمْ", 294],
      ["فِيهَا", "en elle", "فِي + هَا", 241],
      ["عَلَيْهَا", "sur elle", "عَلَى + هَا", 51],
      ["فِي", "dans", "particule", 4381],
      ["وَعَلَيْهَا", "sur elle", "عَلَى + هَا", 51],
      ["وَعَلَى", "sur", "particule", 1430],
      ["الْفُلْكِ", "navire", "ف-ل-ك", 23]
    ],
    81: [
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699]
    ],
    82: [
      ["فِي", "dans", "particule", 4381],
      ["الْأَرْضِ", "la terre", "أ-ر-ض", 219],
      ["كَيْفَ", "comment ?", "particule interrogative", 62],
      ["كَانَ", "il était", "ك-و-ن", 1360],
      ["عَٰقِبَةُ", "pente raide", "ع-ق-ب", 2],
      ["الَّذِينَ", "ceux qui", "pronom relatif", 810],
      ["مِن", "de", "particule", 3226],
      ["كَانُواْ", "ils étaient", "ك-و-ن", 229],
      ["مِنْهُمْ", "d’eux", "مِن + هُمْ", 145],
      ["قُوَّةً", "force", "ق-و-ي", 33],
      ["فِي", "dans", "particule", 4381],
      ["الْأَرْضِ", "la terre", "أ-ر-ض", 219],
      ["فَمَا", "alors quoi", "ف + مَا", 86],
      ["عَنْهُم", "d’eux", "عَنْ + هُمْ", 67],
      ["مَّا", "ce que", "particule", 1010],
      ["كَانُواْ", "ils étaient", "ك-و-ن", 229]
    ],
    83: [
      ["فَلَمَّا", "puis lorsque", "ف + لَمَّا", 101],
      ["بِمَا", "par ce que", "بِ + مَا", 296],
      ["مِّنَ", "de", "particule", 3226],
      ["الْعِلْمِ", "savoir", "ع-ل-م", 105],
      ["بِهِم", "eux", "pronom personnel", 180],
      ["مَّا", "ce que", "particule", 1010],
      ["كَانُواْ", "ils étaient", "ك-و-ن", 229],
      ["بِهِ", "par lui", "بِ + هُ", 327]
    ],
    84: [
      ["فَلَمَّا", "puis lorsque", "ف + لَمَّا", 101],
      ["قَالُواْ", "ils ont dit", "ق-و-ل", 250],
      ["بِاللَّهِ", "par Allah", "بِ + أ-ل-ه", 139],
      ["بِمَا", "par ce que", "بِ + مَا", 296],
      ["كُنَّا", "nous étions", "ك-و-ن", 63],
      ["بِهِ", "par lui", "بِ + هُ", 327]
    ],
    85: [
      ["فَلَمْ", "ne... pas", "particule de négation", 163],
      ["لَمَّا", "ce que", "particule", 1010],
      ["اللَّهِ", "Allah", "أ-ل-ه", 2699],
      ["الَّتِي", "celle qui", "pronom relatif", 57],
      ["قَدْ", "déjà", "particule d’aspect", 120],
      ["فِي", "dans", "particule", 4381],
      ["وَخَسِرَ", "perdre", "خ-س-ر", 8]
    ]
  },

  // Analyses de versets
  analyses: {
    3: "La carte d'identité divine du v.3 en quatre traits alternés : Ghāfir adh-dhanb (Pardonneur), Qābil at-tawb (Accueillant au repentir), Shadīd al-ʿiqāb (Terrible en punition), Dhī ṭ-ṭawl (Détenteur de faveur). Deux noms d'espoir encadrant un nom de crainte, puis la générosité : le portrait interdit à la fois le désespoir et la présomption.",
    7: "Les porteurs du Trône prient... pour les humains. La solidarité verticale du cosmos : les créatures les plus hautes intercèdent pour les repentants d'en bas — et leur argument est le v.7 : « Tu embrasses toute chose de miséricorde ET de science ». La raḥma précède le ʿilm dans leur bouche : même l'omniscience est enveloppée de miséricorde.",
    28: "Rajulun muʾminun min āli Firʿawn yaktumu īmānah : le croyant caché. Sa méthode de plaidoyer est un modèle d'argumentation minimale : même si Moïse ment, son mensonge le regarde ; s'il dit vrai, le risque est pour vous — le pari asymétrique, formulé mille ans avant Pascal. Puis l'appel au précédent (Joseph, v.34) et l'aveu final : « je confie mon sort à Allah » (v.44). Un seul homme, sans pouvoir, tenant tête au tyran par la seule raison.",
    60: "Udʿūnī astajib lakum : l'invocation garantie de réponse — sans intermédiaire, sans condition de forme. La suite du verset nomme le refus de demander ce qu'il est : de l'orgueil (yastakbirūna ʿan ʿibādatī). Ne pas prier n'est pas de l'autonomie : c'est de l'arrogance envers la source de tout. La réponse peut différer de la demande — donnée, différée, ou convertie en bien — mais la ligne n'est jamais coupée."
  }
};
