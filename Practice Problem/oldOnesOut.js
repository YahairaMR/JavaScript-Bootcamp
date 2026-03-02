/* 
oddOnesOut
Write a function oddOnesOut that takes in an array of numbers. Return an array with the same numbers in the same order, but all 1's removed.

Examples:

oddOnesOut([1,2,1,1,3,5,1]) => [2,3,5]
oddOnesOut([0,-1,5,1,5,0]) => [0,-1,5,5,0]
oddOnesOut([1,1,1,1,1,1]) => []

stringSpace
Write a function stringSpace that takes in a string and adds a space between each character and returns the string

Examples:

stringSpace('string') => 's t r i n g '
stringSpace('wow') => 'w o w '
stringSpace('hello world') => 'h e l l o   w o r l d '

*/

const oddOnesOut = (arr) => {
    let result = [];

    for(let i = 0; i < arr.length; i++){
        // if element does not equal 1, we can add it to the result list
        if(arr[i] !== 1){
            result.push(arr[i])
        }
    }

    return result;
}

console.log(oddOnesOut([1,2,1,1,3,5,1]))
console.log(oddOnesOut([0,-1,5,1,5,0]))
console.log(oddOnesOut([1,1,1,1,1,1]))