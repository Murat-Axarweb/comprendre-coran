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

async function refreshAccountLink() {
  const link = document.querySelector('.nav-links a[href="compte.html"]');
  if (!link) return;
  const lang = currentLang();
  const L = ACCOUNT_LABELS[lang] || ACCOUNT_LABELS.fr;
  // Par défaut (et si Supabase est indisponible) : état déconnecté.
  link.textContent = L.out;
  link.removeAttribute('data-i18n'); // évite que l'i18n de la page l'écrase
  try {
    const Auth = await import('./auth.js');
    const prof = await Auth.getProfile();
    if (prof) {
      const name = (prof.display_name || '').trim().split(' ')[0];
      link.textContent = name ? `${L.in} (${name})` : L.in;
    }
  } catch (e) { /* hors ligne : on garde l'état déconnecté */ }
}

export { refreshAccountLink };

export function initNav(opts) {
  opts = opts || {};
  buildBurger();
  buildLangSelect(opts.onLangChange);
  wireGlobalClose();
  refreshAccountLink();
}
