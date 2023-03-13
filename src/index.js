import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const searchInput = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const search = event => {
    const value = event.target.value.trim();

    if (value.length > 0) {
        fetchCountries(value)
            .then(data => {
                if (data.length > 10) {
                    Notiflix.Notify.info(
                        'Too many matches found. Please enter a more specific name.'
                    );
                } else {
                    if (data.length === 1) {
                        countryList.innerHTML = data
                            .map(
                                country =>
                                `<li>
                           <h1>
                          <img src="${country.flags.svg}"  width="30" />
                          ${country.name.common}</h1>
                           <p><b>Capital:</b> ${country.capital}</p>
                           <p><b>Population:</b> ${country.population}</p>
                           <p><b>Languages</b> ${Object.values(
                             country.languages
                           )}</p>
                           </li>`
                            )
                            .join('');
                    } else {
                        countryList.innerHTML = data
                            .map(
                                country =>
                                `<li><img src="${country.flags.svg}"  width="30" /> ${country.name.common}</li>`
                            )
                            .join('');
                    }
                }
            })
            .catch(error => {
                Notiflix.Notify.failure('Oops, there is no country with that name');
            });
    }
};

searchInput.addEventListener('input', debounce(search, DEBOUNCE_DELAY));