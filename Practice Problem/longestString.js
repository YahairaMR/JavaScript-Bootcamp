/*

longestString

Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.

If there is nothing in the array, return an empty string ('')

You can assume that no two strings will have the same length in the array

longestString(["Sponge", "Bob", "Gary"]) => "Sponge"
longestString(["Krabs", "Pat", ""]) => "Krabs"
longestString([]) => ""

*/

 const longestString = (array) => {

    if(array.length === 0){
        return "";
    }

    let longestString = array[0]

    for(let i = 1; i < array.length; i++){
        // found the new longest string
        if(array[i].length > longestString.length){
            longestString = array[i]
        }
    }

    return longestString;

 }

 console.log(longestString(['yes', 'longer']))
 