/*

groupSizes

Write a function groupSizes() that takes in a number, n, that represents how many students are in a class
 
We want to separate that class into groups of three. Inevitably, if there are leftover students, we may need to have some groups of two. A group of one is not something that we want.

Return an array that represents how many groups of 3 and how many groups of 2 there should be [groupdsOf3, groupsOf2]

groupSizes(15) => groupsOf3: 5 | groupsOf2: 0 // even number of groups of 3 - n is divisible by 3

groupSizes(16) => groupsOf3: 4 | groupsOf2: 2 // remainder 1

groupSizes(17) => groupsOf3: 5 | groupsOf2: 1 // remainder 2

groupSizes(18) => groupsOf3: 6 | groupsOf2: 0 // remainder 0

*/

const groupSizes = (n) => {
  if (n % 3 === 0) {
    let groupsOf3 = n / 3;

    return [groupsOf3, 0];
  } else if (n % 3 === 1) {
    // subtract 4 from n for the 2 groups of 2
    let groupsOf3 = (n-4)/3;
    
    return [groupsOf3, 2]
  } else if (n % 3 === 2) {
    // subtract 2 from n for the group of 2
    let groupsOf3 = (n-2)/3

    return [groupsOf3,1]
  }
};

console.log(groupSizes(20))