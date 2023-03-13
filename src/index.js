import './css/styles.css';
import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;
const searchInput = document.querySelector('#search-box');

console.log(fetchCountries(`poland`));