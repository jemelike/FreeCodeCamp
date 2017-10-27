function palindrome(str) {
    str = str.replace(/[^a-z0-9]/gi, ''); // removes all characters except A - Z
    str = str.toLowerCase();
    console.log(str);
    var end = str.length;
    var mid = Math.ceil(end / 2);
    console.log(mid);

    // Good luck!
    for (var i = 0; i < mid; i++)
        if (str[i] != str[end - 1]) {
            return false;
        } else {
            end--;
        }

    return true;
}

console.log(palindrome("1 eye for of 1 eye."));