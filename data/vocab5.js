// ============================================================
// VOCABULAIRE — complément (rangs 1001 à 1100)
// ------------------------------------------------------------
// Les 100 mots les plus fréquents du Coran qui manquaient au glossaire.
// Leur ajout permet d'analyser toutes leurs formes fléchies dans le texte.
//
// Ces entrées ne comportent que les champs factuels : forme, translittération,
// racine, fréquence et traductions. Racine et fréquence proviennent du Quranic
// Arabic Corpus (voir sources.html) ; les traductions sont celles du projet.
//
// « a_relire » les signale aux relecteurs : « famille » et « profondeur »,
// présents sur les 1000 premières entrées, restent à rédiger.
// ============================================================
const VOCAB5 = [
  {
    "id": 1001,
    "ar": "ءَامَنَ",
    "translit": "āmana",
    "frequence": 440,
    "rang": 1001,
    "racine": "ا-م-ن",
    "theme": "foi",
    "traductions": {
      "fr": "croire / avoir foi",
      "en": "to believe",
      "tr": "iman etmek / inanmak"
    },
    "a_relire": true
  },
  {
    "id": 1002,
    "ar": "ءَايَة",
    "translit": "āya",
    "frequence": 361,
    "rang": 1002,
    "racine": "ا-ي-ي",
    "theme": "foi",
    "traductions": {
      "fr": "signe / verset",
      "en": "sign / verse",
      "tr": "ayet / işaret"
    },
    "a_relire": true
  },
  {
    "id": 1003,
    "ar": "رَءَا",
    "translit": "raʾā",
    "frequence": 265,
    "rang": 1003,
    "racine": "ر-ا-ي",
    "theme": "homme",
    "traductions": {
      "fr": "voir",
      "en": "to see",
      "tr": "görmek"
    },
    "a_relire": true
  },
  {
    "id": 1004,
    "ar": "كِتَٰب",
    "translit": "kitāb",
    "frequence": 256,
    "rang": 1004,
    "racine": "ك-ت-ب",
    "theme": "foi",
    "traductions": {
      "fr": "livre / Écriture",
      "en": "book / Scripture",
      "tr": "kitap"
    },
    "a_relire": true
  },
  {
    "id": 1005,
    "ar": "إِلَٰه",
    "translit": "ilāh",
    "frequence": 146,
    "rang": 1005,
    "racine": "ا-ل-ه",
    "theme": "allah",
    "traductions": {
      "fr": "divinité",
      "en": "deity / god",
      "tr": "ilah"
    },
    "a_relire": true
  },
  {
    "id": 1006,
    "ar": "ظَالِم",
    "translit": "ẓālim",
    "frequence": 129,
    "rang": 1006,
    "racine": "ظ-ل-م",
    "theme": "morale",
    "traductions": {
      "fr": "injuste / oppresseur",
      "en": "wrongdoer / unjust",
      "tr": "zalim"
    },
    "a_relire": true
  },
  {
    "id": 1007,
    "ar": "كَٰفِرُون",
    "translit": "kāfirūn",
    "frequence": 128,
    "rang": 1007,
    "racine": "ك-ف-ر",
    "theme": "foi",
    "traductions": {
      "fr": "mécréants",
      "en": "disbelievers",
      "tr": "kâfirler"
    },
    "a_relire": true
  },
  {
    "id": 1008,
    "ar": "أَهْل",
    "translit": "ahl",
    "frequence": 127,
    "rang": 1008,
    "racine": "ا-ه-ل",
    "theme": "communaute",
    "traductions": {
      "fr": "gens de / famille de",
      "en": "people of / family of",
      "tr": "ehli / halkı"
    },
    "a_relire": true
  },
  {
    "id": 1009,
    "ar": "بَعْض",
    "translit": "baʿḍ",
    "frequence": 124,
    "rang": 1009,
    "racine": "ب-ع-ض",
    "theme": "grammaire",
    "traductions": {
      "fr": "une partie / certains",
      "en": "some / part of",
      "tr": "bazı / kimi"
    },
    "a_relire": true
  },
  {
    "id": 1010,
    "ar": "ٱتَّخَذَ",
    "translit": "ittakhadha",
    "frequence": 124,
    "rang": 1010,
    "racine": "ا-خ-ذ",
    "theme": "homme",
    "traductions": {
      "fr": "prendre / adopter",
      "en": "to take / to adopt",
      "tr": "edinmek"
    },
    "a_relire": true
  },
  {
    "id": 1011,
    "ar": "مُؤْمِن",
    "translit": "muʾmin",
    "frequence": 117,
    "rang": 1011,
    "racine": "ا-م-ن",
    "theme": "foi",
    "traductions": {
      "fr": "croyant",
      "en": "believer",
      "tr": "mümin"
    },
    "a_relire": true
  },
  {
    "id": 1012,
    "ar": "أَرَادَ",
    "translit": "arāda",
    "frequence": 98,
    "rang": 1012,
    "racine": "ر-و-د",
    "theme": "homme",
    "traductions": {
      "fr": "vouloir",
      "en": "to want / to intend",
      "tr": "istemek / dilemek"
    },
    "a_relire": true
  },
  {
    "id": 1013,
    "ar": "ذُو",
    "translit": "dhū",
    "frequence": 92,
    "rang": 1013,
    "racine": "—",
    "theme": "grammaire",
    "traductions": {
      "fr": "possesseur de / doté de",
      "en": "possessor of / endowed with",
      "tr": "sahibi"
    },
    "a_relire": true
  },
  {
    "id": 1014,
    "ar": "شَيْطَٰن",
    "translit": "shayṭān",
    "frequence": 88,
    "rang": 1014,
    "racine": "ش-ط-ن",
    "theme": "foi",
    "traductions": {
      "fr": "Satan / démon",
      "en": "Satan / devil",
      "tr": "şeytan"
    },
    "a_relire": true
  },
  {
    "id": 1015,
    "ar": "لَيْل",
    "translit": "layl",
    "frequence": 84,
    "rang": 1015,
    "racine": "ل-ي-ل",
    "theme": "temps",
    "traductions": {
      "fr": "nuit",
      "en": "night",
      "tr": "gece"
    },
    "a_relire": true
  },
  {
    "id": 1016,
    "ar": "خَافَ",
    "translit": "khāfa",
    "frequence": 83,
    "rang": 1016,
    "racine": "خ-و-ف",
    "theme": "foi",
    "traductions": {
      "fr": "craindre",
      "en": "to fear",
      "tr": "korkmak"
    },
    "a_relire": true
  },
  {
    "id": 1017,
    "ar": "صَلَوٰة",
    "translit": "ṣalāt",
    "frequence": 82,
    "rang": 1017,
    "racine": "ص-ل-و",
    "theme": "priere",
    "traductions": {
      "fr": "prière",
      "en": "prayer",
      "tr": "namaz"
    },
    "a_relire": true
  },
  {
    "id": 1018,
    "ar": "رَّحِيم",
    "translit": "raḥīm",
    "frequence": 82,
    "rang": 1018,
    "racine": "ر-ح-م",
    "theme": "allah",
    "traductions": {
      "fr": "Très Miséricordieux",
      "en": "Most Merciful",
      "tr": "Rahîm / çok merhametli"
    },
    "a_relire": true
  },
  {
    "id": 1019,
    "ar": "تَوَلَّىٰ",
    "translit": "tawallā",
    "frequence": 78,
    "rang": 1019,
    "racine": "و-ل-ي",
    "theme": "morale",
    "traductions": {
      "fr": "se détourner",
      "en": "to turn away",
      "tr": "yüz çevirmek"
    },
    "a_relire": true
  },
  {
    "id": 1020,
    "ar": "أَصْحَٰب",
    "translit": "aṣḥāb",
    "frequence": 77,
    "rang": 1020,
    "racine": "ص-ح-ب",
    "theme": "communaute",
    "traductions": {
      "fr": "compagnons / gens de",
      "en": "companions / people of",
      "tr": "ashab / arkadaşlar"
    },
    "a_relire": true
  },
  {
    "id": 1021,
    "ar": "حَيَوٰة",
    "translit": "ḥayāt",
    "frequence": 76,
    "rang": 1021,
    "racine": "ح-ي-ي",
    "theme": "creation",
    "traductions": {
      "fr": "vie",
      "en": "life",
      "tr": "hayat"
    },
    "a_relire": true
  },
  {
    "id": 1022,
    "ar": "أَلِيم",
    "translit": "alīm",
    "frequence": 72,
    "rang": 1022,
    "racine": "ا-ل-م",
    "theme": "jugement",
    "traductions": {
      "fr": "douloureux",
      "en": "painful",
      "tr": "acı verici / elem verici"
    },
    "a_relire": true
  },
  {
    "id": 1023,
    "ar": "عَٰلَمِين",
    "translit": "ʿālamīn",
    "frequence": 72,
    "rang": 1023,
    "racine": "ع-ل-م",
    "theme": "creation",
    "traductions": {
      "fr": "les mondes / les univers",
      "en": "the worlds",
      "tr": "âlemler"
    },
    "a_relire": true
  },
  {
    "id": 1024,
    "ar": "أَشْرَكَ",
    "translit": "ashraka",
    "frequence": 71,
    "rang": 1024,
    "racine": "ش-ر-ك",
    "theme": "foi",
    "traductions": {
      "fr": "associer (à Allah)",
      "en": "to associate partners with God",
      "tr": "şirk koşmak"
    },
    "a_relire": true
  },
  {
    "id": 1025,
    "ar": "إِنسَٰن",
    "translit": "insān",
    "frequence": 70,
    "rang": 1025,
    "racine": "ا-ن-س",
    "theme": "homme",
    "traductions": {
      "fr": "être humain",
      "en": "human being",
      "tr": "insan"
    },
    "a_relire": true
  },
  {
    "id": 1026,
    "ar": "قِيَٰمَة",
    "translit": "qiyāma",
    "frequence": 70,
    "rang": 1026,
    "racine": "ق-و-م",
    "theme": "jugement",
    "traductions": {
      "fr": "résurrection",
      "en": "resurrection",
      "tr": "kıyamet"
    },
    "a_relire": true
  },
  {
    "id": 1027,
    "ar": "قُرْءَان",
    "translit": "qurʾān",
    "frequence": 70,
    "rang": 1027,
    "racine": "ق-ر-ا",
    "theme": "foi",
    "traductions": {
      "fr": "Coran",
      "en": "Quran",
      "tr": "Kur'an"
    },
    "a_relire": true
  },
  {
    "id": 1028,
    "ar": "أَرْسَلَ",
    "translit": "arsala",
    "frequence": 68,
    "rang": 1028,
    "racine": "ر-س-ل",
    "theme": "prophetie",
    "traductions": {
      "fr": "envoyer",
      "en": "to send",
      "tr": "göndermek"
    },
    "a_relire": true
  },
  {
    "id": 1029,
    "ar": "صَٰلِح",
    "translit": "ṣāliḥ",
    "frequence": 65,
    "rang": 1029,
    "racine": "ص-ل-ح",
    "theme": "morale",
    "traductions": {
      "fr": "vertueux / pieux",
      "en": "righteous",
      "tr": "salih / iyi"
    },
    "a_relire": true
  },
  {
    "id": 1030,
    "ar": "أَضَلَّ",
    "translit": "aḍalla",
    "frequence": 64,
    "rang": 1030,
    "racine": "ض-ل-ل",
    "theme": "morale",
    "traductions": {
      "fr": "égarer",
      "en": "to lead astray",
      "tr": "saptırmak"
    },
    "a_relire": true
  },
  {
    "id": 1031,
    "ar": "آبَاء",
    "translit": "ābāʾ",
    "frequence": 64,
    "rang": 1031,
    "racine": "ا-ب-و",
    "theme": "communaute",
    "traductions": {
      "fr": "pères / ancêtres",
      "en": "fathers / forefathers",
      "tr": "atalar / babalar"
    },
    "a_relire": true
  },
  {
    "id": 1032,
    "ar": "تَابَ",
    "translit": "tāba",
    "frequence": 63,
    "rang": 1032,
    "racine": "ت-و-ب",
    "theme": "morale",
    "traductions": {
      "fr": "se repentir",
      "en": "to repent",
      "tr": "tövbe etmek"
    },
    "a_relire": true
  },
  {
    "id": 1033,
    "ar": "نَزَّلَ",
    "translit": "nazzala",
    "frequence": 62,
    "rang": 1033,
    "racine": "ن-ز-ل",
    "theme": "prophetie",
    "traductions": {
      "fr": "faire descendre / révéler",
      "en": "to send down / to reveal",
      "tr": "indirmek"
    },
    "a_relire": true
  },
  {
    "id": 1034,
    "ar": "ٱبْن",
    "translit": "ibn",
    "frequence": 62,
    "rang": 1034,
    "racine": "ب-ن-ي",
    "theme": "communaute",
    "traductions": {
      "fr": "fils",
      "en": "son",
      "tr": "oğul"
    },
    "a_relire": true
  },
  {
    "id": 1035,
    "ar": "رَزَقَ",
    "translit": "razaqa",
    "frequence": 61,
    "rang": 1035,
    "racine": "ر-ز-ق",
    "theme": "creation",
    "traductions": {
      "fr": "pourvoir / accorder la subsistance",
      "en": "to provide / to sustain",
      "tr": "rızık vermek"
    },
    "a_relire": true
  },
  {
    "id": 1036,
    "ar": "صَّٰلِحَٰت",
    "translit": "ṣāliḥāt",
    "frequence": 61,
    "rang": 1036,
    "racine": "ص-ل-ح",
    "theme": "morale",
    "traductions": {
      "fr": "bonnes œuvres",
      "en": "righteous deeds",
      "tr": "salih ameller"
    },
    "a_relire": true
  },
  {
    "id": 1037,
    "ar": "تَلَىٰ",
    "translit": "talā",
    "frequence": 61,
    "rang": 1037,
    "racine": "ت-ل-و",
    "theme": "priere",
    "traductions": {
      "fr": "réciter",
      "en": "to recite",
      "tr": "okumak / tilavet etmek"
    },
    "a_relire": true
  },
  {
    "id": 1038,
    "ar": "أَىّ",
    "translit": "ayy",
    "frequence": 60,
    "rang": 1038,
    "racine": "—",
    "theme": "grammaire",
    "traductions": {
      "fr": "quel / lequel",
      "en": "which / what",
      "tr": "hangi"
    },
    "a_relire": true
  },
  {
    "id": 1039,
    "ar": "صَادِق",
    "translit": "ṣādiq",
    "frequence": 58,
    "rang": 1039,
    "racine": "ص-د-ق",
    "theme": "morale",
    "traductions": {
      "fr": "véridique",
      "en": "truthful",
      "tr": "doğru sözlü / sadık"
    },
    "a_relire": true
  },
  {
    "id": 1040,
    "ar": "حَكِيم",
    "translit": "ḥakīm",
    "frequence": 55,
    "rang": 1040,
    "racine": "ح-ك-م",
    "theme": "allah",
    "traductions": {
      "fr": "Sage",
      "en": "Wise",
      "tr": "Hakîm / hikmet sahibi"
    },
    "a_relire": true
  },
  {
    "id": 1041,
    "ar": "مُجْرِم",
    "translit": "mujrim",
    "frequence": 52,
    "rang": 1041,
    "racine": "ج-ر-م",
    "theme": "jugement",
    "traductions": {
      "fr": "criminel / coupable",
      "en": "criminal / guilty",
      "tr": "suçlu / mücrim"
    },
    "a_relire": true
  },
  {
    "id": 1042,
    "ar": "أَهْلَكَ",
    "translit": "ahlaka",
    "frequence": 51,
    "rang": 1042,
    "racine": "ه-ل-ك",
    "theme": "jugement",
    "traductions": {
      "fr": "anéantir / détruire",
      "en": "to destroy",
      "tr": "helak etmek"
    },
    "a_relire": true
  },
  {
    "id": 1043,
    "ar": "تَذَكَّرَ",
    "translit": "tadhakkara",
    "frequence": 51,
    "rang": 1043,
    "racine": "ذ-ك-ر",
    "theme": "morale",
    "traductions": {
      "fr": "se rappeler / méditer",
      "en": "to remember / to reflect",
      "tr": "düşünüp öğüt almak"
    },
    "a_relire": true
  },
  {
    "id": 1044,
    "ar": "ٱفْتَرَىٰ",
    "translit": "iftarā",
    "frequence": 50,
    "rang": 1044,
    "racine": "ف-ر-ي",
    "theme": "morale",
    "traductions": {
      "fr": "inventer (un mensonge)",
      "en": "to fabricate (a lie)",
      "tr": "iftira etmek / uydurmak"
    },
    "a_relire": true
  },
  {
    "id": 1045,
    "ar": "كَتَبَ",
    "translit": "kataba",
    "frequence": 49,
    "rang": 1045,
    "racine": "ك-ت-ب",
    "theme": "foi",
    "traductions": {
      "fr": "écrire / prescrire",
      "en": "to write / to prescribe",
      "tr": "yazmak"
    },
    "a_relire": true
  },
  {
    "id": 1046,
    "ar": "خَرَجَ",
    "translit": "kharaja",
    "frequence": 47,
    "rang": 1046,
    "racine": "خ-ر-ج",
    "theme": "homme",
    "traductions": {
      "fr": "sortir",
      "en": "to go out",
      "tr": "çıkmak"
    },
    "a_relire": true
  },
  {
    "id": 1047,
    "ar": "مَآء",
    "translit": "māʾ",
    "frequence": 46,
    "rang": 1047,
    "racine": "م-و-ه",
    "theme": "creation",
    "traductions": {
      "fr": "eau",
      "en": "water",
      "tr": "su"
    },
    "a_relire": true
  },
  {
    "id": 1048,
    "ar": "إِيمَٰن",
    "translit": "īmān",
    "frequence": 45,
    "rang": 1048,
    "racine": "ا-م-ن",
    "theme": "foi",
    "traductions": {
      "fr": "foi",
      "en": "faith",
      "tr": "iman"
    },
    "a_relire": true
  },
  {
    "id": 1049,
    "ar": "أُولِى",
    "translit": "ulī",
    "frequence": 45,
    "rang": 1049,
    "racine": "ا-و-ل",
    "theme": "grammaire",
    "traductions": {
      "fr": "doués de / possesseurs de",
      "en": "possessors of",
      "tr": "sahipleri"
    },
    "a_relire": true
  },
  {
    "id": 1050,
    "ar": "يَذَرَ",
    "translit": "yadhar",
    "frequence": 45,
    "rang": 1050,
    "racine": "و-ذ-ر",
    "theme": "homme",
    "traductions": {
      "fr": "laisser / délaisser",
      "en": "to leave / to forsake",
      "tr": "bırakmak"
    },
    "a_relire": true
  },
  {
    "id": 1051,
    "ar": "أَنذَرَ",
    "translit": "andhara",
    "frequence": 44,
    "rang": 1051,
    "racine": "ن-ذ-ر",
    "theme": "prophetie",
    "traductions": {
      "fr": "avertir",
      "en": "to warn",
      "tr": "uyarmak"
    },
    "a_relire": true
  },
  {
    "id": 1052,
    "ar": "مَلَكَتْ",
    "translit": "malakat",
    "frequence": 44,
    "rang": 1052,
    "racine": "م-ل-ك",
    "theme": "communaute",
    "traductions": {
      "fr": "posséder",
      "en": "to possess",
      "tr": "sahip olmak"
    },
    "a_relire": true
  },
  {
    "id": 1053,
    "ar": "صِرَٰط",
    "translit": "ṣirāṭ",
    "frequence": 43,
    "rang": 1053,
    "racine": "ص-ر-ط",
    "theme": "foi",
    "traductions": {
      "fr": "chemin / voie",
      "en": "path / way",
      "tr": "yol / sırat"
    },
    "a_relire": true
  },
  {
    "id": 1054,
    "ar": "ٱسْتَطَاعَ",
    "translit": "istaṭāʿa",
    "frequence": 42,
    "rang": 1054,
    "racine": "ط-و-ع",
    "theme": "homme",
    "traductions": {
      "fr": "pouvoir / être capable",
      "en": "to be able",
      "tr": "güç yetirmek"
    },
    "a_relire": true
  },
  {
    "id": 1055,
    "ar": "أُدْخِلَ",
    "translit": "udkhila",
    "frequence": 42,
    "rang": 1055,
    "racine": "د-خ-ل",
    "theme": "jugement",
    "traductions": {
      "fr": "faire entrer",
      "en": "to be admitted / to enter",
      "tr": "sokulmak / girdirilmek"
    },
    "a_relire": true
  },
  {
    "id": 1056,
    "ar": "عَذَّبَ",
    "translit": "ʿadhdhaba",
    "frequence": 41,
    "rang": 1056,
    "racine": "ع-ذ-ب",
    "theme": "jugement",
    "traductions": {
      "fr": "châtier",
      "en": "to punish",
      "tr": "azap etmek"
    },
    "a_relire": true
  },
  {
    "id": 1057,
    "ar": "تَرَكَ",
    "translit": "taraka",
    "frequence": 40,
    "rang": 1057,
    "racine": "ت-ر-ك",
    "theme": "homme",
    "traductions": {
      "fr": "laisser / abandonner",
      "en": "to leave",
      "tr": "terk etmek"
    },
    "a_relire": true
  },
  {
    "id": 1058,
    "ar": "سُبْحَٰن",
    "translit": "subḥān",
    "frequence": 40,
    "rang": 1058,
    "racine": "س-ب-ح",
    "theme": "allah",
    "traductions": {
      "fr": "gloire à / pureté de",
      "en": "glory be to",
      "tr": "sübhan / noksansızlık"
    },
    "a_relire": true
  },
  {
    "id": 1059,
    "ar": "ٱهْتَدَىٰ",
    "translit": "ihtadā",
    "frequence": 40,
    "rang": 1059,
    "racine": "ه-د-ي",
    "theme": "foi",
    "traductions": {
      "fr": "être guidé",
      "en": "to be guided",
      "tr": "hidayete ermek"
    },
    "a_relire": true
  },
  {
    "id": 1060,
    "ar": "أَرَيْ",
    "translit": "arā",
    "frequence": 40,
    "rang": 1060,
    "racine": "ر-ا-ي",
    "theme": "prophetie",
    "traductions": {
      "fr": "montrer / faire voir",
      "en": "to show",
      "tr": "göstermek"
    },
    "a_relire": true
  },
  {
    "id": 1061,
    "ar": "بِئْسَ",
    "translit": "biʾsa",
    "frequence": 40,
    "rang": 1061,
    "racine": "ب-ا-س",
    "theme": "jugement",
    "traductions": {
      "fr": "quel mauvais / combien mauvais",
      "en": "how wretched / evil is",
      "tr": "ne kötü"
    },
    "a_relire": true
  },
  {
    "id": 1062,
    "ar": "شَرِيك",
    "translit": "sharīk",
    "frequence": 40,
    "rang": 1062,
    "racine": "ش-ر-ك",
    "theme": "allah",
    "traductions": {
      "fr": "associé",
      "en": "partner / associate",
      "tr": "ortak"
    },
    "a_relire": true
  },
  {
    "id": 1063,
    "ar": "رِزْق",
    "translit": "rizq",
    "frequence": 39,
    "rang": 1063,
    "racine": "ر-ز-ق",
    "theme": "creation",
    "traductions": {
      "fr": "subsistance / bien accordé",
      "en": "provision / sustenance",
      "tr": "rızık"
    },
    "a_relire": true
  },
  {
    "id": 1064,
    "ar": "مَّاتَ",
    "translit": "māta",
    "frequence": 39,
    "rang": 1064,
    "racine": "م-و-ت",
    "theme": "jugement",
    "traductions": {
      "fr": "mourir",
      "en": "to die",
      "tr": "ölmek"
    },
    "a_relire": true
  },
  {
    "id": 1065,
    "ar": "حَرَّمَ",
    "translit": "ḥarrama",
    "frequence": 39,
    "rang": 1065,
    "racine": "ح-ر-م",
    "theme": "morale",
    "traductions": {
      "fr": "interdire / rendre illicite",
      "en": "to forbid",
      "tr": "haram kılmak"
    },
    "a_relire": true
  },
  {
    "id": 1066,
    "ar": "مَّيِّت",
    "translit": "mayyit",
    "frequence": 38,
    "rang": 1066,
    "racine": "م-و-ت",
    "theme": "jugement",
    "traductions": {
      "fr": "mort / sans vie",
      "en": "dead",
      "tr": "ölü"
    },
    "a_relire": true
  },
  {
    "id": 1067,
    "ar": "مُحْسِن",
    "translit": "muḥsin",
    "frequence": 38,
    "rang": 1067,
    "racine": "ح-س-ن",
    "theme": "morale",
    "traductions": {
      "fr": "bienfaisant",
      "en": "doer of good",
      "tr": "ihsan sahibi / iyilik eden"
    },
    "a_relire": true
  },
  {
    "id": 1068,
    "ar": "ضَلَٰل",
    "translit": "ḍalāl",
    "frequence": 38,
    "rang": 1068,
    "racine": "ض-ل-ل",
    "theme": "morale",
    "traductions": {
      "fr": "égarement",
      "en": "error / straying",
      "tr": "sapıklık / dalâlet"
    },
    "a_relire": true
  },
  {
    "id": 1069,
    "ar": "يَحْزُن",
    "translit": "yaḥzan",
    "frequence": 37,
    "rang": 1069,
    "racine": "ح-ز-ن",
    "theme": "homme",
    "traductions": {
      "fr": "s'attrister",
      "en": "to grieve",
      "tr": "üzülmek"
    },
    "a_relire": true
  },
  {
    "id": 1070,
    "ar": "عَزِيز",
    "translit": "ʿazīz",
    "frequence": 37,
    "rang": 1070,
    "racine": "ع-ز-ز",
    "theme": "allah",
    "traductions": {
      "fr": "Puissant / Tout-Puissant",
      "en": "Almighty / Mighty",
      "tr": "Azîz / güçlü"
    },
    "a_relire": true
  },
  {
    "id": 1071,
    "ar": "صَدَّ",
    "translit": "ṣadda",
    "frequence": 37,
    "rang": 1071,
    "racine": "ص-د-د",
    "theme": "morale",
    "traductions": {
      "fr": "détourner / empêcher",
      "en": "to turn away / to hinder",
      "tr": "alıkoymak / engellemek"
    },
    "a_relire": true
  },
  {
    "id": 1072,
    "ar": "سُلْطَٰن",
    "translit": "sulṭān",
    "frequence": 37,
    "rang": 1072,
    "racine": "س-ل-ط",
    "theme": "foi",
    "traductions": {
      "fr": "autorité / preuve",
      "en": "authority / proof",
      "tr": "delil / yetki"
    },
    "a_relire": true
  },
  {
    "id": 1073,
    "ar": "سَيِّـَٔات",
    "translit": "sayyiʾāt",
    "frequence": 36,
    "rang": 1073,
    "racine": "س-و-ا",
    "theme": "morale",
    "traductions": {
      "fr": "mauvaises actions",
      "en": "evil deeds",
      "tr": "kötülükler"
    },
    "a_relire": true
  },
  {
    "id": 1074,
    "ar": "ٱسْتَوَىٰٓ",
    "translit": "istawā",
    "frequence": 35,
    "rang": 1074,
    "racine": "س-و-ي",
    "theme": "creation",
    "traductions": {
      "fr": "s'établir / s'égaliser",
      "en": "to establish / to be equal",
      "tr": "istiva etmek / eşit olmak"
    },
    "a_relire": true
  },
  {
    "id": 1075,
    "ar": "مَتَٰع",
    "translit": "matāʿ",
    "frequence": 35,
    "rang": 1075,
    "racine": "م-ت-ع",
    "theme": "creation",
    "traductions": {
      "fr": "jouissance / bien éphémère",
      "en": "enjoyment / provision",
      "tr": "geçimlik / meta"
    },
    "a_relire": true
  },
  {
    "id": 1076,
    "ar": "نَصِير",
    "translit": "naṣīr",
    "frequence": 35,
    "rang": 1076,
    "racine": "ن-ص-ر",
    "theme": "communaute",
    "traductions": {
      "fr": "secoureur / allié",
      "en": "helper",
      "tr": "yardımcı"
    },
    "a_relire": true
  },
  {
    "id": 1077,
    "ar": "ٱخْتَلَفَ",
    "translit": "ikhtalafa",
    "frequence": 35,
    "rang": 1077,
    "racine": "خ-ل-ف",
    "theme": "communaute",
    "traductions": {
      "fr": "diverger / être en désaccord",
      "en": "to differ / to dispute",
      "tr": "ihtilafa düşmek"
    },
    "a_relire": true
  },
  {
    "id": 1078,
    "ar": "أَكْثَر",
    "translit": "akthar",
    "frequence": 35,
    "rang": 1078,
    "racine": "ك-ث-ر",
    "theme": "grammaire",
    "traductions": {
      "fr": "la plupart",
      "en": "most / majority",
      "tr": "çoğu"
    },
    "a_relire": true
  },
  {
    "id": 1079,
    "ar": "مُّرْسَل",
    "translit": "mursal",
    "frequence": 35,
    "rang": 1079,
    "racine": "ر-س-ل",
    "theme": "prophetie",
    "traductions": {
      "fr": "envoyé / messager",
      "en": "messenger / one sent",
      "tr": "gönderilen / resul"
    },
    "a_relire": true
  },
  {
    "id": 1080,
    "ar": "ءَالَآء",
    "translit": "ālāʾ",
    "frequence": 34,
    "rang": 1080,
    "racine": "ا-ل-و",
    "theme": "creation",
    "traductions": {
      "fr": "bienfaits",
      "en": "favours / bounties",
      "tr": "nimetler"
    },
    "a_relire": true
  },
  {
    "id": 1081,
    "ar": "خَٰسِرِين",
    "translit": "khāsirīn",
    "frequence": 32,
    "rang": 1081,
    "racine": "خ-س-ر",
    "theme": "jugement",
    "traductions": {
      "fr": "perdants",
      "en": "losers",
      "tr": "hüsrana uğrayanlar"
    },
    "a_relire": true
  },
  {
    "id": 1082,
    "ar": "زَكَوٰة",
    "translit": "zakāt",
    "frequence": 32,
    "rang": 1082,
    "racine": "ز-ك-و",
    "theme": "priere",
    "traductions": {
      "fr": "aumône purificatrice",
      "en": "obligatory charity",
      "tr": "zekât"
    },
    "a_relire": true
  },
  {
    "id": 1083,
    "ar": "كَفَىٰ",
    "translit": "kafā",
    "frequence": 32,
    "rang": 1083,
    "racine": "ك-ف-ي",
    "theme": "allah",
    "traductions": {
      "fr": "suffire",
      "en": "to suffice",
      "tr": "yetmek / kâfi olmak"
    },
    "a_relire": true
  },
  {
    "id": 1084,
    "ar": "أَعْرَضَ",
    "translit": "aʿraḍa",
    "frequence": 32,
    "rang": 1084,
    "racine": "ع-ر-ض",
    "theme": "morale",
    "traductions": {
      "fr": "se détourner",
      "en": "to turn away",
      "tr": "yüz çevirmek"
    },
    "a_relire": true
  },
  {
    "id": 1085,
    "ar": "أَشَدّ",
    "translit": "ashadd",
    "frequence": 31,
    "rang": 1085,
    "racine": "ش-د-د",
    "theme": "grammaire",
    "traductions": {
      "fr": "plus fort / plus intense",
      "en": "stronger / more severe",
      "tr": "daha şiddetli"
    },
    "a_relire": true
  },
  {
    "id": 1086,
    "ar": "وَٰحِدَة",
    "translit": "wāḥida",
    "frequence": 31,
    "rang": 1086,
    "racine": "و-ح-د",
    "theme": "grammaire",
    "traductions": {
      "fr": "une seule (fém.)",
      "en": "one / single (fem.)",
      "tr": "tek / bir"
    },
    "a_relire": true
  },
  {
    "id": 1087,
    "ar": "وَٰحِد",
    "translit": "wāḥid",
    "frequence": 30,
    "rang": 1087,
    "racine": "و-ح-د",
    "theme": "allah",
    "traductions": {
      "fr": "un seul / unique",
      "en": "one / single",
      "tr": "tek / bir"
    },
    "a_relire": true
  },
  {
    "id": 1088,
    "ar": "لَبِثَ",
    "translit": "labitha",
    "frequence": 30,
    "rang": 1088,
    "racine": "ل-ب-ث",
    "theme": "temps",
    "traductions": {
      "fr": "demeurer / séjourner",
      "en": "to remain / to stay",
      "tr": "kalmak"
    },
    "a_relire": true
  },
  {
    "id": 1089,
    "ar": "سَآءَ",
    "translit": "sāʾa",
    "frequence": 30,
    "rang": 1089,
    "racine": "س-و-ا",
    "theme": "morale",
    "traductions": {
      "fr": "être mauvais / faire le mal",
      "en": "to be evil",
      "tr": "kötü olmak"
    },
    "a_relire": true
  },
  {
    "id": 1090,
    "ar": "أَبْصَرَ",
    "translit": "abṣara",
    "frequence": 29,
    "rang": 1090,
    "racine": "ب-ص-ر",
    "theme": "homme",
    "traductions": {
      "fr": "voir / percevoir",
      "en": "to see / to perceive",
      "tr": "görmek"
    },
    "a_relire": true
  },
  {
    "id": 1091,
    "ar": "لَمَّا",
    "translit": "lammā",
    "frequence": 28,
    "rang": 1091,
    "racine": "—",
    "theme": "temps",
    "traductions": {
      "fr": "lorsque / quand",
      "en": "when",
      "tr": "...dığı zaman"
    },
    "a_relire": true
  },
  {
    "id": 1092,
    "ar": "مَّغْفِرَة",
    "translit": "maghfira",
    "frequence": 28,
    "rang": 1092,
    "racine": "غ-ف-ر",
    "theme": "allah",
    "traductions": {
      "fr": "pardon",
      "en": "forgiveness",
      "tr": "mağfiret / bağışlanma"
    },
    "a_relire": true
  },
  {
    "id": 1093,
    "ar": "رِجَال",
    "translit": "rijāl",
    "frequence": 28,
    "rang": 1093,
    "racine": "ر-ج-ل",
    "theme": "communaute",
    "traductions": {
      "fr": "hommes",
      "en": "men",
      "tr": "erkekler"
    },
    "a_relire": true
  },
  {
    "id": 1094,
    "ar": "رَّحِمَ",
    "translit": "raḥima",
    "frequence": 28,
    "rang": 1094,
    "racine": "ر-ح-م",
    "theme": "allah",
    "traductions": {
      "fr": "faire miséricorde",
      "en": "to have mercy",
      "tr": "merhamet etmek"
    },
    "a_relire": true
  },
  {
    "id": 1095,
    "ar": "أَغْنَتْ",
    "translit": "aghnat",
    "frequence": 28,
    "rang": 1095,
    "racine": "غ-ن-ي",
    "theme": "jugement",
    "traductions": {
      "fr": "dispenser / servir à",
      "en": "to avail / to enrich",
      "tr": "fayda vermek / zengin kılmak"
    },
    "a_relire": true
  },
  {
    "id": 1096,
    "ar": "أَصْبَحَ",
    "translit": "aṣbaḥa",
    "frequence": 28,
    "rang": 1096,
    "racine": "ص-ب-ح",
    "theme": "temps",
    "traductions": {
      "fr": "devenir / se retrouver au matin",
      "en": "to become",
      "tr": "olmak / sabahlamak"
    },
    "a_relire": true
  },
  {
    "id": 1097,
    "ar": "غَٰفِل",
    "translit": "ghāfil",
    "frequence": 27,
    "rang": 1097,
    "racine": "غ-ف-ل",
    "theme": "morale",
    "traductions": {
      "fr": "insouciant / distrait",
      "en": "heedless",
      "tr": "gafil"
    },
    "a_relire": true
  },
  {
    "id": 1098,
    "ar": "أَفْلَحَ",
    "translit": "aflaḥa",
    "frequence": 27,
    "rang": 1098,
    "racine": "ف-ل-ح",
    "theme": "jugement",
    "traductions": {
      "fr": "réussir / prospérer",
      "en": "to succeed / to prosper",
      "tr": "kurtuluşa ermek"
    },
    "a_relire": true
  },
  {
    "id": 1099,
    "ar": "جَٰهَدَ",
    "translit": "jāhada",
    "frequence": 27,
    "rang": 1099,
    "racine": "ج-ه-د",
    "theme": "foi",
    "traductions": {
      "fr": "lutter / s'efforcer",
      "en": "to strive / to struggle",
      "tr": "cihat etmek / gayret etmek"
    },
    "a_relire": true
  },
  {
    "id": 1100,
    "ar": "مُنَٰفِقُون",
    "translit": "munāfiqūn",
    "frequence": 27,
    "rang": 1100,
    "racine": "ن-ف-ق",
    "theme": "foi",
    "traductions": {
      "fr": "hypocrites",
      "en": "hypocrites",
      "tr": "münafıklar"
    },
    "a_relire": true
  }
];

export { VOCAB5 };
