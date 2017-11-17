function repeatStringNumTimes(str, num) {
    // repeat after me
    var str_rep = "";
    for (var i = 0; i < num; i++)
        str_rep += str;

    str = str_rep;
    return str;
}

repeatStringNumTimes("abc", 3);