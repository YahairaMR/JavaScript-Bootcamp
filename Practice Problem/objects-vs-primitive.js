/* Objects vs Primitive Data Types */

/*
Primitives
-Numbers
-Strings
-Booleans
( also null, undefined, NaN)

Objects
-Objects
-Arrays

// typeof - tells you the type of data in JS, it is a key not a code
   typeof (value or variable)
*/

// console.log(typeof [1,2,3,4,5])

let a = 3;
let b = a;
b = 4;

// console.log('A: ' + a);
// console.log('B: ' + b);

// obj1 and its property a are actually located in different places in memory
// obj1 points or refers to a's actual location
let obj1 = {
    a: 3
}

// when we set obj2 to obj1, we are really saying, lets point to the same place in memory
let obj2 = obj1;
// obj1 and obj2 are both pointing to the location of a 
obj2.a = 4;
obj2.b = 5;

// obj1 and obj2 are both still pointing to the same location, regardless of which is modified, if one changes, so will the other
obj1.c = 6;

console.log('obj1.a: ')
console.log(obj1)
console.log('obj2.a: ')
console.log(obj2)

