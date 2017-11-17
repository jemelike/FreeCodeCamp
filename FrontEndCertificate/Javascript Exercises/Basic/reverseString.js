function reverseString(str) {
    var hold;
    var newStr = "";

    hold = str.split(""); //transforms str into an array
    console.log(hold);
    for (var i = hold.length - 1; i >= 0; i--) //reverses the string
    {
        newStr += hold.pop();
    }

    str = newStr;
    console.log(str);
    return str;
}
console.log("Method Call");
reverseString("hello");
console.log("Method End");