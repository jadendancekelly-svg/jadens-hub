// Jaden's Hub: accessible, shared mobile navigation.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.getElementById('mobile-navigation');
  if (!toggle || !nav) return;
  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu(); toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!toggle.contains(event.target) && !nav.contains(event.target)) closeMenu();
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  const desktop = window.matchMedia('(min-width: 901px)');
  desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });
});
