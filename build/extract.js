// Convertit le texte uthmanien de quran-json en orthographe simplifiée + translittération scientifique
const fs = require('fs');
const path = require('path');
// Source des données : paquet npm quran-json. Installer avec :
//   npm pack quran-json && tar xzf quran-json-*.tgz
// puis lancer depuis la racine du dépôt, ou définir QURAN_JSON.
const QURAN_JSON = process.env.QURAN_JSON
  || path.join(__dirname, '..', 'node_modules', 'quran-json', 'dist', 'quran.json');
const quran = require(QURAN_JSON);

// --- 1. Uthmani -> orthographe simplifiée (style des fichiers existants) ---
function simplify(t) {
  return t
    .replace(/\u064E\u06E2/g, '\u064B').replace(/\u064F\u06E2/g, '\u064C').replace(/\u0650\u06ED/g, '\u064D') // tanwin iqlab
    .replace(/\u0650\u06E2/g, '\u064D')
    .replace(/\u0657/g, '\u064B').replace(/\u065E/g, '\u064C').replace(/\u0656/g, '\u064D') // tanwin variants
    .replace(/\u0627\u0654/g, '\u0623').replace(/\u0648\u0654/g, '\u0624').replace(/\u0649\u0654/g, '\u0626').replace(/\u0627\u0655/g, '\u0625').replace(/\u0654/g,'\u0621')
    .replace(/[\u06DE\u06E0\u06E9]/g, '')
    .replace(/\u0653/g, '')             // madda combinante
    .replace(/[\u06E5\u06E6]/g, '')     // petits waw/ya
    .replace(/\u06E1/g, '\u0652')      // petit sukun -> sukun
    .replace(/\u0671/g, '\u0627')      // alif wasla -> alif
    .replace(/[\u06D6-\u06DC\u06DF\u06E0\u06E2-\u06E4\u06E7\u06E8\u06EA-\u06ED\u08F0-\u08F3]/g, '') // marques de pause / petits signes
    .replace(/\u06E5/g, '\u0648')      // petit waw -> waw
    .replace(/\u06E6/g, '\u064A')      // petit ya -> ya
    .replace(/\u0670/g, '\u0670')      // dague alif conservée
    .replace(/ +/g, ' ').trim();
}

// --- 2. Translittération scientifique (à partir de l'uthmani, pour gérer la wasla) ---
const C = {'ب':'b','ت':'t','ث':'th','ج':'j','ح':'ḥ','خ':'kh','د':'d','ذ':'dh','ر':'r','ز':'z','س':'s','ش':'sh','ص':'ṣ','ض':'ḍ','ط':'ṭ','ظ':'ẓ','ع':'ʿ','غ':'gh','ف':'f','ق':'q','ك':'k','ل':'l','م':'m','ن':'n','ه':'h','و':'w','ي':'y','ء':'ʾ','ئ':'ʾ','ؤ':'ʾ','ى':'ā'};
const SUN = new Set(['t','th','d','dh','r','z','s','sh','ṣ','ḍ','ṭ','ẓ','l','n']);

function translitWord(w, prevEndsVowel, isLast) {
  // nettoyage
  w = w.replace(/[\u06D6-\u06DC\u06DE-\u06E1\u06E2-\u06E4\u06E7-\u06E9\u06EA-\u06ED\u0653\u08F0-\u08F3]/g, '\u0652'.repeat(0) + '').replace(/\u06E1/g,'\u0652');
  // préfixes wa-/fa- devant hamzat wasl
  const pref = w.match(/^([\u0648\u0641\u0628\u0643])[\u064E\u0650](?=[\u0671])/);
  if (pref) {
    const p = {"\u0648":"wa","\u0641":"fa","\u0628":"bi","\u0643":"ka"}[pref[1]];
    return p + translitWord(w.slice(2), true, isLast);
  }
  let out = [];
  let i = 0;
  const ch = [...w];
  const isVow = c => c==='\u064E'||c==='\u064F'||c==='\u0650';
  // hamzat wasl / article
  if (ch[0] === '\u0671' || ch[0] === '\u0627') {
    // article ال ?
    if (ch[1] === 'ل') {
      const wasla = ch[0] === '\u0671';
      // trouver consonne suivante
      let j = 2; while (j < ch.length && !C[ch[j]] && !'أإآءا'.includes(ch[j])) j++;
      const nextC = C[ch[j]] || '';
      if (ch[2] === '\u0651') { // lam mushaddada : alladhi...
        out.push(wasla && prevEndsVowel ? 'll' : 'all');
        i = 3;
      } else {
        const sun = SUN.has(nextC);
        if (wasla && prevEndsVowel) out.push(sun ? '\u00A7' : 'l-');
        else out.push(sun ? 'a\u00A7' : 'al-');
        i = 2;
      }
    } else {
      // hamzat wasl verbale/nominale (ex: اهدنا) -> i/u selon voyelle interne, simplifié : 'i'
      if (ch[0] === '\u0671') { out.push(prevEndsVowel ? '' : 'i'); i = 1; }
      else { out.push(''); i = 1; } // alif initial nu : géré par hamza+voyelle plus loin
    }
  }
  for (; i < ch.length; i++) {
    const c = ch[i];
    if (c === '\u0640') continue; // tatweel
    if (ch[i+1] === '\u0654' || ch[i+1] === '\u0655') { // hamza combinante sur support
      out.push('ʾ'); i++; continue;
    }
    if (c === '\u0654' || c === '\u0655') { out.push('ʾ'); continue; }
    if (c === '\u0657') { out.push('an'); continue; }
    if (c === '\u065E') { out.push('un'); continue; }
    if (c === '\u0656') { out.push('in'); continue; }
    if (c === 'ٱ') continue; // wasla médiane : élidée
    if (c === 'أ' || c === 'إ') { out.push('ʾ'); if (c==='إ' && ch[i+1] !== '\u0650') out.push('i'); continue; }
    if (c === 'آ') { out.push('ʾā'); continue; }
    if (c === '\u0651') { // shadda : doubler la dernière consonne
      if (out.length <= 1 && !w.match(/^[\u0671\u0627]/)) continue; // liaison en début de mot
      const last = out[out.length-1];
      if (last && /^(sh|th|dh|kh|gh|[bcdfghjklmnpqrstwyzʿʾṣḍṭẓḥ])$/.test(last)) out.push(last);
      continue;
    }
    if (c === '\u064E') { out.push('a'); continue; }
    if (c === '\u064F') { out.push('u'); continue; }
    if (c === '\u0650') { out.push('i'); continue; }
    if (c === '\u0652') continue; // sukun
    if (c === '\u064B') { out.push('an'); continue; }
    if (c === '\u064C') { out.push('un'); continue; }
    if (c === '\u064D') { out.push('in'); continue; }
    if (c === '\u0670') { out.push('ā'); continue; } // dague alif
    if (c === 'ا') { // alif de prolongation ou support
      const last = out[out.length-1];
      if (last === 'a') out[out.length-1] = 'ā';
      else if (last === 'an') { /* tanwin + alif */ }
      continue;
    }
    if (c === 'ة') { const nx = ch[i+1]; out.push(nx && /[\u064B-\u0650\u0656\u0657\u065E]/.test(nx) ? 't' : 'h'); continue; }
    if (c === 'و') {
      const last = out[out.length-1];
      const next = ch[i+1];
      if (last === 'u' && !isVow(next) && next !== '\u0651' && !['\u064B','\u064C','\u064D','\u065E','\u0657','\u0656'].includes(next)) { out[out.length-1] = 'ū'; continue; }
      out.push('w'); continue;
    }
    if (c === 'ي') {
      const last = out[out.length-1];
      const next = ch[i+1];
      if (last === 'i' && !isVow(next) && next !== '\u0651' && !['\u064B','\u064C','\u064D','\u065E','\u0657','\u0656'].includes(next)) { out[out.length-1] = 'ī'; continue; }
      out.push('y'); continue;
    }
    if (c === '\u06E5') { if (out[out.length-1]==='u') out[out.length-1]='ū'; continue; }
    if (c === '\u06E6') { if (out[out.length-1]==='i') out[out.length-1]='ī'; continue; }
    if (C[c]) { out.push(C[c]); continue; }
  }
  let s = out.join('');
  s = s.replace(/aā/g, 'ā').replace(/uū/g,'ū').replace(/iī/g,'ī').replace(/āā/g,'ā');
  s = s.replace(/\u00A7(sh|th|dh|kh|gh|.)\1/g, '$1-$1').replace(/\u00A7/g,'');
  s = s.replace(/^(a?)l-l[aā]h/, (m,a) => a ? 'allāh' : 'llāh');
  s = s.replace(/ll[aā]h/g, 'llāh');
  s = s.replace(/^ʾ(?=[aiuāīū])/, '').replace(/dtt/g,'dt');
  return s;
}

function translitVerse(ar) {
  const words = ar.split(' ').filter(Boolean);
  let prevVowel = false;
  const parts = words.map((w, idx) => {
    const t = translitWord(w, prevVowel, idx === words.length-1);
    prevVowel = /[aiuāīū]$|[aiu]n$/.test(t);
    return t;
  });
  let line = parts.join(' ').replace(/- /g, '-').replace(/ +/g,' ').trim();
  // forme pausale
  const lastW = words[words.length-1] || '';
  if (/an$/.test(line) && /[\u064B\u0657]\u0627$|\u0649\u064B?$/.test(lastW.replace(/[\u06D6-\u06DC]/g,''))) line = line.replace(/an$/, 'ā');
  else line = line.replace(/(un|in|an|u|i|a)$/,'').replace(/ $/,'');
  // majuscule initiale
  line = line.replace(/^([ʿʾ]?)([a-zṣḍṭẓḥāīū])/, (m,p,c) => p + c.toUpperCase());
  line = line.replace(/^llāh/, 'Allāh').replace(/^l-/, 'Al-');
  return line;
}

// --- Extraction ---
// Sourates à extraire. Par défaut celles déjà présentes dans base.json ;
// passer des numéros en arguments pour en traiter d'autres :
//   node build/extract.js 12 36 55
const args = process.argv.slice(2).map(Number).filter(n => n >= 1 && n <= 114);
const NEEDED = args.length ? args : [1, ...Array.from({length:34},(_,k)=>78+k)];
const base = {};
for (const n of NEEDED) {
  const s = quran.find(x => x.id === n);
  base[n] = { name: s.transliteration, ar_name: s.name, total: s.total_verses,
    verses: s.verses.map(v => {
      const uWords = v.text.replace(/[\u06D6-\u06DC\u06DE\u06E0\u06E9]/g,'').trim().split(/ +/);
      let pv = false;
      const words = uWords.map((w, idx) => {
        const t = translitWord(w, pv, idx === uWords.length-1);
        pv = /[aiuāīū]$|[aiu]n$/.test(t);
        return { ar: simplify(w), tr: t };
      });
      return { n: v.id, ar: simplify(v.text), translit: translitVerse(v.text), words };
    }) };
}
fs.writeFileSync(path.join(__dirname, 'base.json'), JSON.stringify(base, null, 1));

// Validation : comparer S112 avec le fichier existant
const s112 = quran.find(x=>x.id===112);
s112.verses.forEach(v => console.log(v.id, simplify(v.text), ' | ', translitVerse(v.text)));
const s1 = quran.find(x=>x.id===1);
s1.verses.forEach(v => console.log(v.id, simplify(v.text), ' | ', translitVerse(v.text)));
