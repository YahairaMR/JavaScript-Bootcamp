const prompt = require("prompt-sync")({ sigint: true });

const passcode = 4198;

// asks the user to guess what the passcode is
// let guess = Number(prompt("Guess the passcode: "));

// if they guess correctly, print "Correct!"
// if not, print "Incorrect"

// if(guess === passcode){
//     console.log("Correct!")
// } else {
//     console.log("Incorrect")
// }

// now, make it so the user gets 5 guesses

// loop
// for (let i = 0; i < 5; i++) {
//   let guess = Number(prompt("Guess the passcode: "));

//   if (guess === passcode) {
//     console.log("Correct!");
//     // ends a loop early
//     // NOT the same as return! return will exit the entire function (or, if there is no function, exit the program)
//     break;
//   }

//   console.log("Incorrect");
// }

// console.log("After the loop!")

// let guess = Number(prompt("Guess the passcode: "));

// user can guess until they get it right

// while loop
/*
    while loops take in a condition and will keep running for as long as the condition is true
    
   while(condition === true){
    // run this code
   
   } 

   "while true, I will do"
*/

// the user has NOT guessed correctly, keep prompting them!
// while(guess !== passcode){
//     // keep prompting the user
//     guess = Number(prompt("Try again: "))
// }
// loop ended, so passcode must be correct!
// console.log("Correct!")

// print out every element in this array 1 number at a time
let myArray = [5, 10, 25, 100, 100000000000];

// going through an array with a while loop
// same as we would with a for loop but the syntax is different
let i = 0;

while (i < myArray.length) {
    console.log(myArray[i]);

    // i++;
}

// while loops are generally better:
// 1. when dealing with code that we want to run indefinitely
// 2. when dealing with multiple conditions 
// but you can still use them for what you would do with a for loop!!

// let boolean1 = true;
// while(boolean1 === true){
//     console.log("hi!")
// }