const input = require('readline-sync');
let str = "LaunchCode";

let numLetters = input.question("How many lettes do you want to move? ");

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let modifiedStr = str.slice(numLetters) + str.slice(0,numLetters);

//Use a template literal to print the original and modified string in a descriptive phrase.
//console.log(`The original string was ${str}, however the new modified strng is ${modifiedStr}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
// user input segment above 

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if(numLetters > str.length) {
    console.log(`You asked for ${numLetters} letters to be moved, but that is longer than the original string. So we moved only 3 letters giving you the result of nchCodeLau.`);
    numLetters = 3;
}
else {
    console.log(`The original string was ${str}, however the new modified strng is ${modifiedStr}.`);
}
 

