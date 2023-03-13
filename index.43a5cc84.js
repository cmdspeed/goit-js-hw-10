document.querySelector("#search-box");console.log(fetch(`https://restcountries.com/v3.1/name/${"poland"}?fullText=true`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})));
//# sourceMappingURL=index.43a5cc84.js.map
