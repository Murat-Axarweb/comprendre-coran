// ============================================================
// VOCABULAIRE CORANIQUE — Mots 151-300
// Bloc 2 : mots fréquents et thématiques
// ============================================================

const VOCAB2 = [
  {
    "id": 151,
    "ar": "السَّمَاءِ",
    "translit": "as-samāʾi",
    "frequence": 81,
    "rang": 151,
    "racine": "س-م-و",
    "theme": "creation",
    "traductions": {
      "fr": "du ciel / le ciel",
      "en": "of the sky / the heaven",
      "tr": "göğün / semanın"
    },
    "famille": [
      { "ar": "سَمَاء", "translit": "samāʾ", "fr": "ciel", "en": "sky / heaven", "tr": "gök / sema" },
      { "ar": "سَمَاوَات", "translit": "samāwāt", "fr": "cieux", "en": "heavens", "tr": "gökler" },
      { "ar": "سُمُوّ", "translit": "sumuww", "fr": "élévation / hauteur", "en": "loftiness / elevation", "tr": "yücelik / yükseklik" }
    ],
    "profondeur": {
      "fr": "As-samāʾi est une forme grammaticale de samāʾ, le ciel. La racine s-m-w évoque l’élévation. Dans le Coran, le ciel n’est pas seulement un espace physique : il rappelle l’ordre, la hauteur, la création et la puissance divine.",
      "en": "As-samāʾi is a grammatical form of samāʾ, the sky or heaven. The root s-m-w evokes elevation. In the Quran, the sky is not only physical space: it points to order, height, creation, and divine power.",
      "tr": "As-samāʾi, samāʾ yani gök kelimesinin gramer hâlidir. s-m-w kökü yükselişi çağrıştırır. Kur’an’da gök sadece fiziksel bir yer değil, düzeni, yüceliği ve ilahi kudreti hatırlatır."
    },
    "sourates_cles": [2, 21, 67]
  },
  {
    "id": 152,
    "ar": "رَبِّهِمْ",
    "translit": "rabbihim",
    "frequence": 80,
    "rang": 152,
    "racine": "ر-ب-ب",
    "theme": "allah",
    "traductions": {
      "fr": "leur Seigneur",
      "en": "their Lord",
      "tr": "onların Rabbi"
    },
    "famille": [
      { "ar": "رَبّ", "translit": "rabb", "fr": "Seigneur / Maître / Éducateur", "en": "Lord / Sustainer", "tr": "Rab / Terbiyeci" },
      { "ar": "رَبِّي", "translit": "rabbī", "fr": "mon Seigneur", "en": "my Lord", "tr": "Rabbim" },
      { "ar": "رَبُّكَ", "translit": "rabbuka", "fr": "ton Seigneur", "en": "your Lord", "tr": "Rabbin" },
      { "ar": "رَبُّهُمْ", "translit": "rabbuhum", "fr": "leur Seigneur", "en": "their Lord", "tr": "onların Rabbi" }
    ],
    "profondeur": {
      "fr": "Rabbihim signifie “leur Seigneur”. Le mot Rabb contient l’idée de création, de soin, d’éducation et de maîtrise. Cette forme montre le lien entre un groupe et Celui qui les connaît, les nourrit et les guide.",
      "en": "Rabbihim means “their Lord.” Rabb carries the meanings of creation, care, upbringing, and mastery. This form shows the bond between a group and the One who knows, sustains, and guides them.",
      "tr": "Rabbihim “onların Rabbi” demektir. Rab kelimesi yaratma, besleme, terbiye etme ve yönetme anlamlarını taşır. Bu form bir topluluk ile onları bilen ve yöneten Rab arasındaki bağı gösterir."
    },
    "sourates_cles": [2, 3, 8]
  },
  {
    "id": 153,
    "ar": "لِلَّذِينَ",
    "translit": "li-llaḏīna",
    "frequence": 79,
    "rang": 153,
    "racine": "لِ + pronom relatif",
    "theme": "grammaire",
    "traductions": {
      "fr": "pour ceux qui / à ceux qui",
      "en": "for those who / to those who",
      "tr": "onlar için ki / kimseler için"
    },
    "famille": [
      { "ar": "الَّذِينَ", "translit": "allaḏīna", "fr": "ceux qui", "en": "those who", "tr": "onlar ki" },
      { "ar": "لِ", "translit": "li", "fr": "pour / à", "en": "for / to", "tr": "için / -e" },
      { "ar": "وَالَّذِينَ", "translit": "wa-llaḏīna", "fr": "et ceux qui", "en": "and those who", "tr": "ve onlar ki" }
    ],
    "profondeur": {
      "fr": "Li-llaḏīna signifie “pour ceux qui”. Il introduit souvent une récompense, une promesse, une règle ou une description destinée à un groupe précis.",
      "en": "Li-llaḏīna means “for those who.” It often introduces a reward, promise, rule, or description directed at a specific group.",
      "tr": "Li-llaḏīna “onlar için ki” anlamına gelir. Çoğu zaman belirli bir gruba yönelik mükâfat, vaat, hüküm veya tanım getirir."
    },
    "sourates_cles": [2, 3, 8]
  },
  {
    "id": 154,
    "ar": "بِهَا",
    "translit": "bihā",
    "frequence": 79,
    "rang": 154,
    "racine": "بِ + هَا",
    "theme": "grammaire",
    "traductions": {
      "fr": "par elle / avec elle / en elle",
      "en": "by it / with it / in it",
      "tr": "onunla / onun sayesinde / onda"
    },
    "famille": [
      { "ar": "بِهِ", "translit": "bihī", "fr": "par lui / avec lui", "en": "by it / with it", "tr": "onunla" },
      { "ar": "بِ", "translit": "bi", "fr": "avec / par / au moyen de", "en": "with / by / through", "tr": "ile / vasıtasıyla" },
      { "ar": "هَا", "translit": "hā", "fr": "elle / la / cela", "en": "her / it", "tr": "onu / o" }
    ],
    "profondeur": {
      "fr": "Bihā combine la préposition bi avec un pronom féminin ou neutre selon le contexte. Il peut exprimer le moyen, la cause, l’attachement ou l’usage d’une chose.",
      "en": "Bihā combines the preposition bi with a feminine or neutral pronoun depending on context. It can express means, cause, attachment, or the use of something.",
      "tr": "Bihā, bi edatıyla dişil veya bağlama göre nötr bir zamiri birleştirir. Araç, sebep, bağlılık veya bir şeyi kullanma anlamı verebilir."
    },
    "sourates_cles": [2, 7, 99]
  },
  {
    "id": 155,
    "ar": "أَلَمْ",
    "translit": "a-lam",
    "frequence": 78,
    "rang": 155,
    "racine": "أ + لَمْ",
    "theme": "grammaire",
    "traductions": {
      "fr": "n’a-t-il pas ? / n’as-tu pas ?",
      "en": "did not? / has not?",
      "tr": "değil mi? / yapmadı mı?"
    },
    "famille": [
      { "ar": "لَمْ", "translit": "lam", "fr": "ne... pas au passé", "en": "did not", "tr": "yapmadı" },
      { "ar": "أَ", "translit": "a", "fr": "est-ce que ?", "en": "question marker", "tr": "mi / mı" },
      { "ar": "أَلَمْ تَرَ", "translit": "a-lam tara", "fr": "n’as-tu pas vu ?", "en": "have you not seen?", "tr": "görmedin mi?" }
    ],
    "profondeur": {
      "fr": "A-lam transforme une négation passée en question rhétorique. Le Coran l’utilise pour réveiller la mémoire et l’observation : “n’as-tu pas vu... ?”, “n’avons-Nous pas... ?”.",
      "en": "A-lam turns a past negation into a rhetorical question. The Quran uses it to awaken memory and observation: “Have you not seen...?”, “Did We not...?”.",
      "tr": "A-lam geçmiş olumsuzluğu retorik soruya çevirir. Kur’an’da hafızayı ve gözlemi uyandırmak için kullanılır: “görmedin mi?”, “Biz yapmadık mı?”."
    },
    "sourates_cles": [94, 105, 107]
  },
  {
    "id": 156,
    "ar": "الْكِتَابَ",
    "translit": "al-kitāba",
    "frequence": 78,
    "rang": 156,
    "racine": "ك-ت-ب",
    "theme": "prophetie",
    "traductions": {
      "fr": "le Livre",
      "en": "the Book / the Scripture",
      "tr": "Kitabı / Kitap"
    },
    "famille": [
      { "ar": "كِتَاب", "translit": "kitāb", "fr": "livre / écrit", "en": "book / scripture", "tr": "kitap" },
      { "ar": "كَتَبَ", "translit": "kataba", "fr": "il a écrit", "en": "he wrote", "tr": "yazdı" },
      { "ar": "مَكْتُوب", "translit": "maktūb", "fr": "écrit / destiné", "en": "written / destined", "tr": "yazılmış / kader" },
      { "ar": "كَاتِب", "translit": "kātib", "fr": "scribe / écrivain", "en": "scribe / writer", "tr": "kâtip / yazar" }
    ],
    "profondeur": {
      "fr": "Al-kitāba est une forme définie ou accusative de kitāb : le Livre. Dans le Coran, le Livre peut désigner la révélation, l’écriture divine, ou les Écritures données aux peuples précédents.",
      "en": "Al-kitāba is a definite or accusative form of kitāb: the Book. In the Quran, the Book can refer to revelation, divine writing, or scriptures given to earlier communities.",
      "tr": "Al-kitāba, kitāb kelimesinin belirli veya mansup hâlidir: Kitap. Kur’an’da vahiy, ilahi yazı veya önceki ümmetlere verilen kitaplar anlamına gelebilir."
    },
    "sourates_cles": [2, 3, 5]
  },
  {
    "id": 157,
    "ar": "خَيْرٌ",
    "translit": "khayrun",
    "frequence": 78,
    "rang": 157,
    "racine": "خ-ي-ر",
    "theme": "morale",
    "traductions": {
      "fr": "meilleur / bien / bon",
      "en": "better / good / best",
      "tr": "hayır / daha iyi / iyi"
    },
    "famille": [
      { "ar": "خَيْر", "translit": "khayr", "fr": "bien / bonté", "en": "good / goodness", "tr": "hayır / iyilik" },
      { "ar": "أَخْيَر", "translit": "akhyar", "fr": "meilleur", "en": "better / best", "tr": "daha hayırlı" },
      { "ar": "خِيَار", "translit": "khiyār", "fr": "choix / option", "en": "choice / option", "tr": "seçim / tercih" }
    ],
    "profondeur": {
      "fr": "Khayrun signifie bien ou meilleur. Le Coran l’utilise souvent pour comparer ce qui paraît attirant à ce qui est réellement meilleur auprès d’Allah.",
      "en": "Khayrun means good or better. The Quran often uses it to compare what appears attractive with what is truly better with Allah.",
      "tr": "Khayrun hayır, iyi veya daha hayırlı demektir. Kur’an’da görünen cazip şey ile Allah katında gerçekten hayırlı olanı karşılaştırmak için sık kullanılır."
    },
    "sourates_cles": [2, 3, 93]
  },
  {
    "id": 158,
    "ar": "أَنْتُمْ",
    "translit": "antum",
    "frequence": 78,
    "rang": 158,
    "racine": "pronom personnel",
    "theme": "grammaire",
    "traductions": {
      "fr": "vous",
      "en": "you plural",
      "tr": "siz"
    },
    "famille": [
      { "ar": "أَنْتَ", "translit": "anta", "fr": "toi masculin", "en": "you masculine singular", "tr": "sen" },
      { "ar": "أَنْتِ", "translit": "anti", "fr": "toi féminin", "en": "you feminine singular", "tr": "sen" },
      { "ar": "هُمْ", "translit": "hum", "fr": "eux / ils", "en": "they / them", "tr": "onlar" },
      { "ar": "نَحْنُ", "translit": "naḥnu", "fr": "nous", "en": "we", "tr": "biz" }
    ],
    "profondeur": {
      "fr": "Antum est le pronom “vous” au pluriel. Il apparaît souvent dans les adresses directes aux croyants, aux peuples, ou aux interlocuteurs qui sont invités à réfléchir.",
      "en": "Antum is the plural pronoun “you.” It often appears in direct address to believers, communities, or people invited to reflect.",
      "tr": "Antum çoğul “siz” zamiridir. Müminlere, topluluklara veya düşünmeye davet edilen muhataplara doğrudan hitaplarda sık geçer."
    },
    "sourates_cles": [2, 3, 5]
  },
  {
    "id": 159,
    "ar": "الْمُؤْمِنِينَ",
    "translit": "al-muʾminīna",
    "frequence": 78,
    "rang": 159,
    "racine": "أ-م-ن",
    "theme": "foi",
    "traductions": {
      "fr": "les croyants",
      "en": "the believers",
      "tr": "müminler"
    },
    "famille": [
      { "ar": "مُؤْمِن", "translit": "muʾmin", "fr": "croyant", "en": "believer", "tr": "mümin" },
      { "ar": "إِيمَان", "translit": "īmān", "fr": "foi", "en": "faith", "tr": "iman" },
      { "ar": "آمَنَ", "translit": "āmana", "fr": "il a cru", "en": "he believed", "tr": "iman etti" },
      { "ar": "أَمَانَة", "translit": "amāna", "fr": "dépôt / confiance", "en": "trust", "tr": "emanet / güven" }
    ],
    "profondeur": {
      "fr": "Al-muʾminīna désigne les croyants. La racine a-m-n relie la foi à la confiance et à la sécurité : le croyant est celui qui fait confiance à Allah et entre dans une relation d’engagement.",
      "en": "Al-muʾminīna means the believers. The root a-m-n links faith with trust and security: the believer trusts Allah and enters a relationship of commitment.",
      "tr": "Al-muʾminīna müminler demektir. a-m-n kökü imanı güven ve emniyetle bağlar: mümin Allah’a güvenen ve bağlılık gösteren kişidir."
    },
    "sourates_cles": [8, 23, 49]
  },
  {
    "id": 160,
    "ar": "شَيْئًا",
    "translit": "shayʾan",
    "frequence": 77,
    "rang": 160,
    "racine": "ش-ي-ء",
    "theme": "creation",
    "traductions": {
      "fr": "une chose / quelque chose",
      "en": "a thing / anything",
      "tr": "bir şey / herhangi bir şey"
    },
    "famille": [
      { "ar": "شَيْء", "translit": "shayʾ", "fr": "chose", "en": "thing", "tr": "şey" },
      { "ar": "أَشْيَاء", "translit": "ashyāʾ", "fr": "choses", "en": "things", "tr": "şeyler" },
      { "ar": "كُلُّ شَيْء", "translit": "kullu shayʾ", "fr": "toute chose", "en": "everything", "tr": "her şey" }
    ],
    "profondeur": {
      "fr": "Shayʾan est une forme grammaticale de shayʾ : une chose. Le Coran l’utilise souvent dans des expressions générales : ne rien associer à Allah, Allah sait toute chose, Allah est capable de toute chose.",
      "en": "Shayʾan is a grammatical form of shayʾ: a thing. The Quran often uses it in broad expressions: associate nothing with Allah, Allah knows everything, Allah is able over all things.",
      "tr": "Shayʾan, shayʾ kelimesinin gramer hâlidir: bir şey. Kur’an’da “Allah’a hiçbir şeyi ortak koşmamak”, “Allah her şeyi bilir” gibi genel ifadelerde sık geçer."
    },
    "sourates_cles": [2, 4, 6]
  },
  {
    "id": 161,
    "ar": "لَوْ",
    "translit": "law",
    "frequence": 77,
    "rang": 161,
    "racine": "particule conditionnelle",
    "theme": "grammaire",
    "traductions": {
      "fr": "si / si seulement",
      "en": "if / if only",
      "tr": "eğer / keşke"
    },
    "famille": [
      { "ar": "وَلَوْ", "translit": "wa-law", "fr": "même si", "en": "even if", "tr": "olsa bile" },
      { "ar": "لَوْلَا", "translit": "lawlā", "fr": "si ce n’était / pourquoi ne pas", "en": "if not / why not", "tr": "olmasaydı / neden" },
      { "ar": "إِنْ", "translit": "in", "fr": "si", "en": "if", "tr": "eğer" }
    ],
    "profondeur": {
      "fr": "Law introduit une hypothèse, parfois irréelle ou regrettée. Il apparaît dans des raisonnements, des regrets ou des objections : “si seulement...”, “s’ils avaient...”.",
      "en": "Law introduces a hypothesis, sometimes unreal or regretful. It appears in reasoning, regret, or objections: “if only...,” “if they had...”.",
      "tr": "Law şart ve varsayım bildirir; bazen imkânsızlık veya pişmanlık hissi taşır. “Keşke”, “eğer yapmış olsalardı” gibi anlamlarda geçebilir."
    },
    "sourates_cles": [2, 3, 6]
  },
  {
    "id": 162,
    "ar": "إِلَيْهِ",
    "translit": "ilayhi",
    "frequence": 76,
    "rang": 162,
    "racine": "إِلَى + هُ",
    "theme": "grammaire",
    "traductions": {
      "fr": "vers lui / à lui",
      "en": "to him / toward Him",
      "tr": "ona / O’na doğru"
    },
    "famille": [
      { "ar": "إِلَى", "translit": "ilā", "fr": "vers / jusqu’à", "en": "to / toward", "tr": "-e / doğru" },
      { "ar": "إِلَيْكَ", "translit": "ilayka", "fr": "vers toi / à toi", "en": "to you", "tr": "sana / sana doğru" },
      { "ar": "إِلَيْهِمْ", "translit": "ilayhim", "fr": "vers eux / à eux", "en": "to them", "tr": "onlara" }
    ],
    "profondeur": {
      "fr": "Ilayhi signifie “vers lui” ou “à lui”. Quand il désigne Allah, il rappelle le retour final : vers Lui tout revient, vers Lui les créatures sont ramenées.",
      "en": "Ilayhi means “to him” or “toward Him.” When referring to Allah, it recalls the final return: to Him everything returns.",
      "tr": "Ilayhi “ona / O’na doğru” demektir. Allah için kullanıldığında nihai dönüşü hatırlatır: her şey O’na döner."
    },
    "sourates_cles": [2, 3, 28]
  },
  {
    "id": 163,
    "ar": "إِلَيْكَ",
    "translit": "ilayka",
    "frequence": 74,
    "rang": 163,
    "racine": "إِلَى + كَ",
    "theme": "grammaire",
    "traductions": {
      "fr": "vers toi / à toi",
      "en": "to you / toward you",
      "tr": "sana / sana doğru"
    },
    "famille": [
      { "ar": "إِلَى", "translit": "ilā", "fr": "vers / à", "en": "to / toward", "tr": "-e / doğru" },
      { "ar": "إِلَيْهِ", "translit": "ilayhi", "fr": "vers lui / à lui", "en": "to him", "tr": "ona" },
      { "ar": "عَلَيْكَ", "translit": "ʿalayka", "fr": "sur toi / contre toi", "en": "upon you / against you", "tr": "üzerine / aleyhine" }
    ],
    "profondeur": {
      "fr": "Ilayka signifie “vers toi”. Dans le Coran, il apparaît souvent dans les passages adressés au Prophète ﷺ : la révélation descend vers lui, ou les gens sont renvoyés vers lui pour entendre le message.",
      "en": "Ilayka means “to you.” In the Quran, it often appears in passages addressed to the Prophet ﷺ: revelation is sent to him, or people are directed to him to hear the message.",
      "tr": "Ilayka “sana / sana doğru” demektir. Kur’an’da çoğu zaman Peygamber’e ﷺ hitap eden ayetlerde geçer: vahiy ona indirilir veya insanlar mesaja yönlendirilir."
    },
    "sourates_cles": [4, 5, 16]
  },
  {
    "id": 164,
    "ar": "بِالْحَقِّ",
    "translit": "bi-l-ḥaqqi",
    "frequence": 74,
    "rang": 164,
    "racine": "ح-ق-ق",
    "theme": "morale",
    "traductions": {
      "fr": "avec vérité / en toute vérité / par le vrai",
      "en": "with truth / in truth / by the truth",
      "tr": "hak ile / gerçekle / hak olarak"
    },
    "famille": [
      { "ar": "حَقّ", "translit": "ḥaqq", "fr": "vérité / droit / réel", "en": "truth / right / real", "tr": "hak / gerçek" },
      { "ar": "حَقِيقَة", "translit": "ḥaqīqa", "fr": "réalité / vérité profonde", "en": "reality / deep truth", "tr": "hakikat" },
      { "ar": "الْحَقّ", "translit": "al-ḥaqq", "fr": "la vérité / Le Vrai", "en": "the Truth", "tr": "Hak / gerçek" }
    ],
    "profondeur": {
      "fr": "Bi-l-ḥaqq signifie “avec la vérité” ou “en toute vérité”. Le Coran l’utilise pour affirmer que la création, la révélation, le jugement ou l’envoi des prophètes reposent sur une vérité réelle, pas sur le hasard.",
      "en": "Bi-l-ḥaqq means “with truth” or “in truth.” The Quran uses it to affirm that creation, revelation, judgment, and the sending of prophets are grounded in truth, not randomness.",
      "tr": "Bi-l-ḥaqq “hak ile / gerçekle” demektir. Kur’an yaratılışın, vahyin, hükmün ve peygamberlerin gönderilişinin boşuna değil, hak üzere olduğunu bildirir."
    },
    "sourates_cles": [2, 3, 45]
  },
  {
    "id": 165,
    "ar": "رَبَّنَا",
    "translit": "rabbanā",
    "frequence": 72,
    "rang": 165,
    "racine": "ر-ب-ب",
    "theme": "priere",
    "traductions": {
      "fr": "notre Seigneur",
      "en": "our Lord",
      "tr": "Rabbimiz"
    },
    "famille": [
      { "ar": "رَبّ", "translit": "rabb", "fr": "Seigneur / Maître / Éducateur", "en": "Lord / Sustainer", "tr": "Rab / Terbiyeci" },
      { "ar": "رَبِّي", "translit": "rabbī", "fr": "mon Seigneur", "en": "my Lord", "tr": "Rabbim" },
      { "ar": "رَبِّهِمْ", "translit": "rabbihim", "fr": "leur Seigneur", "en": "their Lord", "tr": "onların Rabbi" }
    ],
    "profondeur": {
      "fr": "Rabbanā est l’une des formules d’invocation les plus fortes : “notre Seigneur”. Elle unit la communauté dans une même demande et exprime dépendance, confiance et proximité avec Allah.",
      "en": "Rabbanā is one of the strongest formulas of supplication: “our Lord.” It unites the community in one request and expresses dependence, trust, and closeness to Allah.",
      "tr": "Rabbanā en güçlü dua ifadelerinden biridir: “Rabbimiz”. Topluluğu aynı duada birleştirir; Allah’a bağlılık, güven ve yakınlık ifade eder."
    },
    "sourates_cles": [2, 3, 59]
  },
  {
    "id": 166,
    "ar": "قَبْلُ",
    "translit": "qablu",
    "frequence": 70,
    "rang": 166,
    "racine": "ق-ب-ل",
    "theme": "temps",
    "traductions": {
      "fr": "avant / auparavant",
      "en": "before / previously",
      "tr": "önce / daha önce"
    },
    "famille": [
      { "ar": "قَبْل", "translit": "qabl", "fr": "avant", "en": "before", "tr": "önce" },
      { "ar": "مِنْ قَبْل", "translit": "min qabl", "fr": "auparavant", "en": "beforehand", "tr": "daha önce" },
      { "ar": "قِبْلَة", "translit": "qibla", "fr": "direction de prière", "en": "prayer direction", "tr": "kıble" }
    ],
    "profondeur": {
      "fr": "Qablu situe une chose avant une autre. Le Coran l’utilise pour rappeler les peuples précédents, les révélations antérieures ou l’état d’une personne avant la guidance.",
      "en": "Qablu places something before another. The Quran uses it to recall earlier nations, previous revelations, or a person’s state before guidance.",
      "tr": "Qablu bir şeyi diğerinden önce konumlandırır. Kur’an önceki kavimleri, önceki vahiyleri veya hidayetten önceki hâli hatırlatmak için kullanır."
    },
    "sourates_cles": [2, 3, 30]
  },
  {
    "id": 167,
    "ar": "النَّارِ",
    "translit": "an-nāri",
    "frequence": 70,
    "rang": 167,
    "racine": "ن-و-ر",
    "theme": "jugement",
    "traductions": {
      "fr": "le Feu / l’Enfer",
      "en": "the Fire / Hellfire",
      "tr": "ateş / cehennem ateşi"
    },
    "famille": [
      { "ar": "نَار", "translit": "nār", "fr": "feu", "en": "fire", "tr": "ateş / nar" },
      { "ar": "نُور", "translit": "nūr", "fr": "lumière", "en": "light", "tr": "nur / ışık" },
      { "ar": "مَنَارَة", "translit": "manāra", "fr": "minaret / phare", "en": "minaret / lighthouse", "tr": "minare / deniz feneri" }
    ],
    "profondeur": {
      "fr": "An-nār désigne le Feu, souvent l’Enfer. Le contraste entre nūr, lumière qui guide, et nār, feu qui consume, est très parlant dans l’imaginaire coranique.",
      "en": "An-nār refers to the Fire, often Hellfire. The contrast between nūr, light that guides, and nār, fire that consumes, is powerful in Quranic imagery.",
      "tr": "An-nār ateş, çoğu zaman cehennem ateşi demektir. Yol gösteren nūr ile yakan nār arasındaki karşıtlık Kur’an’ın anlam dünyasında çok güçlüdür."
    },
    "sourates_cles": [2, 56, 111]
  },
  {
    "id": 168,
    "ar": "بَيْنَ",
    "translit": "bayna",
    "frequence": 70,
    "rang": 168,
    "racine": "ب-ي-ن",
    "theme": "grammaire",
    "traductions": {
      "fr": "entre / parmi",
      "en": "between / among",
      "tr": "arasında / aralarında"
    },
    "famille": [
      { "ar": "بَيَان", "translit": "bayān", "fr": "explication / clarté", "en": "clarification / explanation", "tr": "beyan / açıklama" },
      { "ar": "مُبِين", "translit": "mubīn", "fr": "clair / évident", "en": "clear / manifest", "tr": "apaçık" },
      { "ar": "بَيَّنَ", "translit": "bayyana", "fr": "il a clarifié", "en": "he clarified", "tr": "açıkladı" }
    ],
    "profondeur": {
      "fr": "Bayna signifie “entre”. Sa racine b-y-n porte aussi l’idée de séparation et de clarté : distinguer les choses permet de les comprendre clairement.",
      "en": "Bayna means “between.” Its root b-y-n also carries the idea of separation and clarity: distinguishing things allows them to be understood clearly.",
      "tr": "Bayna “arasında” demektir. b-y-n kökü ayırma ve açıklık fikrini de taşır: şeyleri ayırt etmek onları net anlamayı sağlar."
    },
    "sourates_cles": [2, 4, 49]
  },
  {
    "id": 169,
    "ar": "الْقِيَامَةِ",
    "translit": "al-qiyāmati",
    "frequence": 70,
    "rang": 169,
    "racine": "ق-و-م",
    "theme": "jugement",
    "traductions": {
      "fr": "la Résurrection / le Jour de la Résurrection",
      "en": "the Resurrection / the Day of Resurrection",
      "tr": "kıyamet / Kıyamet Günü"
    },
    "famille": [
      { "ar": "قِيَامَة", "translit": "qiyāma", "fr": "résurrection", "en": "resurrection", "tr": "kıyamet" },
      { "ar": "قَامَ", "translit": "qāma", "fr": "il s’est levé", "en": "he stood / rose", "tr": "kalktı" },
      { "ar": "قَوْم", "translit": "qawm", "fr": "peuple", "en": "people", "tr": "kavim" },
      { "ar": "مُسْتَقِيم", "translit": "mustaqīm", "fr": "droit", "en": "straight", "tr": "dosdoğru" }
    ],
    "profondeur": {
      "fr": "Al-qiyāma vient de l’idée de se lever. La Résurrection est le grand relèvement : les êtres se lèvent pour être jugés, et toute vérité cachée devient manifeste.",
      "en": "Al-qiyāma comes from the idea of standing or rising. The Resurrection is the great rising: beings stand for judgment, and every hidden truth becomes manifest.",
      "tr": "Al-qiyāma kalkmak fikrinden gelir. Kıyamet büyük kalkıştır: varlıklar hesap için ayağa kalkar ve gizli olan her hakikat açığa çıkar."
    },
    "sourates_cles": [75, 56, 99]
  },
  {
    "id": 170,
    "ar": "وَإِذْ",
    "translit": "wa-idh",
    "frequence": 69,
    "rang": 170,
    "racine": "و + إِذْ",
    "theme": "temps",
    "traductions": {
      "fr": "et quand / et rappelle-toi lorsque",
      "en": "and when / and remember when",
      "tr": "ve hani / ve o zaman"
    },
    "famille": [
      { "ar": "إِذْ", "translit": "idh", "fr": "quand / lorsque dans le passé", "en": "when / at that time", "tr": "hani / o zaman" },
      { "ar": "إِذَا", "translit": "idhā", "fr": "quand / lorsque", "en": "when / whenever", "tr": "ne zaman" },
      { "ar": "وَ", "translit": "wa", "fr": "et", "en": "and", "tr": "ve" }
    ],
    "profondeur": {
      "fr": "Wa-idh introduit souvent un rappel narratif : “et lorsque...”. Le Coran l’utilise pour faire revenir le lecteur vers une scène ancienne et en tirer une leçon.",
      "en": "Wa-idh often introduces a narrative reminder: “and when...”. The Quran uses it to bring the reader back to an earlier scene and draw a lesson from it.",
      "tr": "Wa-idh çoğu zaman kıssa hatırlatması başlatır: “ve hani...”. Kur’an okuyucuyu geçmiş bir sahneye götürür ve ondan ders çıkarmaya çağırır."
    },
    "sourates_cles": [2, 7, 8]
  },
  {
    "id": 171,
    "ar": "لَكَ",
    "translit": "laka",
    "frequence": 69,
    "rang": 171,
    "racine": "لِ + كَ",
    "theme": "grammaire",
    "traductions": {
      "fr": "à toi / pour toi",
      "en": "for you / to you",
      "tr": "sana / senin için"
    },
    "famille": [
      { "ar": "لَكُمْ", "translit": "lakum", "fr": "à vous / pour vous", "en": "for you plural", "tr": "size / sizin için" },
      { "ar": "لَهُ", "translit": "lahu", "fr": "à lui / pour lui", "en": "for him / to him", "tr": "ona / onun için" },
      { "ar": "لَنَا", "translit": "lanā", "fr": "à nous / pour nous", "en": "for us / to us", "tr": "bize / bizim için" }
    ],
    "profondeur": {
      "fr": "Laka signifie “à toi” ou “pour toi”. Dans les invocations et dialogues, il peut exprimer possession, destination, faveur ou adresse directe.",
      "en": "Laka means “to you” or “for you.” In supplications and dialogues, it can express possession, destination, favor, or direct address.",
      "tr": "Laka “sana / senin için” demektir. Dualarda ve diyaloglarda sahiplik, yönelme, nimet veya doğrudan hitap anlamı verebilir."
    },
    "sourates_cles": [93, 94, 108]
  },
  {
    "id": 172,
    "ar": "فَمَنْ",
    "translit": "fa-man",
    "frequence": 67,
    "rang": 172,
    "racine": "ف + مَنْ",
    "theme": "grammaire",
    "traductions": {
      "fr": "donc celui qui / alors quiconque",
      "en": "so whoever / then whoever",
      "tr": "öyleyse kim / kim ki"
    },
    "famille": [
      { "ar": "مَنْ", "translit": "man", "fr": "qui / quiconque", "en": "who / whoever", "tr": "kim" },
      { "ar": "وَمَنْ", "translit": "wa-man", "fr": "et quiconque", "en": "and whoever", "tr": "ve kim" },
      { "ar": "فَ", "translit": "fa", "fr": "donc / alors", "en": "so / then", "tr": "öyleyse / sonra" }
    ],
    "profondeur": {
      "fr": "Fa-man introduit une conséquence personnelle : “donc quiconque...”. Il sert souvent à formuler une règle ouverte à tous : celui qui croit, celui qui fait le bien, celui qui se détourne.",
      "en": "Fa-man introduces a personal consequence: “so whoever...”. It often formulates a rule open to everyone: whoever believes, does good, or turns away.",
      "tr": "Fa-man kişisel sonuç bildirir: “öyleyse kim...”. İman eden, iyilik yapan veya yüz çeviren herkes için geçerli genel kurallar kurar."
    },
    "sourates_cles": [2, 18, 99]
  },
  {
    "id": 173,
    "ar": "عَنْهُمْ",
    "translit": "ʿanhum",
    "frequence": 67,
    "rang": 173,
    "racine": "عَنْ + هُمْ",
    "theme": "grammaire",
    "traductions": {
      "fr": "d’eux / à leur sujet / loin d’eux",
      "en": "from them / about them / away from them",
      "tr": "onlardan / onlar hakkında / onlardan uzak"
    },
    "famille": [
      { "ar": "عَنْ", "translit": "ʿan", "fr": "de / au sujet de / loin de", "en": "from / about / away from", "tr": "-den / hakkında / uzak" },
      { "ar": "عَنْهُ", "translit": "ʿanhu", "fr": "de lui / à son sujet", "en": "from him / about him", "tr": "ondan / onun hakkında" },
      { "ar": "عَمَّا", "translit": "ʿammā", "fr": "au sujet de ce que", "en": "about what", "tr": "ne hakkında" }
    ],
    "profondeur": {
      "fr": "ʿAnhum signifie “d’eux” ou “à leur sujet”. Selon le contexte, il peut marquer l’éloignement, le pardon retiré ou accordé, ou une information concernant un groupe.",
      "en": "ʿAnhum means “from them” or “about them.” Depending on context, it can mark distance, pardon removed or granted, or information concerning a group.",
      "tr": "ʿAnhum “onlardan” veya “onlar hakkında” demektir. Bağlama göre uzaklaşma, affın kaldırılması veya verilmesi, ya da bir topluluk hakkında bilgi bildirir."
    },
    "sourates_cles": [2, 3, 9]
  },
  {
    "id": 174,
    "ar": "هَلْ",
    "translit": "hal",
    "frequence": 66,
    "rang": 174,
    "racine": "particule interrogative",
    "theme": "grammaire",
    "traductions": {
      "fr": "est-ce que ? / y a-t-il ?",
      "en": "is? / do? / has?",
      "tr": "mi? / mı? / var mı?"
    },
    "famille": [
      { "ar": "أَ", "translit": "a", "fr": "marque de question", "en": "question marker", "tr": "soru edatı" },
      { "ar": "أَمْ", "translit": "am", "fr": "ou bien ?", "en": "or / rather?", "tr": "yoksa?" },
      { "ar": "كَيْفَ", "translit": "kayfa", "fr": "comment ?", "en": "how?", "tr": "nasıl?" }
    ],
    "profondeur": {
      "fr": "Hal introduit une question. Dans le Coran, ces questions ne cherchent pas toujours une information : elles réveillent la conscience, orientent la réflexion ou réfutent une illusion.",
      "en": "Hal introduces a question. In the Quran, such questions do not always seek information: they awaken conscience, guide reflection, or refute an illusion.",
      "tr": "Hal soru edatıdır. Kur’an’daki bu sorular her zaman bilgi istemez; vicdanı uyandırır, düşünceyi yönlendirir veya bir yanılgıyı reddeder."
    },
    "sourates_cles": [76, 88, 107]
  },
  {
    "id": 175,
    "ar": "نَحْنُ",
    "translit": "naḥnu",
    "frequence": 65,
    "rang": 175,
    "racine": "pronom personnel",
    "theme": "grammaire",
    "traductions": {
      "fr": "nous",
      "en": "we",
      "tr": "biz"
    },
    "famille": [
      { "ar": "إِنَّا", "translit": "innā", "fr": "certes Nous", "en": "indeed We", "tr": "şüphesiz Biz" },
      { "ar": "نَا", "translit": "nā", "fr": "nous / notre", "en": "us / our", "tr": "biz / bizim" },
      { "ar": "أَنْتُمْ", "translit": "antum", "fr": "vous", "en": "you plural", "tr": "siz" }
    ],
    "profondeur": {
      "fr": "Naḥnu signifie “nous”. Quand Allah parle avec “Nous”, il s’agit du pluriel de majesté : il exprime grandeur, autorité et puissance, non une pluralité divine.",
      "en": "Naḥnu means “we.” When Allah speaks with “We,” it is the plural of majesty: it expresses greatness, authority, and power, not divine plurality.",
      "tr": "Naḥnu “biz” demektir. Allah için kullanıldığında azamet çoğuludur: büyüklük, otorite ve kudret ifade eder; ilahi çoğulluk anlamına gelmez."
    },
    "sourates_cles": [15, 21, 97]
  },
  {
    "id": 176,
    "ar": "الظَّالِمِينَ",
    "translit": "aẓ-ẓālimīna",
    "frequence": 64,
    "rang": 176,
    "racine": "ظ-ل-م",
    "theme": "morale",
    "traductions": {
      "fr": "les injustes / les oppresseurs",
      "en": "the wrongdoers / the oppressors",
      "tr": "zalimler / haksızlık edenler"
    },
    "famille": [
      { "ar": "ظُلْم", "translit": "ẓulm", "fr": "injustice / oppression", "en": "injustice / oppression", "tr": "zulüm / haksızlık" },
      { "ar": "ظَالِم", "translit": "ẓālim", "fr": "injuste / oppresseur", "en": "wrongdoer / oppressor", "tr": "zalim" },
      { "ar": "ظُلُمَات", "translit": "ẓulumāt", "fr": "ténèbres", "en": "darknesses", "tr": "karanlıklar" }
    ],
    "profondeur": {
      "fr": "Aẓ-ẓālimīna désigne ceux qui commettent le ẓulm. Le mot associe injustice et obscurité : l’injustice n’est pas seulement une faute sociale, elle obscurcit le cœur et le monde.",
      "en": "Aẓ-ẓālimīna refers to those who commit ẓulm. The word connects injustice and darkness: wrongdoing is not only social harm, it darkens the heart and the world.",
      "tr": "Aẓ-ẓālimīna zulmedenleri ifade eder. Kelime adaletsizlik ve karanlığı birleştirir: zulüm sadece sosyal bir zarar değil, kalbi ve dünyayı karartan bir durumdur."
    },
    "sourates_cles": [2, 6, 31]
  },
  {
    "id": 177,
    "ar": "يَوْمَئِذٍ",
    "translit": "yawmaʾidhin",
    "frequence": 63,
    "rang": 177,
    "racine": "ي-و-م + إِذْ",
    "theme": "jugement",
    "traductions": {
      "fr": "ce jour-là / alors ce jour-là",
      "en": "that Day / on that Day",
      "tr": "o gün / o zaman"
    },
    "famille": [
      { "ar": "يَوْم", "translit": "yawm", "fr": "jour", "en": "day", "tr": "gün" },
      { "ar": "إِذْ", "translit": "idh", "fr": "quand / lorsque", "en": "when / at that time", "tr": "o zaman" },
      { "ar": "يَوْمَ الْقِيَامَة", "translit": "yawma al-qiyāma", "fr": "le Jour de la Résurrection", "en": "the Day of Resurrection", "tr": "Kıyamet Günü" }
    ],
    "profondeur": {
      "fr": "Yawmaʾidhin signifie “ce jour-là”. Dans les sourates sur le Jugement, ce mot crée une scène très forte : ce jour-là, les vérités apparaissent, les œuvres sont pesées, les hommes voient les conséquences.",
      "en": "Yawmaʾidhin means “on that Day.” In surahs about Judgment, it creates a powerful scene: on that Day, truths appear, deeds are weighed, and humans see the consequences.",
      "tr": "Yawmaʾidhin “o gün” demektir. Kıyamet sahnelerinde güçlü bir vurgu kurar: o gün hakikatler ortaya çıkar, ameller tartılır, insanlar sonuçları görür."
    },
    "sourates_cles": [99, 100, 101]
  },
  {
    "id": 178,
    "ar": "كُنَّا",
    "translit": "kunnā",
    "frequence": 63,
    "rang": 178,
    "racine": "ك-و-ن",
    "theme": "grammaire",
    "traductions": {
      "fr": "nous étions / nous avions l’habitude de",
      "en": "we were / we used to",
      "tr": "biz idik / yapardık"
    },
    "famille": [
      { "ar": "كَانَ", "translit": "kāna", "fr": "il était", "en": "he was", "tr": "idi" },
      { "ar": "كُنْتُمْ", "translit": "kuntum", "fr": "vous étiez", "en": "you were", "tr": "idiniz" },
      { "ar": "كَانُوا", "translit": "kānū", "fr": "ils étaient", "en": "they were", "tr": "idiler" },
      { "ar": "كُنْ", "translit": "kun", "fr": "sois !", "en": "be!", "tr": "ol!" }
    ],
    "profondeur": {
      "fr": "Kunnā signifie “nous étions”. Il apparaît souvent dans les paroles rapportées : regrets, excuses, souvenirs ou aveux collectifs.",
      "en": "Kunnā means “we were.” It often appears in reported speech: regret, excuses, memories, or collective admissions.",
      "tr": "Kunnā “biz idik” demektir. Pişmanlık, mazeret, hatıra veya toplu itiraf içeren sözlerde sıkça geçer."
    },
    "sourates_cles": [6, 23, 37]
  },
  {
    "id": 179,
    "ar": "إِنَّهُمْ",
    "translit": "innahum",
    "frequence": 62,
    "rang": 179,
    "racine": "إِنَّ + هُمْ",
    "theme": "grammaire",
    "traductions": {
      "fr": "certes ils / vraiment eux",
      "en": "indeed they / surely they",
      "tr": "şüphesiz onlar"
    },
    "famille": [
      { "ar": "إِنَّ", "translit": "inna", "fr": "certes / vraiment", "en": "indeed / surely", "tr": "şüphesiz" },
      { "ar": "هُمْ", "translit": "hum", "fr": "eux / ils", "en": "they / them", "tr": "onlar" },
      { "ar": "إِنَّهُ", "translit": "innahu", "fr": "certes il / cela", "en": "indeed he / it", "tr": "şüphesiz o" }
    ],
    "profondeur": {
      "fr": "Innahum renforce une affirmation au sujet d’un groupe : “certes ils...”. Le Coran l’utilise pour confirmer un état moral, une erreur, une qualité ou une conséquence.",
      "en": "Innahum strengthens a statement about a group: “indeed they...”. The Quran uses it to confirm a moral state, an error, a quality, or a consequence.",
      "tr": "Innahum bir topluluk hakkında kesinlik bildirir: “şüphesiz onlar...”. Kur’an’da ahlaki hâl, hata, özellik veya sonuç vurgulamak için kullanılır."
    },
    "sourates_cles": [2, 26, 83]
  },
  {
    "id": 180,
    "ar": "كَيْفَ",
    "translit": "kayfa",
    "frequence": 62,
    "rang": 180,
    "racine": "particule interrogative",
    "theme": "grammaire",
    "traductions": {
      "fr": "comment ? / de quelle manière ?",
      "en": "how? / in what way?",
      "tr": "nasıl?"
    },
    "famille": [
      { "ar": "هَلْ", "translit": "hal", "fr": "est-ce que ?", "en": "is? / do?", "tr": "mi / mı?" },
      { "ar": "مَا", "translit": "mā", "fr": "quoi ?", "en": "what?", "tr": "ne?" },
      { "ar": "أَيْنَ", "translit": "ayna", "fr": "où ?", "en": "where?", "tr": "nerede?" }
    ],
    "profondeur": {
      "fr": "Kayfa signifie “comment ?”. Dans le Coran, cette question pousse souvent à observer : comment Allah crée, ressuscite, châtie ou guide. Ce n’est pas seulement une question de méthode, mais une invitation à réfléchir.",
      "en": "Kayfa means “how?” In the Quran, this question often invites observation: how Allah creates, resurrects, punishes, or guides. It is not only about method, but reflection.",
      "tr": "Kayfa “nasıl?” demektir. Kur’an’da bu soru gözleme çağırır: Allah nasıl yaratır, diriltir, cezalandırır veya hidayet eder. Sadece yöntem değil, tefekkür sorusudur."
    },
    "sourates_cles": [2, 3, 88]
  },
  {
    "id": 181,
    "ar": "يَعْلَمُ",
    "translit": "yaʿlamu",
    "frequence": 62,
    "rang": 181,
    "racine": "ع-ل-م",
    "theme": "prophetie",
    "traductions": {
      "fr": "il sait / Il sait",
      "en": "he knows / He knows",
      "tr": "bilir / O bilir"
    },
    "famille": [
      { "ar": "عِلْم", "translit": "ʿilm", "fr": "science / connaissance", "en": "knowledge", "tr": "ilim / bilgi" },
      { "ar": "عَلِمَ", "translit": "ʿalima", "fr": "il a su", "en": "he knew", "tr": "bildi" },
      { "ar": "عَلِيم", "translit": "ʿalīm", "fr": "parfaitement connaisseur", "en": "all-knowing", "tr": "her şeyi bilen" },
      { "ar": "يَعْلَمُونَ", "translit": "yaʿlamūna", "fr": "ils savent", "en": "they know", "tr": "bilirler" }
    ],
    "profondeur": {
      "fr": "Yaʿlamu signifie « il sait ». Quand le sujet est Allah, le mot rappelle Sa science parfaite : Il sait ce qui est apparent, ce qui est caché, ce qui a eu lieu et ce qui aura lieu.",
      "en": "Yaʿlamu means “he knows.” When the subject is Allah, it points to His perfect knowledge: He knows what is visible, hidden, past, and future.",
      "tr": "Yaʿlamu “bilir” demektir. Fail Allah olduğunda O’nun kusursuz ilmini hatırlatır: açık olanı, gizliyi, geçmişi ve geleceği bilir."
    },
    "sourates_cles": [2, 6, 31]
  },
  {
    "id": 182,
    "ar": "الْعَالَمِينَ",
    "translit": "al-ʿālamīna",
    "frequence": 61,
    "rang": 182,
    "racine": "ع-ل-م",
    "theme": "creation",
    "traductions": {
      "fr": "les mondes / les univers",
      "en": "the worlds / all realms",
      "tr": "âlemler"
    },
    "famille": [
      { "ar": "عَالَم", "translit": "ʿālam", "fr": "monde / univers", "en": "world / realm", "tr": "âlem / dünya" },
      { "ar": "عِلْم", "translit": "ʿilm", "fr": "science", "en": "knowledge", "tr": "ilim" },
      { "ar": "عَلَامَة", "translit": "ʿalāma", "fr": "signe / marque", "en": "sign / mark", "tr": "alâmet / işaret" }
    ],
    "profondeur": {
      "fr": "Al-ʿālamīn désigne les mondes : les êtres humains, les djinns, les créatures visibles et invisibles. Dans Al-Fātiḥa, Allah est « Rabb al-ʿālamīn », le Seigneur de tous les mondes.",
      "en": "Al-ʿālamīn refers to all worlds: humans, jinn, visible and invisible creatures. In Al-Fātiḥa, Allah is “Rabb al-ʿālamīn,” Lord of all worlds.",
      "tr": "Al-ʿālamīn bütün âlemleri ifade eder: insanlar, cinler, görünen ve görünmeyen varlıklar. Fâtiha’da Allah “âlemlerin Rabbi” olarak tanıtılır."
    },
    "sourates_cles": [1, 26, 37]
  },
  {
    "id": 183,
    "ar": "وَقَالُوا",
    "translit": "wa-qālū",
    "frequence": 61,
    "rang": 183,
    "racine": "ق-و-ل",
    "theme": "prophetie",
    "traductions": {
      "fr": "et ils dirent / et ils ont dit",
      "en": "and they said",
      "tr": "ve dediler"
    },
    "famille": [
      { "ar": "قَالَ", "translit": "qāla", "fr": "il a dit", "en": "he said", "tr": "dedi" },
      { "ar": "قَالُوا", "translit": "qālū", "fr": "ils ont dit", "en": "they said", "tr": "dediler" },
      { "ar": "قُلْ", "translit": "qul", "fr": "dis !", "en": "say!", "tr": "de!" },
      { "ar": "قَوْل", "translit": "qawl", "fr": "parole", "en": "speech / saying", "tr": "söz" }
    ],
    "profondeur": {
      "fr": "Wa-qālū introduit une parole collective : un peuple, un groupe ou des opposants prennent la parole. Le Coran enseigne beaucoup par ces dialogues rapportés.",
      "en": "Wa-qālū introduces collective speech: a people, a group, or opponents speak. The Quran teaches greatly through these reported dialogues.",
      "tr": "Wa-qālū toplu bir sözü başlatır: bir kavim, bir grup veya muhalifler konuşur. Kur’an bu aktarılan diyaloglarla çok şey öğretir."
    },
    "sourates_cles": [2, 7, 12]
  },
  {
    "id": 184,
    "ar": "كَمَا",
    "translit": "kamā",
    "frequence": 59,
    "rang": 184,
    "racine": "كَ + مَا",
    "theme": "grammaire",
    "traductions": {
      "fr": "comme / de même que",
      "en": "as / just as",
      "tr": "gibi / nasıl ki"
    },
    "famille": [
      { "ar": "كَ", "translit": "ka", "fr": "comme / tel que", "en": "like / as", "tr": "gibi" },
      { "ar": "مَا", "translit": "mā", "fr": "ce que / quoi", "en": "what / that which", "tr": "ne / şey" },
      { "ar": "كَذَلِكَ", "translit": "kadhālika", "fr": "ainsi / de même", "en": "thus / likewise", "tr": "böylece / işte böyle" }
    ],
    "profondeur": {
      "fr": "Kamā sert à comparer ou à établir une correspondance : « comme ». Il relie une action, un exemple ou une situation à une autre.",
      "en": "Kamā is used for comparison or correspondence: “as” or “just as.” It links one action, example, or situation to another.",
      "tr": "Kamā karşılaştırma ve benzerlik bildirir: “gibi”, “nasıl ki”. Bir fiili, örneği veya durumu başka bir şeye bağlar."
    },
    "sourates_cles": [2, 3, 24]
  },
  {
    "id": 185,
    "ar": "لَعَلَّكُمْ",
    "translit": "laʿallakum",
    "frequence": 59,
    "rang": 185,
    "racine": "particule d’espérance / finalité",
    "theme": "grammaire",
    "traductions": {
      "fr": "afin que vous / peut-être que vous",
      "en": "so that you may / perhaps you",
      "tr": "umulur ki siz / diye"
    },
    "famille": [
      { "ar": "لَعَلَّ", "translit": "laʿalla", "fr": "peut-être / afin que", "en": "perhaps / so that", "tr": "umulur ki / belki" },
      { "ar": "لَعَلَّهُمْ", "translit": "laʿallahum", "fr": "afin qu’ils / peut-être qu’ils", "en": "so that they may", "tr": "umulur ki onlar" },
      { "ar": "كُمْ", "translit": "kum", "fr": "vous / votre", "en": "you / your", "tr": "siz / sizin" }
    ],
    "profondeur": {
      "fr": "Laʿallakum introduit souvent l’objectif spirituel d’un ordre : afin que vous soyez reconnaissants, que vous réfléchissiez, que vous soyez pieux. Le mot donne une direction pédagogique.",
      "en": "Laʿallakum often introduces the spiritual purpose of a command: so that you may be grateful, reflect, or become mindful. It gives the verse a pedagogical direction.",
      "tr": "Laʿallakum çoğu zaman bir emrin manevi amacını gösterir: şükredesiniz, düşünesiniz, takva sahibi olasınız diye. Ayete eğitimsel bir yön verir."
    },
    "sourates_cles": [2, 5, 7]
  },
  {
    "id": 186,
    "ar": "الصَّالِحَاتِ",
    "translit": "aṣ-ṣāliḥāti",
    "frequence": 59,
    "rang": 186,
    "racine": "ص-ل-ح",
    "theme": "morale",
    "traductions": {
      "fr": "les bonnes œuvres / les actions vertueuses",
      "en": "righteous deeds / good works",
      "tr": "salih ameller / iyi işler"
    },
    "famille": [
      { "ar": "صَالِح", "translit": "ṣāliḥ", "fr": "vertueux / bon", "en": "righteous / good", "tr": "salih / iyi" },
      { "ar": "صَلَحَ", "translit": "ṣalaḥa", "fr": "il est devenu bon / réparé", "en": "he became sound / right", "tr": "düzeldi / iyi oldu" },
      { "ar": "إِصْلَاح", "translit": "iṣlāḥ", "fr": "réforme / amélioration", "en": "reform / rectification", "tr": "ıslah / düzeltme" }
    ],
    "profondeur": {
      "fr": "Aṣ-ṣāliḥāt désigne les bonnes œuvres. Dans le Coran, la foi est très souvent suivie des bonnes actions : croire transforme la manière d’agir.",
      "en": "Aṣ-ṣāliḥāt means righteous deeds. In the Quran, faith is very often followed by good actions: belief transforms behavior.",
      "tr": "Aṣ-ṣāliḥāt salih ameller demektir. Kur’an’da iman çok sık salih amelle birlikte gelir: iman davranışı dönüştürür."
    },
    "sourates_cles": [18, 95, 103]
  },
  {
    "id": 187,
    "ar": "لَنْ",
    "translit": "lan",
    "frequence": 59,
    "rang": 187,
    "racine": "particule de négation future",
    "theme": "grammaire",
    "traductions": {
      "fr": "ne... jamais / ne... pas dans le futur",
      "en": "will not / never will",
      "tr": "asla ...meyecek / ...mayacak"
    },
    "famille": [
      { "ar": "لَا", "translit": "lā", "fr": "non / ne... pas", "en": "no / not", "tr": "hayır / değil" },
      { "ar": "لَمْ", "translit": "lam", "fr": "ne... pas au passé", "en": "did not", "tr": "yapmadı" },
      { "ar": "لَنْ تَفْعَلُوا", "translit": "lan tafʿalū", "fr": "vous ne ferez pas", "en": "you will not do", "tr": "yapmayacaksınız" }
    ],
    "profondeur": {
      "fr": "Lan nie fortement une action future. Il donne une négation projetée vers l’avenir : quelque chose n’arrivera pas, ne sera pas fait, ou ne pourra pas être atteint.",
      "en": "Lan strongly negates a future action. It projects negation into the future: something will not happen, be done, or be reached.",
      "tr": "Lan gelecek zamana yönelik güçlü olumsuzluk verir. Bir şeyin olmayacağını, yapılmayacağını veya ulaşılamayacağını ifade eder."
    },
    "sourates_cles": [2, 3, 18]
  },
  {
    "id": 188,
    "ar": "رَحِيمٌ",
    "translit": "raḥīmun",
    "frequence": 59,
    "rang": 188,
    "racine": "ر-ح-م",
    "theme": "allah",
    "traductions": {
      "fr": "très miséricordieux / plein de miséricorde",
      "en": "most merciful / full of mercy",
      "tr": "çok merhametli / rahîm"
    },
    "famille": [
      { "ar": "رَحْمَة", "translit": "raḥma", "fr": "miséricorde", "en": "mercy", "tr": "rahmet" },
      { "ar": "الرَّحْمَن", "translit": "ar-raḥmān", "fr": "Le Tout Miséricordieux", "en": "The Most Gracious", "tr": "Rahmân" },
      { "ar": "الرَّحِيم", "translit": "ar-raḥīm", "fr": "Le Très Miséricordieux", "en": "The Most Merciful", "tr": "Rahîm" }
    ],
    "profondeur": {
      "fr": "Raḥīmun exprime une miséricorde constante et profonde. Quand il qualifie Allah, il rappelle que Sa relation aux créatures est marquée par la compassion, le pardon et l’accueil.",
      "en": "Raḥīmun expresses constant and deep mercy. When it describes Allah, it reminds that His relation to creation is marked by compassion, forgiveness, and acceptance.",
      "tr": "Raḥīmun sürekli ve derin merhameti ifade eder. Allah için kullanıldığında O’nun mahlûkata karşı şefkat, bağışlama ve kabul ile muamele ettiğini hatırlatır."
    },
    "sourates_cles": [1, 2, 59]
  },
  {
    "id": 189,
    "ar": "لِي",
    "translit": "lī",
    "frequence": 59,
    "rang": 189,
    "racine": "لِ + ي",
    "theme": "grammaire",
    "traductions": {
      "fr": "à moi / pour moi",
      "en": "for me / to me",
      "tr": "bana / benim için"
    },
    "famille": [
      { "ar": "لَكَ", "translit": "laka", "fr": "à toi / pour toi", "en": "for you", "tr": "sana / senin için" },
      { "ar": "لَهُ", "translit": "lahu", "fr": "à lui / pour lui", "en": "for him", "tr": "ona / onun için" },
      { "ar": "لَنَا", "translit": "lanā", "fr": "à nous / pour nous", "en": "for us", "tr": "bize / bizim için" }
    ],
    "profondeur": {
      "fr": "Lī signifie « pour moi » ou « à moi ». Dans les paroles rapportées, il peut exprimer une demande, une attribution, une possession ou une relation personnelle.",
      "en": "Lī means “for me” or “to me.” In reported speech, it may express request, attribution, possession, or personal relation.",
      "tr": "Lī “bana / benim için” demektir. Aktarılan sözlerde istek, tahsis, sahiplik veya kişisel ilişki anlamı taşıyabilir."
    },
    "sourates_cles": [20, 26, 28]
  },
  {
    "id": 190,
    "ar": "مَعَ",
    "translit": "maʿa",
    "frequence": 58,
    "rang": 190,
    "racine": "préposition",
    "theme": "grammaire",
    "traductions": {
      "fr": "avec / en compagnie de",
      "en": "with / along with",
      "tr": "ile / beraber"
    },
    "famille": [
      { "ar": "مَعَكُمْ", "translit": "maʿakum", "fr": "avec vous", "en": "with you", "tr": "sizinle" },
      { "ar": "مَعَهُمْ", "translit": "maʿahum", "fr": "avec eux", "en": "with them", "tr": "onlarla" },
      { "ar": "مَعِي", "translit": "maʿī", "fr": "avec moi", "en": "with me", "tr": "benimle" }
    ],
    "profondeur": {
      "fr": "Maʿa exprime l’accompagnement. Dans le Coran, être « avec » Allah ne signifie pas proximité physique, mais soutien, science, secours ou protection.",
      "en": "Maʿa expresses accompaniment. In the Quran, being “with” Allah does not mean physical nearness, but support, knowledge, help, or protection.",
      "tr": "Maʿa beraberlik bildirir. Kur’an’da Allah’ın “beraber olması” fiziksel yakınlık değil; yardım, ilim, destek ve koruma anlamı taşır."
    },
    "sourates_cles": [2, 8, 20]
  },
  {
    "id": 191,
    "ar": "قَوْمِ",
    "translit": "qawmi",
    "frequence": 58,
    "rang": 191,
    "racine": "ق-و-م",
    "theme": "communaute",
    "traductions": {
      "fr": "mon peuple / peuple de",
      "en": "my people / people of",
      "tr": "kavmim / kavmi"
    },
    "famille": [
      { "ar": "قَوْم", "translit": "qawm", "fr": "peuple / groupe", "en": "people / nation", "tr": "kavim / halk" },
      { "ar": "قَامَ", "translit": "qāma", "fr": "il s’est levé", "en": "he stood / rose", "tr": "kalktı" },
      { "ar": "قِيَامَة", "translit": "qiyāma", "fr": "résurrection", "en": "resurrection", "tr": "kıyamet" }
    ],
    "profondeur": {
      "fr": "Qawmi apparaît souvent dans la bouche des prophètes : « ô mon peuple ». Le mot donne aux récits une dimension affective : le prophète ne parle pas à des inconnus, mais à son propre peuple.",
      "en": "Qawmi often appears in the speech of prophets: “O my people.” It gives narratives an emotional dimension: the prophet speaks not to strangers, but to his own people.",
      "tr": "Qawmi peygamberlerin sözlerinde sık geçer: “Ey kavmim”. Kıssalara duygusal bir boyut verir: peygamber yabancılara değil, kendi kavmine seslenir."
    },
    "sourates_cles": [7, 11, 26]
  },
  {
    "id": 192,
    "ar": "وَلَكِنْ",
    "translit": "wa-lākin",
    "frequence": 57,
    "rang": 192,
    "racine": "و + لَكِنْ",
    "theme": "grammaire",
    "traductions": {
      "fr": "mais / cependant",
      "en": "but / however",
      "tr": "fakat / ancak"
    },
    "famille": [
      { "ar": "لَكِنْ", "translit": "lākin", "fr": "mais / cependant", "en": "but / however", "tr": "fakat / ancak" },
      { "ar": "بَلْ", "translit": "bal", "fr": "au contraire / plutôt", "en": "rather / instead", "tr": "aksine / bilakis" },
      { "ar": "وَ", "translit": "wa", "fr": "et", "en": "and", "tr": "ve" }
    ],
    "profondeur": {
      "fr": "Wa-lākin introduit une correction ou une nuance : « mais ». Il permet au Coran de rectifier une idée, d’opposer deux attitudes ou d’ajouter une précision essentielle.",
      "en": "Wa-lākin introduces correction or nuance: “but.” It allows the Quran to correct an idea, oppose two attitudes, or add an essential clarification.",
      "tr": "Wa-lākin düzeltme veya karşıtlık getirir: “fakat”. Kur’an’da bir fikri düzeltmek, iki tavrı karşılaştırmak veya önemli bir açıklama eklemek için kullanılır."
    },
    "sourates_cles": [2, 3, 8]
  },
  {
    "id": 193,
    "ar": "الَّتِي",
    "translit": "allatī",
    "frequence": 57,
    "rang": 193,
    "racine": "pronom relatif",
    "theme": "grammaire",
    "traductions": {
      "fr": "celle qui / qui / laquelle",
      "en": "the one which / she who / which",
      "tr": "o ki / dişil ilgi zamiri"
    },
    "famille": [
      { "ar": "الَّذِي", "translit": "allaḏī", "fr": "celui qui", "en": "the one who", "tr": "o ki" },
      { "ar": "الَّذِينَ", "translit": "allaḏīna", "fr": "ceux qui", "en": "those who", "tr": "onlar ki" },
      { "ar": "اللَّاتِي", "translit": "allātī", "fr": "celles qui", "en": "those which feminine", "tr": "onlar ki dişil" }
    ],
    "profondeur": {
      "fr": "Allatī est le pronom relatif féminin singulier. Il relie un nom féminin à une description, une action ou une précision. Le reconnaître aide beaucoup dans la lecture grammaticale.",
      "en": "Allatī is the feminine singular relative pronoun. It links a feminine noun to a description, action, or clarification. Recognizing it helps greatly in grammatical reading.",
      "tr": "Allatī dişil tekil ilgi zamiridir. Dişil bir ismi açıklama, fiil veya nitelikle bağlar. Onu tanımak gramer okumalarında çok yardımcı olur."
    },
    "sourates_cles": [2, 4, 58]
  },
  {
    "id": 194,
    "ar": "بِآيَاتِنَا",
    "translit": "bi-āyātinā",
    "frequence": 57,
    "rang": 194,
    "racine": "أ-ي-ي",
    "theme": "prophetie",
    "traductions": {
      "fr": "par Nos signes / avec Nos versets",
      "en": "with Our signs / by Our verses",
      "tr": "ayetlerimizle / işaretlerimizle"
    },
    "famille": [
      { "ar": "آيَة", "translit": "āya", "fr": "signe / verset", "en": "sign / verse", "tr": "ayet / işaret" },
      { "ar": "آيَات", "translit": "āyāt", "fr": "signes / versets", "en": "signs / verses", "tr": "ayetler / işaretler" },
      { "ar": "آيَاتِنَا", "translit": "āyātinā", "fr": "Nos signes", "en": "Our signs", "tr": "ayetlerimiz" }
    ],
    "profondeur": {
      "fr": "Bi-āyātinā signifie « avec Nos signes » ou « par Nos versets ». Le mot āya désigne à la fois le verset révélé et le signe visible dans la création.",
      "en": "Bi-āyātinā means “with Our signs” or “by Our verses.” Āya refers both to a revealed verse and a visible sign in creation.",
      "tr": "Bi-āyātinā “ayetlerimizle / işaretlerimizle” demektir. Āya hem vahyedilen ayeti hem de yaratılıştaki görünür işareti ifade eder."
    },
    "sourates_cles": [2, 7, 10]
  },
  {
    "id": 195,
    "ar": "جَاءَ",
    "translit": "jāʾa",
    "frequence": 57,
    "rang": 195,
    "racine": "ج-ي-ء",
    "theme": "temps",
    "traductions": {
      "fr": "il est venu / il arriva",
      "en": "he came / it came",
      "tr": "geldi"
    },
    "famille": [
      { "ar": "جَاءُوا", "translit": "jāʾū", "fr": "ils sont venus", "en": "they came", "tr": "geldiler" },
      { "ar": "يَجِيءُ", "translit": "yajīʾu", "fr": "il vient / viendra", "en": "he comes / will come", "tr": "gelir / gelecek" },
      { "ar": "مَجِيء", "translit": "majīʾ", "fr": "venue / arrivée", "en": "coming / arrival", "tr": "geliş" }
    ],
    "profondeur": {
      "fr": "Jāʾa marque l’arrivée d’une personne, d’un signe, d’une preuve, d’un messager ou d’un moment décisif. Dans le Coran, ce verbe annonce souvent un tournant.",
      "en": "Jāʾa marks the arrival of a person, sign, proof, messenger, or decisive moment. In the Quran, this verb often announces a turning point.",
      "tr": "Jāʾa bir kişinin, işaretin, delilin, elçinin veya belirleyici bir anın gelişini bildirir. Kur’an’da çoğu zaman dönüm noktasını başlatır."
    },
    "sourates_cles": [2, 12, 110]
  },
  {
    "id": 196,
    "ar": "شَاءَ",
    "translit": "shāʾa",
    "frequence": 56,
    "rang": 196,
    "racine": "ش-ي-ء",
    "theme": "allah",
    "traductions": {
      "fr": "Il a voulu / il a voulu",
      "en": "He willed / he willed",
      "tr": "diledi / istedi"
    },
    "famille": [
      { "ar": "يَشَاءُ", "translit": "yashāʾu", "fr": "Il veut / Il décide", "en": "He wills", "tr": "diler" },
      { "ar": "مَشِيئَة", "translit": "mashīʾa", "fr": "volonté", "en": "will", "tr": "meşiet / irade" },
      { "ar": "إِنْ شَاءَ اللَّه", "translit": "in shāʾa Allāh", "fr": "si Allah veut", "en": "if Allah wills", "tr": "inşallah" }
    ],
    "profondeur": {
      "fr": "Shāʾa exprime la volonté. Quand il concerne Allah, il rappelle que rien n’échappe à Sa volonté : guidance, création, pardon et destinée se comprennent dans Sa sagesse.",
      "en": "Shāʾa expresses will. When it refers to Allah, it reminds that nothing escapes His will: guidance, creation, forgiveness, and destiny are understood through His wisdom.",
      "tr": "Shāʾa irade ve dileme bildirir. Allah için kullanıldığında hidayet, yaratma, bağışlama ve kaderin O’nun hikmeti ve iradesiyle olduğunu hatırlatır."
    },
    "sourates_cles": [2, 6, 18]
  },
  {
    "id": 197,
    "ar": "يَعْمَلُونَ",
    "translit": "yaʿmalūna",
    "frequence": 56,
    "rang": 197,
    "racine": "ع-م-ل",
    "theme": "morale",
    "traductions": {
      "fr": "ils font / ils œuvrent",
      "en": "they do / they work",
      "tr": "yaparlar / amel ederler"
    },
    "famille": [
      { "ar": "عَمِلَ", "translit": "ʿamila", "fr": "il a fait / œuvré", "en": "he did / worked", "tr": "yaptı / amel etti" },
      { "ar": "عَمَل", "translit": "ʿamal", "fr": "acte / œuvre", "en": "deed / action", "tr": "amel / iş" },
      { "ar": "أَعْمَال", "translit": "aʿmāl", "fr": "actes / œuvres", "en": "deeds / actions", "tr": "ameller" }
    ],
    "profondeur": {
      "fr": "Yaʿmalūna signifie « ils font ». Le Coran relie constamment les actes à la responsabilité : Allah sait ce qu’ils font, voit ce qu’ils font, et les actes auront des conséquences.",
      "en": "Yaʿmalūna means “they do.” The Quran constantly links actions to responsibility: Allah knows and sees what they do, and deeds have consequences.",
      "tr": "Yaʿmalūna “yaparlar” demektir. Kur’an amelleri sorumlulukla bağlar: Allah onların yaptıklarını bilir, görür ve amellerin sonucu vardır."
    },
    "sourates_cles": [2, 3, 9]
  },
  {
    "id": 198,
    "ar": "عَلَيْكَ",
    "translit": "ʿalayka",
    "frequence": 56,
    "rang": 198,
    "racine": "عَلَى + كَ",
    "theme": "grammaire",
    "traductions": {
      "fr": "sur toi / à ta charge / contre toi",
      "en": "upon you / against you",
      "tr": "senin üzerine / aleyhine"
    },
    "famille": [
      { "ar": "عَلَى", "translit": "ʿalā", "fr": "sur / au-dessus de", "en": "on / upon", "tr": "üzerinde" },
      { "ar": "عَلَيْكُمْ", "translit": "ʿalaykum", "fr": "sur vous", "en": "upon you", "tr": "üzerinize" },
      { "ar": "عَلَيْهِ", "translit": "ʿalayhi", "fr": "sur lui", "en": "upon him", "tr": "onun üzerine" }
    ],
    "profondeur": {
      "fr": "ʿAlayka signifie « sur toi ». Dans les passages adressés au Prophète ﷺ, il peut indiquer une révélation descendue sur lui, une responsabilité ou une parole qui le concerne directement.",
      "en": "ʿAlayka means “upon you.” In passages addressed to the Prophet ﷺ, it may refer to revelation sent upon him, a responsibility, or a statement concerning him directly.",
      "tr": "ʿAlayka “senin üzerine” demektir. Peygamber’e ﷺ hitap eden ayetlerde ona indirilen vahyi, bir sorumluluğu veya doğrudan ona yönelik sözü ifade edebilir."
    },
    "sourates_cles": [4, 5, 108]
  },
  {
    "id": 199,
    "ar": "تَعْلَمُونَ",
    "translit": "taʿlamūna",
    "frequence": 55,
    "rang": 199,
    "racine": "ع-ل-م",
    "theme": "prophetie",
    "traductions": {
      "fr": "vous savez / vous connaissez",
      "en": "you know",
      "tr": "bilirsiniz / biliyorsunuz"
    },
    "famille": [
      { "ar": "عِلْم", "translit": "ʿilm", "fr": "science / connaissance", "en": "knowledge", "tr": "ilim / bilgi" },
      { "ar": "عَلِمَ", "translit": "ʿalima", "fr": "il a su", "en": "he knew", "tr": "bildi" },
      { "ar": "يَعْلَمُونَ", "translit": "yaʿlamūna", "fr": "ils savent", "en": "they know", "tr": "bilirler" }
    ],
    "profondeur": {
      "fr": "Taʿlamūna s’adresse directement à un groupe : « vous savez ». Le Coran l’utilise parfois pour rappeler une évidence connue, ou au contraire pour dénoncer une ignorance malgré les signes.",
      "en": "Taʿlamūna directly addresses a group: “you know.” The Quran may use it to recall an evident truth or to challenge ignorance despite clear signs.",
      "tr": "Taʿlamūna doğrudan bir topluluğa hitap eder: “bilirsiniz”. Kur’an bunu bazen bilinen bir hakikati hatırlatmak, bazen de apaçık işaretlere rağmen cehaleti sorgulamak için kullanır."
    },
    "sourates_cles": [2, 3, 6]
  },
  {
    "id": 200,
    "ar": "أَعْلَمُ",
    "translit": "aʿlamu",
    "frequence": 55,
    "rang": 200,
    "racine": "ع-ل-م",
    "theme": "allah",
    "traductions": {
      "fr": "Je sais / plus savant / plus connaisseur",
      "en": "I know / more knowing / best knowing",
      "tr": "bilirim / daha iyi bilen"
    },
    "famille": [
      { "ar": "عِلْم", "translit": "ʿilm", "fr": "science", "en": "knowledge", "tr": "ilim" },
      { "ar": "عَلِيم", "translit": "ʿalīm", "fr": "parfaitement connaisseur", "en": "all-knowing", "tr": "alîm" },
      { "ar": "اللَّهُ أَعْلَمُ", "translit": "Allāhu aʿlamu", "fr": "Allah sait mieux", "en": "Allah knows best", "tr": "Allah daha iyi bilir" }
    ],
    "profondeur": {
      "fr": "Aʿlamu peut signifier « je sais » ou « plus savant » selon la structure. Dans l’expression « Allahu aʿlam », il signifie qu’Allah sait mieux que tous.",
      "en": "Aʿlamu can mean “I know” or “more knowing” depending on structure. In “Allāhu aʿlam,” it means Allah knows best.",
      "tr": "Aʿlamu bağlama göre “bilirim” veya “daha iyi bilen” anlamına gelir. “Allāhu aʿlam” ifadesinde Allah’ın en iyi bilen olduğunu bildirir."
    },
    "sourates_cles": [2, 6, 53]
  },
  {
    "id": 201,
    "ar": "أَنْتَ",
    "translit": "anta",
    "frequence": 55,
    "rang": 201,
    "racine": "pronom personnel",
    "theme": "grammaire",
    "traductions": {
      "fr": "toi / tu",
      "en": "you masculine singular",
      "tr": "sen"
    },
    "famille": [
      { "ar": "أَنْتُمْ", "translit": "antum", "fr": "vous", "en": "you plural", "tr": "siz" },
      { "ar": "أَنْتِ", "translit": "anti", "fr": "toi féminin", "en": "you feminine", "tr": "sen" },
      { "ar": "هُوَ", "translit": "huwa", "fr": "il / lui", "en": "he", "tr": "o" }
    ],
    "profondeur": {
      "fr": "Anta est le pronom « toi » au masculin singulier. Dans les invocations, il rend l’adresse très directe : le serviteur parle à Allah sans intermédiaire.",
      "en": "Anta is the masculine singular pronoun “you.” In supplications, it makes the address very direct: the servant speaks to Allah without intermediary.",
      "tr": "Anta tekil eril “sen” zamiridir. Dualarda hitabı çok doğrudan yapar: kul Allah’a aracısız yönelir."
    },
    "sourates_cles": [5, 21, 26]
  },
  {
    "id": 202,
    "ar": "قَلِيلًا",
    "translit": "qalīlan",
    "frequence": 55,
    "rang": 202,
    "racine": "ق-ل-ل",
    "theme": "morale",
    "traductions": {
      "fr": "peu / un peu / peu nombreux",
      "en": "little / a little / few",
      "tr": "az / biraz"
    },
    "famille": [
      { "ar": "قَلِيل", "translit": "qalīl", "fr": "peu / peu nombreux", "en": "little / few", "tr": "az" },
      { "ar": "أَقَلّ", "translit": "aqall", "fr": "moins / plus petit", "en": "less / fewer", "tr": "daha az" },
      { "ar": "قِلَّة", "translit": "qilla", "fr": "rareté / petit nombre", "en": "scarcity / fewness", "tr": "azlık" }
    ],
    "profondeur": {
      "fr": "Qalīlan signifie « peu ». Le Coran l’utilise souvent dans des rappels forts : peu remercient, peu réfléchissent, peu sont réellement constants.",
      "en": "Qalīlan means “little” or “few.” The Quran often uses it in powerful reminders: few are grateful, few reflect, few remain steadfast.",
      "tr": "Qalīlan “az” demektir. Kur’an’da güçlü uyarılarda sık geçer: az kişi şükreder, az kişi düşünür, az kişi sebat eder."
    },
    "sourates_cles": [7, 23, 67]
  },
  {
    "id": 203,
    "ar": "الْآخِرَةِ",
    "translit": "al-ākhirati",
    "frequence": 55,
    "rang": 203,
    "racine": "أ-خ-ر",
    "theme": "jugement",
    "traductions": {
      "fr": "l’au-delà / la vie dernière",
      "en": "the Hereafter / the Last Life",
      "tr": "ahiret"
    },
    "famille": [
      { "ar": "آخِرَة", "translit": "ākhira", "fr": "au-delà", "en": "Hereafter", "tr": "ahiret" },
      { "ar": "آخِر", "translit": "ākhir", "fr": "dernier", "en": "last", "tr": "son" },
      { "ar": "أَخَّرَ", "translit": "akhkhara", "fr": "il a retardé", "en": "he delayed", "tr": "erteledi" }
    ],
    "profondeur": {
      "fr": "Al-ākhira désigne la vie dernière, opposée à ad-dunyā, la vie proche. Le Coran invite constamment à ne pas sacrifier l’éternel pour le provisoire.",
      "en": "Al-ākhira refers to the Last Life, opposed to ad-dunyā, the near worldly life. The Quran constantly calls not to sacrifice the eternal for the temporary.",
      "tr": "Al-ākhira ahiret hayatıdır; yakın hayat olan dünya ile karşılaştırılır. Kur’an geçici olan için ebedî olanı feda etmemeyi sürekli hatırlatır."
    },
    "sourates_cles": [2, 3, 87]
  },
  {
    "id": 204,
    "ar": "لِمَنْ",
    "translit": "li-man",
    "frequence": 55,
    "rang": 204,
    "racine": "لِ + مَنْ",
    "theme": "grammaire",
    "traductions": {
      "fr": "pour celui qui / à qui / pour quiconque",
      "en": "for whoever / to whom",
      "tr": "kim için / kime / kimse için"
    },
    "famille": [
      { "ar": "مَنْ", "translit": "man", "fr": "qui / quiconque", "en": "who / whoever", "tr": "kim" },
      { "ar": "لِ", "translit": "li", "fr": "pour / à", "en": "for / to", "tr": "için / -e" },
      { "ar": "لِلَّذِينَ", "translit": "li-llaḏīna", "fr": "pour ceux qui", "en": "for those who", "tr": "onlar için" }
    ],
    "profondeur": {
      "fr": "Li-man signifie « pour celui qui » ou « à qui ». Cette forme sert souvent à ouvrir une règle générale : la récompense, la guidance ou la conséquence appartient à celui qui choisit une voie.",
      "en": "Li-man means “for whoever” or “to whom.” It often opens a general rule: reward, guidance, or consequence belongs to whoever chooses a path.",
      "tr": "Li-man “kim için / kime” demektir. Çoğu zaman genel bir kural açar: mükâfat, hidayet veya sonuç bir yolu seçen kimseye aittir."
    },
    "sourates_cles": [2, 18, 81]
  },
  {
    "id": 205,
    "ar": "بَيْنَهُمْ",
    "translit": "baynahum",
    "frequence": 54,
    "rang": 205,
    "racine": "ب-ي-ن",
    "theme": "communaute",
    "traductions": {
      "fr": "entre eux / parmi eux",
      "en": "between them / among them",
      "tr": "aralarında"
    },
    "famille": [
      { "ar": "بَيْنَ", "translit": "bayna", "fr": "entre", "en": "between", "tr": "arasında" },
      { "ar": "بَيَان", "translit": "bayān", "fr": "explication / clarté", "en": "clarification", "tr": "beyan / açıklama" },
      { "ar": "مُبِين", "translit": "mubīn", "fr": "clair / évident", "en": "clear / manifest", "tr": "apaçık" }
    ],
    "profondeur": {
      "fr": "Baynahum signifie « entre eux ». Le Coran l’utilise pour parler des relations, des différends, des jugements, des alliances ou des divisions entre les gens.",
      "en": "Baynahum means “between them.” The Quran uses it for relationships, disputes, judgments, alliances, or divisions among people.",
      "tr": "Baynahum “aralarında” demektir. Kur’an bunu insanlar arasındaki ilişkiler, anlaşmazlıklar, hükümler, ittifaklar veya ayrılıklar için kullanır."
    },
    "sourates_cles": [2, 4, 42]
  },
  {
    "id": 206,
    "ar": "جَهَنَّمَ",
    "translit": "jahannama",
    "frequence": 54,
    "rang": 206,
    "racine": "nom propre",
    "theme": "jugement",
    "traductions": {
      "fr": "Jahannam / l’Enfer",
      "en": "Jahannam / Hell",
      "tr": "Cehennem"
    },
    "famille": [
      { "ar": "نَار", "translit": "nār", "fr": "feu", "en": "fire", "tr": "ateş" },
      { "ar": "الْجَحِيم", "translit": "al-jaḥīm", "fr": "la Fournaise", "en": "the Blaze", "tr": "cehennem ateşi" },
      { "ar": "سَعِير", "translit": "saʿīr", "fr": "feu ardent", "en": "blazing fire", "tr": "alevli ateş" }
    ],
    "profondeur": {
      "fr": "Jahannam est l’un des noms de l’Enfer. Dans le Coran, ce mot fonctionne comme un avertissement moral : les choix humains ont une conséquence réelle.",
      "en": "Jahannam is one of the names of Hell. In the Quran, this word works as a moral warning: human choices have real consequences.",
      "tr": "Jahannam cehennemin isimlerinden biridir. Kur’an’da ahlaki bir uyarı işlevi görür: insanın tercihleri gerçek sonuçlar doğurur."
    },
    "sourates_cles": [4, 15, 78]
  },
  {
    "id": 207,
    "ar": "وَعَمِلُوا",
    "translit": "wa-ʿamilū",
    "frequence": 53,
    "rang": 207,
    "racine": "و + ع-م-ل",
    "theme": "morale",
    "traductions": {
      "fr": "et ils ont œuvré / et ils ont fait",
      "en": "and they did / and they worked",
      "tr": "ve amel ettiler / ve yaptılar"
    },
    "famille": [
      { "ar": "عَمِلَ", "translit": "ʿamila", "fr": "il a fait / œuvré", "en": "he did / worked", "tr": "yaptı / amel etti" },
      { "ar": "عَمَل", "translit": "ʿamal", "fr": "acte / œuvre", "en": "deed / action", "tr": "amel / iş" },
      { "ar": "الصَّالِحَات", "translit": "aṣ-ṣāliḥāt", "fr": "les bonnes œuvres", "en": "righteous deeds", "tr": "salih ameller" }
    ],
    "profondeur": {
      "fr": "Wa-ʿamilū apparaît souvent dans la formule « ceux qui ont cru et accompli de bonnes œuvres ». Le Coran lie ainsi la foi intérieure et l’action visible.",
      "en": "Wa-ʿamilū often appears in the formula “those who believed and did righteous deeds.” The Quran links inner faith and visible action.",
      "tr": "Wa-ʿamilū çoğu zaman “iman edip salih amel işleyenler” ifadesinde geçer. Kur’an içteki iman ile görünen ameli birbirine bağlar."
    },
    "sourates_cles": [18, 95, 103]
  },
  {
    "id": 208,
    "ar": "الْكَافِرِينَ",
    "translit": "al-kāfirīna",
    "frequence": 52,
    "rang": 208,
    "racine": "ك-ف-ر",
    "theme": "foi",
    "traductions": {
      "fr": "les mécréants / ceux qui rejettent",
      "en": "the disbelievers / those who reject",
      "tr": "kâfirler / inkârcılar"
    },
    "famille": [
      { "ar": "كَفَرَ", "translit": "kafara", "fr": "il a mécru / couvert", "en": "he disbelieved / covered", "tr": "inkâr etti / örttü" },
      { "ar": "كُفْر", "translit": "kufr", "fr": "mécréance / ingratitude", "en": "disbelief / ingratitude", "tr": "küfür / nankörlük" },
      { "ar": "كَافِر", "translit": "kāfir", "fr": "mécréant / rejeteur", "en": "disbeliever", "tr": "kâfir / inkârcı" }
    ],
    "profondeur": {
      "fr": "Al-kāfirīna désigne ceux qui rejettent ou couvrent la vérité. La racine k-f-r évoque le fait de voiler : la mécréance est présentée comme un recouvrement volontaire du vrai.",
      "en": "Al-kāfirīna refers to those who reject or cover the truth. The root k-f-r evokes covering: disbelief is presented as a willful veiling of truth.",
      "tr": "Al-kāfirīna hakikati reddeden veya örten kimseleri ifade eder. k-f-r kökü örtmek anlamı taşır; küfür hakikatin isteyerek örtülmesi gibidir."
    },
    "sourates_cles": [2, 98, 109]
  },
  {
    "id": 209,
    "ar": "لَقَدْ",
    "translit": "laqad",
    "frequence": 52,
    "rang": 209,
    "racine": "لَ + قَدْ",
    "theme": "grammaire",
    "traductions": {
      "fr": "certes / vraiment / assurément",
      "en": "certainly / indeed / surely",
      "tr": "andolsun / gerçekten"
    },
    "famille": [
      { "ar": "قَدْ", "translit": "qad", "fr": "déjà / certes", "en": "already / indeed", "tr": "gerçekten / artık" },
      { "ar": "وَلَقَدْ", "translit": "wa-laqad", "fr": "et certes", "en": "and certainly", "tr": "andolsun" },
      { "ar": "لَ", "translit": "la", "fr": "particule d’insistance", "en": "emphasis particle", "tr": "pekiştirme edatı" }
    ],
    "profondeur": {
      "fr": "Laqad est une formule d’insistance très forte. Elle confirme une vérité, rappelle un événement ou introduit une preuve historique : « certes, vraiment ».",
      "en": "Laqad is a strong formula of emphasis. It confirms a truth, recalls an event, or introduces historical proof: “certainly, indeed.”",
      "tr": "Laqad güçlü bir pekiştirme ifadesidir. Bir hakikati doğrular, bir olayı hatırlatır veya tarihî bir delil getirir: “andolsun, gerçekten”."
    },
    "sourates_cles": [23, 54, 95]
  },
  {
    "id": 210,
    "ar": "عَلَيْنَا",
    "translit": "ʿalaynā",
    "frequence": 51,
    "rang": 210,
    "racine": "عَلَى + نَا",
    "theme": "grammaire",
    "traductions": {
      "fr": "sur nous / à Notre charge / contre nous",
      "en": "upon us / upon Us / against us",
      "tr": "üzerimize / bize düşen / aleyhimize"
    },
    "famille": [
      { "ar": "عَلَى", "translit": "ʿalā", "fr": "sur / au-dessus de", "en": "on / upon", "tr": "üzerinde" },
      { "ar": "عَلَيْكُمْ", "translit": "ʿalaykum", "fr": "sur vous", "en": "upon you", "tr": "üzerinize" },
      { "ar": "عَلَيْهِمْ", "translit": "ʿalayhim", "fr": "sur eux", "en": "upon them", "tr": "onların üzerine" }
    ],
    "profondeur": {
      "fr": "ʿAlaynā signifie « sur nous ». Quand Allah parle avec cette forme, elle peut exprimer une promesse ou une règle qu’Il a établie par Sa sagesse, sans contrainte extérieure.",
      "en": "ʿAlaynā means “upon us.” When Allah speaks with this form, it can express a promise or rule He established by His wisdom, without any external compulsion.",
      "tr": "ʿAlaynā “üzerimize” demektir. Allah bu ifadeyi kullandığında bu, dıştan bir zorunluluk değil, O’nun hikmetiyle belirlediği vaadi veya kuralı ifade eder."
    },
    "sourates_cles": [6, 10, 92]
  },
  {
    "id": 211,
    "ar": "لَهَا",
    "translit": "lahā",
    "frequence": 51,
    "rang": 211,
    "racine": "لِ + هَا",
    "theme": "grammaire",
    "traductions": {
      "fr": "à elle / pour elle / elle a",
      "en": "for her / to it / it has",
      "tr": "ona / onun için / onun"
    },
    "famille": [
      { "ar": "لَهُ", "translit": "lahu", "fr": "à lui / pour lui", "en": "for him / to him", "tr": "ona / onun için" },
      { "ar": "لَهُمْ", "translit": "lahum", "fr": "à eux / pour eux", "en": "for them", "tr": "onlara / onlar için" },
      { "ar": "لَكَ", "translit": "laka", "fr": "à toi / pour toi", "en": "for you", "tr": "sana / senin için" }
    ],
    "profondeur": {
      "fr": "Lahā signifie « à elle » ou « pour elle ». En arabe coranique, le pronom peut renvoyer à une réalité féminine grammaticale : la terre, l’âme, la vie, la communauté ou une chose mentionnée avant.",
      "en": "Lahā means “for her” or “to it.” In Quranic Arabic, the pronoun may refer to a grammatically feminine reality: the earth, the soul, life, a community, or something previously mentioned.",
      "tr": "Lahā “ona / onun için” demektir. Kur’an Arapçasında bu zamir gramer olarak dişil olan bir şeye dönebilir: yer, nefis, hayat, ümmet veya önceki bir kelime."
    },
    "sourates_cles": [2, 7, 99]
  },
  {
    "id": 212,
    "ar": "عَلَيْهَا",
    "translit": "ʿalayhā",
    "frequence": 51,
    "rang": 212,
    "racine": "عَلَى + هَا",
    "theme": "grammaire",
    "traductions": {
      "fr": "sur elle / contre elle / à sa charge",
      "en": "upon her / upon it / against it",
      "tr": "onun üzerine / aleyhine"
    },
    "famille": [
      { "ar": "عَلَى", "translit": "ʿalā", "fr": "sur / au-dessus de", "en": "on / upon", "tr": "üzerinde" },
      { "ar": "عَلَيْهِ", "translit": "ʿalayhi", "fr": "sur lui", "en": "upon him", "tr": "onun üzerine" },
      { "ar": "عَلَيْهِمْ", "translit": "ʿalayhim", "fr": "sur eux", "en": "upon them", "tr": "onların üzerine" }
    ],
    "profondeur": {
      "fr": "ʿAlayhā peut indiquer une charge, une responsabilité ou une conséquence. Selon le contexte, ce qui est « sur elle » peut être un poids, une obligation ou une trace laissée par les actes.",
      "en": "ʿAlayhā can indicate burden, responsibility, or consequence. Depending on context, what is “upon it” may be a weight, duty, or trace left by actions.",
      "tr": "ʿAlayhā yük, sorumluluk veya sonuç ifade edebilir. Bağlama göre bir şeyin “üzerinde” olması görev, yük veya amellerin izi anlamına gelebilir."
    },
    "sourates_cles": [2, 6, 99]
  },
  {
    "id": 213,
    "ar": "إِلَيْهِمْ",
    "translit": "ilayhim",
    "frequence": 51,
    "rang": 213,
    "racine": "إِلَى + هُمْ",
    "theme": "grammaire",
    "traductions": {
      "fr": "vers eux / à eux",
      "en": "to them / toward them",
      "tr": "onlara / onlara doğru"
    },
    "famille": [
      { "ar": "إِلَى", "translit": "ilā", "fr": "vers / à", "en": "to / toward", "tr": "-e / doğru" },
      { "ar": "إِلَيْهِ", "translit": "ilayhi", "fr": "vers lui", "en": "to him", "tr": "ona" },
      { "ar": "إِلَيْكَ", "translit": "ilayka", "fr": "vers toi", "en": "to you", "tr": "sana" }
    ],
    "profondeur": {
      "fr": "Ilayhim indique une direction vers un groupe. Le Coran l’utilise souvent pour parler d’un message envoyé à des peuples, d’un retour vers eux, ou d’une parole adressée à eux.",
      "en": "Ilayhim indicates direction toward a group. The Quran often uses it for a message sent to people, a return to them, or speech addressed to them.",
      "tr": "Ilayhim bir topluluğa yönelişi ifade eder. Kur’an’da bir mesajın onlara gönderilmesi, onlara dönülmesi veya onlara hitap edilmesi için kullanılır."
    },
    "sourates_cles": [2, 7, 36]
  },
  {
    "id": 214,
    "ar": "مِنَّا",
    "translit": "minnā",
    "frequence": 50,
    "rang": 214,
    "racine": "مِن + نَا",
    "theme": "grammaire",
    "traductions": {
      "fr": "de nous / venant de nous / parmi nous",
      "en": "from us / among us",
      "tr": "bizden / aramızdan"
    },
    "famille": [
      { "ar": "مِنْ", "translit": "min", "fr": "de / depuis / parmi", "en": "from / among", "tr": "-den / arasından" },
      { "ar": "مِنْهُمْ", "translit": "minhum", "fr": "d’eux / parmi eux", "en": "from them", "tr": "onlardan" },
      { "ar": "مِنْكُمْ", "translit": "minkum", "fr": "de vous / parmi vous", "en": "from you", "tr": "sizden" }
    ],
    "profondeur": {
      "fr": "Minnā signifie « de nous » ou « parmi nous ». Il peut apparaître dans une parole humaine collective ou, lorsque le locuteur est Allah, dans une formule de majesté.",
      "en": "Minnā means “from us” or “among us.” It may appear in collective human speech or, when the speaker is Allah, in a majestic divine form.",
      "tr": "Minnā “bizden / aramızdan” demektir. İnsanların toplu sözlerinde veya Allah’ın azamet ifadesiyle konuştuğu yerlerde geçebilir."
    },
    "sourates_cles": [2, 18, 72]
  },
  {
    "id": 215,
    "ar": "رَسُولًا",
    "translit": "rasūlan",
    "frequence": 50,
    "rang": 215,
    "racine": "ر-س-ل",
    "theme": "prophetie",
    "traductions": {
      "fr": "un messager / comme messager",
      "en": "a messenger / as a messenger",
      "tr": "bir elçi / resul olarak"
    },
    "famille": [
      { "ar": "رَسُول", "translit": "rasūl", "fr": "messager", "en": "messenger", "tr": "resul / elçi" },
      { "ar": "أَرْسَلَ", "translit": "arsala", "fr": "il a envoyé", "en": "he sent", "tr": "gönderdi" },
      { "ar": "رِسَالَة", "translit": "risāla", "fr": "message / mission", "en": "message / mission", "tr": "risale / mesaj" }
    ],
    "profondeur": {
      "fr": "Rasūlan est une forme de rasūl : un envoyé porteur d’un message. Le Coran insiste sur le fait que les peuples reçoivent des messagers pour transmettre, avertir et clarifier.",
      "en": "Rasūlan is a form of rasūl: a messenger carrying a message. The Quran emphasizes that peoples receive messengers to convey, warn, and clarify.",
      "tr": "Rasūlan, rasūl kelimesinin bir hâlidir: mesaj taşıyan elçi. Kur’an kavimlere tebliğ eden, uyaran ve açıklayan elçilerin gönderildiğini vurgular."
    },
    "sourates_cles": [2, 4, 17]
  },
  {
    "id": 216,
    "ar": "آيَاتِهِ",
    "translit": "āyātihi",
    "frequence": 50,
    "rang": 216,
    "racine": "أ-ي-ي",
    "theme": "prophetie",
    "traductions": {
      "fr": "Ses signes / Ses versets",
      "en": "His signs / His verses",
      "tr": "O’nun ayetleri / işaretleri"
    },
    "famille": [
      { "ar": "آيَة", "translit": "āya", "fr": "signe / verset", "en": "sign / verse", "tr": "ayet / işaret" },
      { "ar": "آيَات", "translit": "āyāt", "fr": "signes / versets", "en": "signs / verses", "tr": "ayetler" },
      { "ar": "بِآيَاتِنَا", "translit": "bi-āyātinā", "fr": "par Nos signes", "en": "with Our signs", "tr": "ayetlerimizle" }
    ],
    "profondeur": {
      "fr": "Āyātihi signifie « Ses signes » ou « Ses versets ». Le mot āya relie le texte révélé et les signes présents dans la création : lire le Coran et observer le monde sont deux formes de lecture.",
      "en": "Āyātihi means “His signs” or “His verses.” Āya connects revealed text and signs in creation: reading the Quran and observing the world are two forms of reading.",
      "tr": "Āyātihi “O’nun ayetleri / işaretleri” demektir. Āya vahyedilen metinle yaratılıştaki işaretleri bağlar: Kur’an’ı okumak ve dünyayı gözlemlemek iki okuma biçimidir."
    },
    "sourates_cles": [2, 6, 41]
  },
  {
    "id": 217,
    "ar": "النَّهَارِ",
    "translit": "an-nahāri",
    "frequence": 50,
    "rang": 217,
    "racine": "ن-ه-ر",
    "theme": "temps",
    "traductions": {
      "fr": "le jour / la journée",
      "en": "the daytime / the day",
      "tr": "gündüz"
    },
    "famille": [
      { "ar": "نَهَار", "translit": "nahār", "fr": "jour / journée", "en": "daytime", "tr": "gündüz" },
      { "ar": "لَيْل", "translit": "layl", "fr": "nuit", "en": "night", "tr": "gece" },
      { "ar": "أَنْهَار", "translit": "anhār", "fr": "rivières", "en": "rivers", "tr": "ırmaklar" }
    ],
    "profondeur": {
      "fr": "An-nahār désigne le jour visible, souvent en paire avec la nuit. Le Coran invite à observer l’alternance du jour et de la nuit comme un signe de l’ordre divin.",
      "en": "An-nahār refers to visible daytime, often paired with night. The Quran invites reflection on the alternation of day and night as a sign of divine order.",
      "tr": "An-nahār gündüzü ifade eder ve çoğu zaman geceyle birlikte geçer. Kur’an gece ve gündüzün dönüşümünü ilahi düzenin işareti olarak düşünmeye çağırır."
    },
    "sourates_cles": [10, 17, 91]
  },
  {
    "id": 218,
    "ar": "اللَّيْلِ",
    "translit": "al-layli",
    "frequence": 50,
    "rang": 218,
    "racine": "ل-ي-ل",
    "theme": "temps",
    "traductions": {
      "fr": "la nuit / de la nuit",
      "en": "the night / of the night",
      "tr": "gece / gecenin"
    },
    "famille": [
      { "ar": "لَيْل", "translit": "layl", "fr": "nuit", "en": "night", "tr": "gece" },
      { "ar": "لَيْلَة", "translit": "layla", "fr": "une nuit", "en": "a night", "tr": "bir gece" },
      { "ar": "لَيْلَةُ الْقَدْر", "translit": "laylat al-qadr", "fr": "la Nuit du Destin", "en": "Night of Decree", "tr": "Kadir Gecesi" }
    ],
    "profondeur": {
      "fr": "Al-layl désigne la nuit. Dans le Coran, la nuit est à la fois un signe cosmique, un temps de repos et un moment privilégié pour la prière et la révélation.",
      "en": "Al-layl means the night. In the Quran, night is a cosmic sign, a time of rest, and a privileged moment for prayer and revelation.",
      "tr": "Al-layl gece demektir. Kur’an’da gece kozmik bir işaret, dinlenme zamanı ve dua ile vahiy için özel bir vakittir."
    },
    "sourates_cles": [73, 89, 92]
  },
  {
    "id": 219,
    "ar": "الْمُشْرِكِينَ",
    "translit": "al-mushrikīna",
    "frequence": 49,
    "rang": 219,
    "racine": "ش-ر-ك",
    "theme": "foi",
    "traductions": {
      "fr": "les associateurs / polythéistes",
      "en": "the polytheists / those who associate partners",
      "tr": "müşrikler / ortak koşanlar"
    },
    "famille": [
      { "ar": "شِرْك", "translit": "shirk", "fr": "association à Allah", "en": "associating partners with Allah", "tr": "şirk" },
      { "ar": "مُشْرِك", "translit": "mushrik", "fr": "associateur / polythéiste", "en": "polytheist", "tr": "müşrik" },
      { "ar": "شَرِيك", "translit": "sharīk", "fr": "associé / partenaire", "en": "partner", "tr": "ortak" }
    ],
    "profondeur": {
      "fr": "Al-mushrikīna désigne ceux qui associent à Allah ce qui ne doit pas Lui être associé. La racine sh-r-k évoque le partenariat : le shirk crée un partage là où l’unicité divine l’exclut.",
      "en": "Al-mushrikīna refers to those who associate partners with Allah. The root sh-r-k evokes partnership: shirk creates partnership where divine oneness excludes it.",
      "tr": "Al-mushrikīna Allah’a ortak koşanları ifade eder. sh-r-k kökü ortaklık fikrini taşır: şirk, ilahi tevhidin reddettiği yerde ortaklık kurmaktır."
    },
    "sourates_cles": [4, 6, 9]
  },
  {
    "id": 220,
    "ar": "أَنْفُسَهُمْ",
    "translit": "anfusahum",
    "frequence": 49,
    "rang": 220,
    "racine": "ن-ف-س",
    "theme": "homme",
    "traductions": {
      "fr": "leurs âmes / eux-mêmes",
      "en": "their souls / themselves",
      "tr": "kendi nefisleri / kendileri"
    },
    "famille": [
      { "ar": "نَفْس", "translit": "nafs", "fr": "âme / soi", "en": "soul / self", "tr": "nefis / benlik" },
      { "ar": "أَنْفُس", "translit": "anfus", "fr": "âmes / personnes", "en": "souls / selves", "tr": "nefisler" },
      { "ar": "نَفَس", "translit": "nafas", "fr": "souffle / respiration", "en": "breath", "tr": "nefes" }
    ],
    "profondeur": {
      "fr": "Anfusahum signifie « eux-mêmes » ou « leurs âmes ». Le Coran utilise souvent cette forme pour rappeler que l’injustice, la réforme ou la perte commence dans le rapport de l’homme à lui-même.",
      "en": "Anfusahum means “themselves” or “their souls.” The Quran often uses it to show that injustice, reform, or loss begins in a person’s relation to the self.",
      "tr": "Anfusahum “kendileri / kendi nefisleri” demektir. Kur’an bunu zulmün, ıslahın veya kaybın insanın kendi nefsiyle ilişkisinde başladığını göstermek için kullanır."
    },
    "sourates_cles": [2, 3, 59]
  },
  {
    "id": 221,
    "ar": "أَكْثَرَهُمْ",
    "translit": "aktharahum",
    "frequence": 48,
    "rang": 221,
    "racine": "ك-ث-ر",
    "theme": "homme",
    "traductions": {
      "fr": "la plupart d’entre eux",
      "en": "most of them",
      "tr": "onların çoğu"
    },
    "famille": [
      { "ar": "كَثِير", "translit": "kathīr", "fr": "beaucoup / nombreux", "en": "many / much", "tr": "çok" },
      { "ar": "أَكْثَر", "translit": "akthar", "fr": "plus nombreux / la plupart", "en": "more / most", "tr": "daha çok / çoğu" },
      { "ar": "كَثْرَة", "translit": "kathra", "fr": "abondance / grand nombre", "en": "abundance", "tr": "çokluk" }
    ],
    "profondeur": {
      "fr": "Aktharahum signifie « la plupart d’entre eux ». Le Coran l’utilise souvent dans des constats lucides : la majorité ne sait pas, ne remercie pas, ou ne réfléchit pas vraiment.",
      "en": "Aktharahum means “most of them.” The Quran often uses it in sober observations: most do not know, are not grateful, or do not truly reflect.",
      "tr": "Aktharahum “onların çoğu” demektir. Kur’an bunu gerçekçi tespitlerde kullanır: çoğu bilmez, şükretmez veya gerçekten düşünmez."
    },
    "sourates_cles": [7, 12, 30]
  },
  {
    "id": 222,
    "ar": "قَوْمٍ",
    "translit": "qawmin",
    "frequence": 48,
    "rang": 222,
    "racine": "ق-و-م",
    "theme": "communaute",
    "traductions": {
      "fr": "un peuple / d’un peuple",
      "en": "a people / of a people",
      "tr": "bir kavim / kavmin"
    },
    "famille": [
      { "ar": "قَوْم", "translit": "qawm", "fr": "peuple / groupe", "en": "people / nation", "tr": "kavim / halk" },
      { "ar": "قَوْمِي", "translit": "qawmī", "fr": "mon peuple", "en": "my people", "tr": "kavmim" },
      { "ar": "قَامَ", "translit": "qāma", "fr": "il s’est levé", "en": "he stood", "tr": "kalktı" }
    ],
    "profondeur": {
      "fr": "Qawmin est une forme de qawm, le peuple. Les récits coraniques parlent souvent de peuples, non seulement d’individus : la foi, l’injustice et la réforme ont aussi une dimension collective.",
      "en": "Qawmin is a form of qawm, a people. Quranic narratives often speak of peoples, not only individuals: faith, injustice, and reform also have a collective dimension.",
      "tr": "Qawmin, qawm yani kavim kelimesinin bir hâlidir. Kur’an kıssaları sadece bireylerden değil, topluluklardan da bahseder: iman, zulüm ve ıslah toplumsal boyut taşır."
    },
    "sourates_cles": [7, 11, 26]
  },
  {
    "id": 223,
    "ar": "بَعْضُهُمْ",
    "translit": "baʿḍuhum",
    "frequence": 48,
    "rang": 223,
    "racine": "ب-ع-ض",
    "theme": "communaute",
    "traductions": {
      "fr": "certains d’entre eux / une partie d’eux",
      "en": "some of them / part of them",
      "tr": "onların bir kısmı / bazıları"
    },
    "famille": [
      { "ar": "بَعْض", "translit": "baʿḍ", "fr": "partie / certains", "en": "some / part", "tr": "bazı / bir kısmı" },
      { "ar": "بَعْضُكُمْ", "translit": "baʿḍukum", "fr": "certains d’entre vous", "en": "some of you", "tr": "sizden bazıları" },
      { "ar": "بَعْضًا", "translit": "baʿḍan", "fr": "les uns les autres / une partie", "en": "one another / some", "tr": "bazısını / birbirini" }
    ],
    "profondeur": {
      "fr": "Baʿḍuhum signifie « certains d’entre eux ». Le Coran nuance souvent les groupes : tous ne sont pas identiques, certains croient, certains rejettent, certains cachent ou changent.",
      "en": "Baʿḍuhum means “some of them.” The Quran often nuances groups: not all are the same; some believe, some reject, some conceal or change.",
      "tr": "Baʿḍuhum “onların bazıları” demektir. Kur’an toplulukları incelikle ayırır: hepsi aynı değildir; bazıları iman eder, bazıları reddeder, bazıları gizler veya değiştirir."
    },
    "sourates_cles": [2, 3, 9]
  },
  {
    "id": 224,
    "ar": "أُوتُوا",
    "translit": "ūtū",
    "frequence": 47,
    "rang": 224,
    "racine": "أ-ت-ي",
    "theme": "prophetie",
    "traductions": {
      "fr": "ils ont reçu / il leur a été donné",
      "en": "they were given / they received",
      "tr": "kendilerine verildi"
    },
    "famille": [
      { "ar": "آتَى", "translit": "ātā", "fr": "il a donné", "en": "he gave", "tr": "verdi" },
      { "ar": "أُوتِيَ", "translit": "ūtiya", "fr": "il a reçu / il lui fut donné", "en": "he was given", "tr": "ona verildi" },
      { "ar": "آتَيْنَا", "translit": "ātaynā", "fr": "Nous avons donné", "en": "We gave", "tr": "Biz verdik" }
    ],
    "profondeur": {
      "fr": "Ūtū signifie « ils ont reçu ». Il apparaît souvent pour parler de ceux à qui le Livre, la science, la sagesse ou une preuve a été donnée.",
      "en": "Ūtū means “they were given.” It often refers to those who were given the Book, knowledge, wisdom, or proof.",
      "tr": "Ūtū “kendilerine verildi” demektir. Kitap, ilim, hikmet veya delil verilen kimseler hakkında sıkça kullanılır."
    },
    "sourates_cles": [2, 3, 4]
  },
  {
    "id": 225,
    "ar": "يَكُونُوا",
    "translit": "yakūnū",
    "frequence": 47,
    "rang": 225,
    "racine": "ك-و-ن",
    "theme": "grammaire",
    "traductions": {
      "fr": "qu’ils soient / ils seront",
      "en": "that they be / they may be",
      "tr": "olsunlar / olabilirler"
    },
    "famille": [
      { "ar": "كَانَ", "translit": "kāna", "fr": "il était", "en": "he was", "tr": "idi" },
      { "ar": "يَكُون", "translit": "yakūn", "fr": "il est / il sera", "en": "he is / will be", "tr": "olur / olacak" },
      { "ar": "كُنْ", "translit": "kun", "fr": "sois !", "en": "be!", "tr": "ol!" }
    ],
    "profondeur": {
      "fr": "Yakūnū vient de la racine de l’existence k-w-n. Cette racine est centrale : elle sert à exprimer l’être, le devenir, l’existence et l’ordre divin « kun ».",
      "en": "Yakūnū comes from the root of existence k-w-n. This root is central: it expresses being, becoming, existence, and the divine command “kun.”",
      "tr": "Yakūnū varlık kökü k-w-n’den gelir. Bu kök çok merkezîdir: olmak, var olmak, dönüşmek ve ilahi “kun” emrini ifade eder."
    },
    "sourates_cles": [2, 3, 36]
  },
  {
    "id": 226,
    "ar": "فَإِنَّهُ",
    "translit": "fa-innahu",
    "frequence": 47,
    "rang": 226,
    "racine": "ف + إِنَّ + هُ",
    "theme": "grammaire",
    "traductions": {
      "fr": "alors certes il / car vraiment il",
      "en": "then indeed he / for indeed it",
      "tr": "öyleyse şüphesiz o / çünkü o"
    },
    "famille": [
      { "ar": "فَ", "translit": "fa", "fr": "alors / donc", "en": "so / then", "tr": "öyleyse / sonra" },
      { "ar": "إِنَّهُ", "translit": "innahu", "fr": "certes il / cela", "en": "indeed he / it", "tr": "şüphesiz o" },
      { "ar": "إِنَّ", "translit": "inna", "fr": "certes", "en": "indeed", "tr": "şüphesiz" }
    ],
    "profondeur": {
      "fr": "Fa-innahu relie une conséquence à une affirmation renforcée. Le mot peut introduire une explication, une conclusion ou une confirmation après une condition.",
      "en": "Fa-innahu connects a consequence to an emphasized statement. It can introduce explanation, conclusion, or confirmation after a condition.",
      "tr": "Fa-innahu bir sonucu güçlü bir ifadeye bağlar. Şarttan sonra açıklama, sonuç veya kesinlik bildirebilir."
    },
    "sourates_cles": [2, 4, 6]
  },
  {
    "id": 227,
    "ar": "لَعَلَّهُمْ",
    "translit": "laʿallahum",
    "frequence": 46,
    "rang": 227,
    "racine": "لَعَلَّ + هُمْ",
    "theme": "grammaire",
    "traductions": {
      "fr": "afin qu’ils / peut-être qu’ils",
      "en": "so that they may / perhaps they",
      "tr": "umulur ki onlar / diye"
    },
    "famille": [
      { "ar": "لَعَلَّ", "translit": "laʿalla", "fr": "peut-être / afin que", "en": "perhaps / so that", "tr": "umulur ki / belki" },
      { "ar": "لَعَلَّكُمْ", "translit": "laʿallakum", "fr": "afin que vous", "en": "so that you may", "tr": "umulur ki siz" },
      { "ar": "هُمْ", "translit": "hum", "fr": "eux / ils", "en": "they / them", "tr": "onlar" }
    ],
    "profondeur": {
      "fr": "Laʿallahum introduit souvent une finalité pédagogique : afin qu’ils reviennent, comprennent, réfléchissent ou craignent Allah.",
      "en": "Laʿallahum often introduces a pedagogical purpose: so that they may return, understand, reflect, or be mindful of Allah.",
      "tr": "Laʿallahum çoğu zaman eğitimsel bir amaç bildirir: dönsünler, anlasınlar, düşünsünler veya Allah’tan sakınsınlar diye."
    },
    "sourates_cles": [2, 7, 43]
  },
  {
    "id": 228,
    "ar": "الْحَيَاةِ",
    "translit": "al-ḥayāti",
    "frequence": 46,
    "rang": 228,
    "racine": "ح-ي-ي",
    "theme": "creation",
    "traductions": {
      "fr": "la vie / de la vie",
      "en": "life / of life",
      "tr": "hayat / hayatın"
    },
    "famille": [
      { "ar": "حَيَاة", "translit": "ḥayāt", "fr": "vie", "en": "life", "tr": "hayat" },
      { "ar": "الحَيّ", "translit": "al-ḥayy", "fr": "Le Vivant", "en": "The Ever-Living", "tr": "El-Hayy" },
      { "ar": "أَحْيَا", "translit": "aḥyā", "fr": "il a donné vie", "en": "he gave life", "tr": "hayat verdi" }
    ],
    "profondeur": {
      "fr": "Al-ḥayāt désigne la vie. Dans le Coran, elle est souvent comparée à la mort, à l’au-delà, et à la vie d’ici-bas qui passe rapidement.",
      "en": "Al-ḥayāt means life. In the Quran, it is often contrasted with death, the Hereafter, and the fleeting worldly life.",
      "tr": "Al-ḥayāt hayat demektir. Kur’an’da ölüm, ahiret ve hızla geçen dünya hayatıyla sıkça karşılaştırılır."
    },
    "sourates_cles": [2, 3, 29]
  },
  {
    "id": 229,
    "ar": "هُدًى",
    "translit": "hudan",
    "frequence": 46,
    "rang": 229,
    "racine": "ه-د-ي",
    "theme": "foi",
    "traductions": {
      "fr": "guidance / direction droite",
      "en": "guidance / right direction",
      "tr": "hidayet / doğru yol"
    },
    "famille": [
      { "ar": "هَدَى", "translit": "hadā", "fr": "il a guidé", "en": "he guided", "tr": "hidayet verdi" },
      { "ar": "هِدَايَة", "translit": "hidāya", "fr": "guidance", "en": "guidance", "tr": "hidayet" },
      { "ar": "مُهْتَدٍ", "translit": "muhtadī", "fr": "guidé / bien guidé", "en": "rightly guided", "tr": "hidayet üzere olan" }
    ],
    "profondeur": {
      "fr": "Hudan signifie guidance. Le Coran se présente comme une guidance pour ceux qui veulent être orientés vers le vrai, le bien et le chemin droit.",
      "en": "Hudan means guidance. The Quran presents itself as guidance for those who seek orientation toward truth, goodness, and the straight path.",
      "tr": "Hudan hidayet demektir. Kur’an kendisini hakka, hayra ve dosdoğru yola yönelmek isteyenler için hidayet olarak tanıtır."
    },
    "sourates_cles": [2, 10, 31]
  },
  {
    "id": 230,
    "ar": "جَنَّاتٍ",
    "translit": "jannātin",
    "frequence": 46,
    "rang": 230,
    "racine": "ج-ن-ن",
    "theme": "jugement",
    "traductions": {
      "fr": "des jardins / des paradis",
      "en": "gardens / paradises",
      "tr": "cennetler / bahçeler"
    },
    "famille": [
      { "ar": "جَنَّة", "translit": "janna", "fr": "paradis / jardin", "en": "paradise / garden", "tr": "cennet / bahçe" },
      { "ar": "جِنّ", "translit": "jinn", "fr": "djinns", "en": "jinn", "tr": "cin" },
      { "ar": "جَنِين", "translit": "janīn", "fr": "fœtus / caché", "en": "fetus / hidden", "tr": "cenin" }
    ],
    "profondeur": {
      "fr": "Jannātin est le pluriel de janna : jardins. La racine j-n-n évoque ce qui est caché ou couvert ; le paradis est imaginé comme un jardin protégé et voilé.",
      "en": "Jannātin is the plural of janna: gardens. The root j-n-n evokes what is hidden or covered; Paradise is imagined as a protected, veiled garden.",
      "tr": "Jannātin, janna kelimesinin çoğuludur: bahçeler / cennetler. j-n-n kökü gizlenmiş ve örtülmüş olanı çağrıştırır; cennet korunmuş bir bahçe gibidir."
    },
    "sourates_cles": [55, 56, 98]
  },
  {
    "id": 231,
    "ar": "خَالِدِينَ",
    "translit": "khālidīna",
    "frequence": 45,
    "rang": 231,
    "racine": "خ-ل-د",
    "theme": "jugement",
    "traductions": {
      "fr": "demeurant éternellement / éternels",
      "en": "abiding forever / everlasting",
      "tr": "ebedî kalanlar / kalıcı olanlar"
    },
    "famille": [
      { "ar": "خُلْد", "translit": "khuld", "fr": "éternité / permanence", "en": "eternity / permanence", "tr": "ebediyet" },
      { "ar": "خَالِد", "translit": "khālid", "fr": "éternel / demeurant", "en": "abiding / everlasting", "tr": "kalıcı / ebedî" },
      { "ar": "أَخْلَدَ", "translit": "akhlada", "fr": "il s’est attaché durablement", "en": "he clung permanently", "tr": "kalıcı şekilde bağlandı" }
    ],
    "profondeur": {
      "fr": "Khālidīna exprime la demeure durable. Dans les passages du Paradis ou de l’Enfer, ce mot rappelle que certaines conséquences ne sont pas passagères mais définitives.",
      "en": "Khālidīna expresses lasting dwelling. In passages about Paradise or Hell, it reminds that some consequences are not temporary but final.",
      "tr": "Khālidīna kalıcı olarak kalmayı ifade eder. Cennet ve cehennem bağlamlarında bazı sonuçların geçici değil, kesin olduğunu hatırlatır."
    },
    "sourates_cles": [2, 4, 98]
  },
  {
    "id": 232,
    "ar": "بِإِذْنِ",
    "translit": "bi-idhni",
    "frequence": 45,
    "rang": 232,
    "racine": "أ-ذ-ن",
    "theme": "allah",
    "traductions": {
      "fr": "par permission de / avec l’autorisation de",
      "en": "by permission of / with permission",
      "tr": "izniyle / izinle"
    },
    "famille": [
      { "ar": "إِذْن", "translit": "idhn", "fr": "permission / autorisation", "en": "permission", "tr": "izin" },
      { "ar": "أَذِنَ", "translit": "adhina", "fr": "il a permis", "en": "he permitted", "tr": "izin verdi" },
      { "ar": "أُذُن", "translit": "udhun", "fr": "oreille", "en": "ear", "tr": "kulak" }
    ],
    "profondeur": {
      "fr": "Bi-idhni signifie « par permission ». Dans le Coran, beaucoup d’événements sont replacés sous la permission divine : rien ne se produit hors de la souveraineté d’Allah.",
      "en": "Bi-idhni means “by permission.” In the Quran, many events are placed under divine permission: nothing occurs outside Allah’s sovereignty.",
      "tr": "Bi-idhni “izniyle” demektir. Kur’an’da birçok olay ilahi izin altında anlatılır: hiçbir şey Allah’ın hâkimiyeti dışında gerçekleşmez."
    },
    "sourates_cles": [2, 3, 64]
  },
  {
    "id": 233,
    "ar": "أَبَدًا",
    "translit": "abadan",
    "frequence": 44,
    "rang": 233,
    "racine": "أ-ب-د",
    "theme": "temps",
    "traductions": {
      "fr": "à jamais / éternellement / jamais",
      "en": "forever / ever / never",
      "tr": "ebediyen / asla"
    },
    "famille": [
      { "ar": "أَبَد", "translit": "abad", "fr": "éternité / toujours", "en": "forever / eternity", "tr": "ebed" },
      { "ar": "خُلْد", "translit": "khuld", "fr": "permanence / éternité", "en": "permanence / eternity", "tr": "ebediyet" },
      { "ar": "دَائِم", "translit": "dāʾim", "fr": "durable / permanent", "en": "lasting / permanent", "tr": "daimî" }
    ],
    "profondeur": {
      "fr": "Abadan marque une durée absolue : à jamais ou jamais selon le contexte. Il donne aux promesses, menaces ou interdictions une portée définitive.",
      "en": "Abadan marks absolute duration: forever or never depending on context. It gives promises, warnings, or prohibitions a definitive scope.",
      "tr": "Abadan bağlama göre “ebediyen” veya “asla” anlamına gelir. Vaatlere, uyarılara ve yasaklara kesinlik ve süreklilik kazandırır."
    },
    "sourates_cles": [4, 9, 98]
  },
  {
    "id": 234,
    "ar": "الْمُتَّقِينَ",
    "translit": "al-muttaqīna",
    "frequence": 44,
    "rang": 234,
    "racine": "و-ق-ي",
    "theme": "morale",
    "traductions": {
      "fr": "les pieux / ceux qui se protègent",
      "en": "the God-conscious / the pious",
      "tr": "muttakiler / takva sahipleri"
    },
    "famille": [
      { "ar": "تَقْوَى", "translit": "taqwā", "fr": "piété / conscience d’Allah", "en": "God-consciousness", "tr": "takva" },
      { "ar": "اتَّقَى", "translit": "ittaqā", "fr": "il s’est protégé / a craint Allah", "en": "he was mindful", "tr": "takva sahibi oldu" },
      { "ar": "وَقَى", "translit": "waqā", "fr": "il a protégé", "en": "he protected", "tr": "korudu" }
    ],
    "profondeur": {
      "fr": "Al-muttaqīna désigne ceux qui vivent avec taqwā. La racine évoque la protection : la piété est un bouclier intérieur contre ce qui abîme l’âme.",
      "en": "Al-muttaqīna refers to those who live with taqwā. The root evokes protection: piety is an inner shield against what harms the soul.",
      "tr": "Al-muttaqīna takva sahipleridir. Kök anlamı korunmayı çağrıştırır: takva, nefse zarar veren şeylere karşı içsel bir kalkandır."
    },
    "sourates_cles": [2, 3, 51]
  },
  {
    "id": 235,
    "ar": "الصَّادِقِينَ",
    "translit": "aṣ-ṣādiqīna",
    "frequence": 44,
    "rang": 235,
    "racine": "ص-د-ق",
    "theme": "morale",
    "traductions": {
      "fr": "les véridiques / les sincères",
      "en": "the truthful / the sincere",
      "tr": "sadıklar / doğru sözlüler"
    },
    "famille": [
      { "ar": "صِدْق", "translit": "ṣidq", "fr": "vérité / sincérité", "en": "truthfulness / sincerity", "tr": "sıdk / doğruluk" },
      { "ar": "صَدَقَ", "translit": "ṣadaqa", "fr": "il a dit vrai", "en": "he spoke truth", "tr": "doğru söyledi" },
      { "ar": "صَدَقَة", "translit": "ṣadaqa", "fr": "aumône", "en": "charity", "tr": "sadaka" }
    ],
    "profondeur": {
      "fr": "Aṣ-ṣādiqīna désigne les véridiques. La racine ṣ-d-q relie vérité, sincérité et charité : la sincérité intérieure devient parole vraie et acte donné.",
      "en": "Aṣ-ṣādiqīna refers to the truthful. The root ṣ-d-q connects truth, sincerity, and charity: inner sincerity becomes truthful speech and giving action.",
      "tr": "Aṣ-ṣādiqīna sadıkları ve doğru sözlüleri ifade eder. ṣ-d-q kökü doğruluk, samimiyet ve sadakayı bağlar: içtenlik doğru söz ve verilen amel hâline gelir."
    },
    "sourates_cles": [9, 33, 49]
  },
  {
    "id": 236,
    "ar": "الْجَحِيمِ",
    "translit": "al-jaḥīmi",
    "frequence": 43,
    "rang": 236,
    "racine": "ج-ح-م",
    "theme": "jugement",
    "traductions": {
      "fr": "la Fournaise / l’Enfer ardent",
      "en": "the Blaze / the blazing Hell",
      "tr": "cahim / alevli cehennem"
    },
    "famille": [
      { "ar": "جَحِيم", "translit": "jaḥīm", "fr": "fournaise / feu ardent", "en": "blazing fire", "tr": "cahim / kızgın ateş" },
      { "ar": "نَار", "translit": "nār", "fr": "feu", "en": "fire", "tr": "ateş" },
      { "ar": "سَعِير", "translit": "saʿīr", "fr": "feu brûlant", "en": "blazing fire", "tr": "alevli ateş" }
    ],
    "profondeur": {
      "fr": "Al-jaḥīm est l’un des noms du châtiment par le feu. Le mot produit une image forte de chaleur intense et sert d’avertissement moral.",
      "en": "Al-jaḥīm is one of the names of punishment by fire. The word gives a strong image of intense heat and serves as a moral warning.",
      "tr": "Al-jaḥīm ateşle azabın isimlerinden biridir. Yoğun sıcaklık ve alev imgesi verir; ahlaki bir uyarı işlevi görür."
    },
    "sourates_cles": [26, 37, 102]
  },
  {
    "id": 237,
    "ar": "الْعَرْشِ",
    "translit": "al-ʿarshi",
    "frequence": 43,
    "rang": 237,
    "racine": "ع-ر-ش",
    "theme": "allah",
    "traductions": {
      "fr": "le Trône",
      "en": "the Throne",
      "tr": "Arş"
    },
    "famille": [
      { "ar": "عَرْش", "translit": "ʿarsh", "fr": "trône / structure élevée", "en": "throne / elevated structure", "tr": "arş / taht" },
      { "ar": "عُرُوش", "translit": "ʿurūsh", "fr": "treilles / structures", "en": "trellises / structures", "tr": "çardaklar / yapılar" },
      { "ar": "اسْتَوَى", "translit": "istawā", "fr": "s’est établi / s’est élevé", "en": "established / rose", "tr": "istiva etti" }
    ],
    "profondeur": {
      "fr": "Al-ʿarsh désigne le Trône. Dans le Coran, il exprime la majesté, la souveraineté et la grandeur d’Allah, sans qu’on réduise cela à une image matérielle humaine.",
      "en": "Al-ʿarsh refers to the Throne. In the Quran, it expresses Allah’s majesty, sovereignty, and greatness, without reducing it to a human material image.",
      "tr": "Al-ʿarsh Arş demektir. Kur’an’da Allah’ın azametini, hâkimiyetini ve büyüklüğünü ifade eder; bunu insanî maddi bir görüntüye indirgememek gerekir."
    },
    "sourates_cles": [7, 20, 69]
  },
  {
    "id": 238,
    "ar": "الْمَلَائِكَةِ",
    "translit": "al-malāʾikati",
    "frequence": 43,
    "rang": 238,
    "racine": "م-ل-ك",
    "theme": "prophetie",
    "traductions": {
      "fr": "les anges",
      "en": "the angels",
      "tr": "melekler"
    },
    "famille": [
      { "ar": "مَلَك", "translit": "malak", "fr": "ange", "en": "angel", "tr": "melek" },
      { "ar": "مَلَائِكَة", "translit": "malāʾika", "fr": "anges", "en": "angels", "tr": "melekler" },
      { "ar": "مَلِك", "translit": "malik", "fr": "roi", "en": "king", "tr": "kral / melik" }
    ],
    "profondeur": {
      "fr": "Al-malāʾika désigne les anges. Le Coran les présente comme des serviteurs d’Allah, liés à la révélation, à l’ordre cosmique, à la protection et au Jour dernier.",
      "en": "Al-malāʾika refers to the angels. The Quran presents them as servants of Allah, connected to revelation, cosmic order, protection, and the Last Day.",
      "tr": "Al-malāʾika melekler demektir. Kur’an onları Allah’ın kulları olarak tanıtır; vahiy, kozmik düzen, koruma ve ahiret ile ilişkilidirler."
    },
    "sourates_cles": [2, 35, 97]
  },
  {
    "id": 239,
    "ar": "رِزْقًا",
    "translit": "rizqan",
    "frequence": 43,
    "rang": 239,
    "racine": "ر-ز-ق",
    "theme": "creation",
    "traductions": {
      "fr": "subsistance / provision / don",
      "en": "provision / sustenance",
      "tr": "rızık / geçim / nimet"
    },
    "famille": [
      { "ar": "رِزْق", "translit": "rizq", "fr": "subsistance", "en": "provision / sustenance", "tr": "rızık" },
      { "ar": "رَزَقَ", "translit": "razaqa", "fr": "il a accordé une subsistance", "en": "he provided", "tr": "rızık verdi" },
      { "ar": "الرَّزَّاق", "translit": "ar-razzāq", "fr": "Le Grand Pourvoyeur", "en": "The Great Provider", "tr": "Rezzâk" }
    ],
    "profondeur": {
      "fr": "Rizqan désigne une subsistance accordée. Dans le Coran, le rizq ne se limite pas à l’argent : il comprend nourriture, sécurité, savoir, opportunités et bienfaits.",
      "en": "Rizqan refers to provision granted. In the Quran, rizq is not limited to money: it includes food, security, knowledge, opportunities, and blessings.",
      "tr": "Rizqan verilen rızık demektir. Kur’an’da rızık sadece para değildir; yiyecek, güvenlik, ilim, fırsatlar ve nimetleri de kapsar."
    },
    "sourates_cles": [2, 11, 51]
  },
  {
    "id": 240,
    "ar": "فَضْلِ",
    "translit": "faḍli",
    "frequence": 42,
    "rang": 240,
    "racine": "ف-ض-ل",
    "theme": "allah",
    "traductions": {
      "fr": "grâce de / faveur de / bienfait de",
      "en": "grace of / favor of / bounty of",
      "tr": "fazlı / lütfu / nimeti"
    },
    "famille": [
      { "ar": "فَضْل", "translit": "faḍl", "fr": "grâce / faveur", "en": "grace / favor", "tr": "fazl / lütuf" },
      { "ar": "فَضَّلَ", "translit": "faḍḍala", "fr": "il a favorisé", "en": "he favored", "tr": "üstün kıldı" },
      { "ar": "أَفْضَل", "translit": "afḍal", "fr": "meilleur / supérieur", "en": "better / superior", "tr": "daha üstün / efdal" }
    ],
    "profondeur": {
      "fr": "Faḍli est une forme de faḍl : la grâce, la faveur qui dépasse le strict mérite. Le Coran rappelle que beaucoup de biens reçus viennent du faḍl d’Allah.",
      "en": "Faḍli is a form of faḍl: grace or favor beyond strict merit. The Quran reminds that many blessings received come from Allah’s bounty.",
      "tr": "Faḍli, faḍl kelimesinin bir hâlidir: hak edilenin ötesindeki lütuf. Kur’an birçok nimetin Allah’ın fazlından geldiğini hatırlatır."
    },
    "sourates_cles": [2, 3, 57]
  },
  {
    "id": 241,
    "ar": "يَقُولُونَ",
    "translit": "yaqūlūna",
    "frequence": 51,
    "rang": 241,
    "racine": "ق-و-ل",
    "theme": "prophetie",
    "traductions": {
      "fr": "ils disent / ils diront",
      "en": "they say / they will say",
      "tr": "derler / söylerler"
    },
    "famille": [
      { "ar": "قَالَ", "translit": "qāla", "fr": "il a dit", "en": "he said", "tr": "dedi" },
      { "ar": "قُلْ", "translit": "qul", "fr": "dis !", "en": "say!", "tr": "de!" },
      { "ar": "قَوْل", "translit": "qawl", "fr": "parole / propos", "en": "speech / saying", "tr": "söz" },
      { "ar": "قَالُوا", "translit": "qālū", "fr": "ils ont dit", "en": "they said", "tr": "dediler" }
    ],
    "profondeur": {
      "fr": "Yaqūlūna signifie « ils disent ». Le Coran rapporte souvent les paroles des croyants, des prophètes, des peuples passés et des opposants afin d’enseigner par le dialogue.",
      "en": "Yaqūlūna means “they say.” The Quran often reports the words of believers, prophets, past peoples, and opponents in order to teach through dialogue.",
      "tr": "Yaqūlūna “derler / söylerler” demektir. Kur’an müminlerin, peygamberlerin, geçmiş kavimlerin ve muhaliflerin sözlerini aktararak diyalog yoluyla öğretir."
    },
    "sourates_cles": [2, 7, 12]
  },
  {
    "id": 242,
    "ar": "لِلنَّاسِ",
    "translit": "li-n-nāsi",
    "frequence": 51,
    "rang": 242,
    "racine": "ن-و-س / أ-ن-س",
    "theme": "homme",
    "traductions": {
      "fr": "pour les gens / aux gens",
      "en": "for the people / to mankind",
      "tr": "insanlar için / insanlara"
    },
    "famille": [
      { "ar": "النَّاس", "translit": "an-nās", "fr": "les gens / l’humanité", "en": "people / mankind", "tr": "insanlar" },
      { "ar": "إِنْسَان", "translit": "insān", "fr": "être humain", "en": "human being", "tr": "insan" },
      { "ar": "أُنْس", "translit": "uns", "fr": "familiarité / compagnie", "en": "familiarity / companionship", "tr": "ünsiyet / yakınlık" }
    ],
    "profondeur": {
      "fr": "Li-n-nāsi signifie « pour les gens » ou « aux gens ». Le Coran présente souvent ses signes, ses exemples et ses rappels comme adressés à l’humanité entière.",
      "en": "Li-n-nāsi means “for the people” or “to mankind.” The Quran often presents its signs, examples, and reminders as addressed to all humanity.",
      "tr": "Li-n-nāsi “insanlar için / insanlara” demektir. Kur’an ayetlerini, örneklerini ve hatırlatmalarını çoğu zaman bütün insanlığa yönelik sunar."
    },
    "sourates_cles": [2, 22, 114]
  },
  {
    "id": 243,
    "ar": "لِقَوْمٍ",
    "translit": "li-qawmin",
    "frequence": 51,
    "rang": 243,
    "racine": "ق-و-م",
    "theme": "communaute",
    "traductions": {
      "fr": "pour un peuple / à un peuple",
      "en": "for a people / to a people",
      "tr": "bir kavim için / bir kavme"
    },
    "famille": [
      { "ar": "قَوْم", "translit": "qawm", "fr": "peuple / groupe", "en": "people / nation", "tr": "kavim / halk" },
      { "ar": "قَوْمِي", "translit": "qawmī", "fr": "mon peuple", "en": "my people", "tr": "kavmim" },
      { "ar": "قَامَ", "translit": "qāma", "fr": "il s’est levé", "en": "he stood / rose", "tr": "kalktı" }
    ],
    "profondeur": {
      "fr": "Li-qawmin signifie « pour un peuple ». Le Coran emploie cette formule pour dire que certains signes profitent à un peuple qui réfléchit, sait, croit ou comprend.",
      "en": "Li-qawmin means “for a people.” The Quran uses this formula to say that certain signs benefit a people who reflect, know, believe, or understand.",
      "tr": "Li-qawmin “bir kavim için” demektir. Kur’an bu ifadeyi düşünen, bilen, iman eden veya anlayan bir toplumun işaretlerden faydalanacağını anlatmak için kullanır."
    },
    "sourates_cles": [2, 7, 30]
  },
  {
    "id": 244,
    "ar": "غَفُورٌ",
    "translit": "ghafūrun",
    "frequence": 51,
    "rang": 244,
    "racine": "غ-ف-ر",
    "theme": "allah",
    "traductions": {
      "fr": "Très Pardonneur / Pardonneur",
      "en": "Most Forgiving / Forgiving",
      "tr": "Gafûr / çok bağışlayan"
    },
    "famille": [
      { "ar": "غَفَرَ", "translit": "ghafara", "fr": "il a pardonné", "en": "he forgave", "tr": "bağışladı" },
      { "ar": "مَغْفِرَة", "translit": "maghfira", "fr": "pardon / absolution", "en": "forgiveness", "tr": "mağfiret" },
      { "ar": "غَفَّار", "translit": "ghaffār", "fr": "Grand Pardonneur", "en": "Great Forgiver", "tr": "Gaffâr" },
      { "ar": "اسْتَغْفَرَ", "translit": "istaghfara", "fr": "demander pardon", "en": "to seek forgiveness", "tr": "istiğfar etti" }
    ],
    "profondeur": {
      "fr": "Ghafūrun vient d’une racine qui évoque le fait de couvrir. Le pardon divin couvre la faute, l’efface et protège le serviteur de ses conséquences.",
      "en": "Ghafūrun comes from a root that evokes covering. Divine forgiveness covers the fault, erases it, and protects the servant from its consequences.",
      "tr": "Ghafūrun örtmek anlamı taşıyan bir kökten gelir. İlahi bağışlama hatayı örter, siler ve kulu onun sonuçlarından korur."
    },
    "sourates_cles": [39, 40, 71]
  },
  {
    "id": 245,
    "ar": "فَقَدْ",
    "translit": "fa-qad",
    "frequence": 50,
    "rang": 245,
    "racine": "ف + قَدْ",
    "theme": "grammaire",
    "traductions": {
      "fr": "alors certes / donc déjà / alors vraiment",
      "en": "then indeed / so certainly / already",
      "tr": "öyleyse gerçekten / artık"
    },
    "famille": [
      { "ar": "قَدْ", "translit": "qad", "fr": "déjà / certes", "en": "already / indeed", "tr": "gerçekten / artık" },
      { "ar": "لَقَدْ", "translit": "laqad", "fr": "certes / vraiment", "en": "certainly / indeed", "tr": "andolsun / gerçekten" },
      { "ar": "فَ", "translit": "fa", "fr": "alors / donc", "en": "so / then", "tr": "öyleyse / sonra" }
    ],
    "profondeur": {
      "fr": "Fa-qad relie une conséquence à une affirmation renforcée. Il peut donner le sens de « alors il a certes... » ou « donc vraiment... » selon le contexte.",
      "en": "Fa-qad connects a consequence to an emphasized statement. It can mean “then he has certainly...” or “so indeed...” depending on context.",
      "tr": "Fa-qad bir sonucu pekiştirilmiş bir ifadeye bağlar. Bağlama göre “öyleyse gerçekten...” veya “artık kesinlikle...” anlamı verebilir."
    },
    "sourates_cles": [2, 4, 23]
  },
  {
    "id": 246,
    "ar": "جَمِيعًا",
    "translit": "jamīʿan",
    "frequence": 49,
    "rang": 246,
    "racine": "ج-م-ع",
    "theme": "communaute",
    "traductions": {
      "fr": "tous ensemble / entièrement",
      "en": "all together / altogether",
      "tr": "hep birlikte / tamamı"
    },
    "famille": [
      { "ar": "جَمَعَ", "translit": "jamaʿa", "fr": "il a rassemblé", "en": "he gathered", "tr": "topladı" },
      { "ar": "جَمْع", "translit": "jamʿ", "fr": "rassemblement", "en": "gathering", "tr": "toplanma" },
      { "ar": "جَمَاعَة", "translit": "jamāʿa", "fr": "groupe / communauté", "en": "group / community", "tr": "cemaat / topluluk" }
    ],
    "profondeur": {
      "fr": "Jamīʿan signifie « tous ensemble ». Le mot vient de l’idée de rassembler : il peut concerner les humains, les communautés, les preuves ou le rassemblement final.",
      "en": "Jamīʿan means “all together.” It comes from the idea of gathering: it can refer to people, communities, proofs, or the final gathering.",
      "tr": "Jamīʿan “hep birlikte / topluca” demektir. Toplama fikrinden gelir; insanlar, topluluklar, deliller veya son toplanış için kullanılabilir."
    },
    "sourates_cles": [2, 3, 45]
  },
  {
    "id": 247,
    "ar": "إِنَّكَ",
    "translit": "innaka",
    "frequence": 49,
    "rang": 247,
    "racine": "إِنَّ + كَ",
    "theme": "grammaire",
    "traductions": {
      "fr": "certes tu / vraiment tu",
      "en": "indeed you / surely you",
      "tr": "şüphesiz sen"
    },
    "famille": [
      { "ar": "إِنَّ", "translit": "inna", "fr": "certes / vraiment", "en": "indeed / surely", "tr": "şüphesiz" },
      { "ar": "إِنِّي", "translit": "innī", "fr": "certes moi", "en": "indeed I", "tr": "şüphesiz ben" },
      { "ar": "إِنَّهُ", "translit": "innahu", "fr": "certes il", "en": "indeed he / it", "tr": "şüphesiz o" }
    ],
    "profondeur": {
      "fr": "Innaka renforce une parole adressée directement à « toi ». Dans les invocations et dialogues, cette forme donne une forte intensité à l’adresse.",
      "en": "Innaka strengthens a statement addressed directly to “you.” In supplications and dialogues, this form gives intensity to the address.",
      "tr": "Innaka doğrudan “sen”e yöneltilen bir ifadeyi güçlendirir. Dualarda ve diyaloglarda hitaba güçlü bir kesinlik katar."
    },
    "sourates_cles": [2, 5, 26]
  },
  {
    "id": 248,
    "ar": "تَجْرِي",
    "translit": "tajrī",
    "frequence": 48,
    "rang": 248,
    "racine": "ج-ر-ي",
    "theme": "creation",
    "traductions": {
      "fr": "elle coule / elle court / elle s’écoule",
      "en": "it flows / it runs",
      "tr": "akar / akıp gider"
    },
    "famille": [
      { "ar": "جَرَى", "translit": "jarā", "fr": "il a coulé / couru", "en": "it flowed / ran", "tr": "aktı / koştu" },
      { "ar": "جَارِيَة", "translit": "jāriya", "fr": "qui coule / navire", "en": "flowing / ship", "tr": "akan / gemi" },
      { "ar": "مَجْرَى", "translit": "majrā", "fr": "cours / trajectoire", "en": "course / channel", "tr": "akış yolu / mecra" }
    ],
    "profondeur": {
      "fr": "Tajrī est souvent utilisé dans la description du Paradis : des jardins sous lesquels coulent des rivières. Le mot donne une image de vie, de mouvement et d’abondance.",
      "en": "Tajrī is often used in descriptions of Paradise: gardens beneath which rivers flow. The word gives an image of life, movement, and abundance.",
      "tr": "Tajrī cennet tasvirlerinde sık geçer: altlarından ırmaklar akan bahçeler. Kelime hayat, hareket ve bolluk imgesi verir."
    },
    "sourates_cles": [2, 3, 98]
  },
  {
    "id": 249,
    "ar": "الْحَقُّ",
    "translit": "al-ḥaqqu",
    "frequence": 48,
    "rang": 249,
    "racine": "ح-ق-ق",
    "theme": "morale",
    "traductions": {
      "fr": "la vérité / le vrai / le réel",
      "en": "the truth / the real",
      "tr": "hak / gerçek"
    },
    "famille": [
      { "ar": "حَقّ", "translit": "ḥaqq", "fr": "vérité / droit / réel", "en": "truth / right / real", "tr": "hak / gerçek" },
      { "ar": "حَقِيقَة", "translit": "ḥaqīqa", "fr": "réalité profonde", "en": "reality / truth", "tr": "hakikat" },
      { "ar": "بِالْحَقِّ", "translit": "bi-l-ḥaqqi", "fr": "avec vérité", "en": "with truth", "tr": "hak ile" }
    ],
    "profondeur": {
      "fr": "Al-ḥaqq désigne la vérité réelle, ce qui est juste et ce qui est établi. C’est aussi un nom d’Allah : Le Vrai, Celui dont l’existence et la justice sont absolues.",
      "en": "Al-ḥaqq refers to real truth, what is just and firmly established. It is also a name of Allah: The Truth, whose existence and justice are absolute.",
      "tr": "Al-ḥaqq gerçek hakikati, adaleti ve sabit olanı ifade eder. Aynı zamanda Allah’ın ismidir: mutlak varlık ve adalet sahibi olan Hak."
    },
    "sourates_cles": [22, 69, 103]
  },
  {
    "id": 250,
    "ar": "فِرْعَوْنَ",
    "translit": "firʿawna",
    "frequence": 48,
    "rang": 250,
    "racine": "nom propre",
    "theme": "prophetie",
    "traductions": {
      "fr": "Pharaon",
      "en": "Pharaoh",
      "tr": "Firavun"
    },
    "famille": [
      { "ar": "مُوسَى", "translit": "Mūsā", "fr": "Moïse", "en": "Moses", "tr": "Musa" },
      { "ar": "هَارُون", "translit": "Hārūn", "fr": "Aaron", "en": "Aaron", "tr": "Harun" },
      { "ar": "بَنُو إِسْرَائِيل", "translit": "Banū Isrāʾīl", "fr": "les Enfants d’Israël", "en": "Children of Israel", "tr": "İsrailoğulları" }
    ],
    "profondeur": {
      "fr": "Firʿawn est la figure coranique de l’orgueil politique, de l’oppression et du refus des signes. Son récit avec Mūsā montre la confrontation entre pouvoir arrogant et vérité prophétique.",
      "en": "Firʿawn is the Quranic figure of political arrogance, oppression, and rejection of signs. His story with Mūsā shows the confrontation between arrogant power and prophetic truth.",
      "tr": "Firʿawn Kur’an’da siyasi kibir, zulüm ve ayetleri reddetmenin sembolüdür. Musa ile kıssası, kibirli güç ile peygamberî hakikat arasındaki mücadeleyi gösterir."
    },
    "sourates_cles": [7, 20, 28]
  },
  {
    "id": 251,
    "ar": "أَرْسَلْنَا",
    "translit": "arsalnā",
    "frequence": 48,
    "rang": 251,
    "racine": "ر-س-ل",
    "theme": "prophetie",
    "traductions": {
      "fr": "Nous avons envoyé",
      "en": "We sent",
      "tr": "Biz gönderdik"
    },
    "famille": [
      { "ar": "أَرْسَلَ", "translit": "arsala", "fr": "il a envoyé", "en": "he sent", "tr": "gönderdi" },
      { "ar": "رَسُول", "translit": "rasūl", "fr": "messager", "en": "messenger", "tr": "resul / elçi" },
      { "ar": "رِسَالَة", "translit": "risāla", "fr": "message / mission", "en": "message / mission", "tr": "risale / mesaj" }
    ],
    "profondeur": {
      "fr": "Arsalnā signifie « Nous avons envoyé ». Cette formule revient dans les récits prophétiques : Allah envoie des messagers, des signes, des avertissements ou des bienfaits.",
      "en": "Arsalnā means “We sent.” This formula appears in prophetic narratives: Allah sends messengers, signs, warnings, or blessings.",
      "tr": "Arsalnā “Biz gönderdik” demektir. Peygamber kıssalarında sık geçer: Allah elçiler, işaretler, uyarılar veya nimetler gönderir."
    },
    "sourates_cles": [7, 10, 57]
  },
  {
    "id": 252,
    "ar": "الصَّلَاةَ",
    "translit": "aṣ-ṣalāta",
    "frequence": 47,
    "rang": 252,
    "racine": "ص-ل-و",
    "theme": "priere",
    "traductions": {
      "fr": "la prière / la ṣalāt",
      "en": "the prayer / ṣalāh",
      "tr": "namaz / salât"
    },
    "famille": [
      { "ar": "صَلَاة", "translit": "ṣalāt", "fr": "prière", "en": "prayer", "tr": "namaz / salât" },
      { "ar": "صَلَّى", "translit": "ṣallā", "fr": "il a prié / béni", "en": "he prayed / blessed", "tr": "namaz kıldı / salât etti" },
      { "ar": "مُصَلِّي", "translit": "muṣallī", "fr": "celui qui prie", "en": "one who prays", "tr": "namaz kılan" }
    ],
    "profondeur": {
      "fr": "Aṣ-ṣalāta désigne la prière rituelle. Dans le Coran, elle est souvent associée à l’établissement, à la régularité, à la purification et au lien vivant avec Allah.",
      "en": "Aṣ-ṣalāta refers to ritual prayer. In the Quran, it is often linked to establishment, regularity, purification, and the living bond with Allah.",
      "tr": "Aṣ-ṣalāta namazı ifade eder. Kur’an’da namazı dosdoğru kılmak, süreklilik, arınma ve Allah ile canlı bağ kurmakla ilişkilidir."
    },
    "sourates_cles": [2, 29, 107]
  },
  {
    "id": 253,
    "ar": "أُنْزِلَ",
    "translit": "unzila",
    "frequence": 47,
    "rang": 253,
    "racine": "ن-ز-ل",
    "theme": "prophetie",
    "traductions": {
      "fr": "il a été descendu / révélé",
      "en": "it was sent down / revealed",
      "tr": "indirildi / vahyedildi"
    },
    "famille": [
      { "ar": "نَزَلَ", "translit": "nazala", "fr": "il est descendu", "en": "he descended", "tr": "indi" },
      { "ar": "أَنْزَلَ", "translit": "anzala", "fr": "il a fait descendre", "en": "he sent down", "tr": "indirdi" },
      { "ar": "تَنْزِيل", "translit": "tanzīl", "fr": "révélation descendue", "en": "sending down / revelation", "tr": "tenzil / indirme" }
    ],
    "profondeur": {
      "fr": "Unzila est une forme passive : « il a été descendu ». Le Coran utilise souvent le langage de la descente pour la révélation : le message vient d’en haut, d’Allah vers les hommes.",
      "en": "Unzila is a passive form: “it was sent down.” The Quran often uses the language of descent for revelation: the message comes from above, from Allah to humanity.",
      "tr": "Unzila edilgen bir formdur: “indirildi”. Kur’an vahiy için sıkça iniş dilini kullanır: mesaj yukarıdan, Allah’tan insanlara gelir."
    },
    "sourates_cles": [2, 3, 97]
  },
  {
    "id": 254,
    "ar": "هِيَ",
    "translit": "hiya",
    "frequence": 47,
    "rang": 254,
    "racine": "pronom personnel",
    "theme": "grammaire",
    "traductions": {
      "fr": "elle / c’est elle",
      "en": "she / it",
      "tr": "o / kendisi"
    },
    "famille": [
      { "ar": "هُوَ", "translit": "huwa", "fr": "il / lui", "en": "he / it", "tr": "o" },
      { "ar": "هُمْ", "translit": "hum", "fr": "eux / ils", "en": "they / them", "tr": "onlar" },
      { "ar": "هَا", "translit": "hā", "fr": "elle / la", "en": "her / it", "tr": "onu / o" }
    ],
    "profondeur": {
      "fr": "Hiya est le pronom féminin « elle ». En arabe, il peut renvoyer à une chose grammaticalement féminine, même si la traduction française n’utilise pas toujours « elle ».",
      "en": "Hiya is the feminine pronoun “she/it.” In Arabic, it can refer to a grammatically feminine thing, even when English does not use “she.”",
      "tr": "Hiya dişil “o” zamiridir. Arapçada gramer olarak dişil olan bir şeye dönebilir; Türkçede çoğu zaman sadece “o” diye çevrilir."
    },
    "sourates_cles": [2, 12, 97]
  },
  {
    "id": 255,
    "ar": "عَمَّا",
    "translit": "ʿammā",
    "frequence": 47,
    "rang": 255,
    "racine": "عَنْ + مَا",
    "theme": "grammaire",
    "traductions": {
      "fr": "au sujet de ce que / de ce que",
      "en": "about what / from what",
      "tr": "ne hakkında / şeyden"
    },
    "famille": [
      { "ar": "عَنْ", "translit": "ʿan", "fr": "de / au sujet de", "en": "from / about", "tr": "-den / hakkında" },
      { "ar": "مَا", "translit": "mā", "fr": "ce que / quoi", "en": "what / that which", "tr": "ne / şey" },
      { "ar": "بِمَا", "translit": "bimā", "fr": "à cause de ce que", "en": "because of what", "tr": "sebebiyle" }
    ],
    "profondeur": {
      "fr": "ʿAmmā fusionne ʿan et mā. Il peut introduire le sujet d’un discours, ce dont on se détourne, ou ce dont on est interrogé.",
      "en": "ʿAmmā combines ʿan and mā. It can introduce the topic of speech, what one turns away from, or what one is questioned about.",
      "tr": "ʿAmmā, ʿan ve mā birleşimidir. Bir konuşunun konusu, yüz çevrilen şey veya sorulan mesele anlamı verebilir."
    },
    "sourates_cles": [78, 93, 107]
  },
  {
    "id": 256,
    "ar": "إِبْرَاهِيمَ",
    "translit": "Ibrāhīma",
    "frequence": 47,
    "rang": 256,
    "racine": "nom propre",
    "theme": "prophetie",
    "traductions": {
      "fr": "Abraham / Ibrāhīm",
      "en": "Abraham / Ibrahim",
      "tr": "İbrahim"
    },
    "famille": [
      { "ar": "إِسْمَاعِيل", "translit": "Ismāʿīl", "fr": "Ismaël", "en": "Ishmael", "tr": "İsmail" },
      { "ar": "إِسْحَاق", "translit": "Isḥāq", "fr": "Isaac", "en": "Isaac", "tr": "İshak" },
      { "ar": "مِلَّة إِبْرَاهِيم", "translit": "millat Ibrāhīm", "fr": "la voie d’Abraham", "en": "the way of Abraham", "tr": "İbrahim’in dini / yolu" }
    ],
    "profondeur": {
      "fr": "Ibrāhīm est une figure centrale du tawḥīd. Le Coran le présente comme modèle de foi pure, de rupture avec l’idolâtrie, d’hospitalité, d’épreuve et de soumission à Allah.",
      "en": "Ibrāhīm is a central figure of tawḥīd. The Quran presents him as a model of pure faith, rejection of idolatry, hospitality, trial, and submission to Allah.",
      "tr": "Ibrāhīm tevhidin merkezî figürlerinden biridir. Kur’an onu saf iman, putperestlikten kopuş, misafirperverlik, imtihan ve Allah’a teslimiyet modeli olarak sunar."
    },
    "sourates_cles": [2, 14, 37]
  },
  {
    "id": 257,
    "ar": "لَيْسَ",
    "translit": "laysa",
    "frequence": 47,
    "rang": 257,
    "racine": "verbe de négation",
    "theme": "grammaire",
    "traductions": {
      "fr": "n’est pas / il n’y a pas",
      "en": "is not / there is not",
      "tr": "değildir / yoktur"
    },
    "famille": [
      { "ar": "لَا", "translit": "lā", "fr": "non / ne... pas", "en": "no / not", "tr": "hayır / değil" },
      { "ar": "لَمْ", "translit": "lam", "fr": "ne... pas au passé", "en": "did not", "tr": "yapmadı" },
      { "ar": "لَنْ", "translit": "lan", "fr": "ne... pas au futur", "en": "will not", "tr": "yapmayacak" }
    ],
    "profondeur": {
      "fr": "Laysa sert à nier une qualité ou une situation : « n’est pas ». C’est une forme essentielle pour comprendre les corrections, distinctions et réfutations coraniques.",
      "en": "Laysa negates a quality or situation: “is not.” It is essential for understanding Quranic corrections, distinctions, and refutations.",
      "tr": "Laysa bir niteliği veya durumu olumsuz yapar: “değildir”. Kur’an’daki düzeltmeleri, ayrımları ve reddiyeleri anlamak için önemlidir."
    },
    "sourates_cles": [2, 4, 5]
  },
  {
    "id": 258,
    "ar": "وَلَمْ",
    "translit": "wa-lam",
    "frequence": 47,
    "rang": 258,
    "racine": "و + لَمْ",
    "theme": "grammaire",
    "traductions": {
      "fr": "et ne... pas / et n’a pas",
      "en": "and did not / and has not",
      "tr": "ve yapmadı / ve olmadı"
    },
    "famille": [
      { "ar": "لَمْ", "translit": "lam", "fr": "ne... pas au passé", "en": "did not", "tr": "yapmadı" },
      { "ar": "وَ", "translit": "wa", "fr": "et", "en": "and", "tr": "ve" },
      { "ar": "وَلَنْ", "translit": "wa-lan", "fr": "et ne... pas au futur", "en": "and will not", "tr": "ve yapmayacak" }
    ],
    "profondeur": {
      "fr": "Wa-lam combine coordination et négation passée. Il sert à relier une phrase tout en niant une action accomplie : « et il n’a pas... ».",
      "en": "Wa-lam combines coordination and past negation. It connects a sentence while negating a completed action: “and he did not...”.",
      "tr": "Wa-lam bağlaç ve geçmiş olumsuzluğu birleştirir. Bir cümleyi bağlarken gerçekleşmemiş bir fiili ifade eder: “ve yapmadı”."
    },
    "sourates_cles": [94, 112, 105]
  },
  {
    "id": 259,
    "ar": "كَثِيرًا",
    "translit": "kathīran",
    "frequence": 46,
    "rang": 259,
    "racine": "ك-ث-ر",
    "theme": "homme",
    "traductions": {
      "fr": "beaucoup / nombreux / abondamment",
      "en": "much / many / greatly",
      "tr": "çok / birçok"
    },
    "famille": [
      { "ar": "كَثِير", "translit": "kathīr", "fr": "nombreux / beaucoup", "en": "many / much", "tr": "çok" },
      { "ar": "أَكْثَر", "translit": "akthar", "fr": "plus nombreux / la plupart", "en": "more / most", "tr": "daha çok / çoğu" },
      { "ar": "كَثْرَة", "translit": "kathra", "fr": "abondance / grand nombre", "en": "abundance", "tr": "çokluk" }
    ],
    "profondeur": {
      "fr": "Kathīran signifie « beaucoup ». Le Coran l’utilise pour parler de rappel abondant, de nombreux signes, ou au contraire de la majorité qui ne comprend pas.",
      "en": "Kathīran means “much” or “many.” The Quran uses it for abundant remembrance, many signs, or conversely the many who do not understand.",
      "tr": "Kathīran “çok” demektir. Kur’an’da çok zikir, çok işaret veya aksine anlamayan çoğunluk gibi bağlamlarda geçer."
    },
    "sourates_cles": [33, 48, 57]
  },
  {
    "id": 260,
    "ar": "هَذِهِ",
    "translit": "hādhihi",
    "frequence": 46,
    "rang": 260,
    "racine": "pronom démonstratif",
    "theme": "grammaire",
    "traductions": {
      "fr": "celle-ci / ceci / cette",
      "en": "this / this one feminine",
      "tr": "bu / şu"
    },
    "famille": [
      { "ar": "هَذَا", "translit": "hādhā", "fr": "ceci / celui-ci", "en": "this", "tr": "bu" },
      { "ar": "ذَلِكَ", "translit": "dhālika", "fr": "cela / celui-là", "en": "that", "tr": "şu / o" },
      { "ar": "هَؤُلَاءِ", "translit": "hāʾulāʾi", "fr": "ceux-ci", "en": "these", "tr": "bunlar" }
    ],
    "profondeur": {
      "fr": "Hādhihi est un démonstratif féminin : « celle-ci / cette ». Il peut désigner une chose proche dans le discours, comme la vie, la communauté, la ville, la voie ou une preuve.",
      "en": "Hādhihi is a feminine demonstrative: “this.” It can point to something near in speech, such as life, community, city, path, or proof.",
      "tr": "Hādhihi dişil işaret zamiridir: “bu”. Söz içinde yakın olan hayat, ümmet, şehir, yol veya delil gibi şeyleri gösterebilir."
    },
    "sourates_cles": [2, 6, 12]
  },
  {
    "id": 261,
    "ar": "رَبِّكُمْ",
    "translit": "rabbikum",
    "frequence": 46,
    "rang": 261,
    "racine": "ر-ب-ب",
    "theme": "allah",
    "traductions": {
      "fr": "votre Seigneur",
      "en": "your Lord",
      "tr": "Rabbiniz"
    },
    "famille": [
      { "ar": "رَبّ", "translit": "rabb", "fr": "Seigneur / Maître / Éducateur", "en": "Lord / Sustainer", "tr": "Rab" },
      { "ar": "رَبِّي", "translit": "rabbī", "fr": "mon Seigneur", "en": "my Lord", "tr": "Rabbim" },
      { "ar": "رَبَّنَا", "translit": "rabbanā", "fr": "notre Seigneur", "en": "our Lord", "tr": "Rabbimiz" },
      { "ar": "رَبِّهِمْ", "translit": "rabbihim", "fr": "leur Seigneur", "en": "their Lord", "tr": "onların Rabbi" }
    ],
    "profondeur": {
      "fr": "Rabbikum signifie « votre Seigneur ». Le mot Rabb réunit la création, la possession, l’éducation et le soin. Il rappelle que la communauté a un Seigneur unique qui la guide.",
      "en": "Rabbikum means “your Lord.” Rabb combines creation, ownership, upbringing, and care. It reminds the community that it has one Lord who guides it.",
      "tr": "Rabbikum “Rabbiniz” demektir. Rab kelimesi yaratma, sahiplik, terbiye ve gözetmeyi birleştirir. Topluluğun onu yöneten tek Rabbi olduğunu hatırlatır."
    },
    "sourates_cles": [2, 7, 55]
  },
  {
    "id": 262,
    "ar": "فَأُولَئِكَ",
    "translit": "fa-ulāʾika",
    "frequence": 46,
    "rang": 262,
    "racine": "ف + pronom démonstratif",
    "theme": "grammaire",
    "traductions": {
      "fr": "alors ceux-là / donc ceux-là",
      "en": "so those / then those",
      "tr": "işte onlar / öyleyse onlar"
    },
    "famille": [
      { "ar": "أُولَئِكَ", "translit": "ulāʾika", "fr": "ceux-là", "en": "those", "tr": "işte onlar" },
      { "ar": "فَ", "translit": "fa", "fr": "alors / donc", "en": "so / then", "tr": "öyleyse / sonra" },
      { "ar": "هَؤُلَاءِ", "translit": "hāʾulāʾi", "fr": "ceux-ci", "en": "these", "tr": "bunlar" }
    ],
    "profondeur": {
      "fr": "Fa-ulāʾika introduit souvent la conclusion d’un portrait moral : après avoir décrit des actes ou qualités, le Coran dit « alors ceux-là... ».",
      "en": "Fa-ulāʾika often introduces the conclusion of a moral portrait: after describing actions or qualities, the Quran says “then those...”.",
      "tr": "Fa-ulāʾika çoğu zaman ahlaki bir portrenin sonucunu getirir: ameller veya nitelikler anlatıldıktan sonra “işte onlar...” denir."
    },
    "sourates_cles": [2, 9, 49]
  },
  {
    "id": 263,
    "ar": "الْعَزِيزُ",
    "translit": "al-ʿazīzu",
    "frequence": 46,
    "rang": 263,
    "racine": "ع-ز-ز",
    "theme": "allah",
    "traductions": {
      "fr": "Le Puissant / L’Invincible",
      "en": "The Mighty / The Almighty",
      "tr": "Azîz / mutlak güçlü"
    },
    "famille": [
      { "ar": "عِزَّة", "translit": "ʿizza", "fr": "puissance / honneur", "en": "might / honor", "tr": "izzet / güç" },
      { "ar": "عَزِيز", "translit": "ʿazīz", "fr": "puissant / précieux", "en": "mighty / precious", "tr": "aziz / güçlü" },
      { "ar": "أَعَزَّ", "translit": "aʿazza", "fr": "il a rendu puissant", "en": "he strengthened / honored", "tr": "güçlü kıldı / aziz kıldı" }
    ],
    "profondeur": {
      "fr": "Al-ʿAzīz est un nom d’Allah. Il exprime puissance, invincibilité, noblesse et autorité. La puissance divine n’est jamais séparée de la sagesse et de la justice.",
      "en": "Al-ʿAzīz is a name of Allah. It expresses might, invincibility, nobility, and authority. Divine might is never separate from wisdom and justice.",
      "tr": "Al-ʿAzīz Allah’ın isimlerindendir. Güç, yenilmezlik, izzet ve otorite ifade eder. İlahi kudret hikmet ve adaletten ayrı değildir."
    },
    "sourates_cles": [2, 3, 59]
  },
  {
    "id": 264,
    "ar": "أَفَلَا",
    "translit": "a-fa-lā",
    "frequence": 45,
    "rang": 264,
    "racine": "أ + ف + لَا",
    "theme": "grammaire",
    "traductions": {
      "fr": "ne... donc pas ? / alors ne... pas ?",
      "en": "then do not? / will you not?",
      "tr": "öyleyse ... değil mi? / hâlâ ... mı?"
    },
    "famille": [
      { "ar": "أَ", "translit": "a", "fr": "marque de question", "en": "question marker", "tr": "soru edatı" },
      { "ar": "فَ", "translit": "fa", "fr": "alors / donc", "en": "so / then", "tr": "öyleyse" },
      { "ar": "لَا", "translit": "lā", "fr": "non / ne... pas", "en": "no / not", "tr": "değil / hayır" }
    ],
    "profondeur": {
      "fr": "A-fa-lā ouvre souvent une question rhétorique forte : « ne réfléchissez-vous donc pas ? », « ne voyez-vous donc pas ? ». C’est une invitation à sortir de l’inattention.",
      "en": "A-fa-lā often opens a strong rhetorical question: “will you not reflect?”, “do you not see?” It is an invitation to leave heedlessness.",
      "tr": "A-fa-lā güçlü retorik soruları başlatır: “hiç düşünmez misiniz?”, “görmez misiniz?”. Gafletten çıkmaya çağırır."
    },
    "sourates_cles": [2, 6, 23]
  },
  {
    "id": 265,
    "ar": "مُبِينٌ",
    "translit": "mubīnun",
    "frequence": 45,
    "rang": 265,
    "racine": "ب-ي-ن",
    "theme": "prophetie",
    "traductions": {
      "fr": "clair / évident / manifeste",
      "en": "clear / manifest / evident",
      "tr": "apaçık / belirgin"
    },
    "famille": [
      { "ar": "بَيَان", "translit": "bayān", "fr": "explication / clarté", "en": "clarification", "tr": "beyan / açıklama" },
      { "ar": "بَيَّنَ", "translit": "bayyana", "fr": "il a clarifié", "en": "he clarified", "tr": "açıkladı" },
      { "ar": "بَيْنَ", "translit": "bayna", "fr": "entre", "en": "between", "tr": "arasında" }
    ],
    "profondeur": {
      "fr": "Mubīnun signifie « clair, manifeste ». Le Coran qualifie ainsi certains signes, avertissements ou messages : ils ne sont pas obscurs pour celui qui cherche sincèrement.",
      "en": "Mubīnun means “clear, manifest.” The Quran uses it for signs, warnings, or messages that are not obscure to one who sincerely seeks.",
      "tr": "Mubīnun “apaçık” demektir. Kur’an bazı işaretleri, uyarıları ve mesajları böyle nitelendirir: samimiyetle arayan için kapalı değildir."
    },
    "sourates_cles": [5, 12, 26]
  },
  {
    "id": 266,
    "ar": "جَعَلَ",
    "translit": "jaʿala",
    "frequence": 44,
    "rang": 266,
    "racine": "ج-ع-ل",
    "theme": "creation",
    "traductions": {
      "fr": "il a fait / il a établi / il a placé",
      "en": "he made / he placed / he appointed",
      "tr": "kıldı / yaptı / yerleştirdi"
    },
    "famille": [
      { "ar": "جَعَلْنَا", "translit": "jaʿalnā", "fr": "Nous avons fait / établi", "en": "We made / appointed", "tr": "Biz kıldık / yaptık" },
      { "ar": "يَجْعَلُ", "translit": "yajʿalu", "fr": "il fait / établit", "en": "he makes / appoints", "tr": "kılar / yapar" },
      { "ar": "مَجْعُول", "translit": "majʿūl", "fr": "fait / établi", "en": "made / appointed", "tr": "yapılmış / kılınmış" }
    ],
    "profondeur": {
      "fr": "Jaʿala est un verbe très souple : faire, rendre, établir, placer. Il apparaît souvent dans les versets de création et d’organisation du monde.",
      "en": "Jaʿala is a flexible verb: to make, render, establish, place. It often appears in verses about creation and the ordering of the world.",
      "tr": "Jaʿala çok esnek bir fiildir: yapmak, kılmak, yerleştirmek, belirlemek. Yaratılış ve dünyanın düzeniyle ilgili ayetlerde sık geçer."
    },
    "sourates_cles": [2, 6, 78]
  },
  {
    "id": 267,
    "ar": "رَبِّهِ",
    "translit": "rabbihi",
    "frequence": 44,
    "rang": 267,
    "racine": "ر-ب-ب",
    "theme": "allah",
    "traductions": {
      "fr": "son Seigneur",
      "en": "his Lord / its Lord",
      "tr": "Rabbi / onun Rabbi"
    },
    "famille": [
      { "ar": "رَبّ", "translit": "rabb", "fr": "Seigneur / Maître", "en": "Lord / Master", "tr": "Rab" },
      { "ar": "رَبِّكَ", "translit": "rabbika", "fr": "ton Seigneur", "en": "your Lord", "tr": "Rabbin" },
      { "ar": "رَبِّهِمْ", "translit": "rabbihim", "fr": "leur Seigneur", "en": "their Lord", "tr": "onların Rabbi" }
    ],
    "profondeur": {
      "fr": "Rabbihi signifie « son Seigneur ». Le pronom donne une relation personnelle : chaque serviteur, prophète ou créature se tient devant son Rabb.",
      "en": "Rabbihi means “his Lord.” The pronoun creates a personal relation: every servant, prophet, or creature stands before his Rabb.",
      "tr": "Rabbihi “onun Rabbi” demektir. Zamir kişisel bir ilişki kurar: her kul, peygamber veya varlık kendi Rabbi karşısında durur."
    },
    "sourates_cles": [18, 89, 96]
  },
  {
    "id": 268,
    "ar": "وَيَوْمَ",
    "translit": "wa-yawma",
    "frequence": 44,
    "rang": 268,
    "racine": "و + ي-و-م",
    "theme": "jugement",
    "traductions": {
      "fr": "et le jour où / et le Jour",
      "en": "and the day when / and the Day",
      "tr": "ve o gün / gün geldiğinde"
    },
    "famille": [
      { "ar": "يَوْم", "translit": "yawm", "fr": "jour", "en": "day", "tr": "gün" },
      { "ar": "يَوْمَئِذٍ", "translit": "yawmaʾidhin", "fr": "ce jour-là", "en": "on that Day", "tr": "o gün" },
      { "ar": "يَوْمَ الْقِيَامَة", "translit": "yawma al-qiyāma", "fr": "le Jour de la Résurrection", "en": "Day of Resurrection", "tr": "Kıyamet Günü" }
    ],
    "profondeur": {
      "fr": "Wa-yawma introduit souvent une scène du Jour dernier ou un moment décisif : « et le jour où... ». Le mot prépare le lecteur à un événement majeur.",
      "en": "Wa-yawma often introduces a scene of the Last Day or a decisive moment: “and the day when...”. It prepares the reader for a major event.",
      "tr": "Wa-yawma çoğu zaman ahiret sahnesini veya belirleyici bir anı başlatır: “ve o gün...”. Okuyucuyu büyük bir olaya hazırlar."
    },
    "sourates_cles": [6, 18, 99]
  },
  {
    "id": 269,
    "ar": "وَقَدْ",
    "translit": "wa-qad",
    "frequence": 43,
    "rang": 269,
    "racine": "و + قَدْ",
    "theme": "grammaire",
    "traductions": {
      "fr": "et certes / alors que déjà",
      "en": "and indeed / while already",
      "tr": "ve gerçekten / hâlbuki"
    },
    "famille": [
      { "ar": "قَدْ", "translit": "qad", "fr": "déjà / certes", "en": "already / indeed", "tr": "gerçekten / artık" },
      { "ar": "لَقَدْ", "translit": "laqad", "fr": "certes / assurément", "en": "certainly / indeed", "tr": "andolsun / gerçekten" },
      { "ar": "فَقَدْ", "translit": "fa-qad", "fr": "alors certes", "en": "then indeed", "tr": "öyleyse gerçekten" }
    ],
    "profondeur": {
      "fr": "Wa-qad relie une phrase à une affirmation marquée par qad. Selon le contexte, il peut signifier « et certes » ou « alors que déjà ».",
      "en": "Wa-qad connects a sentence to a statement marked by qad. Depending on context, it can mean “and indeed” or “while already.”",
      "tr": "Wa-qad bir cümleyi qad ile pekiştirilen ifadeye bağlar. Bağlama göre “ve gerçekten” veya “hâlbuki zaten” anlamına gelebilir."
    },
    "sourates_cles": [2, 3, 54]
  },
  {
    "id": 270,
    "ar": "وَأَنْتُمْ",
    "translit": "wa-antum",
    "frequence": 42,
    "rang": 270,
    "racine": "و + pronom personnel",
    "theme": "grammaire",
    "traductions": {
      "fr": "et vous / alors que vous",
      "en": "and you / while you",
      "tr": "ve siz / siz ise"
    },
    "famille": [
      { "ar": "أَنْتُمْ", "translit": "antum", "fr": "vous", "en": "you plural", "tr": "siz" },
      { "ar": "أَنْتَ", "translit": "anta", "fr": "toi", "en": "you singular", "tr": "sen" },
      { "ar": "وَهُمْ", "translit": "wa-hum", "fr": "et eux / alors qu’ils", "en": "and they / while they", "tr": "ve onlar" }
    ],
    "profondeur": {
      "fr": "Wa-antum signifie « et vous », mais peut aussi se traduire par « alors que vous » selon la phrase. Il sert souvent à confronter directement les interlocuteurs à leur responsabilité.",
      "en": "Wa-antum means “and you,” but it can also mean “while you” depending on the sentence. It often directly confronts the audience with responsibility.",
      "tr": "Wa-antum “ve siz” demektir; bağlama göre “siz ... iken” anlamına da gelebilir. Muhatapları doğrudan sorumluluklarıyla yüzleştirir."
    },
    "sourates_cles": [2, 3, 8]
  },
  {
    "id": 271,
    "ar": "وَإِنَّ",
    "translit": "wa-inna",
    "frequence": 42,
    "rang": 271,
    "racine": "و + إِنَّ",
    "theme": "grammaire",
    "traductions": {
      "fr": "et certes / et vraiment",
      "en": "and indeed / and surely",
      "tr": "ve şüphesiz / gerçekten"
    },
    "famille": [
      { "ar": "إِنَّ", "translit": "inna", "fr": "certes / vraiment", "en": "indeed / surely", "tr": "şüphesiz" },
      { "ar": "وَ", "translit": "wa", "fr": "et", "en": "and", "tr": "ve" },
      { "ar": "إِنَّهُ", "translit": "innahu", "fr": "certes il / cela", "en": "indeed he / it", "tr": "şüphesiz o" }
    ],
    "profondeur": {
      "fr": "Wa-inna relie une phrase à une affirmation renforcée. Il donne au propos une force de certitude : ce qui suit n’est pas une simple information, mais une vérité appuyée.",
      "en": "Wa-inna connects a sentence to an emphasized statement. It gives certainty to what follows: not merely information, but a strongly affirmed truth.",
      "tr": "Wa-inna bir cümleyi pekiştirilmiş bir ifadeye bağlar. Ardından gelen söz sadece bilgi değil, güçlü biçimde doğrulanan bir hakikattir."
    },
    "sourates_cles": [2, 3, 12]
  },
  {
    "id": 272,
    "ar": "الصَّابِرِينَ",
    "translit": "aṣ-ṣābirīna",
    "frequence": 42,
    "rang": 272,
    "racine": "ص-ب-ر",
    "theme": "morale",
    "traductions": {
      "fr": "les patients / les endurants",
      "en": "the patient / the steadfast",
      "tr": "sabredenler / sabırlılar"
    },
    "famille": [
      { "ar": "صَبْر", "translit": "ṣabr", "fr": "patience / endurance", "en": "patience / steadfastness", "tr": "sabır" },
      { "ar": "صَبَرَ", "translit": "ṣabara", "fr": "il a patienté", "en": "he was patient", "tr": "sabrettı" },
      { "ar": "صَابِر", "translit": "ṣābir", "fr": "patient / endurant", "en": "patient / steadfast", "tr": "sabreden" }
    ],
    "profondeur": {
      "fr": "Aṣ-ṣābirīna désigne ceux qui tiennent bon dans l’épreuve, l’obéissance et la retenue. Dans le Coran, la patience n’est pas passive : c’est une force intérieure active.",
      "en": "Aṣ-ṣābirīna refers to those who remain steadfast in trials, obedience, and restraint. In the Quran, patience is not passive; it is active inner strength.",
      "tr": "Aṣ-ṣābirīna imtihanda, itaatte ve nefsi tutmada sebat edenleri ifade eder. Kur’an’da sabır pasif değil, aktif bir iç güçtür."
    },
    "sourates_cles": [2, 3, 103]
  },
  {
    "id": 273,
    "ar": "الْمُفْلِحُونَ",
    "translit": "al-mufliḥūna",
    "frequence": 42,
    "rang": 273,
    "racine": "ف-ل-ح",
    "theme": "morale",
    "traductions": {
      "fr": "ceux qui réussissent / les gagnants",
      "en": "the successful / the prosperous",
      "tr": "kurtuluşa erenler / başarıya ulaşanlar"
    },
    "famille": [
      { "ar": "فَلَاح", "translit": "falāḥ", "fr": "réussite / salut", "en": "success / salvation", "tr": "felah / kurtuluş" },
      { "ar": "أَفْلَحَ", "translit": "aflaḥa", "fr": "il a réussi", "en": "he succeeded", "tr": "kurtuluşa erdi" },
      { "ar": "يُفْلِحُ", "translit": "yufliḥu", "fr": "il réussit", "en": "he succeeds", "tr": "başarır / kurtulur" }
    ],
    "profondeur": {
      "fr": "Al-mufliḥūn désigne ceux qui atteignent la vraie réussite. Le Coran ne limite pas la réussite à ce monde : le falāḥ est une réussite morale, spirituelle et finale.",
      "en": "Al-mufliḥūn are those who attain true success. The Quran does not limit success to worldly gain; falāḥ is moral, spiritual, and final success.",
      "tr": "Al-mufliḥūn gerçek başarıya ulaşanlardır. Kur’an başarıyı dünya kazancıyla sınırlamaz; felah ahlaki, manevi ve nihai kurtuluştur."
    },
    "sourates_cles": [2, 23, 87]
  },
  {
    "id": 274,
    "ar": "الْحَكِيمُ",
    "translit": "al-ḥakīmu",
    "frequence": 42,
    "rang": 274,
    "racine": "ح-ك-م",
    "theme": "allah",
    "traductions": {
      "fr": "Le Sage / Le Parfaitement Sage",
      "en": "The Wise / The All-Wise",
      "tr": "Hakîm / hikmet sahibi"
    },
    "famille": [
      { "ar": "حِكْمَة", "translit": "ḥikma", "fr": "sagesse", "en": "wisdom", "tr": "hikmet" },
      { "ar": "حُكْم", "translit": "ḥukm", "fr": "jugement / règle", "en": "judgment / ruling", "tr": "hüküm" },
      { "ar": "حَكَمَ", "translit": "ḥakama", "fr": "il a jugé", "en": "he judged", "tr": "hükmetti" }
    ],
    "profondeur": {
      "fr": "Al-Ḥakīm est un nom d’Allah. Il signifie que Ses actes, Ses ordres et Ses décisions reposent sur une sagesse parfaite, même lorsque l’être humain ne la comprend pas immédiatement.",
      "en": "Al-Ḥakīm is a name of Allah. It means His actions, commands, and decisions rest on perfect wisdom, even when humans do not immediately understand it.",
      "tr": "Al-Ḥakīm Allah’ın isimlerindendir. O’nun fiilleri, emirleri ve hükümleri insan hemen anlamasa bile kusursuz hikmete dayanır."
    },
    "sourates_cles": [2, 3, 31]
  },
  {
    "id": 275,
    "ar": "الرَّسُولَ",
    "translit": "ar-rasūla",
    "frequence": 41,
    "rang": 275,
    "racine": "ر-س-ل",
    "theme": "prophetie",
    "traductions": {
      "fr": "le Messager / l’Envoyé",
      "en": "the Messenger",
      "tr": "Resulü / elçiyi"
    },
    "famille": [
      { "ar": "رَسُول", "translit": "rasūl", "fr": "messager", "en": "messenger", "tr": "resul / elçi" },
      { "ar": "أَرْسَلَ", "translit": "arsala", "fr": "il a envoyé", "en": "he sent", "tr": "gönderdi" },
      { "ar": "رِسَالَة", "translit": "risāla", "fr": "message / mission", "en": "message / mission", "tr": "risalet / mesaj" }
    ],
    "profondeur": {
      "fr": "Ar-rasūla désigne le Messager dans une fonction d’autorité et de transmission. Obéir au Messager, dans le Coran, revient à recevoir le message envoyé par Allah.",
      "en": "Ar-rasūla refers to the Messenger in his role of authority and transmission. In the Quran, obeying the Messenger means receiving the message sent by Allah.",
      "tr": "Ar-rasūla elçiyi otorite ve tebliğ göreviyle ifade eder. Kur’an’da Resul’e itaat, Allah tarafından gönderilen mesajı kabul etmekle ilgilidir."
    },
    "sourates_cles": [4, 5, 24]
  },
  {
    "id": 276,
    "ar": "مِنْهُمَا",
    "translit": "minhumā",
    "frequence": 41,
    "rang": 276,
    "racine": "مِن + هُمَا",
    "theme": "grammaire",
    "traductions": {
      "fr": "d’eux deux / de ces deux choses",
      "en": "from both of them / from the two",
      "tr": "ikisinden / o ikisinden"
    },
    "famille": [
      { "ar": "مِنْ", "translit": "min", "fr": "de / parmi", "en": "from / among", "tr": "-den / arasından" },
      { "ar": "هُمَا", "translit": "humā", "fr": "eux deux / elles deux", "en": "both of them", "tr": "ikisi" },
      { "ar": "مِنْهُمْ", "translit": "minhum", "fr": "d’eux / parmi eux", "en": "from them", "tr": "onlardan" }
    ],
    "profondeur": {
      "fr": "Minhumā renvoie à deux personnes ou deux réalités mentionnées auparavant. Le duel est une particularité importante de l’arabe : il distingue clairement deux éléments du pluriel.",
      "en": "Minhumā refers to two people or two realities previously mentioned. The dual is an important feature of Arabic: it clearly distinguishes two from plural.",
      "tr": "Minhumā daha önce zikredilen iki kişi veya iki şeyi ifade eder. Tesniye Arapçanın önemli özelliğidir: ikiliği çoğuldan açıkça ayırır."
    },
    "sourates_cles": [2, 7, 18]
  },
  {
    "id": 277,
    "ar": "بَعْدَ",
    "translit": "baʿda",
    "frequence": 41,
    "rang": 277,
    "racine": "ب-ع-د",
    "theme": "temps",
    "traductions": {
      "fr": "après",
      "en": "after",
      "tr": "sonra"
    },
    "famille": [
      { "ar": "بَعْد", "translit": "baʿd", "fr": "après", "en": "after", "tr": "sonra" },
      { "ar": "مِنْ بَعْدِ", "translit": "min baʿdi", "fr": "après / à la suite de", "en": "after / following", "tr": "-den sonra" },
      { "ar": "بَعِيد", "translit": "baʿīd", "fr": "lointain", "en": "far / distant", "tr": "uzak" }
    ],
    "profondeur": {
      "fr": "Baʿda situe un événement après un autre. Le Coran l’emploie souvent pour montrer ce qui arrive après une preuve, une révélation, une faute ou un rappel.",
      "en": "Baʿda places one event after another. The Quran often uses it to show what happens after a proof, revelation, mistake, or reminder.",
      "tr": "Baʿda bir olayı diğerinden sonra konumlandırır. Kur’an bunu delilden, vahiyden, hatadan veya hatırlatmadan sonra gelen durumları anlatmak için kullanır."
    },
    "sourates_cles": [2, 3, 61]
  },
  {
    "id": 278,
    "ar": "قَرِيبٌ",
    "translit": "qarībun",
    "frequence": 41,
    "rang": 278,
    "racine": "ق-ر-ب",
    "theme": "allah",
    "traductions": {
      "fr": "proche / tout proche",
      "en": "near / close",
      "tr": "yakın"
    },
    "famille": [
      { "ar": "قَرُبَ", "translit": "qaruba", "fr": "il s’est approché", "en": "he came near", "tr": "yaklaştı" },
      { "ar": "قُرْب", "translit": "qurb", "fr": "proximité", "en": "nearness", "tr": "yakınlık" },
      { "ar": "قُرْبَان", "translit": "qurbān", "fr": "offrande / moyen de rapprochement", "en": "offering / sacrifice", "tr": "kurban" }
    ],
    "profondeur": {
      "fr": "Qarībun signifie proche. Quand il qualifie Allah, il rappelle que Sa proximité n’est pas physique, mais proximité de science, d’écoute, de réponse et de miséricorde.",
      "en": "Qarībun means near. When describing Allah, it reminds that His nearness is not physical, but nearness of knowledge, hearing, response, and mercy.",
      "tr": "Qarībun yakın demektir. Allah için kullanıldığında fiziksel yakınlık değil; ilim, işitme, cevap verme ve rahmet yakınlığı anlamına gelir."
    },
    "sourates_cles": [2, 11, 50]
  },
  {
    "id": 279,
    "ar": "سَمِيعٌ",
    "translit": "samīʿun",
    "frequence": 41,
    "rang": 279,
    "racine": "س-م-ع",
    "theme": "allah",
    "traductions": {
      "fr": "Audient / Celui qui entend parfaitement",
      "en": "All-Hearing / Hearing",
      "tr": "Semî / her şeyi işiten"
    },
    "famille": [
      { "ar": "سَمِعَ", "translit": "samiʿa", "fr": "il a entendu", "en": "he heard", "tr": "işitti" },
      { "ar": "سَمْع", "translit": "samʿ", "fr": "ouïe / audition", "en": "hearing", "tr": "işitme" },
      { "ar": "اسْتَمَعَ", "translit": "istamaʿa", "fr": "il a écouté attentivement", "en": "he listened", "tr": "dinledi" }
    ],
    "profondeur": {
      "fr": "Samīʿun est souvent un attribut d’Allah. Il signifie qu’Allah entend les paroles apparentes, les invocations discrètes et même ce que les créatures n’expriment pas clairement.",
      "en": "Samīʿun is often an attribute of Allah. It means Allah hears outward speech, quiet supplications, and even what creatures do not clearly express.",
      "tr": "Samīʿun çoğu zaman Allah’ın sıfatıdır. Allah’ın açık sözleri, gizli duaları ve varlıkların açıkça ifade etmediği şeyleri işittiğini bildirir."
    },
    "sourates_cles": [2, 3, 58]
  },
  {
    "id": 280,
    "ar": "بَصِيرٌ",
    "translit": "baṣīrun",
    "frequence": 41,
    "rang": 280,
    "racine": "ب-ص-ر",
    "theme": "allah",
    "traductions": {
      "fr": "Clairvoyant / Celui qui voit parfaitement",
      "en": "All-Seeing / Seeing",
      "tr": "Basîr / her şeyi gören"
    },
    "famille": [
      { "ar": "بَصَر", "translit": "baṣar", "fr": "vue / regard", "en": "sight / vision", "tr": "görme / göz" },
      { "ar": "أَبْصَرَ", "translit": "abṣara", "fr": "il a vu", "en": "he saw", "tr": "gördü" },
      { "ar": "بَصِيرَة", "translit": "baṣīra", "fr": "clairvoyance intérieure", "en": "insight", "tr": "basiret" }
    ],
    "profondeur": {
      "fr": "Baṣīrun signifie voyant ou clairvoyant. Quand il qualifie Allah, il rappelle que rien n’échappe à Sa vision : actes visibles, intentions cachées et réalités intérieures.",
      "en": "Baṣīrun means seeing or all-seeing. When describing Allah, it reminds that nothing escapes His sight: visible deeds, hidden intentions, and inner realities.",
      "tr": "Baṣīrun gören ve basiret sahibi anlamına gelir. Allah için kullanıldığında açık amellerin, gizli niyetlerin ve iç gerçekliklerin O’nun görüşünden kaçmadığını bildirir."
    },
    "sourates_cles": [2, 17, 42]
  },
  {
    "id": 281,
    "ar": "عَذَابٌ",
    "translit": "ʿadhābun",
    "frequence": 40,
    "rang": 281,
    "racine": "ع-ذ-ب",
    "theme": "jugement",
    "traductions": {
      "fr": "châtiment / punition",
      "en": "punishment / torment",
      "tr": "azap / ceza"
    },
    "famille": [
      { "ar": "عَذَاب", "translit": "ʿadhāb", "fr": "châtiment", "en": "punishment", "tr": "azap" },
      { "ar": "عَذَّبَ", "translit": "ʿadhdhaba", "fr": "il a châtié", "en": "he punished", "tr": "azap etti" },
      { "ar": "عَذْب", "translit": "ʿadhb", "fr": "doux / agréable", "en": "sweet / pleasant", "tr": "tatlı / hoş" }
    ],
    "profondeur": {
      "fr": "ʿAdhābun désigne le châtiment. Le Coran l’emploie comme avertissement : les actes ne sont pas neutres, ils produisent des conséquences dans ce monde et dans l’au-delà.",
      "en": "ʿAdhābun means punishment. The Quran uses it as a warning: actions are not neutral; they produce consequences in this world and the Hereafter.",
      "tr": "ʿAdhābun azap demektir. Kur’an bunu uyarı olarak kullanır: ameller nötr değildir; dünyada ve ahirette sonuç doğurur."
    },
    "sourates_cles": [2, 3, 78]
  },
  {
    "id": 282,
    "ar": "كُلُّ",
    "translit": "kullu",
    "frequence": 40,
    "rang": 282,
    "racine": "ك-ل-ل",
    "theme": "grammaire",
    "traductions": {
      "fr": "tout / chaque",
      "en": "all / every",
      "tr": "her / bütün"
    },
    "famille": [
      { "ar": "كُلّ", "translit": "kull", "fr": "tout / chaque", "en": "all / every", "tr": "her / bütün" },
      { "ar": "كُلُّ شَيْء", "translit": "kullu shayʾ", "fr": "toute chose", "en": "everything", "tr": "her şey" },
      { "ar": "كُلُّهُمْ", "translit": "kulluhum", "fr": "eux tous", "en": "all of them", "tr": "hepsi" }
    ],
    "profondeur": {
      "fr": "Kullu exprime l’universalité : chaque âme, toute chose, tout peuple. C’est un mot essentiel pour repérer les affirmations générales du Coran.",
      "en": "Kullu expresses universality: every soul, every thing, every people. It is essential for recognizing general Quranic statements.",
      "tr": "Kullu genellik bildirir: her nefis, her şey, her kavim. Kur’an’daki genel hükümleri tanımak için temel bir kelimedir."
    },
    "sourates_cles": [3, 21, 29]
  },
  {
    "id": 283,
    "ar": "حِسَابٍ",
    "translit": "ḥisābin",
    "frequence": 40,
    "rang": 283,
    "racine": "ح-س-ب",
    "theme": "jugement",
    "traductions": {
      "fr": "compte / jugement / calcul",
      "en": "account / reckoning / calculation",
      "tr": "hesap"
    },
    "famille": [
      { "ar": "حِسَاب", "translit": "ḥisāb", "fr": "compte / calcul", "en": "account / calculation", "tr": "hesap" },
      { "ar": "حَسِبَ", "translit": "ḥasiba", "fr": "il a pensé / compté", "en": "he thought / counted", "tr": "sandığı / hesapladı" },
      { "ar": "حَسْبُنَا", "translit": "ḥasbunā", "fr": "nous suffit", "en": "sufficient for us", "tr": "bize yeter" }
    ],
    "profondeur": {
      "fr": "Ḥisābin renvoie au compte et au jugement. Le Coran rappelle que les actes, même petits, ne sont pas perdus : ils entrent dans un compte parfaitement juste.",
      "en": "Ḥisābin refers to account and reckoning. The Quran reminds that deeds, even small ones, are not lost; they enter a perfectly just account.",
      "tr": "Ḥisābin hesap ve muhasebe anlamına gelir. Kur’an küçük amellerin bile kaybolmadığını, kusursuz adil bir hesaba girdiğini hatırlatır."
    },
    "sourates_cles": [14, 21, 99]
  },
  {
    "id": 284,
    "ar": "عَبْدٌ",
    "translit": "ʿabdun",
    "frequence": 40,
    "rang": 284,
    "racine": "ع-ب-د",
    "theme": "priere",
    "traductions": {
      "fr": "serviteur / adorateur",
      "en": "servant / worshipper",
      "tr": "kul / ibadet eden"
    },
    "famille": [
      { "ar": "عَبَدَ", "translit": "ʿabada", "fr": "il a adoré / servi", "en": "he worshipped / served", "tr": "ibadet etti / kulluk etti" },
      { "ar": "عِبَادَة", "translit": "ʿibāda", "fr": "adoration / culte", "en": "worship", "tr": "ibadet" },
      { "ar": "عِبَاد", "translit": "ʿibād", "fr": "serviteurs", "en": "servants", "tr": "kullar" }
    ],
    "profondeur": {
      "fr": "ʿAbdun désigne le serviteur. Dans la vision coranique, la servitude envers Allah n’est pas une humiliation : c’est la libération de toutes les fausses servitudes.",
      "en": "ʿAbdun means servant. In the Quranic worldview, servitude to Allah is not humiliation; it is liberation from all false forms of servitude.",
      "tr": "ʿAbdun kul demektir. Kur’an bakışında Allah’a kulluk aşağılanma değil, bütün sahte kulluklardan kurtuluştur."
    },
    "sourates_cles": [1, 17, 96]
  },
  {
    "id": 285,
    "ar": "عِبَادِي",
    "translit": "ʿibādī",
    "frequence": 40,
    "rang": 285,
    "racine": "ع-ب-د",
    "theme": "priere",
    "traductions": {
      "fr": "Mes serviteurs",
      "en": "My servants",
      "tr": "kullarım"
    },
    "famille": [
      { "ar": "عَبْد", "translit": "ʿabd", "fr": "serviteur", "en": "servant", "tr": "kul" },
      { "ar": "عِبَاد", "translit": "ʿibād", "fr": "serviteurs", "en": "servants", "tr": "kullar" },
      { "ar": "عِبَادَة", "translit": "ʿibāda", "fr": "adoration", "en": "worship", "tr": "ibadet" }
    ],
    "profondeur": {
      "fr": "ʿIbādī signifie « Mes serviteurs ». Quand Allah utilise cette forme, elle porte souvent une douceur particulière : proximité, appel, pardon et protection.",
      "en": "ʿIbādī means “My servants.” When Allah uses this form, it often carries a special tenderness: nearness, calling, forgiveness, and protection.",
      "tr": "ʿIbādī “kullarım” demektir. Allah bu formu kullandığında çoğu zaman özel bir şefkat taşır: yakınlık, çağrı, bağışlama ve koruma."
    },
    "sourates_cles": [15, 39, 89]
  },
  {
    "id": 286,
    "ar": "ذِكْرٌ",
    "translit": "dhikrun",
    "frequence": 40,
    "rang": 286,
    "racine": "ذ-ك-ر",
    "theme": "priere",
    "traductions": {
      "fr": "rappel / mention / souvenir",
      "en": "remembrance / reminder / mention",
      "tr": "zikir / hatırlatma"
    },
    "famille": [
      { "ar": "ذَكَرَ", "translit": "dhakara", "fr": "il a rappelé / mentionné", "en": "he remembered / mentioned", "tr": "zikretti / hatırladı" },
      { "ar": "ذِكْر", "translit": "dhikr", "fr": "rappel / invocation", "en": "remembrance", "tr": "zikir" },
      { "ar": "تَذْكِرَة", "translit": "tadhkira", "fr": "rappel / avertissement", "en": "reminder", "tr": "hatırlatma" }
    ],
    "profondeur": {
      "fr": "Dhikrun signifie rappel. Le Coran lui-même est appelé rappel, car il réveille ce que l’être humain oublie : son origine, sa responsabilité et son retour vers Allah.",
      "en": "Dhikrun means reminder. The Quran itself is called a reminder because it awakens what humans forget: their origin, responsibility, and return to Allah.",
      "tr": "Dhikrun hatırlatma demektir. Kur’an da zikir olarak adlandırılır; çünkü insanın unuttuğu şeyi uyandırır: kökenini, sorumluluğunu ve Allah’a dönüşünü."
    },
    "sourates_cles": [15, 20, 87]
  },
  {
    "id": 287,
    "ar": "يُرِيدُ",
    "translit": "yurīdu",
    "frequence": 40,
    "rang": 287,
    "racine": "ر-و-د",
    "theme": "allah",
    "traductions": {
      "fr": "il veut / Il veut",
      "en": "he wants / He intends",
      "tr": "ister / diler"
    },
    "famille": [
      { "ar": "أَرَادَ", "translit": "arāda", "fr": "il a voulu", "en": "he wanted / intended", "tr": "istedi / irade etti" },
      { "ar": "إِرَادَة", "translit": "irāda", "fr": "volonté / intention", "en": "will / intention", "tr": "irade" },
      { "ar": "مُرِيد", "translit": "murīd", "fr": "celui qui veut / aspirant", "en": "one who wants / seeker", "tr": "isteyen / mürid" }
    ],
    "profondeur": {
      "fr": "Yurīdu exprime la volonté ou l’intention. Quand le sujet est Allah, le verbe rappelle que Ses prescriptions ont un but : guider, purifier, faciliter ou éprouver.",
      "en": "Yurīdu expresses will or intention. When Allah is the subject, it reminds that His commands have a purpose: to guide, purify, ease, or test.",
      "tr": "Yurīdu istemek ve irade etmek anlamına gelir. Fail Allah olduğunda emirlerinin bir amacı olduğunu hatırlatır: hidayet, arındırma, kolaylaştırma veya imtihan."
    },
    "sourates_cles": [2, 4, 5]
  },
  {
    "id": 288,
    "ar": "تُؤْمِنُونَ",
    "translit": "tuʾminūna",
    "frequence": 39,
    "rang": 288,
    "racine": "أ-م-ن",
    "theme": "foi",
    "traductions": {
      "fr": "vous croyez / vous avez foi",
      "en": "you believe / you have faith",
      "tr": "iman edersiniz / inanırsınız"
    },
    "famille": [
      { "ar": "آمَنَ", "translit": "āmana", "fr": "il a cru", "en": "he believed", "tr": "iman etti" },
      { "ar": "إِيمَان", "translit": "īmān", "fr": "foi", "en": "faith", "tr": "iman" },
      { "ar": "مُؤْمِن", "translit": "muʾmin", "fr": "croyant", "en": "believer", "tr": "mümin" }
    ],
    "profondeur": {
      "fr": "Tuʾminūna s’adresse directement à un groupe : « vous croyez ». Le Coran utilise souvent cette forme pour appeler les croyants à rendre leur foi visible par leurs choix.",
      "en": "Tuʾminūna directly addresses a group: “you believe.” The Quran often uses this form to call believers to make their faith visible through choices.",
      "tr": "Tuʾminūna doğrudan bir topluluğa hitap eder: “iman edersiniz”. Kur’an bu formu müminlerin imanlarını seçimleriyle görünür kılmaları için kullanır."
    },
    "sourates_cles": [2, 3, 61]
  },
  {
    "id": 289,
    "ar": "يَتَفَكَّرُونَ",
    "translit": "yatafakkarūna",
    "frequence": 39,
    "rang": 289,
    "racine": "ف-ك-ر",
    "theme": "morale",
    "traductions": {
      "fr": "ils réfléchissent / ils méditent",
      "en": "they reflect / they ponder",
      "tr": "düşünürler / tefekkür ederler"
    },
    "famille": [
      { "ar": "فَكَّرَ", "translit": "fakkara", "fr": "il a réfléchi", "en": "he thought", "tr": "düşündü" },
      { "ar": "تَفَكُّر", "translit": "tafakkur", "fr": "méditation / réflexion", "en": "reflection / contemplation", "tr": "tefekkür" },
      { "ar": "فِكْر", "translit": "fikr", "fr": "pensée", "en": "thought", "tr": "fikir / düşünce" }
    ],
    "profondeur": {
      "fr": "Yatafakkarūna désigne ceux qui réfléchissent profondément. Le Coran ne demande pas une foi aveugle : il appelle à observer, méditer et comprendre les signes.",
      "en": "Yatafakkarūna refers to those who reflect deeply. The Quran does not call for blind faith; it calls for observation, contemplation, and understanding signs.",
      "tr": "Yatafakkarūna derin düşünenleri ifade eder. Kur’an kör bir inanç istemez; gözlemlemeye, tefekkür etmeye ve ayetleri anlamaya çağırır."
    },
    "sourates_cles": [3, 10, 16]
  },
  {
    "id": 290,
    "ar": "تَتَّقُونَ",
    "translit": "tattaqūna",
    "frequence": 39,
    "rang": 290,
    "racine": "و-ق-ي",
    "theme": "morale",
    "traductions": {
      "fr": "vous vous protégez / vous êtes pieux",
      "en": "you are mindful / you protect yourselves",
      "tr": "sakınırsınız / takva sahibi olursunuz"
    },
    "famille": [
      { "ar": "تَقْوَى", "translit": "taqwā", "fr": "piété / conscience d’Allah", "en": "God-consciousness", "tr": "takva" },
      { "ar": "اتَّقَى", "translit": "ittaqā", "fr": "il s’est protégé / a craint Allah", "en": "he was mindful", "tr": "sakındı / takva sahibi oldu" },
      { "ar": "وَقَى", "translit": "waqā", "fr": "il a protégé", "en": "he protected", "tr": "korudu" }
    ],
    "profondeur": {
      "fr": "Tattaqūna signifie que vous vous protégez par la conscience d’Allah. La taqwā n’est pas seulement la peur : c’est une vigilance qui protège l’âme.",
      "en": "Tattaqūna means you protect yourselves through God-consciousness. Taqwā is not merely fear; it is vigilance that protects the soul.",
      "tr": "Tattaqūna Allah bilinciyle sakınmanız demektir. Takva sadece korku değil, nefsi koruyan bilinçli bir uyanıklıktır."
    },
    "sourates_cles": [2, 5, 7]
  },
  {
    "id": 291,
    "ar": "يُحِبُّ",
    "translit": "yuḥibbu",
    "frequence": 39,
    "rang": 291,
    "racine": "ح-ب-ب",
    "theme": "allah",
    "traductions": {
      "fr": "Il aime / il aime",
      "en": "He loves / he loves",
      "tr": "sever"
    },
    "famille": [
      { "ar": "حُبّ", "translit": "ḥubb", "fr": "amour", "en": "love", "tr": "sevgi / aşk" },
      { "ar": "أَحَبَّ", "translit": "aḥabba", "fr": "il a aimé", "en": "he loved", "tr": "sevdi" },
      { "ar": "حَبِيب", "translit": "ḥabīb", "fr": "bien-aimé", "en": "beloved", "tr": "sevgili" }
    ],
    "profondeur": {
      "fr": "Yuḥibbu signifie aimer. Quand le sujet est Allah, le Coran montre que l’amour divin est lié à des qualités : patience, justice, purification, confiance et excellence.",
      "en": "Yuḥibbu means to love. When Allah is the subject, the Quran shows divine love linked to qualities: patience, justice, purification, trust, and excellence.",
      "tr": "Yuḥibbu sevmek demektir. Fail Allah olduğunda ilahi sevginin sabır, adalet, arınma, tevekkül ve ihsan gibi niteliklerle ilişkili olduğunu gösterir."
    },
    "sourates_cles": [2, 3, 5]
  },
  {
    "id": 292,
    "ar": "صِرَاطٍ",
    "translit": "ṣirāṭin",
    "frequence": 39,
    "rang": 292,
    "racine": "ص-ر-ط",
    "theme": "foi",
    "traductions": {
      "fr": "chemin / voie",
      "en": "path / way",
      "tr": "yol / sırat"
    },
    "famille": [
      { "ar": "صِرَاط", "translit": "ṣirāṭ", "fr": "chemin / route", "en": "path / road", "tr": "sırat / yol" },
      { "ar": "الصِّرَاط الْمُسْتَقِيم", "translit": "aṣ-ṣirāṭ al-mustaqīm", "fr": "le droit chemin", "en": "the straight path", "tr": "dosdoğru yol" },
      { "ar": "سَبِيل", "translit": "sabīl", "fr": "voie / chemin", "en": "way / path", "tr": "yol / sebil" }
    ],
    "profondeur": {
      "fr": "Ṣirāṭ désigne une voie claire et structurée. Dans Al-Fātiḥa, le croyant demande à être guidé vers le ṣirāṭ al-mustaqīm, le chemin droit.",
      "en": "Ṣirāṭ refers to a clear and structured path. In Al-Fātiḥa, the believer asks to be guided to aṣ-ṣirāṭ al-mustaqīm, the straight path.",
      "tr": "Ṣirāṭ açık ve düzenli yolu ifade eder. Fâtiha’da mümin dosdoğru yol olan ṣirāṭ al-mustaqīm’e hidayet ister."
    },
    "sourates_cles": [1, 6, 36]
  },
  {
    "id": 293,
    "ar": "مُسْتَقِيمٍ",
    "translit": "mustaqīmin",
    "frequence": 39,
    "rang": 293,
    "racine": "ق-و-م",
    "theme": "foi",
    "traductions": {
      "fr": "droit / rectiligne / correct",
      "en": "straight / upright",
      "tr": "dosdoğru / düzgün"
    },
    "famille": [
      { "ar": "قَامَ", "translit": "qāma", "fr": "il s’est levé / tenu droit", "en": "he stood", "tr": "kalktı / doğruldu" },
      { "ar": "اسْتَقَامَ", "translit": "istaqāma", "fr": "il s’est tenu droit", "en": "he remained upright", "tr": "istikamet üzere oldu" },
      { "ar": "قِيَامَة", "translit": "qiyāma", "fr": "résurrection", "en": "resurrection", "tr": "kıyamet" }
    ],
    "profondeur": {
      "fr": "Mustaqīm vient de l’idée de se tenir droit. Le chemin droit n’est pas seulement une route correcte : c’est une orientation stable, verticale et fidèle.",
      "en": "Mustaqīm comes from the idea of standing upright. The straight path is not merely a correct road; it is stable, upright, faithful orientation.",
      "tr": "Mustaqīm doğrulmak ve dik durmak fikrinden gelir. Dosdoğru yol sadece doğru rota değil; sağlam, dik ve sadık bir yöneliştir."
    },
    "sourates_cles": [1, 11, 41]
  },
  {
    "id": 294,
    "ar": "الْمَاءِ",
    "translit": "al-māʾi",
    "frequence": 39,
    "rang": 294,
    "racine": "م-و-ه / م-ي-ه",
    "theme": "creation",
    "traductions": {
      "fr": "l’eau / de l’eau",
      "en": "water / of water",
      "tr": "su / suyun"
    },
    "famille": [
      { "ar": "مَاء", "translit": "māʾ", "fr": "eau", "en": "water", "tr": "su" },
      { "ar": "مِيَاه", "translit": "miyāh", "fr": "eaux", "en": "waters", "tr": "sular" },
      { "ar": "مَطَر", "translit": "maṭar", "fr": "pluie", "en": "rain", "tr": "yağmur" }
    ],
    "profondeur": {
      "fr": "Al-māʾi désigne l’eau. Dans le Coran, l’eau est signe de vie, de miséricorde, de purification et de résurrection de la terre morte.",
      "en": "Al-māʾi means water. In the Quran, water is a sign of life, mercy, purification, and the revival of dead earth.",
      "tr": "Al-māʾi su demektir. Kur’an’da su hayatın, rahmetin, arınmanın ve ölü toprağın dirilişinin işaretidir."
    },
    "sourates_cles": [21, 24, 56]
  },
  {
    "id": 295,
    "ar": "أَخَذَ",
    "translit": "akhadha",
    "frequence": 38,
    "rang": 295,
    "racine": "أ-خ-ذ",
    "theme": "morale",
    "traductions": {
      "fr": "il a pris / il a saisi",
      "en": "he took / he seized",
      "tr": "aldı / yakaladı"
    },
    "famille": [
      { "ar": "أَخْذ", "translit": "akhdh", "fr": "prise / saisie", "en": "taking / seizure", "tr": "alma / yakalama" },
      { "ar": "يَأْخُذُ", "translit": "yaʾkhudhu", "fr": "il prend", "en": "he takes", "tr": "alır" },
      { "ar": "مَأْخُوذ", "translit": "maʾkhūdh", "fr": "pris / saisi", "en": "taken / seized", "tr": "alınmış / yakalanmış" }
    ],
    "profondeur": {
      "fr": "Akhadha signifie prendre ou saisir. Le Coran l’utilise pour des pactes pris, des avertissements reçus, ou des peuples saisis par les conséquences de leurs actes.",
      "en": "Akhadha means to take or seize. The Quran uses it for covenants taken, warnings received, or peoples seized by the consequences of their deeds.",
      "tr": "Akhadha almak veya yakalamak demektir. Kur’an bunu alınan sözler, gelen uyarılar veya amellerinin sonucu yakalanan kavimler için kullanır."
    },
    "sourates_cles": [2, 7, 11]
  },
  {
    "id": 296,
    "ar": "أَصْحَابُ",
    "translit": "aṣḥābu",
    "frequence": 38,
    "rang": 296,
    "racine": "ص-ح-ب",
    "theme": "communaute",
    "traductions": {
      "fr": "les compagnons de / les gens de",
      "en": "companions of / people of",
      "tr": "ashab / sahipleri / ehli"
    },
    "famille": [
      { "ar": "صَاحِب", "translit": "ṣāḥib", "fr": "compagnon / possesseur", "en": "companion / owner", "tr": "sahip / arkadaş" },
      { "ar": "صُحْبَة", "translit": "ṣuḥba", "fr": "compagnie", "en": "companionship", "tr": "sohbet / arkadaşlık" },
      { "ar": "أَصْحَاب", "translit": "aṣḥāb", "fr": "compagnons / gens", "en": "companions / people", "tr": "ashab / kimseler" }
    ],
    "profondeur": {
      "fr": "Aṣḥābu introduit souvent un groupe lié à un lieu ou un destin : les gens du Feu, les gens du Paradis, les compagnons de la caverne.",
      "en": "Aṣḥābu often introduces a group linked to a place or destiny: people of the Fire, people of Paradise, companions of the cave.",
      "tr": "Aṣḥābu çoğu zaman bir yer veya kaderle ilişkili topluluğu başlatır: ateş ehli, cennet ehli, mağara ashabı."
    },
    "sourates_cles": [18, 56, 74]
  },
  {
    "id": 297,
    "ar": "عَذَابِ",
    "translit": "ʿadhābi",
    "frequence": 38,
    "rang": 297,
    "racine": "ع-ذ-ب",
    "theme": "jugement",
    "traductions": {
      "fr": "du châtiment / châtiment de",
      "en": "of punishment / punishment of",
      "tr": "azabın / azabı"
    },
    "famille": [
      { "ar": "عَذَاب", "translit": "ʿadhāb", "fr": "châtiment", "en": "punishment", "tr": "azap" },
      { "ar": "عَذَّبَ", "translit": "ʿadhdhaba", "fr": "il a châtié", "en": "he punished", "tr": "azap etti" },
      { "ar": "عَذَابٌ أَلِيم", "translit": "ʿadhābun alīm", "fr": "châtiment douloureux", "en": "painful punishment", "tr": "acı azap" }
    ],
    "profondeur": {
      "fr": "ʿAdhābi est une forme de ʿadhāb. Elle apparaît souvent dans des expressions qui qualifient le châtiment : douloureux, immense, humiliant ou sévère.",
      "en": "ʿAdhābi is a form of ʿadhāb. It often appears in expressions describing punishment: painful, great, humiliating, or severe.",
      "tr": "ʿAdhābi, ʿadhāb kelimesinin bir hâlidir. Çoğu zaman azabı niteleyen ifadelerde geçer: acı, büyük, aşağılayıcı veya şiddetli."
    },
    "sourates_cles": [2, 3, 67]
  },
  {
    "id": 298,
    "ar": "خَبِيرٌ",
    "translit": "khabīrun",
    "frequence": 38,
    "rang": 298,
    "racine": "خ-ب-ر",
    "theme": "allah",
    "traductions": {
      "fr": "Parfaitement Informé / parfaitement connaisseur",
      "en": "All-Aware / Fully Informed",
      "tr": "Habîr / her şeyden haberdar"
    },
    "famille": [
      { "ar": "خَبَر", "translit": "khabar", "fr": "information / nouvelle", "en": "news / information", "tr": "haber" },
      { "ar": "خِبْرَة", "translit": "khibra", "fr": "expérience / expertise", "en": "experience / expertise", "tr": "tecrübe / uzmanlık" },
      { "ar": "أَخْبَرَ", "translit": "akhbara", "fr": "il a informé", "en": "he informed", "tr": "haber verdi" }
    ],
    "profondeur": {
      "fr": "Khabīrun est un attribut d’Allah : Il est parfaitement informé. Le mot insiste sur une connaissance fine, intérieure, détaillée et totale.",
      "en": "Khabīrun is an attribute of Allah: He is fully aware. The word emphasizes subtle, inner, detailed, and complete knowledge.",
      "tr": "Khabīrun Allah’ın sıfatlarındandır: O her şeyden haberdardır. Kelime ince, içsel, ayrıntılı ve tam bilgiyi vurgular."
    },
    "sourates_cles": [31, 33, 67]
  },
  {
    "id": 299,
    "ar": "قُلُوبِهِمْ",
    "translit": "qulūbihim",
    "frequence": 38,
    "rang": 299,
    "racine": "ق-ل-ب",
    "theme": "homme",
    "traductions": {
      "fr": "leurs cœurs",
      "en": "their hearts",
      "tr": "kalpleri"
    },
    "famille": [
      { "ar": "قَلْب", "translit": "qalb", "fr": "cœur", "en": "heart", "tr": "kalp" },
      { "ar": "قُلُوب", "translit": "qulūb", "fr": "cœurs", "en": "hearts", "tr": "kalpler" },
      { "ar": "قَلَبَ", "translit": "qalaba", "fr": "il a retourné", "en": "he turned over", "tr": "çevirdi / döndürdü" }
    ],
    "profondeur": {
      "fr": "Qulūbihim signifie « leurs cœurs ». La racine q-l-b évoque le retournement : le cœur est changeant, il peut se tourner vers la foi, la peur, l’orgueil ou la guidance.",
      "en": "Qulūbihim means “their hearts.” The root q-l-b evokes turning: the heart changes and may turn toward faith, fear, arrogance, or guidance.",
      "tr": "Qulūbihim “kalpleri” demektir. q-l-b kökü dönmeyi çağrıştırır: kalp değişir; imana, korkuya, kibre veya hidayete yönelebilir."
    },
    "sourates_cles": [2, 8, 59]
  },
  {
    "id": 300,
    "ar": "لَا يَعْلَمُونَ",
    "translit": "lā yaʿlamūna",
    "frequence": 38,
    "rang": 300,
    "racine": "لَا + ع-ل-م",
    "theme": "prophetie",
    "traductions": {
      "fr": "ils ne savent pas / ils ne connaissent pas",
      "en": "they do not know",
      "tr": "bilmezler / bilmiyorlar"
    },
    "famille": [
      { "ar": "لَا", "translit": "lā", "fr": "ne... pas / non", "en": "not / no", "tr": "değil / hayır" },
      { "ar": "يَعْلَمُونَ", "translit": "yaʿlamūna", "fr": "ils savent", "en": "they know", "tr": "bilirler" },
      { "ar": "عِلْم", "translit": "ʿilm", "fr": "science / connaissance", "en": "knowledge", "tr": "ilim / bilgi" }
    ],
    "profondeur": {
      "fr": "Lā yaʿlamūna signifie « ils ne savent pas ». Le Coran l’utilise pour montrer que l’ignorance peut venir d’un manque de savoir, mais aussi d’un refus de voir les signes.",
      "en": "Lā yaʿlamūna means “they do not know.” The Quran uses it to show that ignorance may come from lack of knowledge, but also from refusal to see signs.",
      "tr": "Lā yaʿlamūna “bilmezler” demektir. Kur’an cehaletin bazen bilgi eksikliğinden, bazen de ayetleri görmeyi reddetmekten kaynaklandığını gösterir."
    },
    "sourates_cles": [2, 6, 30]
  },
];

export { VOCAB2 };
