/*
foundCat
Write a function foundCat that takes in an array of strings. If the word 'cat' is in the array, return true. or else return false. You can assume all strings will be lower case.

Examples:

let catArray = ["dog", "bear", "cheese", "cat", "fox"];
let noCatArray = ["hi", "bye", "why", "try"];

foundCat(catArray) => true
foundCat(noCatArray) => false

*/

const foundCat = (arr) => {

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "cat"){
            return true; // cat has been found!
        }
    }

    // boolean
    // every element has been checked, cat has NOT been found!
    return false;
}

// const foundCat = (arr) => {
//     return arr.includes("cat");
// }

let catArray = ["dog", "bear", "cheese", "cat", "fox"];
let noCatArray = ["hi", "bye", "why", "try"];
console.log(foundCat(catArray))
console.log(foundCat(noCatArray))
