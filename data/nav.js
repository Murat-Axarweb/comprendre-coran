// ============================================================
// NAVIGATION PARTAGÉE — Comprendre le Coran
// Pilote le menu burger (mobile) et le sélecteur de langue déroulant.
// Autonome : construit lui-même le markup du sélecteur, de sorte que les
// pages n'aient qu'un conteneur vide à fournir.
//
// Utilisation dans une page :
//   import { initNav } from './data/nav.js';
//   initNav({ onLangChange: (lang) => { ... } });
// ============================================================

export const LANGS = [
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'tr', flag: '🇹🇷', label: 'Türkçe' }
];

function currentLang() {
  try { return localStorage.getItem('lang') || 'fr'; } catch (e) { return 'fr'; }
}

// Construit le sélecteur dans #lang-select (créé par la page).
function buildLangSelect(onLangChange) {
  const host = document.getElementById('lang-select');
  if (!host) return;
  const lang = currentLang();
  const cur = LANGS.find(l => l.code === lang) || LANGS[0];

  host.className = 'lang-select';
  host.innerHTML = `
    <button class="lang-current" id="lang-current" aria-haspopup="true" aria-expanded="false">
      <span class="flag">${cur.flag}</span><span class="label">${cur.code.toUpperCase()}</span><span class="chev">▼</span>
    </button>
    <div class="lang-menu" id="lang-menu" role="menu">
      ${LANGS.map(l => `
        <button class="lang-option ${l.code === lang ? 'active' : ''}" data-lang="${l.code}" role="menuitem">
          <span class="flag">${l.flag}</span><span>${l.label}</span><span class="check">✓</span>
        </button>`).join('')}
    </div>`;

  const btn = document.getElementById('lang-current');
  const menu = document.getElementById('lang-menu');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    closeBurger();
  });

  menu.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const code = opt.getAttribute('data-lang');
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      // La page applique le changement (setLang global ou callback fourni).
      if (typeof onLangChange === 'function') onLangChange(code);
      else if (typeof window.setLang === 'function') window.setLang(code);
      refreshLangSelect();
    });
  });
}

// Met à jour l'affichage du sélecteur après un changement de langue.
export function refreshLangSelect() {
  const lang = currentLang();
  const cur = LANGS.find(l => l.code === lang) || LANGS[0];
  const btn = document.getElementById('lang-current');
  if (btn) {
    const f = btn.querySelector('.flag'), lb = btn.querySelector('.label');
    if (f) f.textContent = cur.flag;
    if (lb) lb.textContent = cur.code.toUpperCase();
  }
  document.querySelectorAll('.lang-option').forEach(o => {
    o.classList.toggle('active', o.getAttribute('data-lang') === lang);
  });
  refreshAccountLink();
}

function closeBurger() {
  const links = document.querySelector('.nav-links');
  const burger = document.getElementById('nav-burger');
  if (links) links.classList.remove('open');
  if (burger) burger.setAttribute('aria-expanded', 'false');
}

function buildBurger() {
  const nav = document.querySelector('.navbar');
  const links = document.querySelector('.nav-links');
  if (!nav || !links || document.getElementById('nav-burger')) return;

  const btn = document.createElement('button');
  btn.className = 'nav-burger';
  btn.id = 'nav-burger';
  btn.setAttribute('aria-label', 'Menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.textContent = '☰';
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? '✕' : '☰';
    const menu = document.getElementById('lang-menu');
    if (menu) menu.classList.remove('open');
  });
  nav.appendChild(btn);

  // Referme le menu après un clic sur un lien.
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    closeBurger();
    btn.textContent = '☰';
  }));
}

// Ferme les menus ouverts au clic ailleurs / à la touche Échap.
function wireGlobalClose() {
  document.addEventListener('click', () => {
    const menu = document.getElementById('lang-menu');
    if (menu) menu.classList.remove('open');
    const burger = document.getElementById('nav-burger');
    if (burger && burger.textContent === '✕') { closeBurger(); burger.textContent = '☰'; }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const menu = document.getElementById('lang-menu');
    if (menu) menu.classList.remove('open');
    const burger = document.getElementById('nav-burger');
    if (burger) { closeBurger(); burger.textContent = '☰'; }
  });
}

// ----- Lien « Compte » dynamique -----
// Déconnecté : « Connexion / Inscription ». Connecté : « Mon compte (Prénom) ».
// Chargé paresseusement : n'empêche jamais la nav de fonctionner.
const ACCOUNT_LABELS = {
  fr: { out: 'Connexion / Inscription', in: 'Mon compte', neutral: 'Compte' },
  en: { out: 'Sign in / Sign up', in: 'My account', neutral: 'Account' },
  tr: { out: 'Giriş / Kayıt', in: 'Hesabım', neutral: 'Hesap' }
};


// ============================================================
// NAVBAR MUTUALISÉE
// Une seule définition des liens pour toutes les pages : plus de
// divergence possible entre les fichiers. La page courante est déduite
// de l'URL. Si le balisage attendu est absent, la navbar est reconstruite.
// ============================================================
const NAV_ITEMS = [
  { href: 'index.html',       key: 'nav_accueil',     fr: 'Accueil',     en: 'Home',       tr: 'Ana Sayfa' },
  { href: 'sourates.html',    key: 'nav_sourates',    fr: 'Sourates',    en: 'Surahs',     tr: 'Sureler' },
  { href: 'vocabulaire.html', key: 'nav_vocabulaire', fr: 'Vocabulaire', en: 'Vocabulary', tr: 'Kelimeler' },
  { href: 'racines.html',     key: 'nav_racines',     fr: 'Racines',     en: 'Roots',      tr: 'Kökler' },
  { href: 'exercices.html',   key: 'nav_exercices',   fr: 'Exercices',   en: 'Exercises',  tr: 'Alıştırmalar' },
  { href: 'revision.html',    key: 'nav_reviser',     fr: 'Réviser',     en: 'Review',     tr: 'Tekrar' },
  { href: 'compte.html',      key: 'nav_compte',      fr: 'Compte',      en: 'Account',    tr: 'Hesap' }
];

// Normalise un href en identifiant de page : « /sourates », « sourates.html »
// et « /sourates.html » donnent tous « sourates ». Indispensable car Netlify
// sert les pages sans l'extension .html.
function pageKey(href) {
  let h = String(href || '').split('?')[0].split('#')[0];
  h = h.split('/').pop() || 'index';
  h = h.replace(/\.html$/i, '');
  return h === '' ? 'index' : h;
}

function currentPage() {
  try { return pageKey(location.pathname); } catch (e) { return 'index'; }
}

// Reconstruit la liste de liens si elle est absente ou incomplète.
let _navBuilt = false;
function ensureNavLinks() {
  if (_navBuilt) return;
  _navBuilt = true;
  const bar = document.querySelector('.navbar');
  if (!bar) return;
  let links = bar.querySelector('.nav-links');
  const here = currentPage();
  if (!links) {
    links = document.createElement('div');
    links.className = 'nav-links';
    const logo = bar.querySelector('.nav-logo');
    if (logo && logo.nextSibling) bar.insertBefore(links, logo.nextSibling);
    else bar.appendChild(links);
  }
  // Liens DÉJÀ présents, comparés sur le nom de fichier (getAttribute renvoie
  // la valeur brute ; la propriété .href, elle, serait absolue et ne
  // correspondrait jamais — c'est ce qui provoquait des doublons).
  const present = new Set();
  links.querySelectorAll('a[href]').forEach(a => present.add(pageKey(a.getAttribute('href'))));

  // Complète uniquement ce qui manque réellement.
  const lang = currentLang();
  NAV_ITEMS.forEach(item => {
    const key = pageKey(item.href);
    if (present.has(key)) return;
    const a = document.createElement('a');
    a.className = 'nav-link' + (key === here ? ' active' : '');
    a.setAttribute('href', item.href);      // valeur brute, pas absolue
    a.textContent = item[lang] || item.fr;
    if (item.href !== 'compte.html') a.setAttribute('data-i18n', item.key);
    links.appendChild(a);
    present.add(key);
  });
}

// Retrouve le lien « Compte » quel que soit le balisage de la page.
// Plusieurs stratégies, de la plus précise à la plus tolérante : certaines
// pages n'ont pas de .nav-links, d'autres utilisent un id, une URL absolue
// ou un href relatif différent.
function findAccountLink() {
  const sels = [
    '.nav-links a[href="compte.html"]',
    '.navbar a[href="compte.html"]',
    'a#nav-compte',
    'nav a[href="compte.html"]',
    'a[href="compte.html"]',
    'a[href="./compte.html"]',
    'a[href="/compte.html"]',
    'a[href="/compte"]',
    'a[href="compte"]'
  ];
  for (const sel of sels) {
    const el = document.querySelector(sel);
    if (el) return el;
  }
  // Dernier recours : tout lien pointant vers la page compte, avec ou sans .html
  const all = document.querySelectorAll('a[href]');
  for (const a of all) {
    if (pageKey(a.getAttribute('href')) === 'compte') return a;
  }
  return null;
}

// Profil mémorisé une fois récupéré (null = déconnecté, undefined = pas encore su).
// Prénom mémorisé localement pour que le libellé soit correct DÈS le premier
// affichage des pages suivantes, sans clignotement
// (« Connexion / Inscription » → « (email) » → « (Prénom) »).
// La valeur reste vérifiée en arrière-plan à chaque page.
const NAME_KEY = 'cc_account_name';

function rememberedName() {
  try {
    const v = localStorage.getItem(NAME_KEY);
    return v === null ? undefined : (v === '' ? null : v);
  } catch (e) { return undefined; }
}
function rememberName(name) {
  try {
    // null = déconnecté : on l'ENREGISTRE (chaîne vide) au lieu d'effacer la
    // clé, sinon l'état serait relu comme « inconnu » au prochain affichage.
    if (name === null) localStorage.setItem(NAME_KEY, '');
    else localStorage.setItem(NAME_KEY, name);
  } catch (e) {}
}

// Efface toute trace (utilisé nulle part par défaut ; utile pour un reset).
function forgetName() {
  try { localStorage.removeItem(NAME_KEY); } catch (e) {}
}

// undefined = inconnu (première visite), null = déconnecté, chaîne = prénom.
let _profileName = rememberedName();
let _authWired = false;

// Applique le bon libellé. Appelée après chaque rendu de page, car les
// fonctions applyI18n()/renderAll() des pages réécrivent le texte du lien.
// Libellé attendu pour l'état courant. UNE SEULE définition, utilisée à la
// fois pour l'affichage et pour la surveillance : elles ne peuvent plus
// diverger (une divergence provoquait une boucle infinie de réécritures).
function expectedAccountLabel() {
  const L = ACCOUNT_LABELS[currentLang()] || ACCOUNT_LABELS.fr;
  // État inconnu (tout premier chargement) : on affiche « Connexion /
  // Inscription », le cas le plus fréquent. Dès qu'une session est connue,
  // la valeur mémorisée prend le relais sans clignotement.
  return _profileName ? `${L.in} (${_profileName})` : L.out;
}

export function applyAccountLabel() {
  const link = findAccountLink();
  if (!link) return;
  // La mémoire locale fait autorité (partagée entre onglets, survit aux
  // changements de page) : on la relit avant d'afficher.
  const stored = rememberedName();
  if (stored !== _profileName) _profileName = stored;
  link.removeAttribute('data-i18n');
  const want = expectedAccountLabel();
  // N'écrire que si nécessaire : évite de déclencher inutilement l'observateur.
  if (link.textContent !== want) link.textContent = want;
}

async function refreshAccountLink() {
  applyAccountLabel();
  try {
    const Auth = await import(new URL('./auth.js', import.meta.url).pathname);

    // 1) Vérification en arrière-plan. On ne modifie l'affichage QUE si le
    //    résultat diffère de ce qui est déjà à l'écran : pas de clignotement.
    const user = await Auth.getUser();
    if (!user) {
      // Plus de session : on oublie le prénom mémorisé (déconnexion faite
      // ici, dans un autre onglet, ou session expirée).
      if (_profileName !== null) { _profileName = null; rememberName(null); applyAccountLabel(); }
      return;
    }
    let name = null;
    try {
      const prof = await Auth.getProfile();
      if (prof && prof.display_name) name = String(prof.display_name).trim().split(' ')[0];
    } catch (e) { /* profil indisponible */ }
    if (!name) name = (user.email || '').split('@')[0];   // repli si display_name vide
    if (name !== _profileName) { _profileName = name; rememberName(name); applyAccountLabel(); }

    // 2) Suivre les connexions / déconnexions (y compris la restauration
    //    de session, qui arrive souvent après le chargement de la page).
    if (!_authWired) {
      _authWired = true;
      Auth.onAuthChange((session) => {
        if (!session) { _profileName = null; rememberName(null); applyAccountLabel(); }
        refreshAccountLink();
      });
    }
  } catch (e) { /* hors ligne : état déconnecté conservé */ }
}

// Réapplique le libellé après tout rendu de la page (protection contre l'écrasement).
function guardAccountLabel() {
  const link = findAccountLink();
  if (!link || typeof MutationObserver === 'undefined') return;
  let fixes = 0;
  const obs = new MutationObserver(() => {
    if (link.textContent === expectedAccountLabel()) return;
    // Garde-fou : au-delà de 20 corrections, on cesse de surveiller plutôt
    // que de risquer une boucle qui figerait la page.
    if (++fixes > 20) { obs.disconnect(); return; }
    applyAccountLabel();
  });
  obs.observe(link, { childList: true, characterData: true, subtree: true });
}

export { refreshAccountLink };

export function initNav(opts) {
  opts = opts || {};
  // Chaque étape est isolée : si l'une échoue, les autres fonctionnent quand même.
  try { ensureNavLinks(); } catch (e) { console.warn('[nav] ensureNavLinks', e); }
  try { buildBurger(); } catch (e) { console.warn('[nav] buildBurger', e); }
  try { buildLangSelect(opts.onLangChange); } catch (e) { console.warn('[nav] buildLangSelect', e); }
  try { wireGlobalClose(); } catch (e) {}
  try { refreshAccountLink(); } catch (e) { console.warn('[nav] account', e); }
  try { guardAccountLabel(); } catch (e) {}
  // Filet de sécurité : certaines pages rendent leur contenu après initNav
  // (rendu différé, données asynchrones). On réapplique le libellé quelques
  // fois pendant les 3 premières secondes, puis on s'arrête.
  let tries = 0;
  const iv = setInterval(() => {
    applyAccountLabel();
    if (++tries >= 6) clearInterval(iv);
  }, 500);
}
