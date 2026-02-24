const prompt = require("prompt-sync")({ sigint: true })

// prompt lets us get user input
// prompt('message')
// console.log("Enter your name")
// const name = prompt("> ");
// console.log("Your name is: " + name);

//console.log("Enter your favorite coding language")
//const language = prompt("> ");
//console.log("Your favorite coding language is:" + language)

console.log("Enter a number")
// prompt returns a string, so if you need a number, you will need to cast
// Number (string) convert from a string to a number
let num = Number(prompt("> "));
console.log("Your number +5: ")
console.log(num + 5)