const previewedCountry = localStorage.getItem('selectedCountry');

fetch(`https://restcountries.com/v3.1/alpha/${previewedCountry}?fields=name,capital,currencies,flags,languages,population,region,cca3,borders,subregion,tld`)
.then(res => res.json())
.then(country => {

  console.log(country)
  let countryCurrenciesNames = [];
  let countryCurrenciesObject = country.currencies;

  for (const currency in countryCurrenciesObject) {
    countryCurrenciesNames.push(countryCurrenciesObject[currency].name);
  }

  let countryLanguages = [];
  let countryLanguagesObject = country.languages;

  for (const lang in countryLanguagesObject) {
    countryLanguages.push(countryLanguagesObject[lang]);
  }

  document.querySelector('.preview-details').innerHTML = `
    <img src="${country.flags.svg}" alt="${country.flags.alt} Flag" class="preview-details__image">
    <div class="preview-details__text">
      <h2 class="preview-details__country-name">${country.name.common}</h2>
      
      <div class="preview-details__lists">
        <ul class="preview-details__list">
          <li><span class="preview-details__list-title">Native Name:</span> <span class="preview-details__list-description">${country.name.official}</span></li>
          <li><span class="preview-details__list-title">Population:</span> <span class="preview-details__list-description">${country.population.toLocaleString()}</span></li>
          <li><span class="preview-details__list-title">Region:</span> <span class="preview-details__list-description">${country.region}</span></li>
          <li><span class="preview-details__list-title">Sub Region:</span> <span class="preview-details__list-description">${country.subregion}</span></li>
          <li><span class="preview-details__list-title">Capital:</span> <span class="preview-details__list-description">${country.capital}</span></li>
        </ul>
        
        <ul class="preview-details__list">
          <li><span class="preview-details__list-title">Top Level Domain:</span> <span class="preview-details__list-description">${country.tld.join(', ')}</span></li>
          <li><span class="preview-details__list-title">Currencies:</span> <span class="preview-details__list-description">${countryCurrenciesNames.join(', ')}</span></li>
          <li><span class="preview-details__list-title">Languages:</span> <span class="preview-details__list-description">${countryLanguages}</span></li>
        </ul>
      </div>

      <div class="border-countries">
        <p class="border-countries__title">Border Countries:</p>
        <ul class="border-countries__list">
        </ul>
      </div>
    </div>
  `	;
});

