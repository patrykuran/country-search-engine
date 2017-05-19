var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Colombia';
    $.ajax({
        url: url + countryName,
        method: "GET",
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        $('<li>').text(item.name + ' (native name: ' + item.nativeName + '), capital: ' + item.capital + ', currency: ' + item.currencies.code + ', language: ' + item.languages.name).appendTo(countriesList);
        //jak dostać się do wartości currency i language? //
    });
}