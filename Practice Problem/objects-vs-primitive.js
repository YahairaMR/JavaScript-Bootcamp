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

// telling obj2 to reference (point to) a brand new location in memory
obj2 = {};

let obj3 = {
    x: 10
}

obj2 = obj3

/*
When modifying the properties of an object that also refers to the same location in memory (linked) will also have it when 
we change the value of the object itself (obj2 = {}, obj2 = obj3) that means we are changing the location that the object is
*/

obj3 = 15;

obj1 = {
    x: 10,
    y: 15
}

// obj2 and obj3 were peviously pointing to the same location at this point in the code
// now, obj3 points to the same location as obj1
// obj2 will continue to point to the same location. We have only modified the reference for obj3, in order to do the same for 
// we need to directly say obj2 = obj1

obj3 = obj1;

obj1.z = 20;

// obj2 = obj3

// before this point, obj1 and obj3 are linked, obj2 is not
let obj4 = obj3; // LINKED: obj1, obj3, and obj4 are the same
obj4 = obj2; // LINKED: obj2 and obj4 are the same, obj1 and obj3 are the same
obj1.x = 50; // changes property, but links remain the same

//console.log('obj1: ')
//console.log(obj1)
//console.log('obj2: ')
//console.log(obj2)
//console.log('obj3: ')
//console.log(obj3)
//console.log('obj4: ')
//console.log(obj4)

// A - all 4 will be the same
// B - obj1 and obj3 will be the same, obj2 and obj4 will be the same X
// C - obj1, obj2, and obj4 will be the same, obj1 will be different

// arrays are object types
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[0] = 4;

arr1.push(5);

// console.log("arr1: ")
// console.log(arr1)
// console.log("arr2: ")
// console.log(arr2)

// Equality
let arr3 = [10, 20, 30];
let arr4 = [10, 20, 30];

// when we compare the equality of objects, we are checking to see if they point to the same location in memory
// it does NOT matter if the values are the same!!! 
console.log(arr3 === arr4);
console.log(arr3 == arr4); // same is true for == , the types are already the same.  we are still comparing memory addresses, not values!  

arr3 = arr4; // NOW they point to the same location!!!

console.log(arr3 === arr4); // this will be true

// same with objects!!
let newObj1 = {
    i: 5
}

let newObj2 = {
    i: 5
}

newObj1 = newObj2

//console.log("\nnew objects: ")
//console.log(newObj1 === newObj2)

// Pass by Value (Primitives)
// when we pass a primitive data type (string, number, boolean) into a function, we pass a COPY of that value into the function!!
// if we modify the copy, the original variable we passed in won't actually change
// the only way to modify the original variable, is by reassgning it to a return value from the function

// our parameter num copies the value of x(0)
const setValue = (num) => {
    num += 10; // adding 10 to the COPY, num NOT to the original x
    return num;
}

let x = 0;
setValue(x); // does NOT modify x!!!!
console.log("x: " + x);
x = setValue(x); // DOES modify x! reassigns x to the value the function returns
console.log("x: " + x);

let objX = {
    num: 15
}

// Pass by Reference (Objects)
// when we pass an object type into a function, we are making a copy of the REFERENCE itself.
// therefore, the parameter AND the original object will be pointing to the same location in memory
// if we modify the properties of that parameter inside the function, they WILL change for the original object as well

const setObjValue = (obj) => {
    // obj -> (num) <- objX 
    // when we pass in objX as a parameter, we are saying that objX and obj (the parameter) are going to reference the same location in memory

    obj.num += 10; // same as obj.num = obj.num + 10
    //return obj we don't need to return the object to change the value!!
    obj.num2 = 50; // obj -> (num, num2) <- objX
    console.log("Object Parameters: ")
    console.log(obj)
}

setObjValue(objX); // objX -> (num)
console.log("Object X: ")
console.log(objX);
console.log(objX.num2);

// The main point: Object WILL change when you pass them and modify them inside a fucntion
// Primitives will NOT change when you pass/modify them inside a function. To update the value of a primitive from function , you need to return and reassign

let objY = {
    num: 1
}

// objY is in a different location than objX
// just because we pass them into the same function, doesn't mean they will point to the same place
// setObjValue(objY)
// console.log("Object Y: ")
// console.log(objY);
// console.log("Object X: ")
// console.log(objX);

const addName = (obj) => {
    obj = {}; // makes our parameter point to an entirely different location
    // objX and objY still point to the previous location, so any changes we make to the parameter will NOT persist for the other objects//
    obj.name = "Jimmy";

    console.log('Object Parameter: ')
    console.log(obj)


    // obj -> () <- objY
    //        ^
    //        |
    //        objX   
}

objX = objY;

//addName(objY)
//console.log("Object X: ")
//console.log(objX);
//console.log("Object Y: ")
//console.log(objY);

// Pass By Reference for Arrays as well
let arrX = [6, 8, 10];

const pushNewValue = (arr, value) => {
    value += 5;
    arr.push(value);
}

let n = 30;
pushNewValue(arrX, n);
console.log(arrX);

console.log('n: ' + n);









