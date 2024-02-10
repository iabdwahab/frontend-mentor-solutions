const questionContainers = document.querySelectorAll('.question-container');

questionContainers.forEach((container, index) => {

  container.addEventListener('click', () => {
    // Hide previous selected answer.
    document.querySelector('.answer--show').classList.remove('answer--show');

    // Show selected answer
    document.querySelectorAll('.answer')[index].classList.add('answer--show');


    // changing icons [show-hide]
    document.querySelector('.hide-icon').src = 'assets/imgs/icon-plus.svg';

    document.querySelector('.hide-icon').classList.remove('hide-icon');

    document.querySelectorAll('.show-hide-icon')[index].src = 'assets/imgs/icon-minus.svg';

    document.querySelectorAll('.show-hide-icon')[index].classList.add('hide-icon');

  });
});