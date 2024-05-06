const headerMenuBtn = document.querySelector('.header__menu-btn');
const headerNavLinksEl = document.querySelector('.header__nav-links');
const headerMenuOverlay = document.querySelector('.header__menu-overlay');


headerMenuBtn.addEventListener('click', () => {

  headerNavLinksEl.classList.add('header__nav-links--active');
  headerMenuOverlay.classList.add('header__menu-overlay--active');
  
  headerMenuOverlay.addEventListener('click', () => {

    headerNavLinksEl.classList.remove('header__nav-links--active');
    headerMenuOverlay.classList.remove('header__menu-overlay--active');

  })
});