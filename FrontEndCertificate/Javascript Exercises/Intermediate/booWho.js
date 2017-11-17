/**Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Boolean Objects
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.
  */

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if (typeof bool === 'boolean')
        bool = true;
    else
        bool = false;
    console.log(bool);
    return bool;
}


booWho(null);
console.log("begin:");
booWho(true) // should return true.
booWho(false) //should return true.
booWho([1, 2, 3]) // should return false.
booWho([].slice) // should return false.
booWho({ "a": 1 }) // should return false.
booWho(1) // should return false.
booWho(NaN) // should return false.
booWho("a") //should return false.
booWho("true") // should return false.
booWho("false") //should return false.