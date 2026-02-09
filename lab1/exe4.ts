// C:\Users\RuairiPfetzingDonnel\Desktop\Lab1>C:\Users\RuairiPfetzingDonnel\Desktop\node-v24.13.0-win-x64\node-v24.13.0-win-x64\tsc exe4.ts

//Function count checks how many chars are in the string
function count(word: string):number{
    //returns length with spaces
    return word.length;   
}
// Function countw0spaces checks how many chars their are in the string except the spaces at the start or the end
function countw0spaces(word: string):number{
    //returns length without spaces
    return word.trim().length;
}
// Function can do both
function countBoth(word: string, TF?: boolean):number{
    let count:number=0;
    // Checks for true or false
    if (TF){
        // Defines count as length with spaces
        count= word.length;
    }
    else {
        // Defines count as length w/0 spaces
        count= word.trim().length;
    }
    // DEBUG
    console.log(TF);
    // return value
    return count;
}

// Variable Declarations
let word: string;

// Calling functions and displaying them
console.log(count(" test 1 "));
console.log(countw0spaces(" test 1 "));
console.log(countBoth(" test 1 ",true));
console.log(countBoth(" test 1 ",false));
console.log(countBoth(" test 1 "));