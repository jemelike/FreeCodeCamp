function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    if (target.length - str.length < 0) {
        return str.substr(str.length - target.length, undefined) == target;
    } else {
        return false;
    }
}

console.log(confirmEnding("Bastian", "n"));