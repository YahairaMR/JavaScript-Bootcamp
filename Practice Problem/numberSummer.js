/*

write a program that continuously prompts the user for numbers. When the user enters 0, stop prompting them.
After that print the total out to the user.

Example
Enter some numbers (type 0 when complete):
>20
>10
>3.2
>0

Those numbers sum to 33.2

*/

const prompt = require("prompt-sync")({ sigint: true });

let number = Number(prompt("Enter a number: "));

let sum = number;

while (number !== 0) {
    number = Number(prompt('> '));
    sum += number;
}

console.log("Final sum: " + sum);

