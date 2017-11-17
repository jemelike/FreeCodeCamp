/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of 
the same value as these arguments.

*/

function destroyer(arr) {
    var original = arguments[0];
    var holdArg = Array.from(arguments);
    var new_arr = [];
    holdArg.shift();
    // Remove all the values

    new_arr = original.filter(function(i) {
        if (holdArg.indexOf(i) == -1)
            return i;
    });

    original = new_arr;
    return original;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);