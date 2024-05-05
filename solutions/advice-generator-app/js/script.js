const diceBtn = document.querySelector('.dice-btn');
const adviceBodyEl = document.querySelector('.advice-body');
const adviceIdEl = document.querySelector('.advice-id');

generateAdvice();

diceBtn.addEventListener('click', () => {
  generateAdvice();
});

function generateAdvice() {
  fetch('https://api.adviceslip.com/advice')
  .then(res => res.json())
  .then(advice => {

    adviceIdEl.innerHTML = `#${advice.slip.id}`;
    adviceBodyEl.innerHTML = `"${advice.slip.advice}"`;

  });
}