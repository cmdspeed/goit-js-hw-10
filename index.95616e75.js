document.querySelector("#search-box");console.log(fetch(`https://restcountries.com/v3.1/name/${"poland"}?fields=name,capital,population,flags,languages`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})));
//# sourceMappingURL=index.95616e75.js.map
