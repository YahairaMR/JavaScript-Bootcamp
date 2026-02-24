/*

crossArray
Write a function crossArray that takes in 2 parameters, both arrays of numbers. Return a result array that includes the number at index 0 in the first array, then the number at index 0 in the second array, then the number at index 1 in the first array, then the number at index 1 in the 2nd array and so on. Assume both arrays will be the same size and neither will be empty
Example:

let array1 = [5, 7, 14, 5];
let array2 = [6, 2, 22, 1];

crossArray(array1, array2) => [5, 6, 7, 2, 14, 22, 5, 1]

// parameters
2 arrays - array1, array2 [numbers]

// return
result [numbers]

*/

const crossArray = (array1, array2) => {

    let resultArr = [];

    for (let i = 0; i < array1.length; i++) {
        // resultArr.push(array1[i])
        // resultArr.push(array2[i])
        resultArr.push(array1[i], array2[i]);
    }

    // you can access the index in a for each loop using the 2nd parameter
    // you can also ignore the first element parameter utilizing an _
    // there are problems you'll come accross where having access to the index is essential in order to solve it
    //array1.forEach((num, i) => {
    //    resultArr.push(array1[i], array2[i])
    // })

    //let index = 0;
    //for (let num of array1){
    //    resultArr.push(array1[index], array2[index])
    //    index++
    //}

    return resultArr;
}

console.log(crossArray([5, 7, 14, 5], [6, 2, 22, 1]))