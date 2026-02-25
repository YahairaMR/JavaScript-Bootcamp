/*

Write a program that takes a string and 'repeats it' until the string's length is greater than or equal to 10.
Examples
Enter a string:
> abc
abc
abcabc
abcabcabc
abcabcabcabc

Enter a string:
> a
a
aa
aaa
aaaa
aaaaa
aaaaaa
aaaaaaa
aaaaaaaa
aaaaaaaaa
aaaaaaaaaa

*/

const prompt = require("prompt-sync")({ sigint: true });

// preserve the original string without modifying it
let str = prompt("Enter your string: ");

// create a separate variable for the answer
let strAns = '';

console.log(strAns)

while (strAns.length < 10) {
    str += str;
    console.log(strAns);
}