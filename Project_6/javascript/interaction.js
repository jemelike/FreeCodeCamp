var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var container;

function displayUser() {
    container = document.getElementById('user_list');
    users.forEach(function(user) {
        console.log(user);
        console.log(container);
        container.innerHTML += "<li id=" + user + "class ='row_item'>" + user + "</li>";
    })
}

$("document").ready(displayUser);