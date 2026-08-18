/* ============================================================
   PROVENANCE DES DONNÉES — Comprendre le Coran
   ------------------------------------------------------------
   Ce fichier décrit, pour chaque type de donnée du site, son origine et
   son niveau de fiabilité. Il alimente les mentions affichées dans le
   lecteur et permet à un relecteur de savoir ce qui a été vérifié et ce
   qui ne l'a pas été.

   Trois niveaux :
     'source'  — provient d'une source publiée et identifiée ; reproduit
                 sans modification. Fiabilité maximale.
     'redige'  — rédigé pour ce projet. Fiabilité liée au projet lui-même.
     'genere'  — produit automatiquement par un script, sans relecture
                 systématique. À vérifier avant de s'y fier.

   HONNÊTETÉ SUR CE FICHIER : les niveaux ci-dessous décrivent la manière
   dont chaque type de donnée a été produit, pas un audit ligne à ligne.
   Une glose marquée 'genere' peut être parfaitement exacte, et une donnée
   'redige' peut contenir une erreur. Le champ `revu` passera à true, type
   par type, à mesure que des relectures seront effectuées.
   ============================================================ */

export const PROVENANCE = {
  // ---------- Texte coranique ----------
  texte_arabe: {
    niveau: 'source',
    revu: true,
    source: 'quran-json (Tanzil.net) — rasm uthmani simplifié',
    note: 'Texte de référence, repris sans modification.'
  },

  traductions: {
    niveau: 'source',
    revu: true,
    source: 'Hamidullah (fr) · Saheeh International (en) · Diyanet İşleri Başkanlığı (tr), via Tanzil.net',
    note: 'Traducteurs publiés, reproduits verbatim. Conditions Tanzil : usage non commercial.'
  },

  // ---------- Données produites par script ----------
  translitteration: {
    niveau: 'genere',
    revu: false,
    source: 'build/extract.js — convention scientifique simplifiée',
    note: 'Produite automatiquement à partir du texte vocalisé. Relecture non effectuée.'
  },

  gloses: {
    niveau: 'genere',
    revu: false,
    source: 'glossaire du projet, apparié via les lemmes du Quranic Arabic Corpus (université de Leeds)',
    note: "Couvre 89 % des mots du corpus. Les traductions restent celles du "
        + "glossaire ; le corpus de Leeds sert uniquement à identifier la forme "
        + "de dictionnaire de chaque mot. Un appariement n'est retenu que si les "
        + "racines concordent. Marge d'erreur résiduelle sur les homographes "
        + "partageant une même racine.",
    couverture: 0.893
  },

  racines: {
    niveau: 'genere',
    revu: false,
    source: 'glossaire du projet, propagées par appariement',
    note: "Héritent des limites de l'appariement des gloses."
  },

  // ---------- Contenu pédagogique du projet ----------
  frequences: {
    niveau: 'redige',
    revu: false,
    source: 'corpus classiques (mots 1–300) · estimations (mots 301–1000)',
    note: 'Les fréquences au-delà du rang 300 sont des estimations à affiner.'
  },


  themes: {
    niveau: 'redige',
    revu: false,
    source: 'rédaction du projet',
    note: 'Thèmes, résumés et « déclic fréquence ».'
  },

  metadonnees: {
    niveau: 'source',
    revu: true,
    source: 'ordre de révélation : chronologie de l’édition du Caire',
    note: 'Numérotation, nombre de versets et classement mecquois/médinois vérifiés contre quran-json.'
  }
};

// Libellés affichés, par langue.
export const NIVEAUX = {
  source: {
    fr: { court: 'Source publiée', long: "Provient d'une source publiée, reproduite sans modification." },
    en: { court: 'Published source', long: 'From a published source, reproduced without modification.' },
    tr: { court: 'Yayımlanmış kaynak', long: 'Yayımlanmış bir kaynaktan, değiştirilmeden alınmıştır.' }
  },
  redige: {
    fr: { court: 'Rédigé pour ce site', long: 'Contenu pédagogique rédigé pour ce site.' },
    en: { court: 'Written for this site', long: 'Educational content written for this site.' },
    tr: { court: 'Bu site için yazıldı', long: 'Bu site için hazırlanan eğitim içeriği.' }
  },
  genere: {
    fr: { court: 'Généré automatiquement', long: "Produit par un script, sans relecture systématique — à vérifier." },
    en: { court: 'Automatically generated', long: 'Produced by a script, not systematically reviewed — verify before relying on it.' },
    tr: { court: 'Otomatik üretildi', long: 'Bir betikle üretildi, sistematik olarak gözden geçirilmedi — güvenmeden önce doğrulayın.' }
  }
};
