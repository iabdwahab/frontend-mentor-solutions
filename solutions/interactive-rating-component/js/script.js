const submitBtn = document.querySelector('.submit-btn');
const selectedRateEl = document.querySelector('.selected-rate');
const rateSection = document.querySelector('.rate-section');
const thanksSection = document.querySelector('.thanks-section');

const btns = document.querySelectorAll('button');

btns.forEach(btn => {
  const label = btn.querySelector('label');

  btn.addEventListener('click', () => {
    label.click();
  })
});

submitBtn.addEventListener('click', e => {
  e.preventDefault();

  const rateInput = document.querySelector('.rate-input:checked');
  if (!rateInput) return;
  const userRate = rateInput.dataset.rate;

  selectedRateEl.innerHTML = userRate;

  rateSection.style.display = 'none';
  thanksSection.style.display = 'flex';
});