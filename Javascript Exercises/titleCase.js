function titleCase(str) {
    var strArray = str.split(" ");
    var title = "";

    for (var i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substr(1, undefined).toLowerCase();
    }

    str = strArray.join(" ");

    return str;
}

titleCase("I'm a little tea pot");
/*  
        This is code works but does not meet standard because the .replace function not used.    
         
function titleCase(str) {
    strArray = str.toLowerCase().split(" ");
    var title = "";
    console.log(strArray);

    for (var i = 0; i < strArray.length; i++) {
   hold = strArray[i].charAt(0).toUpperCase();
            hold += strArray[i].substr(1, undefined).toLowerCase();
            title += hold + " ";

        strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substr(1, undefined).toLowerCase();



        console.log(strArray[i]);
        console.log(strArray);
    }

    str = title;
    console.log(strArray);
    console.log(str);

    return str;
}

titleCase("sHoRt AnD sToUt");
*/