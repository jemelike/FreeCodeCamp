function factorialize(num) {
    var result = 1;
    for (var i = num; i > 0; i--)
        result *= i;
    num = result;
    return num;
}

console.log("Method Call");
factorialize(5);
console.log("Method End")