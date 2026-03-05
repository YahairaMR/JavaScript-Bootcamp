/*

nthPrime 
Write a function called nthPrime(n) that finds the nth prime number.

A prime number is a number greater than 1 that can only be divided evenly by 1 and itself. For example, the first prime number is 2, the second is 3, the third is 5, and so on.

Your function should return the prime number at position n.

Examples:
findNthPrime(1) should return 2
findNthPrime(5) should return 11
findNthPrime(10) should return 29

*/

const nthPrime = (n) => {
  let count = 1; // how many primes we've found

  // first prime number
  let num = 2;

  // loop until you have the desired prime number
  while (count < n) {
    // go to next number
    num++;

    // mark number as prime initially
    let isPrime = true;
    // figure out if number is prime
    // need to check divisibility!! - %
    // 10 - 2+, 3-, 4-, 5+, 6-, 7-, 8-, 9-, 10+
    for (let i = 2; i < num; i++) {
      // check if number is divisible by a num that isnt itself
      if (num % i === 0) {
        // num must NOT be prime!
        isPrime = false;
        console.log(`${num} is not prime`);
        break;
      }
    }
    // if they make it through the for loop and isPrime is still true
    if (isPrime === true) {
      //console.log(`${num}is prime`);
      //increment our count if we find a prime number
      count++;
    }
  }

  return num;
};

console.log(nthPrime(10));
