/**Drop it
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.shift()
Array.prototype.slice()
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum

  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.
  */

function dropElements(arr, func) {
    if (arr.length > 0 && func(arr[0]) == false)
        arr.shift();
    else
        return arr;
    // Drop them elements.
    if (func(arr[0]) != true)
        dropElements(arr, func);
    else
        console.log(arr);

    return arr;
}

dropElements([1, 2, 3], function(n) { return n < 3; });

dropElements([1, 2, 3, 4], function(n) { return n >= 3; }) //should return [3, 4].
dropElements([0, 1, 0, 1], function(n) { return n === 1; }) //should return [1, 0, 1].
dropElements([1, 2, 3], function(n) { return n > 0; }) //should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) { return n > 5; }) //should return [].
dropElements([1, 2, 3, 7, 4], function(n) { return n > 3; }) //should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) { return n > 2; }) //should return [3, 9, 2].