/*

Write a function called fiveMoreOdd that takes in an array of numbers and add 5 to each odd numer then returns the updated array.

fiveMoreOdd([1,2,3,4,5]) => [6,2,8,4,10]
fiveMoreOdd([11,1,16,20,21]) => [16,6,16,20,26]
fiveMoreOdd([2,4,6,10,100]) => [2,4,6,10,100]

fiveMoreOdd[1,3,5,11] => [6,8,9,16]

//parameters
array of numbers - [numbers]

//return
array of numbers - [numbers]

*/


const fiveMoreOdd = (array) => {

    for (let i = 0; i < array.length; i++) {
        // odd number check
        if (array[i] % 2 !== 0) {
            array[i] += 5;
        }
    }

    return array;
}

// const fiveMoreOdd = (array) => {

//     let results = [];

//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 !== 0){
//             results.push(array[i] + 5)
//         } else {
//             results.push(array[i]);
//         }
//     }

//     return results;

// }

// map

// const fiveMoreOdd = array => {
//   const results = array.map(num => {
//     if (num % 2 !== 0) {
//       return num + 5
//     }
//     return num
//   })

//   return results
// }

console.log(fiveMoreOdd([1, 2, 3, 4, 5]))
