#!/usr/bin/env node
// ============================================================
// Enrichissement des analyses mot à mot — Comprendre le Coran
//
//   node scripts/enrich-glosses.mjs --verifier
//   node scripts/enrich-glosses.mjs --appliquer
//
// PROBLÈME RÉSOLU
// L'analyse mot à mot ne couvrait que 58 % des mots. Les gloses étaient
// appariées par forme exacte : « الكتاب » n'était pas reconnu alors que
// « كتاب » figure au glossaire, l'arabe étant flexionnel.
//
// Un appariement naïf (retrait de l'article et des préfixes) produisait
// des erreurs graves sur les homographes — « بني » (fils de) rattaché au
// verbe « construire », « العالمين » (les mondes) rattaché à « savoir ».
// Sur un texte coranique, une glose fausse est pire qu'une glose absente.
//
// MÉTHODE RETENUE
// On utilise le lemme fourni par le Quranic Arabic Corpus (université de
// Leeds), qui donne pour chaque mot du Coran sa forme de dictionnaire et
// sa racine, vérifiées par des linguistes. Le lemme est ensuite recherché
// dans le glossaire du projet.
//
// **Aucune traduction n'est importée** : les gloses affichées restent
// celles du glossaire. Le corpus de Leeds ne sert qu'à savoir *quelle*
// entrée du glossaire s'applique à *quel* mot.
//
// GARDE-FOU
// Un appariement n'est retenu que si la racine du corpus et celle du
// glossaire concordent. Les cas douteux sont écartés : mieux vaut laisser
// un mot sans analyse qu'afficher une glose erronée.
//
// PRÉREQUIS
//   git clone --depth 1 https://github.com/mustafa0x/quran-morphology.git
//   (ou --morpho pour indiquer un autre chemin vers quran-morphology.txt)
//
// ATTRIBUTION — le Quranic Arabic Corpus impose d'indiquer clairement sa
// source et de faire un lien vers http://corpus.quran.com. Voir LICENSING.md.
// ============================================================
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const appliquer = args.includes('--appliquer');
const iM = args.indexOf('--morpho');
const cheminMorpho = iM >= 0 ? args[iM + 1]
  : join(root, '..', 'lex', 'quran-morphology', 'quran-morphology.txt');

if (!existsSync(cheminMorpho)) {
  console.error(`✗ données morphologiques introuvables : ${cheminMorpho}`);
  console.error('  git clone --depth 1 https://github.com/mustafa0x/quran-morphology.git');
  process.exit(1);
}

// ----- Translittération Buckwalter -> écriture arabe -----
// Le fichier officiel du corpus de Leeds est encodé en Buckwalter (l'arabe
// transcrit en caractères latins). La conversion est une simple table de
// correspondance, réversible : elle ne modifie pas la donnée, elle la
// réécrit dans l'alphabet d'origine pour pouvoir la comparer au glossaire.
const BUCKWALTER = {
  "'": 'ء', '|': 'آ', '>': 'أ', '&': 'ؤ', '<': 'إ', '}': 'ئ',
  A: 'ا', b: 'ب', p: 'ة', t: 'ت', v: 'ث', j: 'ج', H: 'ح', x: 'خ',
  d: 'د', '*': 'ذ', r: 'ر', z: 'ز', s: 'س', $: 'ش', S: 'ص', D: 'ض',
  T: 'ط', Z: 'ظ', E: 'ع', g: 'غ', _: 'ـ', f: 'ف', q: 'ق', k: 'ك',
  l: 'ل', m: 'م', n: 'ن', h: 'ه', w: 'و', Y: 'ى', y: 'ي',
  F: 'ً', N: 'ٌ', K: 'ٍ', a: 'َ', u: 'ُ', i: 'ِ', '~': 'ّ', o: 'ْ',
  '^': 'ٓ', '#': 'ٔ', '`': 'ٰ', '{': 'ٱ', ':': 'ۜ', '@': 'ۢ'
};
const deBuckwalter = (s) => String(s || '').split('').map(c => BUCKWALTER[c] ?? c).join('');
// Une chaîne déjà en arabe ne contient pas de lettres latines.
const estBuckwalter = (s) => /[A-Za-z]/.test(String(s || ''));
const versArabe = (s) => (estBuckwalter(s) ? deBuckwalter(s) : s);

// Normalisation orthographique : vocalisation, variantes de l'alif,
// alif maqsura et ta marbuta. Permet de comparer des graphies différentes
// d'un même mot sans confondre des mots distincts.
const nu = (s) => String(s || '')
  .replace(/[\u064B-\u0652\u0670\u0653-\u0655\u0640]/g, '')
  .replace(/[\u0622\u0623\u0625\u0671]/g, '\u0627')
  .replace(/\u0649/g, '\u064A')
  .replace(/\u0629/g, '\u0647');

// Normalisation stricte : retire seulement la vocalisation, sans unifier
// les lettres. « بَنَىٰ » (construire) et « بَنِي » (fils de) restent ainsi
// distincts, alors que la normalisation large les confondrait.
const strict = (s) => String(s || '')
  .replace(/[\u064B-\u0652\u0670\u0653-\u0655\u0640]/g, '')
  .replace(/[\u0622\u0623\u0625\u0671]/g, '\u0627');


// ----- 1. Morphologie : un lemme et une racine par mot du Coran -----
const parMot = new Map();               // "sourate:verset:mot" -> { lem, root }
for (const brut of readFileSync(cheminMorpho, 'utf8').split('\n')) {
  const ligne = brut.replace(/\r$/, '');
  if (!ligne.trim() || ligne.startsWith('#') || ligne.startsWith('LOCATION')) continue;
  const [ref, forme, , traits] = ligne.split('\t');
  if (!traits) continue;
  // Le fichier officiel note la référence « (1:1:1:1) », le fork « 1:1:1:1 ».
  const [s, v, m] = ref.replace(/[()]/g, '').split(':').map(Number);
  const lemBrut = (traits.match(/LEM:([^|]+)/) || [])[1];
  if (!lemBrut) continue;
  const lem = versArabe(lemBrut);
  const racBrut = (traits.match(/ROOT:([^|]+)/) || [])[1];
  const rac = racBrut ? versArabe(racBrut) : undefined;
  const cle = `${s}:${v}:${m}`;
  const actuel = parMot.get(cle);
  // Un mot peut être segmenté (préfixe + base) : on retient le segment
  // porteur de sens, c'est-à-dire celui qui possède une racine.
  if (!actuel || (rac && !actuel.root) || (rac && forme.length > actuel.len)) {
    parMot.set(cle, { lem, root: rac, len: forme.length });
  }
}

// ----- 2. Glossaire du projet, indexé par lemme normalisé -----
const { VOCAB } = await import(`file://${join(root, 'data', 'vocab.js')}`);
const { VOCAB2 } = await import(`file://${join(root, 'data', 'vocab2.js')}`);
const { VOCAB3 } = await import(`file://${join(root, 'data', 'vocab3.js')}`);
const { VOCAB4 } = await import(`file://${join(root, 'data', 'vocab4.js')}`);
const { VOCAB5 } = await import(`file://${join(root, 'data', 'vocab5.js')}`);
const glossaire = new Map();
const glossaireStrict = new Map();
for (const mot of [...VOCAB, ...VOCAB2, ...VOCAB3, ...VOCAB4, ...VOCAB5]) {
  const k = nu(mot.ar);
  if (!glossaire.has(k)) glossaire.set(k, mot);
  const ks = strict(mot.ar);
  if (!glossaireStrict.has(ks)) glossaireStrict.set(ks, mot);
}

// Appariements refusés, constatés à la relecture. Certains homographes
// partagent la même racine et ne peuvent donc pas être départagés par le
// contrôle automatique : « بُنَىّ » (fils de, dans « ô fils d'Israël »)
// aboutissait au verbe « construire », qui a bien la racine ب-ن-ي.
// Ajouter ici tout couple erroné repéré par un relecteur.
const REFUSES = new Set([
  'بُنَىّ|بَنَىٰ'
]);

const racineDe = (mot) => nu(String(mot.racine || '').replace(/[-\s—]/g, ''));

// ----- 3. Parcours du corpus -----
const base = JSON.parse(readFileSync(join(root, 'build', 'base.json'), 'utf8'));
let total = 0, dejaGlose = 0, ajoutes = 0, ecartes = 0, sansLemme = 0, lemmeAbsent = 0;
const fichiersModifies = [];

for (let n = 1; n <= 114; n++) {
  const nom = `s${String(n).padStart(3, '0')}`;
  const mod = await import(`file://${join(root, 'sourates', nom + '.js')}?v=${Date.now()}`);
  const d = mod.default || Object.values(mod)[0];
  let modifie = false;

  d.versets.forEach((verset) => {
    const versetBase = base[n].verses[verset.numero - 1];
    if (!versetBase) return;
    const dejaLa = new Set((verset.mots || []).map(m => m.ar));
    const nouveaux = [];

    versetBase.words.forEach((mot, i) => {
      total++;
      if (dejaLa.has(mot.ar)) { dejaGlose++; return; }

      const info = parMot.get(`${n}:${verset.numero}:${i + 1}`);
      if (!info) { sansLemme++; return; }

      const entree = glossaire.get(nu(info.lem));
      if (!entree) { lemmeAbsent++; return; }
      if (REFUSES.has(`${info.lem}|${entree.ar}`)) { ecartes++; return; }

      // Garde-fou à deux niveaux.
      //  1. Racines connues des deux côtés : elles doivent concorder. C'est
      //     ce qui écarte « بَنِي » (fils de) du verbe « construire ».
      //  2. Racine indisponible (particules, noms propres, champ descriptif
      //     du glossaire) : on exige alors une correspondance stricte, sans
      //     unification de lettres, qui ne peut pas confondre deux mots.
      const rMorpho = nu(info.root || '');
      const rGloss = racineDe(entree);
      const racinesConnues = Boolean(rMorpho) && /^[\u0621-\u064A]{3,4}$/.test(rGloss);
      if (racinesConnues) {
        if (rMorpho !== rGloss) { ecartes++; return; }
      } else if (glossaireStrict.get(strict(info.lem)) !== entree) {
        ecartes++; return;
      }

      nouveaux.push({
        position: i,
        mot: {
          ar: mot.ar,
          translit: mot.tr,
          fr: String(entree.traductions.fr).split('/')[0].trim(),
          racine: entree.racine,
          frequence_coran: entree.frequence,
          // Marque la provenance : ces gloses viennent d'un appariement
          // par lemme, non d'une rédaction verset par verset.
          auto: true
        }
      });
      ajoutes++;
    });

    if (nouveaux.length) {
      // Réinsertion dans l'ordre des mots du verset.
      const parPosition = new Map();
      (verset.mots || []).forEach((m) => {
        const idx = versetBase.words.findIndex((w, j) => w.ar === m.ar && !parPosition.has(j));
        parPosition.set(idx >= 0 ? idx : parPosition.size, m);
      });
      nouveaux.forEach(({ position, mot }) => parPosition.set(position, mot));
      verset.mots = [...parPosition.entries()].sort((a, b) => a[0] - b[0]).map(([, m]) => m);
      modifie = true;
    }
  });

  if (modifie && appliquer) {
    const varName = 'S' + String(n).padStart(3, '0');
    const entete = readFileSync(join(root, 'sourates', nom + '.js'), 'utf8')
      .split('\n').filter(l => l.startsWith('//')).join('\n');
    writeFileSync(join(root, 'sourates', nom + '.js'),
      (entete ? entete + '\n' : '') +
      `const ${varName} = ${JSON.stringify(d, null, 2)};\n\nexport { ${varName} };\n`);
    fichiersModifies.push(nom);
  }
}

const avant = dejaGlose / total * 100;
const apres = (dejaGlose + ajoutes) / total * 100;
console.log(`  mots du corpus              : ${total}`);
console.log(`  déjà analysés               : ${dejaGlose}  (${avant.toFixed(1)} %)`);
console.log(`  ajoutés par lemmatisation   : ${ajoutes}  (+${(ajoutes / total * 100).toFixed(1)} points)`);
console.log(`  écartés faute de racine sûre: ${ecartes}`);
console.log(`  lemme absent du glossaire   : ${lemmeAbsent}`);
console.log(`  sans annotation morphologique: ${sansLemme}`);
console.log(`\n  COUVERTURE : ${avant.toFixed(1)} %  ->  ${apres.toFixed(1)} %`);
if (appliquer) console.log(`\n✓ ${fichiersModifies.length} fichiers mis à jour.`);
else console.log('\n  (mode vérification : aucun fichier modifié)');
