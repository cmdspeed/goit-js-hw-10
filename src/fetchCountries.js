const API = 'https://restcountries.com/v3.1/name';
const FIELDS = 'name,capital,population,flags,languages';

function fetchCountries(name) {
    return fetch(`${API}/${name}?fields=${FIELDS}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}
export { fetchCountries };