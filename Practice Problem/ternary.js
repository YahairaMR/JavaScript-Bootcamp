let str = "";
let isColdOutside = true;

//str It's cold out!
// It's not cold out!
// if(isColdOutside === true){
//     str = "It's cold outside!"
// } else {
//     str = "It's NOT cold outside!"
// }

// Ternary Operator
// variable = condition ? TRUE : FALSE
// if the condition evaluates to true, set the variable equal to what comes after the ?
// if the condition evaluates to false, set the variable equal to what comes after the :
// very good for setting variables/console.logs/returns with 2 options!!!

// str = isColdOutside === true ? "It's cold outside!" : "It's NOT cold outside!"

// console.log(str);

console.log(
  isColdOutside === true ? "It's cold outside!" : "It's NOT cold outside!",
);

let temperature = 41;

// under and including 40 - cold
// 41 - 50 - cool
// 51 - 70 - warm
// 71 and greater - hot

// multiple conditions (mirrors the exact logic of if else)
const checkTemp = (temp) => {
  return temp < 40
    ? "cold"
    : temp > 40 && temp <= 50
      ? "cool"
      : temp > 50 && temp <= 70
        ? "warm"
        : "hot"; // else
};

console.log(checkTemp(temperature));
