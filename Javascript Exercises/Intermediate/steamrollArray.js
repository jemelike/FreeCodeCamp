/**Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()
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

function steamrollArray(arr) {
    // I'm a steamroller, baby
    return arr;
}

steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]);

steamrollArray([
        [
            ["a"]
        ],
        [
            ["b"]
        ]
    ]) //should return ["a", "b"].
steamrollArray([1, [2],
        [3, [
            [4]
        ]]
    ]) //should return [1, 2, 3, 4].
steamrollArray([1, [],
        [3, [
            [4]
        ]]
    ]) //should return [1, 3, 4].
steamrollArray([1, {},
        [3, [
            [4]
        ]]
    ]) //should return [1, {}, 3, 4].