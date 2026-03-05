/*

countWords
Write a function countWords(str, minLength) that counts how many words in a string have a length greater than or equal to minLength.
-A word is defined as any sequence of non-whitespace characters.
-Words are separated by one or more whitespace characters.
-All characters in a word count toward its length.

countWords("Just testing to see if the function works!", 5) => 3

*/

const countWords = (str, minLength) => {
  let words = str.split(" ");
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      count++;
    }
  }

  return count;
};
console.log("countWords 1: ");
console.log(countWords("Just testing t o see if the function works!", 3));

// no .split
const countWords2 = (str, minLength) => {
  // add our own space at the end because we know our currentLength count stops when we reach a space
  str += " ";

  // figure out length of words manually
  let count = 0;

  let currentLength = 0; // keep track of individual word lengths
  for (let i = 0; i < str.length; i++) {
    // check if character is a space!
    if (str[i] !== " ") {
      // count the character towards length
      currentLength++;
    } else {
      // just got to a space
      // stop counting!
      // we have our word!
      if (currentLength >= minLength) {
        count++;
      }
      // reset the currentLength for the next word
      currentLength = 0;
    }
  }

  return count;
};

console.log("\ncountWords 2: ");
console.log(countWords2("Just testing t o see if the function works!", 3));
