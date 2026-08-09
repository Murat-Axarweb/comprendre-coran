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
  fr: { out: 'Connexion / Inscription', in: 'Mon compte' },
  en: { out: 'Sign in / Sign up', in: 'My account' },
  tr: { out: 'Giriş / Kayıt', in: 'Hesabım' }
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

function currentPage() {
  const f = (location.pathname.split('/').pop() || 'index.html');
  return f === '' ? 'index.html' : f;
}

// Reconstruit la liste de liens si elle est absente ou incomplète.
function ensureNavLinks() {
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
  // Complète les liens manquants (sans toucher à ceux déjà présents).
  const lang = currentLang();
  NAV_ITEMS.forEach(item => {
    if (links.querySelector(`a[href="${item.href}"]`)) return;
    const a = document.createElement('a');
    a.className = 'nav-link' + (item.href === here ? ' active' : '');
    a.href = item.href;
    a.textContent = item[lang] || item.fr;
    if (item.href !== 'compte.html') a.setAttribute('data-i18n', item.key);
    links.appendChild(a);
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
    'a[href="/compte.html"]'
  ];
  for (const sel of sels) {
    const el = document.querySelector(sel);
    if (el) return el;
  }
  // Dernier recours : n'importe quel lien dont l'URL finit par compte.html
  const all = document.querySelectorAll('a[href]');
  for (const a of all) {
    const h = a.getAttribute('href') || '';
    if (h.split('?')[0].split('#')[0].endsWith('compte.html')) return a;
  }
  return null;
}

// Profil mémorisé une fois récupéré (null = déconnecté, undefined = pas encore su).
let _profileName;
let _authWired = false;

// Applique le bon libellé. Appelée après chaque rendu de page, car les
// fonctions applyI18n()/renderAll() des pages réécrivent le texte du lien.
export function applyAccountLabel() {
  const link = findAccountLink();
  if (!link) return;
  const L = ACCOUNT_LABELS[currentLang()] || ACCOUNT_LABELS.fr;
  link.removeAttribute('data-i18n');
  link.textContent = _profileName ? `${L.in} (${_profileName})` : L.out;
}

async function refreshAccountLink() {
  applyAccountLabel();
  try {
    const Auth = await import(new URL('./auth.js', import.meta.url).pathname);

    // 1) Source fiable et rapide : la session (pas besoin de la table profiles).
    const user = await Auth.getUser();
    if (!user) {
      _profileName = null;
      applyAccountLabel();
    } else {
      // Repli immédiat sur l'e-mail, puis affinage avec le profil.
      _profileName = (user.email || '').split('@')[0];
      applyAccountLabel();
      try {
        const prof = await Auth.getProfile();
        if (prof && prof.display_name) {
          _profileName = String(prof.display_name).trim().split(' ')[0];
          applyAccountLabel();
        }
      } catch (e) { /* profil indisponible : on garde l'e-mail */ }
    }

    // 2) Suivre les connexions / déconnexions (y compris la restauration
    //    de session, qui arrive souvent après le chargement de la page).
    if (!_authWired) {
      _authWired = true;
      Auth.onAuthChange(() => { refreshAccountLink(); });
    }
  } catch (e) { /* hors ligne : état déconnecté conservé */ }
}

// Réapplique le libellé après tout rendu de la page (protection contre l'écrasement).
function guardAccountLabel() {
  const link = findAccountLink();
  if (!link || typeof MutationObserver === 'undefined') return;
  const obs = new MutationObserver(() => {
    const L = ACCOUNT_LABELS[currentLang()] || ACCOUNT_LABELS.fr;
    const expected = _profileName ? `${L.in} (${_profileName})` : L.out;
    if (link.textContent !== expected) applyAccountLabel();
  });
  obs.observe(link, { childList: true, characterData: true, subtree: true });
}

export { refreshAccountLink };

export function initNav(opts) {
  opts = opts || {};
  ensureNavLinks();
  buildBurger();
  buildLangSelect(opts.onLangChange);
  wireGlobalClose();
  refreshAccountLink();
  guardAccountLabel();
  // Filet de sécurité : certaines pages rendent leur contenu après initNav
  // (rendu différé, données asynchrones). On réapplique le libellé quelques
  // fois pendant les 3 premières secondes, puis on s'arrête.
  let tries = 0;
  const iv = setInterval(() => {
    applyAccountLabel();
    if (++tries >= 6) clearInterval(iv);
  }, 500);
}
