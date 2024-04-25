// Toggle Dark Mode
const toggleDarkModeBtn = document.querySelector('.dark-mode-btn');

toggleDarkModeBtn.addEventListener('click', () => {

	document.body.classList.toggle('dark-mode-on');
	document.body.classList.toggle('dark-mode-off');

});

// Search Funtion
const searchInputEl = document.querySelector('.selection-section__search-input');

function searchCountry(countries) {
	const searchValue = searchInputEl.value;
	let searchedCountries = [];

	countries.forEach(country => {
		const countryName = country.name.toLowerCase();

		if (countryName.includes(searchValue)) {
			searchedCountries.push(country);
		}

	});

	return searchedCountries;
}

function loopAndAppendHTML(countries) {
	let countriesHTML = '';

	countries.forEach(country => {

		countriesHTML += `
			<div class="country-card">
				<div class="country-card__image-container">
					<img src="${country.flag}" alt="country" class="country-card__img">
				</div>

				<div class="country-card__details">
					<h2 class="country-card__country-name">${country.name}</h2>
					<p class="country-card__info">
						<span class="country-card__poulation-text country-card__details-text">Population: </span>
						<span class="country-card__poulation-number country-card__details-number">${country.population.toLocaleString()}</span>
					</p>
					<p class="country-card__info">
						<span class="country-card__poulation-text country-card__details-text">Region: </span>
						<span class="country-card__poulation-number country-card__details-number">${country.region}</span>
					</p>
					<p class="country-card__info">
						<span class="country-card__poulation-text country-card__details-text">Capital: </span>
						<span class="country-card__poulation-number country-card__details-number">${country.capital}</span>
					</p>
				</div>
			</div>
		`;
	});
	
	document.querySelector('.main-section__container').innerHTML = countriesHTML;
}


// Fetching Countries
fetch('data.json')
.then(res => res.json())
.then(countries => {

	let countriesHTML = '';

	loopAndAppendHTML(countries);

	searchInputEl.addEventListener('input', () => {
		const searchedCountries = searchCountry(countries);

		loopAndAppendHTML(searchedCountries);

	});

});