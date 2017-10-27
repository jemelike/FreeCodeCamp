/*
    Remove all falsy values from an array.

    Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

    Remember to use Read-Search-Ask if you get stuck. 
*/

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(function(content) {
        if (false != Boolean(arr).valueOf())
            return content;
    });
}

console.log(bouncer([7, "ate", "", false, 9]));