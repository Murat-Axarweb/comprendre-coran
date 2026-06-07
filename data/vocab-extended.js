// Mots 31-100 — extension du vocabulaire coranique
const VOCAB_EXTENDED = [
  {
    id:31,ar:"خَلَقَ",translit:"khalaqa",frequence:261,rang:31,racine:"خ-ل-ق",theme:"creation",
    traductions:{fr:"il a créé / créer",en:"he created / to create",tr:"yarattı / yaratmak"},
    famille:[
      {ar:"خَلْق",translit:"khalq",fr:"création / créature",en:"creation / creature",tr:"yaratılış / yaratık"},
      {ar:"خَالِق",translit:"khāliq",fr:"Créateur",en:"Creator",tr:"Yaratıcı"},
      {ar:"مَخْلُوق",translit:"makhlūq",fr:"créature",en:"creature",tr:"mahluk"},
      {ar:"أَخْلَاق",translit:"akhlāq",fr:"morale / caractère",en:"morality / character",tr:"ahlak"}
    ],
    profondeur:{
      fr:"Fascinant : la racine kh-l-q donne à la fois 'créer' et 'morale' (akhlāq). La création et le caractère moral partagent la même racine — comme si la création était un acte moral. Le Prophète ﷺ a dit : 'Je suis venu pour parfaire la noblesse du caractère.'",
      en:"The root kh-l-q gives both 'to create' and 'morality' (akhlāq). Creation and moral character share the same root — as if creation were a moral act.",
      tr:"h-l-q kökü hem 'yaratmak' hem de 'ahlak' anlamına gelir. Yaratılış ve ahlaki karakter aynı kökü paylaşır."
    },
    sourates_cles:[2,23,96]
  },
  {
    id:32,ar:"تَوْبَة",translit:"tawba",frequence:87,rang:32,racine:"ت-و-ب",theme:"morale",
    traductions:{fr:"repentir / retour vers Allah",en:"repentance / return to Allah",tr:"tövbe / Allah'a dönüş"},
    famille:[
      {ar:"تَابَ",translit:"tāba",fr:"il s'est repenti",en:"he repented",tr:"tövbe etti"},
      {ar:"تَوَّاب",translit:"tawwāb",fr:"Celui qui accepte le repentir",en:"Acceptor of repentance",tr:"Tövbeleri kabul eden"},
      {ar:"مَتَاب",translit:"matāb",fr:"lieu de retour",en:"place of return",tr:"dönüş yeri"}
    ],
    profondeur:{
      fr:"Tawba signifie littéralement 'retour' — se retourner vers Allah. Allah lui-même est At-Tawwāb (Celui qui revient encore et encore vers le repentant). Le repentir est un mouvement double : l'humain se tourne, Allah accueille.",
      en:"Tawba literally means 'return' — turning back toward Allah. Allah Himself is At-Tawwāb (the One who turns again and again toward the repentant).",
      tr:"Tövbe kelimenin tam anlamıyla 'dönüş' demektir — Allah'a geri dönmek. Allah'ın kendisi Tevvab'dır (tövbe edenlere tekrar tekrar dönen)."
    },
    sourates_cles:[9,110,39]
  },
  {
    id:33,ar:"هِدَايَة",translit:"hidāya",frequence:316,rang:33,racine:"ه-د-ي",theme:"foi",
    traductions:{fr:"guidance / direction / chemin droit",en:"guidance / right direction",tr:"hidayet / doğru yol"},
    famille:[
      {ar:"هَدَى",translit:"hadā",fr:"il a guidé",en:"he guided",tr:"hidayet verdi"},
      {ar:"هَادٍ",translit:"hādī",fr:"guide",en:"guide",tr:"rehber"},
      {ar:"اهْتَدَى",translit:"ihtadā",fr:"il s'est laissé guider",en:"he was guided",tr:"hidayete erdi"},
      {ar:"مُهْتَدٍ",translit:"muhtadī",fr:"celui qui suit la bonne voie",en:"one on the right path",tr:"hidayet üzere olan"}
    ],
    profondeur:{
      fr:"Hidāya est le mot central d'Al-Fatiha — 'guide-nous sur le droit chemin'. La guidance n'est pas imposée : ihtadā (se laisser guider) est une forme réflexive — l'humain s'ouvre à la guidance. Allah guide, mais l'humain doit se mettre en position de recevoir.",
      en:"Hidāya is the central word of Al-Fatiha — 'guide us on the right path'. Guidance is not imposed: ihtadā is reflexive — the human opens himself to guidance.",
      tr:"Hidayet, Fatiha'nın merkezi kelimesidir. Hidayet dayatılmaz: ihtedā dönüşlüdür — insan kendini hidayete açar."
    },
    sourates_cles:[1,2,39]
  },
  {
    id:34,ar:"غَفَرَ",translit:"ghafara",frequence:234,rang:34,racine:"غ-ف-ر",theme:"allah",
    traductions:{fr:"pardonner / couvrir la faute",en:"to forgive / to cover the fault",tr:"bağışlamak / affetmek"},
    famille:[
      {ar:"غَفُور",translit:"ghafūr",fr:"Très Pardonneur",en:"Most Forgiving",tr:"Gafûr"},
      {ar:"غَفَّار",translit:"ghaffār",fr:"Grand Pardonneur",en:"Great Forgiver",tr:"Gaffâr"},
      {ar:"مَغْفِرَة",translit:"maghfira",fr:"pardon / absolution",en:"forgiveness",tr:"mağfiret"},
      {ar:"اسْتَغْفَرَ",translit:"istaghfara",fr:"demander pardon",en:"to seek forgiveness",tr:"istiğfar etmek"}
    ],
    profondeur:{
      fr:"Ghafara vient d'une racine qui signifie 'couvrir, voiler'. Pardonner c'est couvrir la faute — ne plus la voir, l'effacer. Al-Ghafūr et Al-Ghaffār : le premier désigne la constance du pardon, le second son intensité.",
      en:"Ghafara comes from a root meaning 'to cover, to veil'. To forgive is to cover the fault — to no longer see it, to erase it.",
      tr:"Gafere, 'örtmek' anlamındaki bir kökten gelir. Affetmek, günahı örtmek demektir. Gafûr ve Gaffâr: biri bağışlamanın sürekliliğini, diğeri yoğunluğunu ifade eder."
    },
    sourates_cles:[39,40,71]
  },
  {
    id:35,ar:"عَذَاب",translit:"ʿadhāb",frequence:373,rang:35,racine:"ع-ذ-ب",theme:"jugement",
    traductions:{fr:"châtiment / supplice",en:"punishment / torment",tr:"azap / ceza"},
    famille:[
      {ar:"عَذَّبَ",translit:"ʿadhdhaba",fr:"il a puni",en:"he punished",tr:"azap verdi"},
      {ar:"عَذْب",translit:"ʿadhb",fr:"doux / frais (eau)",en:"sweet / fresh water",tr:"tatlı / taze"}
    ],
    profondeur:{
      fr:"Fascinant paradoxe : ʿadhāb (châtiment) et ʿadhb (eau douce et fraîche) partagent la même racine. Certains linguistes y voient l'idée d'une purification — le châtiment comme purification du mal.",
      en:"Fascinating paradox: ʿadhāb (punishment) and ʿadhb (sweet fresh water) share the same root. Some linguists see the idea of purification here.",
      tr:"Büyüleyici paradoks: azap ve tatlı su aynı kökü paylaşır. Bazı dilbilimciler burada arınma fikrini görür."
    },
    sourates_cles:[2,9,56]
  },
  {
    id:36,ar:"رَسُول",translit:"rasūl",frequence:332,rang:36,racine:"ر-س-ل",theme:"prophetie",
    traductions:{fr:"messager / envoyé",en:"messenger / envoy",tr:"rasul / elçi"},
    famille:[
      {ar:"أَرْسَلَ",translit:"arsala",fr:"il a envoyé",en:"he sent",tr:"gönderdi"},
      {ar:"رِسَالَة",translit:"risāla",fr:"message / mission",en:"message / mission",tr:"risale / mesaj"},
      {ar:"مُرْسَل",translit:"mursal",fr:"envoyé",en:"sent",tr:"gönderilmiş"}
    ],
    profondeur:{
      fr:"Rasūl désigne celui envoyé avec une mission et un message précis. La différence avec nabī : tout rasūl est nabī mais pas l'inverse. Le rasūl a reçu une révélation à transmettre et une loi à appliquer.",
      en:"Rasūl designates one sent with a specific mission and message. Every rasūl is a nabī but not vice versa.",
      tr:"Rasul, belirli bir görev ve mesajla gönderilen kişiyi ifade eder. Her rasul nebîdir ama her nebî rasul değildir."
    },
    sourates_cles:[2,33,48]
  },
  {
    id:37,ar:"دِين",translit:"dīn",frequence:94,rang:37,racine:"د-ي-ن",theme:"foi",
    traductions:{fr:"religion / jugement / dette",en:"religion / judgement / debt",tr:"din / hüküm / borç"},
    famille:[
      {ar:"دَانَ",translit:"dāna",fr:"il a jugé / pratiqué une religion",en:"he judged / practiced religion",tr:"din edindi"},
      {ar:"دَيْن",translit:"dayn",fr:"dette",en:"debt",tr:"borç"},
      {ar:"دَيَّان",translit:"dayyān",fr:"Grand Juge",en:"Great Judge",tr:"Deyyan"}
    ],
    profondeur:{
      fr:"Dīn est l'un des mots les plus polysémiques du Coran : religion, jugement, rétribution, dette. Yawm ad-dīn = le Jour du Jugement ET de la Rétribution.",
      en:"Dīn is one of the most polysemic words in the Quran: religion, judgement, recompense, debt.",
      tr:"Din, Kur'an'ın en çok anlamlı kelimelerinden biridir: din, hüküm, karşılık, borç."
    },
    sourates_cles:[1,109,3]
  },
  {
    id:38,ar:"سَبِيل",translit:"sabīl",frequence:176,rang:38,racine:"س-ب-ل",theme:"morale",
    traductions:{fr:"chemin / voie / cause",en:"path / way / cause",tr:"yol / sebil / dava"},
    famille:[
      {ar:"سَبَّلَ",translit:"sabbala",fr:"il a ouvert un chemin",en:"he opened a path",tr:"yol açtı"},
      {ar:"سَبِيل اللَّه",translit:"sabīl allāh",fr:"la voie d'Allah",en:"the way of Allah",tr:"Allah yolu"}
    ],
    profondeur:{
      fr:"Sabīl diffère de ṣirāṭ (route large d'Al-Fatiha). Sabīl est plus étroit, plus personnel. 'Fī sabīl allāh' (dans la voie d'Allah) est la formule pour tout acte fait pour Allah.",
      en:"Sabīl differs from ṣirāṭ. 'Fī sabīl allāh' (in Allah's way) is the formula for any act done for Allah.",
      tr:"Sebil, sırat'tan farklıdır. 'Fi sebilillah' (Allah yolunda) her amelin Allah için yapıldığını ifade eder."
    },
    sourates_cles:[2,4,9]
  },
  {
    id:39,ar:"حَيَاة",translit:"ḥayāt",frequence:189,rang:39,racine:"ح-ي-ي",theme:"creation",
    traductions:{fr:"vie / existence",en:"life / existence",tr:"hayat / yaşam"},
    famille:[
      {ar:"الحَيّ",translit:"al-ḥayy",fr:"Le Vivant (Allah)",en:"The Ever-Living",tr:"El-Hayy"},
      {ar:"أَحْيَا",translit:"aḥyā",fr:"il a vivifié",en:"he gave life",tr:"hayat verdi"},
      {ar:"حَيَاء",translit:"ḥayāʾ",fr:"pudeur / honte",en:"modesty / shyness",tr:"haya / utanma"}
    ],
    profondeur:{
      fr:"Al-Ḥayy (Le Vivant) est l'un des plus beaux noms d'Allah. Fascinant : la vie (ḥayāt) et la pudeur (ḥayāʾ) partagent la même racine — être vivant c'est avoir de la sensibilité morale.",
      en:"Al-Ḥayy (The Ever-Living) is one of Allah's most beautiful names. Life (ḥayāt) and modesty (ḥayāʾ) share the same root.",
      tr:"El-Hayy Allah'ın en güzel isimlerinden biridir. Hayat ve haya aynı kökü paylaşır."
    },
    sourates_cles:[2,3,67]
  },
  {
    id:40,ar:"مَوْت",translit:"mawt",frequence:165,rang:40,racine:"م-و-ت",theme:"jugement",
    traductions:{fr:"mort / décès",en:"death",tr:"ölüm / vefat"},
    famille:[
      {ar:"مَاتَ",translit:"māta",fr:"il est mort",en:"he died",tr:"öldü"},
      {ar:"مَيِّت",translit:"mayyit",fr:"mort / défunt",en:"dead / deceased",tr:"ölü / merhum"},
      {ar:"مُمِيت",translit:"mumīt",fr:"Celui qui fait mourir",en:"The Giver of Death",tr:"Mümît"}
    ],
    profondeur:{
      fr:"Mawt et ḥayāt forment la grande paire coranique. Allah est Al-Muḥyī (qui donne la vie) ET Al-Mumīt (qui fait mourir). 'Chaque nafs goûtera la mort' — la mort n'est pas une fin mais une transition.",
      en:"Mawt and ḥayāt form the great Quranic pair. 'Every soul will taste death' — death is not an end but a transition.",
      tr:"Mevt ve hayat Kur'an'ın büyük çiftini oluşturur. 'Her nefis ölümü tadacak' — ölüm bir son değil, bir geçiştir."
    },
    sourates_cles:[2,3,67]
  },
  {
    id:41,ar:"قِيَامَة",translit:"qiyāma",frequence:70,rang:41,racine:"ق-و-م",theme:"jugement",
    traductions:{fr:"résurrection / Jour dernier",en:"resurrection / Last Day",tr:"kıyamet / diriliş"},
    famille:[
      {ar:"قَامَ",translit:"qāma",fr:"il s'est levé",en:"he stood / rose",tr:"kalktı"},
      {ar:"قَوْم",translit:"qawm",fr:"peuple",en:"people",tr:"kavim / halk"},
      {ar:"مَقَام",translit:"maqām",fr:"station / rang",en:"station / rank",tr:"makam"},
      {ar:"مُسْتَقِيم",translit:"mustaqīm",fr:"droit / direct",en:"straight",tr:"doğru / düzgün"}
    ],
    profondeur:{
      fr:"Qiyāma vient de qāma (se lever). La Résurrection c'est le grand 'lever' — toute l'humanité se dresse pour le Jugement. La même racine donne mustaqīm (droit, d'Al-Fatiha) et maqām (station spirituelle).",
      en:"Qiyāma comes from qāma (to stand/rise). The Resurrection is the great 'rising' — all humanity stands for Judgement.",
      tr:"Kıyamet, qāma'dan (kalkmak) gelir. Diriliş büyük 'kalkış'tır — tüm insanlık Hesap için ayağa kalkar."
    },
    sourates_cles:[75,56,1]
  },
  {
    id:42,ar:"سُبْحَان",translit:"subḥān",frequence:41,rang:42,racine:"س-ب-ح",theme:"priere",
    traductions:{fr:"gloire à / loin de toute imperfection",en:"glory be to / far from imperfection",tr:"sübhan / yüce"},
    famille:[
      {ar:"سَبَّحَ",translit:"sabbaḥa",fr:"il a glorifié",en:"he glorified",tr:"tesbih etti"},
      {ar:"تَسْبِيح",translit:"tasbīḥ",fr:"glorification",en:"glorification",tr:"tesbih"},
      {ar:"سَبَحَ",translit:"sabaḥa",fr:"il a nagé / flotté",en:"he swam / floated",tr:"yüzdü"}
    ],
    profondeur:{
      fr:"Subḥān et sabaḥa (nager) partagent la racine s-b-ḥ. Glorifier Allah c'est comme nager — un mouvement fluide et continu. Toute la création 'nage' dans la glorification divine.",
      en:"Subḥān and sabaḥa (to swim) share the root s-b-ḥ. Glorifying Allah is like swimming — a fluid and continuous movement.",
      tr:"Sübhan ve sebeha (yüzmek) s-b-h kökünü paylaşır. Allah'ı yüceltmek yüzmek gibidir — akıcı ve sürekli bir hareket."
    },
    sourates_cles:[17,57,59]
  },
  {
    id:43,ar:"شُكْر",translit:"shukr",frequence:75,rang:43,racine:"ش-ك-ر",theme:"morale",
    traductions:{fr:"gratitude / remerciement",en:"gratitude / thankfulness",tr:"şükür / minnet"},
    famille:[
      {ar:"شَكَرَ",translit:"shakara",fr:"il a remercié",en:"he was grateful",tr:"şükretti"},
      {ar:"شَاكِر",translit:"shākir",fr:"reconnaissant",en:"grateful",tr:"şükreden"},
      {ar:"شَكُور",translit:"shakūr",fr:"Très Reconnaissant (Allah)",en:"Most Appreciative",tr:"Şekûr"}
    ],
    profondeur:{
      fr:"Shukr (gratitude) est l'opposé de kufr (ingratitude). La racine k-f-r signifie à la fois 'nier/rejeter' ET 'être ingrat'. La mécréance est fondamentalement une ingratitude envers le Créateur.",
      en:"Shukr (gratitude) is the opposite of kufr (ingratitude). Disbelief is fundamentally ingratitude toward the Creator.",
      tr:"Şükür, küfrün karşıtıdır. k-f-r kökü hem 'inkâr etmek' hem de 'nankör olmak' anlamına gelir."
    },
    sourates_cles:[14,31,34]
  },
  {
    id:44,ar:"تَقْوَى",translit:"taqwā",frequence:158,rang:44,racine:"و-ق-ي",theme:"morale",
    traductions:{fr:"piété / crainte révérencielle d'Allah",en:"piety / God-consciousness",tr:"takva / Allah korkusu"},
    famille:[
      {ar:"وَقَى",translit:"waqā",fr:"protéger / préserver",en:"to protect / preserve",tr:"korumak"},
      {ar:"اتَّقَى",translit:"ittaqā",fr:"il a craint Allah / été pieux",en:"he feared Allah",tr:"takva sahibi oldu"},
      {ar:"مُتَّقِي",translit:"muttaqī",fr:"pieux",en:"pious / God-fearing",tr:"muttaki"}
    ],
    profondeur:{
      fr:"Taqwā vient de waqā (protéger). Être pieux c'est se protéger — mettre un bouclier entre soi et ce qui pourrait nuire spirituellement. Ce n'est pas une crainte paralysante mais une conscience vigilante.",
      en:"Taqwā comes from waqā (to protect). Being pious is protecting oneself — putting a shield between oneself and what could harm spiritually.",
      tr:"Takva, vaka'dan (korumak) gelir. Takvalı olmak kendini korumaktır — manevi zarar verebilecek şeyden korunmak."
    },
    sourates_cles:[2,49,91]
  },
  {
    id:45,ar:"ذِكْر",translit:"dhikr",frequence:256,rang:45,racine:"ذ-ك-ر",theme:"priere",
    traductions:{fr:"souvenir / rappel / mention d'Allah",en:"remembrance / mention of Allah",tr:"zikir / hatırlatma"},
    famille:[
      {ar:"ذَكَرَ",translit:"dhakara",fr:"il a mentionné / rappelé",en:"he mentioned / remembered",tr:"zikretti / andı"},
      {ar:"تَذَكَّرَ",translit:"tadhakkara",fr:"il s'est souvenu",en:"he remembered",tr:"hatırladı"},
      {ar:"تَذْكِرَة",translit:"tadhkira",fr:"rappel / avertissement",en:"reminder / warning",tr:"hatırlatma / uyarı"}
    ],
    profondeur:{
      fr:"Dhikr (souvenir/rappel) est l'antidote au shaytān — qui s'enfuit au dhikr. 'Par le souvenir d'Allah, les cœurs trouvent leur repos' (S.13:28). Le dhikr n'est pas une répétition mécanique mais une présence consciente.",
      en:"Dhikr is the antidote to shaytān. 'Verily in the remembrance of Allah do hearts find rest' (S.13:28).",
      tr:"Zikir, şeytanın antidotudur. 'Haberiniz olsun, kalpler ancak Allah'ı zikretmekle huzur bulur' (S.13:28)."
    },
    sourates_cles:[13,33,87]
  },
  {
    id:46,ar:"دُعَاء",translit:"duʿāʾ",frequence:214,rang:46,racine:"د-ع-و",theme:"priere",
    traductions:{fr:"invocation / prière personnelle",en:"supplication / personal prayer",tr:"dua / yalvarma"},
    famille:[
      {ar:"دَعَا",translit:"daʿā",fr:"il a appelé / invoqué",en:"he called / invoked",tr:"dua etti / çağırdı"},
      {ar:"دَعْوَة",translit:"daʿwa",fr:"appel / prédication",en:"call / preaching",tr:"davet / çağrı"},
      {ar:"دَاعٍ",translit:"dāʿī",fr:"celui qui appelle",en:"one who calls",tr:"davet eden"}
    ],
    profondeur:{
      fr:"Duʿāʾ est la prière personnelle et spontanée — différente de ṣalāt (prière rituelle). 'Appelez-Moi, Je vous répondrai' (S.40:60) — Allah garantit une réponse.",
      en:"Duʿāʾ is personal, spontaneous prayer — different from ṣalāt. 'Call upon Me, I will respond to you' (S.40:60) — Allah guarantees a response.",
      tr:"Dua, kişisel ve spontane duadır — salât'tan farklı. 'Bana dua edin, size cevap vereyim' (S.40:60)."
    },
    sourates_cles:[2,40,7]
  },
  {
    id:47,ar:"حِكْمَة",translit:"ḥikma",frequence:210,rang:47,racine:"ح-ك-م",theme:"prophetie",
    traductions:{fr:"sagesse",en:"wisdom",tr:"hikmet / bilgelik"},
    famille:[
      {ar:"حَكَمَ",translit:"ḥakama",fr:"il a jugé / statué",en:"he judged / ruled",tr:"hükmetti"},
      {ar:"حَكِيم",translit:"ḥakīm",fr:"sage / Le Sage (Allah)",en:"wise / The Wise",tr:"Hakîm"},
      {ar:"حُكْم",translit:"ḥukm",fr:"jugement / décision",en:"judgement / decision",tr:"hüküm"},
      {ar:"مُحْكَم",translit:"muḥkam",fr:"solide / verset clair",en:"firm / clear verse",tr:"muhkem"}
    ],
    profondeur:{
      fr:"La racine ḥ-k-m relie sagesse, jugement et précision. Al-Ḥakīm (Le Sage) est un attribut divin — agissant selon la parfaite mesure des choses.",
      en:"The root ḥ-k-m links wisdom, judgement and precision. Al-Ḥakīm (The Wise) acts according to the perfect measure of things.",
      tr:"H-k-m kökü bilgelik, hüküm ve kesinliği birbirine bağlar. El-Hakîm, her şeyin mükemmel ölçüsüne göre hareket eder."
    },
    sourates_cles:[2,31,36]
  },
  {
    id:48,ar:"فَضْل",translit:"fadl",frequence:193,rang:48,racine:"ف-ض-ل",theme:"allah",
    traductions:{fr:"grâce / faveur / bienfait",en:"grace / favour / bounty",tr:"lütuf / nimet / fazlası"},
    famille:[
      {ar:"فَضَّلَ",translit:"faddala",fr:"il a préféré / avantagé",en:"he preferred / favoured",tr:"üstün kıldı"},
      {ar:"أَفْضَل",translit:"afdal",fr:"meilleur / supérieur",en:"better / superior",tr:"daha iyi / efdal"},
      {ar:"فَاضِل",translit:"fādil",fr:"vertueux / excellent",en:"virtuous / excellent",tr:"faziletli"}
    ],
    profondeur:{
      fr:"Fadl désigne ce qui dépasse le dû — la grâce au-delà du mérite. 'Allah est le Détenteur d'une immense grâce' (répété dans le Coran). Le paradis lui-même est fadl, pas une récompense méritée.",
      en:"Fadl designates what exceeds what is owed — grace beyond merit. Paradise itself is fadl, not a deserved reward.",
      tr:"Fazl, hak edilenin ötesindeki şeyi ifade eder. Cennetin kendisi fazldır, hak edilmiş bir ödül değil."
    },
    sourates_cles:[2,3,57]
  },
  {
    id:49,ar:"نِعْمَة",translit:"niʿma",frequence:144,rang:49,racine:"ن-ع-م",theme:"creation",
    traductions:{fr:"bienfait / grâce / bénédiction",en:"blessing / grace / favour",tr:"nimet / lütuf"},
    famille:[
      {ar:"أَنْعَمَ",translit:"anʿama",fr:"il a accordé des bienfaits",en:"he granted blessings",tr:"nimet verdi"},
      {ar:"نَعِيم",translit:"naʿīm",fr:"délices du paradis",en:"paradise bliss",tr:"cennet nimetleri"}
    ],
    profondeur:{
      fr:"Niʿma et naʿīm partagent la racine n-ʿ-m. Al-Fatiha demande le chemin de 'ceux que Tu as comblés de niʿma'. Ar-Rahman pose la question 40 fois : 'Laquelle des niʿma nierez-vous ?'",
      en:"Niʿma and naʿīm share the root n-ʿ-m. Ar-Rahman asks 40 times: 'Which of your Lord's niʿma will you deny?'",
      tr:"Nimet ve naim aynı kökü paylaşır. Rahman, 40 kez sorar: 'Rabbinizin hangi nimetlerini inkâr edersiniz?'"
    },
    sourates_cles:[1,55,93]
  },
  {
    id:50,ar:"قُرْآن",translit:"qurʾān",frequence:70,rang:50,racine:"ق-ر-أ",theme:"prophetie",
    traductions:{fr:"le Coran / la récitation",en:"the Quran / the recitation",tr:"Kur'an / okuma"},
    famille:[
      {ar:"قَرَأَ",translit:"qaraʾa",fr:"il a lu / récité",en:"he read / recited",tr:"okudu"},
      {ar:"اقْرَأْ",translit:"iqraʾ",fr:"Lis ! (premier mot révélé)",en:"Read! (first revealed word)",tr:"Oku!"},
      {ar:"قِرَاءَة",translit:"qirāʾa",fr:"lecture / récitation",en:"reading / recitation",tr:"okuma / kıraat"}
    ],
    profondeur:{
      fr:"Qurʾān vient de qaraʾa (lire, réciter). Le Coran se définit lui-même comme une récitation — un texte vivant dans la voix. Le premier mot révélé est Iqraʾ (Lis !). La lecture est l'acte fondateur de la révélation islamique.",
      en:"Qurʾān comes from qaraʾa (to read, to recite). The Quran defines itself as a recitation — a text alive in the voice. The first revealed word is Iqraʾ (Read!).",
      tr:"Kur'an, qaraʾa'dan gelir. Kur'an kendini bir tilavet olarak tanımlar — seste yaşayan bir metin. İlk vahyedilen kelime İkra'dır."
    },
    sourates_cles:[96,2,17]
  },
  {
    id:51,ar:"وَحْي",translit:"waḥy",frequence:78,rang:51,racine:"و-ح-ي",theme:"prophetie",
    traductions:{fr:"révélation / inspiration divine",en:"revelation / divine inspiration",tr:"vahiy / ilahi esinlenme"},
    famille:[
      {ar:"أَوْحَى",translit:"awḥā",fr:"il a révélé / inspiré",en:"he revealed / inspired",tr:"vahyetti"}
    ],
    profondeur:{
      fr:"Waḥy désigne une communication rapide, directe et intime. Allah révèle à ses prophètes par waḥy. Fascinant : Allah 'révèle' aussi à l'abeille (S.16:68) ! Le waḥy n'est pas exclusif aux prophètes.",
      en:"Waḥy designates a rapid, direct and intimate communication. Fascinatingly, Allah also 'reveals' to the bee (S.16:68)!",
      tr:"Vahiy, hızlı, doğrudan ve samimi bir iletişimi ifade eder. İlginç: Allah arıya da 'vahyeder' (S.16:68)!"
    },
    sourates_cles:[16,42,53]
  },
  {
    id:52,ar:"تَوَكُّل",translit:"tawakkul",frequence:68,rang:52,racine:"و-ك-ل",theme:"foi",
    traductions:{fr:"confiance totale en Allah",en:"total trust in Allah",tr:"tevekkül / Allah'a güvenme"},
    famille:[
      {ar:"وَكِيل",translit:"wakīl",fr:"mandataire / Protecteur (Allah)",en:"agent / Protector",tr:"vekil / koruyucu"},
      {ar:"تَوَكَّلَ",translit:"tawakkala",fr:"il s'est remis à Allah",en:"he relied on Allah",tr:"tevekkül etti"}
    ],
    profondeur:{
      fr:"Tawakkul n'est pas la passivité — c'est agir puis s'en remettre à Allah pour le résultat. Le Prophète ﷺ a dit : 'Attache ton chameau, puis confie-toi à Allah.'",
      en:"Tawakkul is not passivity — it is acting then relying on Allah for the result. The Prophet ﷺ said: 'Tie your camel, then trust in Allah.'",
      tr:"Tevekkül pasiflik değildir — eylemde bulunmak, sonucu ise Allah'a bırakmaktır."
    },
    sourates_cles:[3,39,65]
  },
  {
    id:53,ar:"ظُلْم",translit:"ẓulm",frequence:315,rang:53,racine:"ظ-ل-م",theme:"morale",
    traductions:{fr:"injustice / oppression / obscurité",en:"injustice / oppression / darkness",tr:"zulüm / haksızlık / karanlık"},
    famille:[
      {ar:"ظَالِم",translit:"ẓālim",fr:"oppresseur / injuste",en:"oppressor / unjust",tr:"zalim"},
      {ar:"ظُلُمَات",translit:"ẓulumāt",fr:"ténèbres (pluriel)",en:"darknesses",tr:"karanlıklar"}
    ],
    profondeur:{
      fr:"Ẓulm signifie à la fois injustice ET obscurité. L'oppression et l'obscurité sont la même réalité — là où règne le ẓulm, la lumière disparaît.",
      en:"Ẓulm means both injustice AND darkness. Oppression and darkness are the same reality — where ẓulm reigns, light disappears.",
      tr:"Zulüm hem haksızlık hem de karanlık anlamına gelir. Zulmün hüküm sürdüğü yerde ışık söner."
    },
    sourates_cles:[2,6,31]
  },
  {
    id:54,ar:"عَدْل",translit:"ʿadl",frequence:28,rang:54,racine:"ع-د-ل",theme:"morale",
    traductions:{fr:"justice / équité",en:"justice / equity",tr:"adalet / hakkaniyet"},
    famille:[
      {ar:"عَادِل",translit:"ʿādil",fr:"juste / équitable",en:"just / equitable",tr:"adil"},
      {ar:"اعْتَدَلَ",translit:"iʿtadala",fr:"il s'est équilibré",en:"he balanced himself",tr:"dengelendi"}
    ],
    profondeur:{
      fr:"ʿAdl est l'opposé de ẓulm. Allah commande la justice (S.16:90) dans un verset qui résume l'éthique islamique. L'iʿtidāl (équilibre) vient de la même racine.",
      en:"ʿAdl is the opposite of ẓulm. Allah commands justice (S.16:90) in a verse summarising Islamic ethics.",
      tr:"Adl, zulmün karşıtıdır. Allah adaleti emreder (S.16:90) — İslam etiğini özetleyen bir ayet."
    },
    sourates_cles:[4,16,57]
  },
  {
    id:55,ar:"غَيْب",translit:"ghayb",frequence:60,rang:55,racine:"غ-ي-ب",theme:"allah",
    traductions:{fr:"invisible / caché / monde du non-vu",en:"unseen / hidden",tr:"gayb / görünmez / gizli"},
    famille:[
      {ar:"غَابَ",translit:"ghāba",fr:"il a disparu / été absent",en:"he disappeared",tr:"kayboldu"},
      {ar:"غَائِب",translit:"ghāʾib",fr:"absent / invisible",en:"absent / invisible",tr:"gıyabi / görünmez"}
    ],
    profondeur:{
      fr:"Al-Ghayb est le monde de l'invisible — tout ce qu'Allah seul connaît. Le Coran commence par 'ceux qui croient au ghayb' (S.2:3). Croire à l'invisible c'est l'acte de foi fondamental.",
      en:"Al-Ghayb is the world of the unseen — all that only Allah knows. The Quran begins with 'those who believe in the ghayb' (S.2:3).",
      tr:"El-Gayb, görünmezin dünyasıdır. Kur'an 'gaybe inananlarla' başlar (S.2:3). Görünmeze inanmak, temel iman eylemidir."
    },
    sourates_cles:[2,6,72]
  },
  {
    id:56,ar:"أُمَّة",translit:"umma",frequence:64,rang:56,racine:"أ-م-م",theme:"communaute",
    traductions:{fr:"communauté / nation / peuple de foi",en:"community / nation / people of faith",tr:"ümmet / topluluk"},
    famille:[
      {ar:"أُمّ",translit:"umm",fr:"mère",en:"mother",tr:"anne"},
      {ar:"إِمَام",translit:"imām",fr:"guide / imam",en:"guide / imam",tr:"imam / önder"}
    ],
    profondeur:{
      fr:"Umma et umm (mère) partagent la racine a-m-m. La communauté est comme une mère — elle porte, nourrit, unit. 'Vous êtes la meilleure umma suscitée pour les hommes' (S.3:110).",
      en:"Umma and umm (mother) share the root a-m-m. 'You are the best umma raised up for mankind' (S.3:110) — a collective mandate.",
      tr:"Ümmet ve ümm aynı kökü paylaşır. 'Siz insanlar için çıkarılmış en hayırlı ümmetsiniz' (S.3:110)."
    },
    sourates_cles:[2,3,16]
  },
  {
    id:57,ar:"عِبَادَة",translit:"ʿibāda",frequence:94,rang:57,racine:"ع-ب-د",theme:"priere",
    traductions:{fr:"adoration / culte / dévotion",en:"worship / devotion",tr:"ibadet / kulluk"},
    famille:[
      {ar:"عَبْد",translit:"ʿabd",fr:"serviteur / esclave",en:"servant / slave",tr:"kul / abd"},
      {ar:"عَابِد",translit:"ʿābid",fr:"adorateur",en:"worshipper",tr:"abid"},
      {ar:"مَعْبُود",translit:"maʿbūd",fr:"adoré / objet d'adoration",en:"object of worship",tr:"maʿbud"}
    ],
    profondeur:{
      fr:"ʿIbāda et ʿabd partagent la racine ʿ-b-d. Être serviteur d'Allah c'est la plus haute dignité dans l'islam. Le Prophète ﷺ est appelé ʿabduhu (Son serviteur) dans la shahāda — titre d'honneur suprême.",
      en:"ʿIbāda and ʿabd share the root ʿ-b-d. Being Allah's servant is the highest dignity in Islam. The Prophet ﷺ is called ʿabduhu (His servant) in the shahāda.",
      tr:"İbadet ve abd aynı kökü paylaşır. Allah'ın kulu olmak İslam'da en yüksek şereftir."
    },
    sourates_cles:[1,51,109]
  },
  {
    id:58,ar:"شِرْك",translit:"shirk",frequence:168,rang:58,racine:"ش-ر-ك",theme:"foi",
    traductions:{fr:"polythéisme / association à Allah",en:"polytheism / associating partners with Allah",tr:"şirk / Allah'a ortak koşmak"},
    famille:[
      {ar:"مُشْرِك",translit:"mushrik",fr:"polythéiste",en:"polytheist",tr:"müşrik"},
      {ar:"شَرِيك",translit:"sharīk",fr:"associé / partenaire",en:"associate / partner",tr:"ortak"},
      {ar:"شَرِكَة",translit:"sharika",fr:"société / association",en:"company",tr:"şirket"}
    ],
    profondeur:{
      fr:"Shirk est le péché impardonnable dans le Coran (S.4:48). La racine sh-r-k donne aussi sharika (société/entreprise). Le shirk c'est créer un partenariat là où il ne peut y en avoir.",
      en:"Shirk is the unforgivable sin in the Quran (S.4:48). The root sh-r-k also gives sharika (company). Shirk is creating a partnership where there can be none.",
      tr:"Şirk, Kur'an'daki bağışlanmaz günahtır (S.4:48). ş-r-k kökü ayrıca şirket kelimesini verir."
    },
    sourates_cles:[4,6,39]
  },
  {
    id:59,ar:"سَلَام",translit:"salām",frequence:42,rang:59,racine:"س-ل-م",theme:"allah",
    traductions:{fr:"paix / salut / As-Salām (Allah)",en:"peace / greeting / As-Salām",tr:"selam / barış / esenlik"},
    famille:[
      {ar:"إِسْلَام",translit:"islām",fr:"soumission / Islam",en:"submission / Islam",tr:"İslam"},
      {ar:"مُسْلِم",translit:"muslim",fr:"soumis / musulman",en:"submitted / Muslim",tr:"Müslüman"},
      {ar:"سَلِمَ",translit:"salima",fr:"il a été sain / sauvé",en:"he was safe",tr:"sağ kurtuldu"}
    ],
    profondeur:{
      fr:"La racine s-l-m est au cœur de l'islam : salām (paix), islām (soumission), muslim (soumis). La paix vient de la soumission à Allah. 'As-Salāmu ʿAlaykum' est le salut des habitants du paradis.",
      en:"The root s-l-m is at the heart of Islam: salām (peace), islām (submission), muslim (submitted). 'As-Salāmu ʿAlaykum' is the greeting of paradise's inhabitants.",
      tr:"s-l-m kökü İslam'ın merkezindedir: selam, İslam, Müslüman. 'Es-Selamü Aleyküm', cennet ehlinin selamıdır."
    },
    sourates_cles:[59,6,56]
  },
  {
    id:60,ar:"حِسَاب",translit:"ḥisāb",frequence:109,rang:60,racine:"ح-س-ب",theme:"jugement",
    traductions:{fr:"compte / jugement / reddition de comptes",en:"account / reckoning / judgement",tr:"hesap / hesaplaşma"},
    famille:[
      {ar:"حَسَبَ",translit:"ḥasaba",fr:"il a compté / calculé",en:"he counted / calculated",tr:"hesapladı"},
      {ar:"حَسِيب",translit:"ḥasīb",fr:"Celui qui fait rendre compte",en:"Reckoner",tr:"Hasib"},
      {ar:"حَسْبُنَا",translit:"ḥasbunā",fr:"Allah nous suffit",en:"Allah suffices us",tr:"Hasbunallah"}
    ],
    profondeur:{
      fr:"Ḥisāb donne aussi ḥasbu (suffit) — 'Hasbunallāh' (Allah nous suffit). La même racine qui calcule et juge aussi suffit et comble. Yawm al-ḥisāb (Jour du Compte) est synonyme de Jugement dernier.",
      en:"Ḥisāb also gives ḥasbu (sufficient) — 'Hasbunallāh' (Allah suffices us). Yawm al-ḥisāb (Day of Reckoning) is synonymous with the Last Judgement.",
      tr:"Hesap, hasbu'yu da verir — 'Hasbunallah' (Allah bize yeter). Yevmü'l-hisab, Kıyamet günüyle eşanlamlıdır."
    },
    sourates_cles:[2,3,88]
  }
];

export { VOCAB_EXTENDED };
