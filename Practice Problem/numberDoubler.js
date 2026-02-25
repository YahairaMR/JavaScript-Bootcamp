/*

Write a program that prompts the user for a number, then repeatedly doubles that number until it is greater than or equal to 100.

Example
Enter a number:
> 23

23
46
92
184

// use while

*/

const prompt = require("prompt-sync")({ sigint: true });

let double = Number(prompt("Enter a number: "));

while (double <= 100) {
    //double = double * 2;
    double *= 2;
    console.log(double);
}
