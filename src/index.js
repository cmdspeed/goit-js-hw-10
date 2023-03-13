import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const searchInput = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const search = event => {
    const value = event.target.value.trim();
    if (value.length > 0) {
        console.log(fetchCountries(value));
    }
};
// console.log(fetchCountries(`poland`));
searchInput.addEventListener('input', debounce(search, DEBOUNCE_DELAY));