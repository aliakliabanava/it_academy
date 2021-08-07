function enterInfo () { 
var countryName = prompt('Ведите название страны');
var capitalName = prompt('Ведите столицу страны');

addCountry (countryName, capitalName);
}

function getInfo () {
    var countryName = prompt('Ведите название страны');
    console.log ( getCountryInfo (countryName));
}

function countryList () {
    console.log (getAllCountries());
    
}

function delCountry () {
    var countryName = prompt('Ведите название страны');
    deleteCountry (countryName);
}