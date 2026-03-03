/*

stringCompareCounter
Write a function called stringCompareCounter that takes in 2 strings of the same length as parameters. return a count of how many characters the strings share at the same index.

Examples:

//(strings share the same character at index 0)
stringCompareCounter('cat','cow') => 1 

//(strings share the same characters at indexes 1 and 2)
stringCompareCounter('count','touch') => 2 

//(strings share same characters at indexes 1,2, and 3)
stringCompareCounter('well','sell') => 3 

*/

const stringCompareCounter = (str1, str2) => {
    let count = 0;

    for(let i = 0; i < str1.length; i++){
        if(str1[i] === str2[i]){
            // they have the same character at the same index
            count++;
        }
    }

    return count;

}

console.log(stringCompareCounter('cat','cow'))
console.log(stringCompareCounter('count','touch'))
console.log(stringCompareCounter('wall','sell'))
console.log(stringCompareCounter('walk','seal'))