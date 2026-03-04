/*

countAB

Write a function called countAB that takes in a single string and returns an array of length 2. 

The first item in the array should be the count of every A character in the string. The 2nd item should be the count of every B character in the string.

No need to add the count of A and B together. Again, we want an array with the separate counts of each

For this problem, you can count both upper and lower case A's and B's

countAB("abBA") => [2,2]
countAB("aaaaaaaa") => [8, 0]
countAB("Hello, World") => [0,0]
countAB("Basket")=> [1,1]

*/

const countAB = (str) => {
    let countA = 0;
    let countB = 0;

    for(let i = 0; i < str.length; i++){
        if(string[i].toLowerCase() === "a") {
            countA++;
        } else if(str[i].toLowerCase() === "b") {
            countB++;
        }
    }

    return [countA, countB];
}

console.log(countAB('BbB'))