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

// Profil mémorisé une fois récupéré (null = déconnecté, undefined = pas encore su).
let _profileName;
let _authWired = false;

// Applique le bon libellé. Appelée après chaque rendu de page, car les
// fonctions applyI18n()/renderAll() des pages réécrivent le texte du lien.
export function applyAccountLabel() {
  const link = document.querySelector('.nav-links a[href="compte.html"]');
  if (!link) return;
  const L = ACCOUNT_LABELS[currentLang()] || ACCOUNT_LABELS.fr;
  link.removeAttribute('data-i18n');
  link.textContent = _profileName ? `${L.in} (${_profileName})` : L.out;
}

async function refreshAccountLink() {
  applyAccountLabel();
  try {
    const Auth = await import('./auth.js');

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
  const link = document.querySelector('.nav-links a[href="compte.html"]');
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
