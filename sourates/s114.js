const S114 = {
  meta: {
    numero: 114,
    nom_ar: "الناس",
    nom_translit: "An-Nas",
    nom_fr: "Les hommes",
    nom_en: "Mankind",
    nom_tr: "İnsanlar (Nâs)",
    type: "mecquoise",
    versets_count: 6,
    theme: "Refuge contre le tentateur invisible — clôture du Coran",
    mots_uniques: 20,
    note_pedagogique: "Dernière sourate du Coran. Trois attributs divins en 3 versets, puis le danger du chuchoteur. An-nās revient 6 fois — une fois par verset.",
    progression: { couche: 1, prerequis: [112, 113], suivant: [1] },
    traductions: {
      fr: { auteur: "Hamidullah", texte: "Dis : Je cherche refuge auprès du Seigneur des hommes, Roi des hommes, Dieu des hommes, contre le mal du tentateur furtif, qui souffle le mal dans les poitrines des hommes, qu'il soit parmi les djinns ou parmi les hommes." },
      en: { auteur: "Pickthall", texte: "Say: I seek refuge in the Lord of mankind, The King of mankind, The God of mankind, From the evil of the sneaking whisperer, Who whispereth in the hearts of mankind, Of the jinn and of mankind." },
      tr: { auteur: "Elmalılı Hamdi Yazır", texte: "De ki: Sığınırım ben insanların Rabbine, İnsanların hükümdârına, İnsanların ilâhına, O sinsi vesvesecinin şerrinden. O ki, insanların göğüslerine vesveseler fısıldar. Gerek cinlerden, gerek insanlardan." }
    },
    racines_cles: ["ع-و-ذ", "ر-ب-ب", "م-ل-ك", "أ-ل-ه", "و-س-و-س", "ج-ن-ن"],
    mots_frequents_coran: ["النَّاس", "رَبّ", "قُلْ", "شَرّ"]
  },

  versets: [
    {
      numero: 1,
      ar: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
      translit: "qul aʿūḏu bi-rabbi n-nās",
      traductions: {
        fr: { auteur: "Hamidullah", texte: "Dis : Je cherche refuge auprès du Seigneur des hommes." },
        en: { auteur: "Pickthall", texte: "Say: I seek refuge in the Lord of mankind." },
        tr: { auteur: "Elmalılı Hamdi Yazır", texte: "De ki: Sığınırım ben insanların Rabbine," }
      },
      mots: [
        {
          ar: "قُلْ", translit: "qul", fr: "dis", racine: "ق-و-ل",
          famille: ["قَوْل (qawl) — parole", "قَالَ (qāla) — il a dit", "مَقَال (maqāl) — discours"],
          frequence_coran: 332,
          profondeur: "Troisième sourate consécutive ouverte sur Qul (112, 113, 114). Ces trois sourates sont des proclamations orales — à dire à voix haute. Le Coran est vivant dans la bouche, pas seulement sur la page."
        },
        {
          ar: "أَعُوذُ", translit: "aʿūḏu", fr: "je cherche refuge", racine: "ع-و-ذ",
          famille: ["عَائِذ (ʿāʾiḏ) — celui qui cherche refuge", "مَعَاذ (maʿāḏ) — lieu de refuge", "تَعَوُّذ (taʿawwuḏ) — l'acte de chercher refuge"],
          frequence_coran: 17,
          profondeur: "Même verbe qu'en Al-Falaq (113). La double répétition du refuge dans deux sourates consécutives crée une double protection — comme deux portes fermées contre le mal."
        },
        {
          ar: "بِرَبِّ", translit: "bi-rabbi", fr: "auprès du Seigneur de", racine: "ر-ب-ب",
          famille: ["رَبّ (rabb) — seigneur, nourricier", "تَرْبِيَة (tarbiya) — éducation", "مُرَبِّي (murabbī) — éducateur"],
          frequence_coran: 980,
          profondeur: "Premier des trois attributs divins de la sourate. Rabb évoque la relation de soin et de nourrissement — avant d'être Roi ou Dieu, Allah est Celui qui prend soin."
        },
        {
          ar: "النَّاسِ", translit: "an-nās", fr: "des hommes / de l'humanité", racine: "أ-ن-س",
          famille: ["إِنْسَان (insān) — être humain", "إِنْس (ins) — humains (par opposition aux djinns)", "أَنِيس (anīs) — compagnon"],
          frequence_coran: 241,
          profondeur: "An-nās revient SIX fois dans cette sourate de six versets — une fois par verset. Refrain délibéré : cette sourate est pour et sur l'humanité entière. C'est aussi le dernier mot du Coran entier."
        }
      ],
      analyse_globale: "Même structure d'ouverture qu'Al-Falaq mais destinataire différent : non plus le Seigneur de l'aube mais le Seigneur DES HOMMES. On passe du cosmique à l'humain.",
      niveau_couche: 1
    },
    {
      numero: 2,
      ar: "مَلِكِ النَّاسِ",
      translit: "maliki n-nās",
      traductions: {
        fr: { auteur: "Hamidullah", texte: "Roi des hommes." },
        en: { auteur: "Pickthall", texte: "The King of mankind." },
        tr: { auteur: "Elmalılı Hamdi Yazır", texte: "İnsanların hükümdârına," }
      },
      mots: [
        {
          ar: "مَلِكِ", translit: "malik", fr: "Roi / Souverain", racine: "م-ل-ك",
          famille: ["مَلَكَ (malaka) — posséder, régner", "مَمْلَكَة (mamlaka) — royaume", "مِلْك (milk) — propriété", "مَلَك (malak) — ange (même racine !)", "مَلَكُوت (malakūt) — royauté divine"],
          frequence_coran: 90,
          profondeur: "La racine m-l-k est extraordinaire : elle donne le roi (malik), la propriété (milk) ET l'ange (malak). Anges et rois partagent une racine — tous deux sont des exécutants d'une autorité supérieure. Malik est le deuxième attribut : Seigneur (soin) → Roi (pouvoir souverain)."
        },
        {
          ar: "النَّاسِ", translit: "an-nās", fr: "des hommes", racine: "أ-ن-س",
          famille: ["نَاس (nās) — gens", "إِنْسَان (insān) — humain"],
          frequence_coran: 241,
          profondeur: "Deuxième occurrence. Les trois premiers versets ont la même structure : [Attribut divin] + an-nās. Une architecture en escalier vers Dieu."
        }
      ],
      analyse_globale: "Deux mots, un attribut divin complet. Malik ajoute la dimension du pouvoir souverain à celle du soin (Rabb). Un roi protège ses sujets différemment d'un père qui nourrit ses enfants.",
      niveau_couche: 2
    },
    {
      numero: 3,
      ar: "إِلَٰهِ النَّاسِ",
      translit: "ilāhi n-nās",
      traductions: {
        fr: { auteur: "Hamidullah", texte: "Dieu des hommes." },
        en: { auteur: "Pickthall", texte: "The God of mankind." },
        tr: { auteur: "Elmalılı Hamdi Yazır", texte: "İnsanların ilâhına," }
      },
      mots: [
        {
          ar: "إِلَٰهِ", translit: "ilāh", fr: "Dieu / Divinité", racine: "أ-ل-ه",
          famille: ["إِلَه (ilāh) — dieu", "اللَّه (allāh) — Allah (contraction de al-ilāh)", "تَأَلُّه (taʾalluh) — adoration totale", "آلِهَة (āliha) — dieux (pluriel polythéiste)"],
          frequence_coran: 147,
          profondeur: "Ilāh complète la triple invocation : Rabb (soin) → Malik (pouvoir) → Ilāh (dévotion/amour). Ces trois dimensions répondent aux trois besoins humains fondamentaux : être nourri, être protégé, aimer et être aimé. Un seul Être répond aux trois."
        },
        {
          ar: "النَّاسِ", translit: "an-nās", fr: "des hommes", racine: "أ-ن-س",
          famille: ["نَاس (nās) — gens"],
          frequence_coran: 241,
          profondeur: "Troisième occurrence. Les versets 1-2-3 forment un bloc symétrique parfait : trois mots chacun, même structure, trois attributs divins croissants."
        }
      ],
      analyse_globale: "La triple invocation (vv.1-3) est un chef-d'œuvre de concision théologique. Six mots, trois dimensions de la relation Allah-humanité. Les versets suivants basculent : de Qui protège à contre quoi.",
      niveau_couche: 2
    },
    {
      numero: 4,
      ar: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
      translit: "min šarri l-waswāsi l-ḫannās",
      traductions: {
        fr: { auteur: "Hamidullah", texte: "Contre le mal du tentateur furtif." },
        en: { auteur: "Pickthall", texte: "From the evil of the sneaking whisperer." },
        tr: { auteur: "Elmalılı Hamdi Yazır", texte: "O sinsi vesvesecinin şerrinden." }
      },
      mots: [
        {
          ar: "مِن شَرِّ", translit: "min šarr", fr: "contre le mal de", racine: "ش-ر-ر",
          famille: ["شَرّ (šarr) — mal", "أَشَرّ (ašarr) — pire", "شِرِّير (širrīr) — malfaisant"],
          frequence_coran: 84,
          profondeur: "Même formule min šarr qu'en Al-Falaq. Le refuge demandé auprès du Seigneur/Roi/Dieu est maintenant dirigé contre un ennemi précis et nommé."
        },
        {
          ar: "الْوَسْوَاسِ", translit: "al-waswās", fr: "le chuchoteur / le tentateur", racine: "و-س-و-س",
          famille: ["وَسْوَسَ (waswasa) — chuchoter, souffler des doutes", "وَسْوَسَة (waswasa) — chuchotement"],
          frequence_coran: 2,
          profondeur: "Mot onomatopéique : w-s-w-s imite phonétiquement le chuchotement. En prononçant ce mot, on entend presque le murmure insidieux. Le Coran utilise les sons pour illustrer le sens — c'est la balagha (éloquence coranique)."
        },
        {
          ar: "الْخَنَّاسِ", translit: "al-ḫannās", fr: "le furtif / celui qui se retire", racine: "خ-ن-س",
          famille: ["خَنَسَ (ḫanasa) — se retirer, se tapir", "خُنُوس (ḫunūs) — recul furtif"],
          frequence_coran: 1,
          profondeur: "N'apparaît qu'une seule fois dans tout le Coran. Forme intensive : celui qui recule CONSTAMMENT. Stratégie du tentateur : approcher → chuchoter → reculer dès qu'on mentionne Allah. Le dhikr (souvenir d'Allah) est son ennemi direct."
        }
      ],
      analyse_globale: "L'ennemi nommé ici n'est pas un objet ni un phénomène mais une entité intelligente avec une stratégie : approcher, chuchoter, reculer. L'ennemi le plus subtil est celui qu'on ne voit pas mais qu'on entend dedans.",
      niveau_couche: 3
    },
    {
      numero: 5,
      ar: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
      translit: "allaḏī yuwaswisu fī ṣudūri n-nās",
      traductions: {
        fr: { auteur: "Hamidullah", texte: "Qui souffle le mal dans les poitrines des hommes." },
        en: { auteur: "Pickthall", texte: "Who whispereth in the hearts of mankind." },
        tr: { auteur: "Elmalılı Hamdi Yazır", texte: "O ki, insanların göğüslerine vesveseler fısıldar." }
      },
      mots: [
        {
          ar: "الَّذِي", translit: "allaḏī", fr: "celui qui", racine: "pronom relatif",
          famille: ["الَّتِي (allatī) — celle qui", "الَّذِينَ (allaḏīna) — ceux qui"],
          frequence_coran: 1464,
          profondeur: "Le pronom relatif le plus fréquent du Coran. Il prolonge la description du tentateur : voici CE QU'IL FAIT précisément."
        },
        {
          ar: "يُوَسْوِسُ", translit: "yuwaswisu", fr: "il chuchote / il souffle des doutes", racine: "و-س-و-س",
          famille: ["même racine que al-waswās — forme verbale présent"],
          frequence_coran: 2,
          profondeur: "Six syllabes qui imitent la répétition insidieuse du murmure. Encore plus onomatopéique que le nom al-waswās. En le récitant, on 'entend' ce dont on se protège."
        },
        {
          ar: "فِي", translit: "fī", fr: "dans", racine: "particule",
          famille: [], frequence_coran: 4381,
          profondeur: "La particule la plus fréquente du Coran (4381 fois). Ici essentielle : le chuchotement pénètre À L'INTÉRIEUR des poitrines — l'ennemi est intime."
        },
        {
          ar: "صُدُورِ", translit: "ṣudūr", fr: "les poitrines / les cœurs", racine: "ص-د-ر",
          famille: ["صَدْر (ṣadr) — poitrine", "صَدَرَ (ṣadara) — provenir de", "مَصْدَر (maṣdar) — source, origine (terme grammatical !)"],
          frequence_coran: 44,
          profondeur: "Ṣadr est le siège de l'intelligence et du cœur dans la vision coranique. Bonus grammatical : maṣdar (infinitif verbal en grammaire arabe) vient de la même racine — la 'source' d'où émane l'action. Le tentateur vise la source des décisions humaines."
        },
        {
          ar: "النَّاسِ", translit: "an-nās", fr: "des hommes", racine: "أ-ن-س",
          famille: ["نَاس (nās) — gens"],
          frequence_coran: 241,
          profondeur: "Cinquième occurrence. Le fil se resserre : les hommes protégés par leur Seigneur/Roi/Dieu sont exposés au chuchoteur qui infiltre leurs poitrines. Protection divine vs infiltration du mal."
        }
      ],
      analyse_globale: "Le lieu du danger est révélé : la poitrine, siège du cœur et des décisions. Le mal ne vient pas de l'extérieur mais s'infiltre de l'intérieur. La protection contre un ennemi intérieur est aussi intérieure : le dhikr, le souvenir d'Allah.",
      niveau_couche: 3
    },
    {
      numero: 6,
      ar: "مِنَ الْجِنَّةِ وَالنَّاسِ",
      translit: "mina l-jinnati wa-n-nās",
      traductions: {
        fr: { auteur: "Hamidullah", texte: "Qu'il soit parmi les djinns ou parmi les hommes." },
        en: { auteur: "Pickthall", texte: "Of the jinn and of mankind." },
        tr: { auteur: "Elmalılı Hamdi Yazır", texte: "Gerek cinlerden, gerek insanlardan." }
      },
      mots: [
        {
          ar: "مِنَ", translit: "mina", fr: "parmi / de", racine: "particule",
          famille: [], frequence_coran: 3226,
          profondeur: "Min introduit une alternative ouverte : le tentateur peut appartenir à l'une ou l'autre catégorie. Ni l'une ni l'autre n'est exclue."
        },
        {
          ar: "الْجِنَّةِ", translit: "al-jinna", fr: "les djinns", racine: "ج-ن-ن",
          famille: ["جِنّ (jinn) — djinns", "جَنَّة (janna) — paradis (jardin caché)", "جَنِين (janīn) — fœtus (caché dans le ventre)", "مَجْنُون (majnūn) — fou", "جُنُون (junūn) — folie"],
          frequence_coran: 32,
          profondeur: "La racine j-n-n est l'une des plus fascinantes : elle relie tout ce qui est CACHÉ. Le paradis (janna) = jardin derrière des murs. Le fœtus (janīn) = caché dans le ventre. Le djinn = être invisible. La folie (junūn) = quelque chose de caché qui envahit l'esprit. Une seule racine, un seul concept : le voilé."
        },
        {
          ar: "وَالنَّاسِ", translit: "wa-n-nās", fr: "et les hommes", racine: "أ-ن-س",
          famille: ["نَاس (nās) — gens"],
          frequence_coran: 241,
          profondeur: "Sixième et dernière occurrence de an-nās dans la sourate. Et dans tout le Coran — c'est le dernier verset de la dernière sourate. Le Coran s'ouvre sur Allah (Basmala) et se referme sur an-nās (les hommes). De Dieu à l'humanité — l'arc entier du Livre."
        }
      ],
      analyse_globale: "Clôture magistrale du Coran : le tentateur peut être djinn ou humain — peut-être ton voisin, ton collègue. Du cosmique à l'intime. Et avec ce dernier mot — an-nās — le Coran entier se referme sur l'humanité qu'il a accompagnée du premier au dernier verset.",
      niveau_couche: 2
    }
  ],

  resume_pedagogique: {
    mots_cles_a_retenir: ["النَّاسِ", "مَلِكِ", "إِلَٰهِ", "الْوَسْوَاسِ", "صُدُورِ"],
    racines_a_retenir: ["م-ل-ك", "أ-ل-ه", "و-س-و-س", "ج-ن-ن", "ص-د-ر"],
    declic_frequence: "An-nās (241 fois), rabb (980 fois), malik (90 fois). Et la racine j-n-n te déverrouille à la fois janna (paradis), janīn (fœtus), majnūn (fou) — un univers sémantique autour du 'caché'.",
    connexions_autres_sourates: [113, 112, 1, 67],
    niveau_difficulte: 2
  }
}

export default S114;
