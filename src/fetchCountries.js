const API = 'https://restcountries.com/v3.1/name';

function fetchCountries(name) {
    return fetch(`${API}/${name}?fullText=true`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}
export { fetchCountries };