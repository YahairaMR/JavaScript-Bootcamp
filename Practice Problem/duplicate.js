/*

duplicate
Write a function called duplicate that takes in an array and returns true if the array contains at least 2 of the same item.

Examples:

duplicate(['hi', 'wow', 'hey', 'hi']) => true
duplicate(['one', 'two' 'three']) => false
duplicate([1,7,32,1,10,2,11]) => true

*/

// const duplicate = (array) => {
//   let seen = [];

//   for (let i = 0; i < array.length; i++) {
//     // includes
//     // array.includes("wow")
//     // HINT: if you are seeing an item in the array for the first time, how could you keep track of it?
//     // *have not seen before/seeing element for the first time
//     //seen.push(array[i])

//     // how could you use includes to figure out if you saw that same item again
//     // *i have seen this before!
//     // seen array includes the current element, which means we've already seen it - there's a duplicate!!
//     //seen.includes(array[i])

//     // check to see if the item is in the seen array
//     if (seen.includes(array[i])) {
//       // if so, we found the duplicate
//       return true;
//     } else {
//       // if not, we add it to the seen array
//       seen.push(array[i]);
//     }
//   }

//   return false;
// };

// no includes!
// no extra array
const duplicate = (array) => {
    
    // this for loop is for getting our designated word
    for(let i = 0; i < array.length; i++){
        // array[i] is our designated word
        // let's check the rest of the array for that word
        // this nested for loop is for checking the rest of the array for that word
        // start j at 1 after i
        for(let j = i+1; j < array.length; j++){
            // check if j element is equal to i element
            if(array[i] === array[j]){
                return true;
            }
        }
        
    }

    return false;

}

console.log(duplicate(['yay', 'hi', 'wow', 'hey', 'hiiiiii', "hi"]))
// console.log(duplicate([7,32,1,10,2,11]) )

