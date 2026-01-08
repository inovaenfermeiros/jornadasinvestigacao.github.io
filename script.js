// Menu mobile + pequenos detalhes
const hamburger = document.querySelector('.hamburger');
const topnav = document.querySelector('.topnav');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

if (hamburger) {
  hamburger.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Fechar menu ao clicar num link
  document.querySelectorAll('.topnav a').forEach(a => {
    a.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}
