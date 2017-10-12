var currentTemp = 0;
var tempUnits = "C";

function removeContent() {
    $("#location").remove();
    $("#temperature").remove();
}

function appendContent(loc, temp, weather) {
    $("#inner_container").append(
        "<div id='location'>" + loc + " - " + weather.description + "</div>" +
        "<div id='temperature'>" +
        "<div id='temp_left'>" +
        "<img src='" + weather.icon + "'/></div>" +
        "<div id='temp_left'><p id='p_temp'>" + temp + " \xB0" + tempUnits + "</p><button onclick = 'convert()'>Convert to</button></div></div>");
    currentTemp = temp;
}

function convert() {

    if (tempUnits === "C") {
        currentTemp = (currentTemp * 9 / 5) + 32;
        tempUnits = "F";
    } else if (tempUnits === "F") {
        currentTemp = (currentTemp - 32) * 5 / 9;
        tempUnits = "C";
    }

    document.getElementById("p_temp").innerHTML = currentTemp.toFixed(2) + " \xB0" + tempUnits;

}

function getLocation() {
    if (navigator.geolocation) {
        console.log("entered");
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log("printed");
    } else {
        document.getElementByID("main").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude)
        .done(function(locationData) {
            console.log(weather_info);

            removeContent();
            appendContent(locationData.name, locationData["main"].temp, locationData["weather"][0]);
        })
        .fail(function() { console.log("failed") });
}

function updatePage() {
    getLocation();
}

$(document).ready(
    updatePage()
);