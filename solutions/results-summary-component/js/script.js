
fetch('data/data.json')
.then(response => response.json())
.then(data => manipulateDOM(data));


function manipulateDOM(data) {
  const summarySectionHeading = document.querySelector('.summary-section__heading');

  // To calculate average
  let totalScore = 0;


  data.slice().reverse().forEach((test, index) => {
    const category = test.category.toLowerCase();
    const score = test.score;
    const icon = test.icon;


    totalScore += score;


    const html = `
      <div class="test__title">
        <img src="${icon}" alt="icon" class="test__icon">
        <p class="test__category">${category}</p>
      </div>

      <div class="test__result">
        <p class="test__score">${score}</p>
        <p class="test__total">/ 100</p>
      </div>
    `;

    const article = document.createElement('article');
    article.classList.add('test', `${category}-test`);

    article.innerHTML = html;

    summarySectionHeading.after(article);

  });


  const scoreAverageEl = document.querySelector('.result__score-average');

  // Result score average
  scoreAverageEl.innerHTML = Math.floor(totalScore / data.length);
}