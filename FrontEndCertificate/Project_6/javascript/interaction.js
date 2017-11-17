var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var container;

function online(stream) {
    if (stream == null)
        return "offline";
    else
        return "online";
}

function displayUser() {
    container = document.getElementById('user_list');
    users.forEach(function(user) {
        $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + user + "/").done(
            function(data) {
                console.log(" user: " + user + " value:" + data.stream);
                var isOnline = online(data.stream);
                container.innerHTML += "<li id='" + user + "'class ='item'>" + user + " <p class='status " + isOnline + "'>" + isOnline + "</p></li>";
                if (isOnline == "online") {
                    var temp = document.getElementById(user);
                    console.log("temp: " + temp + " user: " + user);
                    temp.innerHTML += "<p>Game: " + data.stream.game + " Viewer: " + data.stream.viewers + "Mature" + data.channel + "</p>";
                }
            }
        );
    })
}

$("document").ready(displayUser);