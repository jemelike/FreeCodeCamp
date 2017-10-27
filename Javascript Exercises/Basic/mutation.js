function mutation(arr) {
    hold = arr[0].toLowerCase();
    for (var i = 0; i < arr[1].length; i++) {
        if (hold.indexOf(arr[1][i].toLowerCase()) == -1)
            return false;
    }
    return true;
}

mutation(["hello", "hey"]);