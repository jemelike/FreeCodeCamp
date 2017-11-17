/*
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the 
letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters 
are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input 
and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic 
character (i.e. spaces, punctuation), but do pass them on.
*/
function rot13(str) { // LBH QVQ VG!

    var expression = "";
    var value = 0;
    for (var i = 0; i < str.length; i++) {
        value = str.charAt(i).charCodeAt();
        if (value >= 78)
            expression += String.fromCharCode(value - 13);
        else if (value >= 65)
            expression += String.fromCharCode(value + 13);
        else
            expression += str.charAt(i);
    }

    str = expression;
    return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");