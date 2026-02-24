/*

indexedChars - adds the index of each character before that character in the given string
Examples:
indexedChars('hello') -> '0h1e2l3l4o'
indexedChars('bye') -> '0b1y2e'

*/

const indexedChars = (str) => {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += i + str[i];
    }

    return result;
}

console.log(indexedChars('hello'))
console.log(indexedChars('bye'))