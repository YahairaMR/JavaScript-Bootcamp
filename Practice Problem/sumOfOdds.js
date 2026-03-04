/*

sumOfOdds

Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.

This function is inclusive so please include your two parameters in your calculation if they meet the prior criteria.

After summing the numbers, return the sum.

You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same

sumOfOdds(3, 11) -> 3 + 5 + 7+ 9 + 11 => 35
sumOfOdds(4, 11) -> 5 + 7 + 9 + 11 => 32
sumOfOdds(4, 11) -> 5 + 7+ 9 => 21

*/

const sumOfOdds = (num1, num2) => {

    let total = 0;

    for(let i = num1; i <= num2; i++){
        if(i % 2 === 1){ // or i % 2 ! == 0
            // odd
            total += i;
        }
    }

    return total;
}

console.log(sumOfOdds(4,5))