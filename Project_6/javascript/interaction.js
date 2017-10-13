var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var container;

function displayUser() {
    container = document.getElementById('container');
    users.forEach(function(user) {
        console.log(user);
        console.log(container);
        container.innerHTML += "<div id=" + user + "class =''>" + user + "</div>";
    })
}

$("document").ready(displayUser);