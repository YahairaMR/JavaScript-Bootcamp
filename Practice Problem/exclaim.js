/* 

exclaim - returns the given sentence with every question mark or period changed to an exclamation point
Examples:
exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
exclaim('This is fine.') -> 'This is fine!'

*/

const exclaim = (str) => {
    let result = "";

    // result = str.replaceAll('?', '!').replaceAll('.', '!');

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "?" || str[i] === ".") {
            result += "!"
        } else {
            result += str[i]
        }
    }

    return result;
}

console.log(exclaim('What are you doing? Are you a fool'))