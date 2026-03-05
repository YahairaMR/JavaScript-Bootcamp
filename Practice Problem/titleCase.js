/*

titleCase - returns a transformed version of the given string where every word starts with a capital letter and every non-word-starting letter is lowercased

titleCase('return of the king') -> 'Return Of The King'
titleCase('NOblE desKtoP') -> "Noble Desktop"

-condition for capitalizing

-condition for lowercasting

// split string into an awway of words so we can work with each string individually

*/

const titleCase = (str) => {
  // convert to lowercase first
  str = str.toLowerCase();

  // split string
  let words = str.split(" ");
  // console.log(words)

  let tempArray = [];

  // for(let i = 0; i < words.length; i++){
  //     let word = "";
  //     for(let j = 0; j < words[i].length; j++){
  //         if(j === 0){
  //             word += words[i][j].toUpperCase();
  //         } else {
  //             word += words[i][j];
  //         }
  //     }
  //     tempArray.push(word);
  // }

  for (let i = 0; i < words.length; i++) {
    // word[i][0] - first character
    // words[i].slice(1) - gets the rest of the characters in the string
    let word = words[i][0].toUpperCase() + words[i].slice(1);
    tempArray.push(word);
  }

  return tempArray.join(" ");
};

console.log(titleCase("retuRn oF tHe kiNg"));
console.log(titleCase("NOblE desKtoP"));

/*
conditions for capitalizing
-if previous character is a space
-start of the string

*/

const titleCase2 = (str) => {
  let result = "";
  str = str.toLowerCase();

  // capitalize first character in string
  result += str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    // check that previous char is a space
    if (str[i - 1] === " ") {
      // capitalize the character
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
};
console.log("\nTC 2");
console.log(titleCase2(" retuRn oF tHe kiNg"));
console.log(titleCase2("NOblE desKtoP"));
