var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$("document").ready(
    users.forEach(function(user) {
        console.log(user);
        $.append(user);
    })
);

/*
}*/