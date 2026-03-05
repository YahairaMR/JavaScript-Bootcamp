/*

sToR
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
do NOT user .replace/.replaceAll

sToR("So how are you") => Ro how ase you

*/

const sToR = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "s") {
      // str[i] = "r";
      result += "r";
    } else if (str[i] === "r") {
      result += "s";
    } else if (str[i] === "S") {
      result += "R";
    } else if (str[i] === "R") {
      result += "S";
    } else {
      result += str[i];
    }
  }

  return result;
};

console.log(sToR("So how are you"));
