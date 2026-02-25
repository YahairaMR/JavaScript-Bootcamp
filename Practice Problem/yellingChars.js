/*

yellingChars - returns the given string with an exclamation point after each character
Examples:
yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'

// parameters - string
// return - string 

*/

const yellingChars = (str) => {
    // string that will keep track of our answer
    let result = "";

    for (let i = 0; i < str.length; i++) {
        // add the current character to result
        // current character: str[i]
        result += str[i] + "!";
        // result = result + str[i] + "!";
    }

    return result;
}

console.log(yellingChars('goodness'))
