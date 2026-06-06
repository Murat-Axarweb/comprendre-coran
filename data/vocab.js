const VOCAB = [
  // ============================================================
  // TOP 10 — ~8% du Coran
  // ============================================================
  {
    id: 1, ar: "اللَّه", translit: "allāh", frequence: 2699, rang: 1,
    racine: "أ-ل-ه", theme: "allah",
    traductions: { fr: "Allah / Dieu", en: "Allah / God", tr: "Allah / Tanrı" },
    famille: [
      { ar: "إِلَه", translit: "ilāh", fr: "divinité", en: "deity", tr: "ilah" },
      { ar: "آلِهَة", translit: "āliha", fr: "dieux (pl.)", en: "gods", tr: "ilahlar" },
      { ar: "تَأَلُّه", translit: "taʾalluh", fr: "adoration totale", en: "total worship", tr: "tam ibadet" }
    ],
    profondeur: {
      fr: "Allah est le mot le plus fréquent du Coran (2699 fois). La racine a-l-h évoque la dévotion et l'aspiration du cœur. Contrairement à 'Dieu', Allah n'a pas de féminin ni de pluriel — il désigne l'Être unique par essence.",
      en: "Allah is the most frequent word in the Quran (2699 times). The root a-l-h evokes devotion and the heart's aspiration. Unlike 'God', Allah has no feminine or plural — it designates the unique Being by essence.",
      tr: "Allah, Kur'an'da en sık geçen kelimedir (2699 kez). a-l-h kökü, kalbin özlemini ve adanmışlığını çağrıştırır. 'Tanrı'nın aksine, Allah'ın ne dişil ne de çoğul formu vardır."
    },
    sourates_cles: [1, 112, 114]
  },
  {
    id: 2, ar: "رَبّ", translit: "rabb", frequence: 980, rang: 2,
    racine: "ر-ب-ب", theme: "allah",
    traductions: { fr: "Seigneur / Maître / Nourricier", en: "Lord / Master / Sustainer", tr: "Rab / Efendi / Terbiyeci" },
    famille: [
      { ar: "رَبَّى", translit: "rabbā", fr: "il a éduqué", en: "he raised", tr: "terbiye etti" },
      { ar: "تَرْبِيَة", translit: "tarbiya", fr: "éducation", en: "education", tr: "eğitim" },
      { ar: "مُرَبِّي", translit: "murabbī", fr: "éducateur", en: "educator", tr: "eğitimci" },
      { ar: "رَبَّانِي", translit: "rabbānī", fr: "homme de Dieu", en: "man of God", tr: "rabbani" }
    ],
    profondeur: {
      fr: "Rabb (980 fois) combine trois dimensions : posséder, nourrir, éduquer. Chercher refuge auprès du Rabb c'est se tourner vers Celui qui à la fois créé et prend soin. Plus riche que 'Seigneur' en français.",
      en: "Rabb (980 times) combines three dimensions: to own, to nourish, to educate. Much richer than 'Lord' in English — it is the one who created AND who cares.",
      tr: "Rabb (980 kez) üç boyutu birleştirir: sahip olmak, beslemek, yetiştirmek. 'Efendi'den çok daha zengindir — hem yaratan hem de koruyan anlamına gelir."
    },
    sourates_cles: [1, 113, 114]
  },
  {
    id: 3, ar: "فِي", translit: "fī", frequence: 4381, rang: 3,
    racine: "particule", theme: "grammaire",
    traductions: { fr: "dans / en / sur", en: "in / within / on", tr: "içinde / üzerinde" },
    famille: [],
    profondeur: {
      fr: "Fī est la particule la plus fréquente du Coran (4381 fois). Elle exprime le lieu, le temps, l'état. 'Dans les poitrines', 'dans la vie', 'dans le chemin' — fī localise et ancre.",
      en: "Fī is the most frequent particle in the Quran (4381 times). It expresses place, time, state. 'In the hearts', 'in life', 'in the path' — fī locates and anchors.",
      tr: "Fī, Kur'an'da en sık geçen edattır (4381 kez). Yer, zaman ve durum bildirir. 'Kalplerde', 'hayatta', 'yolda' — fī konumlandırır ve bağlar."
    },
    sourates_cles: [1, 2, 114]
  },
  {
    id: 4, ar: "مِن", translit: "min", frequence: 3226, rang: 4,
    racine: "particule", theme: "grammaire",
    traductions: { fr: "de / depuis / parmi / contre", en: "from / of / among / against", tr: "den / dan / arasında / karşı" },
    famille: [],
    profondeur: {
      fr: "Min (3226 fois) est polyvalent : origine (venir de), partition (parmi), protection (contre le mal). Le même mot protège et définit l'origine — comprendre min selon le contexte est fondamental.",
      en: "Min (3226 times) is versatile: origin (coming from), partition (among), protection (from evil). The same word protects and defines origin.",
      tr: "Min (3226 kez) çok yönlüdür: köken (nereden), bölüm (arasında), koruma (kötülükten). Aynı kelime hem korur hem de kökeni tanımlar."
    },
    sourates_cles: [113, 114]
  },
  {
    id: 5, ar: "إِلَى", translit: "ilā", frequence: 742, rang: 5,
    racine: "particule", theme: "grammaire",
    traductions: { fr: "vers / jusqu'à / à", en: "to / towards / until", tr: "doğru / kadar / -e" },
    famille: [],
    profondeur: {
      fr: "Ilā exprime le mouvement vers une direction ou une limite. 'Revenir vers Allah', 'jusqu'au Jour du Jugement' — ilā oriente.",
      en: "Ilā expresses movement toward a direction or limit. 'Return to Allah', 'until the Day of Judgement' — ilā points the way.",
      tr: "İlā, bir yöne veya sınıra doğru hareketi ifade eder. 'Allah'a dönmek', 'Kıyamet gününe kadar' — ilā yönlendirir."
    },
    sourates_cles: [1, 2]
  },
  {
    id: 6, ar: "عَلَى", translit: "ʿalā", frequence: 1430, rang: 6,
    racine: "particule", theme: "grammaire",
    traductions: { fr: "sur / au-dessus de / contre", en: "on / upon / over / against", tr: "üzerinde / üstünde / karşı" },
    famille: [
      { ar: "عَلِيّ", translit: "ʿalī", fr: "élevé / haut", en: "high / elevated", tr: "yüce / yüksek" },
      { ar: "عُلُوّ", translit: "ʿuluww", fr: "hauteur / élévation", en: "height / elevation", tr: "yücelik / yükseklik" }
    ],
    profondeur: {
      fr: "ʿAlā exprime la position supérieure — physique ou morale. La racine ʿ-l-w donne aussi ʿAlī (le Haut) et ʿUlā (les hautes places). Être 'sur' quelque chose c'est en être le maître ou le protecteur.",
      en: "ʿAlā expresses the higher position — physical or moral. The root ʿ-l-w also gives ʿAlī (the High) and ʿUlā (the high places).",
      tr: "ʿAlā, fiziksel veya manevi üstün konumu ifade eder. ʿ-l-v kökü ayrıca ʿAlī (Yüce) ve ʿUlā (yüksek yerler) kelimelerini verir."
    },
    sourates_cles: [1, 87]
  },
  {
    id: 7, ar: "وَ", translit: "wa", frequence: 18000, rang: 7,
    racine: "particule", theme: "grammaire",
    traductions: { fr: "et / or / tandis que", en: "and / while / as for", tr: "ve / ile / oysa" },
    famille: [],
    profondeur: {
      fr: "Wa est la particule de coordination la plus utilisée. Elle relie, oppose, insiste. En arabe coranique, elle peut aussi introduire un serment (Wa l-ʿaṣr — Par l'époque !).",
      en: "Wa is the most used coordination particle. It links, opposes, emphasizes. In Quranic Arabic it can also introduce an oath (Wa l-ʿaṣr — By time!).",
      tr: "Va, en çok kullanılan bağlaç edatıdır. Bağlar, karşıtlar, vurgular. Kur'an Arapçasında yemin de başlatabilir (Ve'l-asr — Zamana yemin olsun!)."
    },
    sourates_cles: [103]
  },
  {
    id: 8, ar: "الَّذِي", translit: "allaḏī", frequence: 1464, rang: 8,
    racine: "pronom", theme: "grammaire",
    traductions: { fr: "celui qui / qui (relatif)", en: "who / that / which (relative)", tr: "kim ki / hangi (ilgi zamiri)" },
    famille: [
      { ar: "الَّتِي", translit: "allatī", fr: "celle qui (fém.)", en: "she who / which (fem.)", tr: "o ki (dişil)" },
      { ar: "الَّذِينَ", translit: "allaḏīna", fr: "ceux qui (pl.)", en: "those who (pl.)", tr: "onlar ki (çoğul)" }
    ],
    profondeur: {
      fr: "Le pronom relatif le plus fréquent du Coran. Il introduit les qualités d'Allah ('Celui qui a créé'), les croyants ('ceux qui croient'), les actions. Mémoriser allaḏī / allatī / allaḏīna ouvre des centaines de structures.",
      en: "The most frequent relative pronoun in the Quran. It introduces Allah's qualities, the believers, actions. Mastering allaḏī / allatī / allaḏīna unlocks hundreds of structures.",
      tr: "Kur'an'da en sık geçen ilgi zamiridir. Allah'ın sıfatlarını, mü'minleri, eylemleri tanıtır. allaḏī / allatī / allaḏīna'yı ezberlemek yüzlerce yapıyı açar."
    },
    sourates_cles: [1, 114]
  },
  {
    id: 9, ar: "كَانَ", translit: "kāna", frequence: 1360, rang: 9,
    racine: "ك-و-ن", theme: "grammaire",
    traductions: { fr: "il était / il a été", en: "he was / it was", tr: "idi / oldu" },
    famille: [
      { ar: "يَكُون", translit: "yakūn", fr: "il sera", en: "he will be", tr: "olacak" },
      { ar: "كُن", translit: "kun", fr: "Sois ! (ordre divin)", en: "Be! (divine command)", tr: "Ol! (ilahi emir)" },
      { ar: "كَوْن", translit: "kawn", fr: "univers / existence", en: "universe / existence", tr: "evren / varlık" },
      { ar: "مَكَان", translit: "makān", fr: "lieu / endroit", en: "place / location", tr: "yer / mekan" },
      { ar: "كَائِن", translit: "kāʾin", fr: "être / existant", en: "being / existing", tr: "varlık / mevcut" }
    ],
    profondeur: {
      fr: "La racine k-w-n est la racine de l'existence. Kun (Sois !) est le mot divin de création — le monde entier est né de ce mot. Kawn (univers), makān (lieu), kāʾin (être) — tout part de cette racine fondatrice.",
      en: "The root k-w-n is the root of existence itself. Kun (Be!) is the divine word of creation. Kawn (universe), makān (place), kāʾin (being) — everything stems from this foundational root.",
      tr: "k-v-n kökü, varlığın köküdür. Kun (Ol!) ilahi yaratma sözüdür. Kevn (evren), mekân (yer), kâin (varlık) — her şey bu temel kökten gelir."
    },
    sourates_cles: [2, 36, 112]
  },
  {
    id: 10, ar: "قَالَ", translit: "qāla", frequence: 1722, rang: 10,
    racine: "ق-و-ل", theme: "prophetie",
    traductions: { fr: "il a dit", en: "he said", tr: "dedi" },
    famille: [
      { ar: "قُلْ", translit: "qul", fr: "dis !", en: "say!", tr: "de!" },
      { ar: "قَوْل", translit: "qawl", fr: "parole", en: "speech / word", tr: "söz / kelam" },
      { ar: "يَقُول", translit: "yaqūl", fr: "il dit", en: "he says", tr: "diyor" },
      { ar: "مَقَال", translit: "maqāl", fr: "discours", en: "speech", tr: "söylem" }
    ],
    profondeur: {
      fr: "Qāla est l'un des verbes les plus fréquents du Coran — le Livre est avant tout un récit de dialogues. Allah parle, les prophètes parlent, les mécréants répondent. L'impératif Qul (dis !) revient 332 fois.",
      en: "Qāla is one of the most frequent verbs in the Quran — the Book is above all a narrative of dialogues. Allah speaks, prophets speak, disbelievers respond. The imperative Qul (say!) appears 332 times.",
      tr: "Kāle, Kur'an'da en sık geçen fiillerden biridir — Kitap her şeyden önce diyalogların anlatısıdır. Allah konuşur, peygamberler konuşur, inkarcılar cevap verir."
    },
    sourates_cles: [2, 7, 12, 112, 113, 114]
  },

  // ============================================================
  // TOP 11–50 — mots fondamentaux
  // ============================================================
  {
    id: 11, ar: "آمَنَ", translit: "āmana", frequence: 537, rang: 11,
    racine: "أ-م-ن", theme: "foi",
    traductions: { fr: "il a cru / croire", en: "he believed / to believe", tr: "iman etti / inanmak" },
    famille: [
      { ar: "إِيمَان", translit: "īmān", fr: "foi / croyance", en: "faith / belief", tr: "iman / inanç" },
      { ar: "مُؤْمِن", translit: "muʾmin", fr: "croyant", en: "believer", tr: "mümin / inanan" },
      { ar: "أَمَانَة", translit: "amāna", fr: "confiance / fidélité", en: "trust / faithfulness", tr: "emanet / güven" },
      { ar: "أَمِين", translit: "amīn", fr: "fidèle / digne de confiance", en: "trustworthy", tr: "güvenilir / emin" },
      { ar: "آمِين", translit: "āmīn", fr: "Amen / ainsi soit-il", en: "Amen", tr: "Amin" }
    ],
    profondeur: {
      fr: "La racine a-m-n est la racine de la sécurité et de la confiance. Īmān (foi) et amāna (confiance) partagent la même racine — croire c'est faire confiance. Amīn (fidèle) est l'un des surnoms du Prophète ﷺ.",
      en: "The root a-m-n is the root of safety and trust. Īmān (faith) and amāna (trust) share the same root — believing is trusting. Amīn (faithful) is one of the Prophet's ﷺ epithets.",
      tr: "a-m-n kökü, güvenlik ve güvenin köküdür. İman ve emanet aynı kökü paylaşır — inanmak güvenmektir. Emin (güvenilir), Peygamber ﷺ'in lakaplarından biridir."
    },
    sourates_cles: [2, 49, 103]
  },
  {
    id: 12, ar: "عَمِلَ", translit: "ʿamila", frequence: 359, rang: 12,
    racine: "ع-م-ل", theme: "morale",
    traductions: { fr: "il a fait / agir / œuvrer", en: "he did / to act / to work", tr: "yaptı / çalışmak / amel etmek" },
    famille: [
      { ar: "عَمَل", translit: "ʿamal", fr: "acte / action / travail", en: "deed / action / work", tr: "amel / iş / eylem" },
      { ar: "عَامِل", translit: "ʿāmil", fr: "ouvrier / celui qui agit", en: "worker / agent", tr: "işçi / fail" },
      { ar: "الصَّالِحَات", translit: "aṣ-ṣāliḥāt", fr: "les bonnes œuvres", en: "righteous deeds", tr: "salih ameller" }
    ],
    profondeur: {
      fr: "ʿAmal est le pendant concret de l'īmān (foi). Dans le Coran, les deux vont toujours ensemble : 'ceux qui croient ET font de bonnes actions'. La foi sans acte est incomplète.",
      en: "ʿAmal is the concrete counterpart of īmān (faith). In the Quran, both always go together: 'those who believe AND do righteous deeds'. Faith without action is incomplete.",
      tr: "Amel, imanın somut karşılığıdır. Kur'an'da ikisi hep birlikte gelir: 'iman eden ve salih amel işleyenler'. Amelsiz iman eksiktir."
    },
    sourates_cles: [103, 99, 18]
  },
  {
    id: 13, ar: "رَحْمَة", translit: "raḥma", frequence: 339, rang: 13,
    racine: "ر-ح-م", theme: "allah",
    traductions: { fr: "miséricorde / compassion", en: "mercy / compassion", tr: "rahmet / merhamet" },
    famille: [
      { ar: "الرَّحْمَٰن", translit: "ar-raḥmān", fr: "le Tout Miséricordieux", en: "the Most Gracious", tr: "Rahman (çok merhametli)" },
      { ar: "الرَّحِيم", translit: "ar-raḥīm", fr: "le Très Miséricordieux", en: "the Most Merciful", tr: "Rahim (daima merhametli)" },
      { ar: "رَحِم", translit: "raḥim", fr: "utérus / liens de sang", en: "womb / kinship ties", tr: "rahim / akrabalık" },
      { ar: "أَرْحَام", translit: "arḥām", fr: "matrices / liens familiaux", en: "wombs / family ties", tr: "rahimler / aile bağları" }
    ],
    profondeur: {
      fr: "La racine r-ḥ-m part du mot 'utérus' — la tendresse maternelle absolue. Ar-Raḥmān (universelle, immense) et Ar-Raḥīm (particulière, durable) sont les deux premiers attributs du Coran. La miséricorde est l'essence divine.",
      en: "The root r-ḥ-m comes from 'womb' — absolute maternal tenderness. Ar-Raḥmān (universal, immense) and Ar-Raḥīm (particular, lasting) are the first two divine attributes of the Quran.",
      tr: "r-h-m kökü 'rahim' kelimesinden gelir — mutlak annelik şefkati. Rahman (evrensel) ve Rahim (özel, kalıcı) Kur'an'ın ilk iki ilahi sıfatıdır."
    },
    sourates_cles: [1, 55]
  },
  {
    id: 14, ar: "كَفَرَ", translit: "kafara", frequence: 525, rang: 14,
    racine: "ك-ف-ر", theme: "foi",
    traductions: { fr: "il a mécru / nier / rejeter", en: "he disbelieved / to deny / to reject", tr: "inkâr etti / küfür etmek" },
    famille: [
      { ar: "كَافِر", translit: "kāfir", fr: "mécréant / celui qui rejette", en: "disbeliever", tr: "kâfir / inkarcı" },
      { ar: "كُفْر", translit: "kufr", fr: "mécréance / ingratitude", en: "disbelief / ingratitude", tr: "küfür / nankörlük" },
      { ar: "كَفَّارَة", translit: "kaffāra", fr: "expiation", en: "expiation / atonement", tr: "kefaret" }
    ],
    profondeur: {
      fr: "Kafara signifie 'couvrir, voiler'. Le kāfir est celui qui couvre la vérité, comme on couvre une graine sous la terre. Fascinant : le paysan qui sème est aussi appelé kāfir en arabe ancien — celui qui couvre la graine. La mécréance comme acte de 'voilement'.",
      en: "Kafara means 'to cover, to veil'. The kāfir is one who covers the truth, like covering a seed in the earth. Fascinating: the farmer who sows was also called kāfir in ancient Arabic — one who covers the seed.",
      tr: "Kefere 'örtmek, gizlemek' anlamına gelir. Kâfir, tohumu toprağa gömen çiftçi gibi gerçeği örten kişidir. Eski Arapçada tohum eken çiftçiye de kâfir denirdi — tohumu örten kişi."
    },
    sourates_cles: [109, 2]
  },
  {
    id: 15, ar: "نَبِيّ", translit: "nabī", frequence: 75, rang: 15,
    racine: "ن-ب-أ", theme: "prophetie",
    traductions: { fr: "prophète", en: "prophet", tr: "nebi / peygamber" },
    famille: [
      { ar: "نَبَأ", translit: "nabaʾ", fr: "nouvelle / information", en: "news / information", tr: "haber / bilgi" },
      { ar: "رَسُول", translit: "rasūl", fr: "messager / envoyé", en: "messenger / envoy", tr: "rasul / elçi" },
      { ar: "رِسَالَة", translit: "risāla", fr: "message / mission", en: "message / mission", tr: "mesaj / risale" }
    ],
    profondeur: {
      fr: "Nabī vient de nabaʾ (nouvelle, information) — le prophète est celui qui apporte la Nouvelle. Rasūl (messager) vient de r-s-l (envoyer) — celui qui est envoyé avec une mission précise. Les deux titres se complètent.",
      en: "Nabī comes from nabaʾ (news, information) — the prophet is the one who brings the News. Rasūl (messenger) comes from r-s-l (to send) — the one sent with a specific mission.",
      tr: "Nebî, haber anlamındaki 'nebeʾ'den gelir — peygamber, Haberi getiren kişidir. Rasul ise r-s-l (göndermek) kökünden gelir — belirli bir görevle gönderilen kişi."
    },
    sourates_cles: [2, 33]
  },
  {
    id: 16, ar: "كِتَاب", translit: "kitāb", frequence: 261, rang: 16,
    racine: "ك-ت-ب", theme: "prophetie",
    traductions: { fr: "livre / écrit / Livre (Coran)", en: "book / scripture / the Book", tr: "kitap / yazı / Kitab" },
    famille: [
      { ar: "كَتَبَ", translit: "kataba", fr: "il a écrit", en: "he wrote", tr: "yazdı" },
      { ar: "مَكْتُوب", translit: "maktūb", fr: "écrit / destin", en: "written / destined", tr: "yazılı / mektup / kader" },
      { ar: "مَكْتَبَة", translit: "maktaba", fr: "bibliothèque", en: "library", tr: "kütüphane" },
      { ar: "كَاتِب", translit: "kātib", fr: "écrivain / scribe", en: "writer / scribe", tr: "yazar / katip" }
    ],
    profondeur: {
      fr: "La racine k-t-b est l'exemple classique des racines arabes : kitāb (livre), kataba (écrire), maktūb (écrit/destin), maktaba (bibliothèque) — tout part de l'idée d'écriture. Maktūb en turc et arabe populaire signifie aussi 'c'est écrit', 'c'est le destin'.",
      en: "The root k-t-b is the classic example of Arabic roots: kitāb (book), kataba (to write), maktūb (written/destiny), maktaba (library) — all from the idea of writing.",
      tr: "k-t-b kökü, Arapça köklerin klasik örneğidir: kitab (kitap), ketebe (yazmak), mektub (yazılmış/kader), kütüphane — hepsi yazı fikrinden gelir."
    },
    sourates_cles: [2, 96]
  },
  {
    id: 17, ar: "آيَة", translit: "āya", frequence: 382, rang: 17,
    racine: "أ-ي-ي", theme: "prophetie",
    traductions: { fr: "verset / signe / miracle", en: "verse / sign / miracle", tr: "ayet / işaret / mucize" },
    famille: [
      { ar: "آيَات", translit: "āyāt", fr: "versets / signes (pl.)", en: "verses / signs (pl.)", tr: "ayetler / işaretler" }
    ],
    profondeur: {
      fr: "Āya signifie à la fois 'verset du Coran' ET 'signe divin dans la création'. Un coucher de soleil, une abeille, une tempête — tout est āya. Le Coran lui-même est un ensemble de signes. Ce double sens est fondamental dans la vision coranique.",
      en: "Āya means both 'Quranic verse' AND 'divine sign in creation'. A sunset, a bee, a storm — all are āya. The Quran itself is a collection of signs. This double meaning is fundamental in the Quranic worldview.",
      tr: "Āya hem 'Kur'an ayeti' hem de 'yaratılıştaki ilahi işaret' anlamına gelir. Bir gün batımı, bir arı, bir fırtına — hepsi âyettir. Bu çifte anlam, Kur'an dünya görüşünde temeldir."
    },
    sourates_cles: [2, 55]
  },
  {
    id: 18, ar: "نُور", translit: "nūr", frequence: 194, rang: 18,
    racine: "ن-و-ر", theme: "allah",
    traductions: { fr: "lumière", en: "light", tr: "nur / ışık" },
    famille: [
      { ar: "نَار", translit: "nār", fr: "feu", en: "fire", tr: "nar / ateş" },
      { ar: "أَنَار", translit: "anāra", fr: "il a illuminé", en: "he illuminated", tr: "aydınlattı" },
      { ar: "مَنَارَة", translit: "manāra", fr: "minaret / phare", en: "minaret / lighthouse", tr: "minare / deniz feneri" }
    ],
    profondeur: {
      fr: "Nūr (lumière) et nār (feu) partagent la même racine n-w-r. Allah se décrit comme la Lumière des cieux et de la terre (S.24). La lumière guide, le feu consume — deux usages d'une même énergie. Manāra (minaret/phare) vient aussi de là.",
      en: "Nūr (light) and nār (fire) share the root n-w-r. Allah describes Himself as the Light of the heavens and earth (S.24). Light guides, fire consumes — two uses of the same energy.",
      tr: "Nur (ışık) ve nar (ateş) aynı n-v-r kökünü paylaşır. Allah kendini göklerin ve yerin nuru olarak tanımlar (S.24). Işık yol gösterir, ateş yakar — aynı enerjinin iki kullanımı."
    },
    sourates_cles: [24, 57]
  },
  {
    id: 19, ar: "صَبَرَ", translit: "ṣabara", frequence: 103, rang: 19,
    racine: "ص-ب-ر", theme: "morale",
    traductions: { fr: "il a patienté / endurer", en: "he was patient / to endure", tr: "sabretti / sabretmek" },
    famille: [
      { ar: "صَبْر", translit: "ṣabr", fr: "patience / endurance", en: "patience / endurance", tr: "sabır / dayanma" },
      { ar: "صَابِر", translit: "ṣābir", fr: "patient / endurant", en: "patient / steadfast", tr: "sabırlı / dayanıklı" },
      { ar: "صَبُور", translit: "ṣabūr", fr: "très patient (attribut divin)", en: "most patient (divine)", tr: "sabûr (ilahi sıfat)" }
    ],
    profondeur: {
      fr: "Le Coran mentionne la patience (ṣabr) dans des dizaines de contextes. Allah est Lui-même As-Ṣabūr (le Très Patient). La patience coranique n'est pas passive — c'est une endurance active, un choix de tenir ferme.",
      en: "The Quran mentions patience (ṣabr) in dozens of contexts. Allah Himself is Aṣ-Ṣabūr (the Most Patient). Quranic patience is not passive — it is active endurance, a choice to stand firm.",
      tr: "Kur'an, sabr'ı düzinelerce bağlamda anar. Allah'ın kendisi Sabûr'dur (çok sabırlı). Kur'an'daki sabır pasif değildir — aktif bir dayanıklılıktır, direnme seçimidir."
    },
    sourates_cles: [103, 2, 39]
  },
  {
    id: 20, ar: "حَقّ", translit: "ḥaqq", frequence: 287, rang: 20,
    racine: "ح-ق-ق", theme: "morale",
    traductions: { fr: "vérité / droit / réel", en: "truth / right / real", tr: "hak / gerçek / doğru" },
    famille: [
      { ar: "حَقِيقَة", translit: "ḥaqīqa", fr: "réalité / vérité profonde", en: "reality / deep truth", tr: "hakikat / gerçeklik" },
      { ar: "حَقَّقَ", translit: "ḥaqqaqa", fr: "il a réalisé / vérifié", en: "he realized / verified", tr: "gerçekleştirdi / doğruladı" },
      { ar: "أَحَقّ", translit: "aḥaqq", fr: "plus digne / plus vrai", en: "more worthy / truer", tr: "daha layık / daha doğru" }
    ],
    profondeur: {
      fr: "Ḥaqq est l'un des noms d'Allah (Al-Ḥaqq — Le Vrai). Il désigne à la fois la vérité absolue et le droit/devoir. 'Le ḥaqq' c'est ce qui est réel, ce qui doit être, ce qui est juste — trois dimensions en un mot.",
      en: "Ḥaqq is one of Allah's names (Al-Ḥaqq — The Truth). It designates both absolute truth and right/duty. 'The ḥaqq' is what is real, what should be, what is just — three dimensions in one word.",
      tr: "Hak, Allah'ın isimlerinden biridir (El-Hak — Gerçek). Hem mutlak gerçeği hem de hak/görevi ifade eder. 'Hak', gerçek olan, olması gereken ve adil olandır — tek kelimede üç boyut."
    },
    sourates_cles: [103, 69, 22]
  },
  {
    id: 21, ar: "قَلْب", translit: "qalb", frequence: 168, rang: 21,
    racine: "ق-ل-ب", theme: "homme",
    traductions: { fr: "cœur / âme / conscience", en: "heart / soul / conscience", tr: "kalp / gönül / vicdan" },
    famille: [
      { ar: "قَلَبَ", translit: "qalaba", fr: "il a retourné / renversé", en: "he turned / overturned", tr: "çevirdi / devirdi" },
      { ar: "إِنْقِلَاب", translit: "inqilāb", fr: "renversement / révolution", en: "overturn / revolution", tr: "devrim / ihtilal" },
      { ar: "مُقَلِّب", translit: "muqallib", fr: "Celui qui retourne (les cœurs)", en: "Turner (of hearts)", tr: "Kalpleri çeviren" }
    ],
    profondeur: {
      fr: "Qalb (cœur) vient de la racine q-l-b qui signifie 'retourner, changer'. Le cœur est ce qui se retourne — il peut basculer vers la foi ou l'égarement. Allah est Al-Muqallib (Celui qui retourne les cœurs). Un cœur vivant est un cœur qui se questionne.",
      en: "Qalb (heart) comes from the root q-l-b meaning 'to turn, to change'. The heart is what turns — it can swing toward faith or astray. Allah is Al-Muqallib (Turner of hearts).",
      tr: "Kalp, 'çevirmek, değiştirmek' anlamındaki q-l-b kökünden gelir. Kalp, dönen şeydir — imana ya da sapkınlığa yönelebilir. Allah, Mukallibu'l-kulub'dur (Kalpleri çeviren)."
    },
    sourates_cles: [2, 26, 50]
  },
  {
    id: 22, ar: "نَفْس", translit: "nafs", frequence: 298, rang: 22,
    racine: "ن-ف-س", theme: "homme",
    traductions: { fr: "âme / soi / personne", en: "soul / self / person", tr: "nefis / ruh / kişi" },
    famille: [
      { ar: "نَفَسَ", translit: "nafasa", fr: "respirer / souffler", en: "to breathe / to blow", tr: "nefes almak / üflemek" },
      { ar: "نَفِيس", translit: "nafīs", fr: "précieux / de valeur", en: "precious / valuable", tr: "nefis / değerli" },
      { ar: "تَنَفُّس", translit: "tanaffus", fr: "respiration", en: "breathing", tr: "nefes alma" }
    ],
    profondeur: {
      fr: "Nafs désigne à la fois l'âme, le soi, et la personne individuelle. 'Chaque nafs goûtera la mort.' Le Coran distingue plusieurs états du nafs : l'âme impulsive (ammāra), l'âme qui se blâme (lawwāma), l'âme apaisée (muṭmaʾinna — S.89).",
      en: "Nafs designates the soul, the self, and the individual person. 'Every nafs will taste death.' The Quran distinguishes several states: the impulsive soul (ammāra), the self-blaming soul (lawwāma), the tranquil soul (muṭmaʾinna — S.89).",
      tr: "Nefis, ruhu, benliği ve bireysel kişiyi ifade eder. 'Her nefis ölümü tadacak.' Kur'an birçok nefis halini ayırt eder: emmare (dürtüsel), levvame (kendini kınayan), mutmainne (huzurlu — S.89)."
    },
    sourates_cles: [89, 12, 91]
  },
  {
    id: 23, ar: "أَرْض", translit: "arḍ", frequence: 461, rang: 23,
    racine: "أ-ر-ض", theme: "creation",
    traductions: { fr: "terre / sol / planète", en: "earth / ground / land", tr: "yer / toprak / dünya" },
    famille: [
      { ar: "أَرَضَة", translit: "araḍa", fr: "termite (dévoreuse de sol)", en: "termite", tr: "termit" }
    ],
    profondeur: {
      fr: "Arḍ et samāʾ (ciel) forment la paire cosmique fondamentale du Coran — ils apparaissent souvent ensemble. 'Ce qui est dans les cieux et dans la terre' est une formule coranique qui désigne l'univers entier.",
      en: "Arḍ and samāʾ (sky) form the fundamental cosmic pair of the Quran — they often appear together. 'What is in the heavens and in the earth' is a Quranic formula designating the entire universe.",
      tr: "Arz ve semâ (gök), Kur'an'ın temel kozmik çiftini oluşturur — çoğunlukla birlikte geçerler. 'Göklerde ve yerde ne varsa' tüm evreni ifade eden bir Kur'an formülüdür."
    },
    sourates_cles: [1, 2, 55]
  },
  {
    id: 24, ar: "سَمَاء", translit: "samāʾ", frequence: 310, rang: 24,
    racine: "س-م-و", theme: "creation",
    traductions: { fr: "ciel / firmament", en: "sky / heaven / firmament", tr: "gök / sema / gökyüzü" },
    famille: [
      { ar: "اسْم", translit: "ism", fr: "nom", en: "name", tr: "isim / ad" },
      { ar: "سَامِي", translit: "sāmī", fr: "élevé / sublime", en: "elevated / sublime", tr: "yüksek / sami" },
      { ar: "سُمُوّ", translit: "sumuww", fr: "hauteur / élévation", en: "height / loftiness", tr: "yücelik / yükseklik" }
    ],
    profondeur: {
      fr: "La racine s-m-w exprime l'élévation. Samāʾ (ciel) et ism (nom) partagent cette racine — nommer quelque chose c'est l'élever au rang de l'existence. Fascinant lien entre le ciel et le langage.",
      en: "The root s-m-w expresses elevation. Samāʾ (sky) and ism (name) share this root — naming something elevates it to the rank of existence. A fascinating link between sky and language.",
      tr: "s-m-v kökü yükselişi ifade eder. Semâ (gök) ve isim aynı kökü paylaşır — bir şeyi adlandırmak onu varlık mertebesine yükseltmektir. Gök ve dil arasındaki büyüleyici bağlantı."
    },
    sourates_cles: [2, 55, 67]
  },
  {
    id: 25, ar: "يَوْم", translit: "yawm", frequence: 405, rang: 25,
    racine: "ي-و-م", theme: "jugement",
    traductions: { fr: "jour / Jour (du Jugement)", en: "day / Day (of Judgement)", tr: "gün / Gün (Kıyamet)" },
    famille: [
      { ar: "يَوْمِيّ", translit: "yawmī", fr: "quotidien / journalier", en: "daily", tr: "günlük" }
    ],
    profondeur: {
      fr: "Yawm apparaît 405 fois. La formule Yawm al-qiyāma (Jour de la Résurrection) est l'une des plus fréquentes du Coran. Le Coran oriente constamment vers ce Jour — comme un GPS qui ramène toujours au même point d'arrivée.",
      en: "Yawm appears 405 times. The formula Yawm al-qiyāma (Day of Resurrection) is one of the most frequent in the Quran. The Quran constantly orients toward this Day — like a GPS always returning to the same destination.",
      tr: "Yevm 405 kez geçer. Yevmu'l-kıyame (Kıyamet Günü) formülü Kur'an'da en sık geçen ifadelerden biridir. Kur'an sürekli bu Güne yönlendirir — her zaman aynı varış noktasına dönen bir GPS gibi."
    },
    sourates_cles: [1, 99, 101]
  },
  {
    id: 26, ar: "جَنَّة", translit: "janna", frequence: 147, rang: 26,
    racine: "ج-ن-ن", theme: "jugement",
    traductions: { fr: "paradis / jardin", en: "paradise / garden", tr: "cennet / bahçe" },
    famille: [
      { ar: "جِنّ", translit: "jinn", fr: "djinns", en: "jinn", tr: "cin" },
      { ar: "جَنِين", translit: "janīn", fr: "fœtus", en: "foetus", tr: "cenin" },
      { ar: "مَجْنُون", translit: "majnūn", fr: "fou", en: "mad / crazy", tr: "mecnun / deli" },
      { ar: "جُنُون", translit: "junūn", fr: "folie", en: "madness", tr: "delilik" }
    ],
    profondeur: {
      fr: "La racine j-n-n = le caché, l'invisible. Le paradis (janna) est un jardin caché derrière des murs. Le djinn (jinn) est un être invisible. Le fœtus (janīn) est caché dans le ventre. La folie (junūn) = quelque chose d'invisible qui envahit. Une racine, un concept : le voilé.",
      en: "The root j-n-n = the hidden, the invisible. Paradise (janna) is a garden hidden behind walls. The jinn is an invisible being. The foetus (janīn) is hidden in the womb. Madness (junūn) = something invisible that invades. One root, one concept: the veiled.",
      tr: "j-n-n kökü = gizli, görünmez. Cennet (janna), duvarların arkasında gizli bir bahçedir. Cin görünmez bir varlıktır. Cenin (janīn) rahimde gizlidir. Delilik (junūn) = içeri giren görünmez bir şey. Bir kök, bir kavram: örtülü olan."
    },
    sourates_cles: [55, 56, 114]
  },
  {
    id: 27, ar: "نَار", translit: "nār", frequence: 145, rang: 27,
    racine: "ن-و-ر", theme: "jugement",
    traductions: { fr: "feu / enfer", en: "fire / hellfire", tr: "nar / ateş / cehennem" },
    famille: [
      { ar: "نُور", translit: "nūr", fr: "lumière", en: "light", tr: "nur / ışık" },
      { ar: "مَنَارَة", translit: "manāra", fr: "minaret / phare", en: "minaret / lighthouse", tr: "minare" }
    ],
    profondeur: {
      fr: "Nār (feu) et nūr (lumière) partagent la racine n-w-r. Le feu consume, la lumière guide — deux usages opposés d'une même énergie. Dans le Coran, la nār est à la fois un avertissement et une réalité eschatologique.",
      en: "Nār (fire) and nūr (light) share the root n-w-r. Fire consumes, light guides — two opposing uses of the same energy. In the Quran, nār is both a warning and an eschatological reality.",
      tr: "Nar (ateş) ve nur (ışık) n-v-r kökünü paylaşır. Ateş yakar, ışık yol gösterir — aynı enerjinin iki zıt kullanımı. Kur'an'da nâr hem bir uyarı hem de ahiret gerçeğidir."
    },
    sourates_cles: [55, 56, 111]
  },
  {
    id: 28, ar: "صَلَاة", translit: "ṣalāt", frequence: 99, rang: 28,
    racine: "ص-ل-و", theme: "priere",
    traductions: { fr: "prière / salut divin", en: "prayer / divine blessing", tr: "namaz / salât / dua" },
    famille: [
      { ar: "صَلَّى", translit: "ṣallā", fr: "il a prié / il a béni", en: "he prayed / he blessed", tr: "namaz kıldı / salât etti" },
      { ar: "مُصَلِّي", translit: "muṣallī", fr: "celui qui prie", en: "one who prays", tr: "namaz kılan" },
      { ar: "مُصَلَّى", translit: "muṣallā", fr: "lieu de prière", en: "place of prayer", tr: "musalla / namaz yeri" }
    ],
    profondeur: {
      fr: "Ṣalāt signifie à la fois la prière du croyant ET la bénédiction d'Allah sur le Prophète ('Allāhumma ṣalli ʿalā Muḥammad'). Le même mot connecte l'humain vers le haut et le divin vers le bas.",
      en: "Ṣalāt means both the believer's prayer AND Allah's blessing on the Prophet ('Allāhumma ṣalli ʿalā Muḥammad'). The same word connects the human upward and the divine downward.",
      tr: "Salât hem mü'minin namazını hem de Allah'ın Peygamber'e salatını ifade eder ('Allahümme salli alâ Muhammed'). Aynı kelime insanı yukarıya ve ilahiyatı aşağıya bağlar."
    },
    sourates_cles: [1, 108, 107]
  },
  {
    id: 29, ar: "حَمْد", translit: "ḥamd", frequence: 68, rang: 29,
    racine: "ح-م-د", theme: "priere",
    traductions: { fr: "louange / gratitude", en: "praise / gratitude", tr: "hamd / övgü / şükür" },
    famille: [
      { ar: "حَمِدَ", translit: "ḥamida", fr: "il a loué / remercié", en: "he praised / thanked", tr: "övdü / şükretti" },
      { ar: "أَحْمَد", translit: "aḥmad", fr: "le plus loué (prénom du Prophète)", en: "the most praised (Prophet's name)", tr: "en çok övülen (Peygamber'in adı)" },
      { ar: "مُحَمَّد", translit: "muḥammad", fr: "celui qui est loué", en: "the praised one", tr: "övülmüş olan" }
    ],
    profondeur: {
      fr: "Al-ḥamd ouvre le Coran (Al-Fatiha) et ferme les invocations du Paradis. Les noms Muḥammad (le très loué) et Aḥmad (le plus loué) viennent de cette racine — le Prophète ﷺ est lui-même 'la louange incarnée'.",
      en: "Al-ḥamd opens the Quran (Al-Fatiha) and closes the supplications of Paradise. The names Muḥammad (the highly praised) and Aḥmad (the most praised) come from this root.",
      tr: "El-hamd, Kur'an'ı açar (Fatiha) ve cennet dualarını kapatır. Muhammed (çok övülmüş) ve Ahmed (en çok övülmüş) isimleri bu kökten gelir — Peygamber ﷺ'in kendisi 'cisimleşmiş övgü'dür."
    },
    sourates_cles: [1, 108]
  },
  {
    id: 30, ar: "عِلْم", translit: "ʿilm", frequence: 105, rang: 30,
    racine: "ع-ل-م", theme: "prophetie",
    traductions: { fr: "savoir / connaissance / science", en: "knowledge / science", tr: "ilim / bilgi / bilim" },
    famille: [
      { ar: "عَلِمَ", translit: "ʿalima", fr: "il a su", en: "he knew", tr: "bildi" },
      { ar: "عَالِم", translit: "ʿālim", fr: "savant / celui qui sait", en: "scholar / knower", tr: "alim / bilen" },
      { ar: "عَالَم", translit: "ʿālam", fr: "monde / univers", en: "world / universe", tr: "âlem / dünya" },
      { ar: "مُعَلِّم", translit: "muʿallim", fr: "enseignant", en: "teacher", tr: "öğretmen / muallim" },
      { ar: "عَلَامَة", translit: "ʿalāma", fr: "signe / marque", en: "sign / mark", tr: "işaret / alâmet" }
    ],
    profondeur: {
      fr: "La racine ʿ-l-m est fondamentale : ʿilm (savoir), ʿālam (monde), ʿalāma (signe) — même racine. Connaître le monde c'est lire ses signes. Le premier mot révélé (Iqraʾ — Lis !) place la connaissance au cœur de l'islam.",
      en: "The root ʿ-l-m is fundamental: ʿilm (knowledge), ʿālam (world), ʿalāma (sign) — same root. Knowing the world is reading its signs. The first revealed word (Iqraʾ — Read!) places knowledge at the heart of Islam.",
      tr: "ʿ-l-m kökü temeldir: ilim (bilgi), âlem (dünya), alâmet (işaret) — aynı kök. Dünyayı bilmek, işaretlerini okumaktır. İlk vahyedilen kelime (İkra — Oku!), bilgiyi İslam'ın merkezine yerleştirir."
    },
    sourates_cles: [96, 2, 55]
  }
];

// Résumé de couverture par palier
const COUVERTURE = [
  { top: 10, pct: 8, label: { fr: "Top 10 mots", en: "Top 10 words", tr: "İlk 10 kelime" } },
  { top: 50, pct: 20, label: { fr: "Top 50 mots", en: "Top 50 words", tr: "İlk 50 kelime" } },
  { top: 100, pct: 35, label: { fr: "Top 100 mots", en: "Top 100 words", tr: "İlk 100 kelime" } },
  { top: 200, pct: 55, label: { fr: "Top 200 mots", en: "Top 200 words", tr: "İlk 200 kelime" } },
  { top: 300, pct: 70, label: { fr: "Top 300 mots", en: "Top 300 words", tr: "İlk 300 kelime" } }
];

const THEMES = [
  "allah", "foi", "prophetie", "creation", "homme", "morale", "jugement", "priere", "communaute", "temps", "grammaire"
];

export { VOCAB, COUVERTURE, THEMES };
