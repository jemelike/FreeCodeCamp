/**
 * Binary Agents
 * 
 * Return an English translated sentence of the passed binary string.
The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()

Algorithm:
1. Split the string
2. convert the binary string  to an integer
3. convert integers to words
4. join the in words together
*/
function convertToInt(str) {
    var counter = str.length - 1;
    var total = 0;
    str.split('').forEach(function(i) {
        total += Math.pow(2, counter) * parseInt(i);
        counter--;
    })

    return total;
}

function binaryAgent(str) {
    const binary_string = str.split(" ");
    var int_binary = [];
    var result = "";
    binary_string.forEach(function(i) { int_binary.push(convertToInt(i)) })

    int_binary.forEach(function(element) {
        result += String.fromCharCode(element);
    });

    console.log(result);
    return result;

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") //should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") //should return "I love FreeCodeCamp!"