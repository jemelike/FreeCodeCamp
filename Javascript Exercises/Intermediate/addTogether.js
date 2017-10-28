/**Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Arguments object
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

function addTogether(num1, num2) {

    var holder = num1;
    if (typeof num1 === 'number') {
        if (typeof num2 === 'undefined') {
            return function(num) {
                if (typeof num === 'number')
                    return num + holder;
            };
        } else if (typeof num2 === 'number') {
            return num1 + num2;
        }
    } else {
        return undefined;
    }
}

console.log(addTogether(2, 3));

addTogether(2, 3) // should return 5.

console.log(addTogether(2)(3)) // should return 5.
console.log(addTogether("http://bit.ly/IqT6zt")) // should return undefined.
console.log(addTogether(2, "3")) // should return undefined.
console.log(addTogether(2)([3])) // should return undefined