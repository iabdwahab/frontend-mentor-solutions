const iconMenuBtn = document.querySelector('.header__icon-menu-btn');
const iconMenuCloseBtn = document.querySelector('.header__icon-menu-close-btn');
const headerNav = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');

iconMenuBtn.addEventListener('click', () => {
  showMenu();
});

iconMenuCloseBtn.addEventListener('click', () => {
  hideMenu();
});

overlay.addEventListener('click', () => {
  hideMenu();
})

function showMenu() {
  headerNav.classList.add('header__nav--active');
  overlay.classList.add('overlay--active');
}

function hideMenu() {
  headerNav.classList.remove('header__nav--active');
  overlay.classList.remove('overlay--active');
}