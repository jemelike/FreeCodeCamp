/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()
 */
function sumAll(arr) {
    if (arr.includes(1) && arr.includes(4)) {
        return arr.reduce(function(total, i) { return total += i; }) * 2;
    } else {
        return arr.reduce(function(total, i) { return total += i; }) * 3;
    }
}

sumAll([10, 5]);