function findLongestWord(str) {
    var longest = 0;
    var strArray = str.split(" "); //creates an array of strings 

    //performs a linear search for the longest word
    for (var i = 0; i < strArray.length; i++) {
        if (strArray[i].length > strArray[longest].length)
            longest = i;
    }

    str = strArray[longest];
    return str.length;
}

findLongestWord("Google do a barrel roll");