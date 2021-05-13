
function loadData() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            displayShowData(data);
        })
}

loadData();


const displayShowData = (data) => {
    const countries = document.getElementById('country-container');

    for (let i = 0; i < data.length; i++) {
        const country = data[i];
        // console.log(country);

        const div = document.createElement('div');
        div.className = 'country';

        div.innerHTML = `
            <h4> ${country.name}</h4>
            <h6>Capital: ${country.capital}</h6>
            <a href="#country-details" ><button onClick="displayCountryDetails('${country.name}')"  type="button" class="my-3 btn btn-outline-primary">Show Details</button></a>

        `;

        countries.appendChild(div);
    }
}


const displayCountryDetails = name => {
    const URL = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            renderCountryInfo(data[0]);
        })
}


const renderCountryInfo = country => {
    // console.log(country);
    const { name, flag, capital, area, nativeName, numericCode, currencies, population, region, timezones, borders, languages, subregion, topLevelDomain, callingCodes } = country;
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
        <img src=${flag} alt="flag" id="flag" />
        <h2 class="my-3">Name: ${name}</h2>
        <p>Native Name: ${nativeName}</p>
        <p>Capital: ${capital}</p>
        <p>Population: ${population}</p>
        <p>Languages: ${languages[0].name} (${languages[0].nativeName})</p>
        <p>Currencies: ${currencies[0].name}, Code: ${currencies[0].code}, Symbol: ${currencies[0].symbol}</p>
        <p>Region: ${region}</p>
        <p>Sub Region: ${subregion}</p>
        <p>Area: ${area}</p>
        <p>Numeric Code: ${numericCode}</p>
        <p>Calling Code: ${callingCodes}</p>
        <p>TimeZone: ${timezones}</p>
        <p>Top Domain: ${topLevelDomain}</p>
        <p>Borders: ${borders}</p>
    `;
}