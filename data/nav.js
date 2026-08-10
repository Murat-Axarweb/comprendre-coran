// ============================================================
// NAVIGATION PARTAGÉE — Comprendre le Coran
// ------------------------------------------------------------
// Les liens de navigation sont écrits dans le HTML de chaque page : la
// navigation reste donc visible même si ce script échoue ou tarde. Ce
// module ne fait que l'enrichir :
//   1. menu burger sur mobile ;
//   2. sélecteur de langue déroulant ;
//   3. libellé du lien compte (« Connexion / Inscription » ou
//      « Mon compte (Prénom) »).
//
// scripts/validate-nav.mjs vérifie que les 8 navbars restent identiques.
// ============================================================

export const LANGS = [
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'tr', flag: '🇹🇷', label: 'Türkçe' }
];

const ACCOUNT_LABELS = {
  fr: { out: 'Connexion / Inscription', in: 'Mon compte' },
  en: { out: 'Sign in / Sign up',       in: 'My account' },
  tr: { out: 'Giriş / Kayıt',           in: 'Hesabım' }
};

function currentLang() {
  try { return localStorage.getItem('lang') || 'fr'; } catch (e) { return 'fr'; }
}

// ============================================================
// LIEN COMPTE
// ============================================================
// Le prénom est mémorisé localement : le bon libellé s'affiche dès le
// premier rendu des pages suivantes, sans passer par un état transitoire.
// '' signifie « déconnecté » (valeur enregistrée, pas absente), ce qui
// évite de retomber dans l'état « inconnu » à chaque page.
const NAME_KEY = 'cc_account_name';
let _profileName = null;
let _authWired = false;

function readName() {
  try {
    const v = localStorage.getItem(NAME_KEY);
    return v ? v : null;
  } catch (e) { return null; }
}
function writeName(name) {
  try { localStorage.setItem(NAME_KEY, name || ''); } catch (e) {}
}

// ATTENTION — ne pas remplacer par un simple querySelector sur
// a[href="compte.html"] : Netlify sert les pages sans extension (« Pretty
// URLs »), si bien que le href vu par le navigateur est « /compte » en
// production alors que le dépôt contient « compte.html ». On compare donc
// le nom de page, sans extension ni chemin.
function accountLink() {
  const liens = document.querySelectorAll('.nav-links a[href]');
  for (const a of liens) {
    const href = (a.getAttribute('href') || '').split('?')[0].split('#')[0];
    const page = href.split('/').pop().replace(/\.html$/i, '');
    if (page === 'compte') return a;
  }
  return null;
}

export function applyAccountLabel() {
  const link = accountLink();
  if (!link) return;
  const L = ACCOUNT_LABELS[currentLang()] || ACCOUNT_LABELS.fr;
  const want = _profileName ? `${L.in} (${_profileName})` : L.out;
  if (link.textContent !== want) link.textContent = want;
}

async function refreshAccountLink() {
  _profileName = readName();
  applyAccountLabel();
  try {
    const Auth = await import('./auth.js');

    const user = await Auth.getUser();
    if (!user) {
      if (_profileName !== null) { _profileName = null; writeName(null); applyAccountLabel(); }
    } else {
      let name = null;
      try {
        const prof = await Auth.getProfile();
        if (prof && prof.display_name) name = String(prof.display_name).trim().split(' ')[0];
      } catch (e) { /* profil indisponible */ }
      if (!name) name = (user.email || '').split('@')[0];
      if (name !== _profileName) { _profileName = name; writeName(name); applyAccountLabel(); }
    }

    // Suivre connexions, déconnexions et restaurations de session.
    if (!_authWired) {
      _authWired = true;
      Auth.onAuthChange((session) => {
        if (!session) { _profileName = null; writeName(null); applyAccountLabel(); }
        refreshAccountLink();
      });
    }
  } catch (e) { /* hors ligne : état déconnecté conservé */ }
}

// ============================================================
// SÉLECTEUR DE LANGUE
// ============================================================
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

  const btn = host.querySelector('#lang-current');
  const menu = host.querySelector('#lang-menu');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.setAttribute('aria-expanded', menu.classList.toggle('open') ? 'true' : 'false');
    closeBurger();
  });

  menu.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      const code = opt.getAttribute('data-lang');
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
  applyAccountLabel();   // le libellé dépend de la langue
}

// ============================================================
// MENU BURGER (mobile)
// ============================================================
function closeBurger() {
  const links = document.querySelector('.nav-links');
  const burger = document.getElementById('nav-burger');
  if (links) links.classList.remove('open');
  if (burger) { burger.setAttribute('aria-expanded', 'false'); burger.textContent = '☰'; }
}

function buildBurger() {
  const bar = document.querySelector('.navbar');
  const links = document.querySelector('.nav-links');
  if (!bar || !links || document.getElementById('nav-burger')) return;

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
  bar.appendChild(btn);

  links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeBurger));
}

// Fermeture au clic ailleurs et à la touche Échap.
function wireGlobalClose() {
  const closeAll = () => {
    const menu = document.getElementById('lang-menu');
    if (menu) menu.classList.remove('open');
    closeBurger();
  };
  document.addEventListener('click', closeAll);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });
}

// ============================================================
export function initNav(opts) {
  opts = opts || {};
  buildBurger();
  buildLangSelect(opts.onLangChange);
  wireGlobalClose();
  refreshAccountLink();
}
