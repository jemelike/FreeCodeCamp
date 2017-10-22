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
    var subDiff1 = [];
    var subDiff2 = [];

    // Same, same; but different.
    console.log("newArr1: " + arr1);
    arr1.filter(function(x) { if (arr2.indexOf(x) === -1) { return x; } }).forEach(function(element) {
        newArr.push(element);
    }, this);
    arr2.filter(function(x) { if (arr1.indexOf(x) === -1) { return x; } }).forEach(function(element) {
        newArr.push(element);
    }, this);
    console.log("newArr2: " + arr2);
    console.log(newArr);
    return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);