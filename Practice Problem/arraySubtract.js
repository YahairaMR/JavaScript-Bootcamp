/*

arraySubtract

Write a function arraySubtract that takes in 2 arrays of numbers of the same length and subtracts the item in each index at array 1 with its respective item in each index at array 2.

The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.

arraySubtract([7,9],[2,6]) => [5,3]
7 - 2 
9 - 6

*/

const arraySubtract = (array1, array2) => {
    
    let results = [];
    
    for(let i = 0; i < array1.length; i++){
        let value = array1[i] - array2[2];
        results.push(value);
    }

    return results;
}

console.log(arraySubtract([7,9,5],[2,6,4]))


