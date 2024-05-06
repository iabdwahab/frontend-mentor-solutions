const headerEl = document.querySelector('.header');
const headerMenuBtn = document.querySelector('.header__nav-menu-btn');
const headerNavCloseBtn = document.querySelector('.header__nav-menu-top-close-btn');

headerMenuBtn.addEventListener('click', () => {
  headerEl.classList.add('header__menu-nav--open');
});

headerNavCloseBtn.addEventListener('click', () => {
  headerEl.classList.remove('header__menu-nav--open');
})