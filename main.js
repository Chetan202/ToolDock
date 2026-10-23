// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Responsive navigation: explicitly honour [hidden] so desktop styles cannot expose the mobile menu.
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    mobileMenu.hidden = true;
  };

  const openMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close navigation menu');
    mobileMenu.hidden = false;
  };

  menuToggle.addEventListener('click', () => {
    menuToggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', event => {
    if (!mobileMenu.hidden && !menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 761px)').matches) closeMenu();
  });
}

// Give FAQ accordions a tidy one-open-at-a-time behaviour on small screens, while keeping native details semantics.
const faqItems = [...document.querySelectorAll('.faq-item')];
faqItems.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open && window.matchMedia('(max-width: 620px)').matches) {
      faqItems.forEach(other => { if (other !== item) other.open = false; });
    }
  });
});
