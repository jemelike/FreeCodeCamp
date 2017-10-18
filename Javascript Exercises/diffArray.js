/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()*/
function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    console.log("newArr: " + arr1);
    newArr += arr1.filter(function(x) { if (arr2.indexOf(x) === -1) { return x; } });
    console.log("newArr: " + newArr);
    newArr += arr2.filter(function(x) { if (arr1.indexOf(x) === -1) { newArr.push(x); } });
    console.log("newArr: " + newArr);
    console.log(arr1);
    console.log("arr1: " + arr1 + " arr2: " + arr2 + newArr);
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);