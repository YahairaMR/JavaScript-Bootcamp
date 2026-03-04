/*
2. exclamationAndQuestion

Write a function exclamationAndQuestion that takes in a string

Return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
(2 solutions, 1 WITH a method, 1 WITHOUT a method)


*/

// const exclamationAndQuestion = (str) => {
//     // if(str.includes("!") && str.includes("?")){
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     return str.includes("!") && str.includes("?")
// }

const exclamationAndQuestion = (str) => {
  // let qCtr = 0;
  // let eCtr = 0;

  // for(let i = 0; i < str.length; i++){
  //     if(str[i] === "!"){
  //         eCtr++;
  //     }
  //     if(str[i] === "?"){
  //         qCtr++;
  //     }
  // }

  // if(qCtr > 0 && eCtr > 0){
  //     return true;
  // } else {
  //     return false;
  // }

  let hasQ = false;
  let hasE = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "!") {
      hasE = true;
    }
    if (str[i] === "?") {
      hasQ = true;
    }

    // both are true, we've found the condition we're looking for, can return early
    if (hasQ === true && hasE === true) {
      return true;
    }
  }

  return false;

//   if (hasQ === true && hasE === true) {
//     return true;
//   } else {
//     return false;
//   }
};

console.log(exclamationAndQuestion("Yes?!"));
