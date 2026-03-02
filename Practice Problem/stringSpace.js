/*

stringSpace
Write a function stringSpace that takes in a string and adds a space between each character and returns the string

Examples:

stringSpace('string') => 's t r i n g '
stringSpace('wow') => 'w o w '
stringSpace('hello world') => 'h e l l o   w o r l d '
*/

const stringSpace = (str) => {
    let result = "";

    for(let i = 0; i < str.length; i++){
        result += str[i] + " ";
    }

    return result;
}

console.log(stringSpace('hello world'))