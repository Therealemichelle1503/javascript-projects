//Create an anonymous function and set it equal to a variable.

let array1 = ['Elocution', 21, 'Clean teeth', 100]
let trippledNum = function(someNum) {
    for (let i = 0; i < array1.length; i++);
    if (array1[i] === "number") {
        return someNum * 3;
    } else if (array1[i] === "string") {
        return ('ARRR!');
    } else {
        return someNum;
    }
}
console.log(trippledNum(array1));

arr = arr.map(element) => {
    return trippledNum(element);
}

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];
