// C:\Users\RuairiPfetzingDonnel\Desktop\Lab1>C:\Users\RuairiPfetzingDonnel\Desktop\node-v24.13.0-win-x64\node-v24.13.0-win-x64\tsc exe4.ts
//Function count checks how many chars are in the string
function count(word) {
    //returns length with spaces
    return word.length;
}
// Function countw0spaces checks how many chars their are in the string except the spaces at the start or the end
function countw0spaces(word) {
    //returns length without spaces
    return word.trim().length;
}
// Function can do both
function countBoth(word, TF) {
    var count = 0;
    if (TF) {
        count = word.length;
    }
    else {
        count = word.trim().length;
    }
    console.log(TF);
    return count;
}
var word;
console.log(count(" test 1 "));
console.log(countw0spaces(" test 1 "));
console.log(countBoth(" test 1 ", true));
console.log(countBoth(" test 1 ", false));
console.log(countBoth(" test 1 "));
