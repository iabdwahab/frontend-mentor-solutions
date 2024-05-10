// Start Header Nav Menu
const headerEl = document.querySelector('.header');
const headerMenuBtn = document.querySelector('.header__nav-menu-btn');
const headerNavCloseBtn = document.querySelector('.header__nav-menu-top-close-btn');

headerMenuBtn.addEventListener('click', () => {
  headerEl.classList.add('header__menu-nav--open');
});

headerNavCloseBtn.addEventListener('click', () => {
  headerEl.classList.remove('header__menu-nav--open');
})
// End Header Nav Menu


// Features Section Selector
const featuresSelectorBtns = document.querySelectorAll('.features-section__selector-btn');

featuresSelectorBtns.forEach((btn) => {

  btn.addEventListener('click', () => {
    const featureName = btn.dataset.featureName;

    document.querySelector('.features__feature--active').classList.remove('features__feature--active');
    document.querySelector(`.features__feature-${featureName}`).classList.add('features__feature--active');


    document.querySelector('.features-section__selector-btn--active').classList.remove('features-section__selector-btn--active');
    btn.classList.add('features-section__selector-btn--active');

  });

});

// Question Section
const questionContainers = document.querySelectorAll('.question-container');
const questionsBtns = document.querySelectorAll('.question-container');

questionsBtns.forEach((btn, index) => {

  btn.addEventListener('click', () => {

    document.querySelector('.question-container--active').classList.remove('question-container--active');
    questionContainers[index].classList.add('question-container--active');

  });

});