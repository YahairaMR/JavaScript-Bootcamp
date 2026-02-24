/* 

Write a function called arraySummer that takes in an array of numbers and adds each number in the array together. Return the total.

arraySummer([1,5,10,13]) => 29
arraySummer([0,0,0,0]) => 0
arraySummer([100,1000,2]) => 1102

// parameters (how many parameters? what type are they? what would be a good name for each parameter?)
- array of numbers - [numbers] - array

// return (what type is the return? what does the return represent?)

*/

const arraySummer = (array) => {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

console.log(arraySummer([1, 5, 10, 13]))
console.log(arraySummer([1000, 100, 2]))
console.log(arraySummer([1, 2, 3]))

