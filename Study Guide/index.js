// VARIABLES

// A container that stores a value
// Must be declared and assigned a value
// Dynamic placeholder

// declaring variables:
let changeable = "I am changeable";
const unchangeable = "I am unchangeable";

// reassignment
changeable = "I am a new value";

// unchangeable = "I am not allowed to reassign" <<< this is illegal because it's a const

const someNumber = 2;

// all three of these won't work:
// someNumber += 1
// someNumber++
// someNumber = someNumber + 1

// STRINGS

// Characters wrapped in quotes
// Strings are for storing text

const newString = "I am a string 123 !@#$%^&";
const emptyString = "";
const notEmptyString = "       "; // this is not empty bc it has spaces
const singleQuoteString = "I am using single quotation";
const backtickString = `I am declared using backticks`;

const interpolatedThing1 = "Hello";
const interpolatedThing2 = "World";

// string interpolation - plug values inside strings
const usingStringInterpolation = `My interpolated string: ${interpolatedThing1} ${interpolatedThing2}`;

// string concatenation - add strings together
const concatenatedString =
  "My concatenated string: " + interpolatedThing1 + " " + interpolatedThing2;

// string methods

const uppercaseMe = "make me uppercase";
const uppercased = uppercaseMe.toUpperCase(); // make the string all upcased

const lowercaseMe = "MAKE ME LOWERCASE";
const lowercased = lowercaseMe.toLowerCase(); // make the string all lower

const splitMe = "split me into an array";
const split = splitMe.split(" ");
// will make an array with each word in the array
// [ "split", "me", "into", "an", "array" ]

split.join(" ");
// takes an array and pushes it together together into a string
// "split me into an array"

const sliceMe = "slice me up";
sliceMe.slice(6, 8); // "me"
// allows us to grab a smaller part of the string based on a starting and ending point (the 7th letter to the 9th letter)

// NUMBER

// modulo - the % sign
// modulo returns the remainder of a division operation

5 % 4; // >> 1
5 % 3; // >> 2
5 % 2; // >> 1
6 % 2; // >> 0
// example of an even number, cleanly divisible with no remaineder!
7 % 2; // >> 1
// example of an odd number, not cleanly divisible!

Math.ceil(1.1); // round this number up to the next whole number

Math.floor(1.1); // round this number down to the next whole number

Math.random(); // random float between 0 and 1
// 0.5051910743347165
// 0.04570057058789023
// 0.45876204163942524

// gets a random index for an array by combining Math.random and Math.floor
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// FUNCTIONS

// a group of reusable code that executes a desired task at a specific time
// a standard operation that can be applied to different variables

// declare a function
// the function has a name "doSomething"
// the function accepts three arguments
function doSomething(thing1, thing2, thing3) {
  return `${thing1} and ${thing2} and ${thing3}`;
}
// ^ body of the function - where the instructions live

// parameter - the variable name for example 'thing1' and 'thing2' and 'thing3'
// you use the name parameter when you are declaring the function

const thing3 = "I am thing3";

// argument - the value or variable you pass into the function when it's called

// the arguments here are:
("I am thing 1");
"I am " + "thing2";
thing3;

// call a function
doSomething("I am thing 1", "I am " + "thing2", thing3);

// RETURN

// parameters are a way to give information to the function
// return is a way to take information out of the function

function giveMeSomething() {
  return "here ya go";
}
const whatIGot = giveMeSomething();
// "here ya go"

function addition(num1, num2) {
  return num1 + num2;
}
const additionResult = addition(12, 21);
// 33

function multipleReturns() {
  return "first return";
  return "second return";
  return "third return";
}
multipleReturns(); // "first return"
// the other returns get ignored
// you can only return one thing from a function!

// ARROW FUNCTIONS

// => the arrow shows that you're dealing with an arrow function

const myArrowFn = (params) => {
  "the body of the arrow function";
};
// a function = (maybe with a parameter) =such=that=> { the body }

// const automaticallyReturn = () => { return "I get returned automatically or 'implicitly' because I don't have { curly brackets }"}

const automaticallyReturn = () =>
  "I get returned automatically or 'implicitly' because I don't have { curly brackets }";

// only works if you have a single line in your arrow fn and no curly brackets {}

// with VERY little syntax
(param) => "the body of the arrow function";

// JS OBJECTS

// data structures - hold other pieces of information inside of them

const someObject = {
  key: "value",
};

const person = {
  name: "Chett",
  age: 21,
};

// getting info from an object
person.name; // "Chett"
person.age; // 21
person.favoriteFood; // undefined

// change info in an object
person.name = "Chort";
person.age = 100;
person.favoriteFood = "pizza";

// {
//     name: "Chort",
//     age: 100,
//     favoriteFood: "pizza"
// }

// bracket notation instead of dot notation
person["name"]; // "Chort"
person["favoriteFood"]; // "pizza"
person["favoriteFood"] = "hawaiian style pizza";

// {
//     name: "Chort",
//     age: 100,
//     favoriteFood: "hawaiian style pizza"
// }

// using bracket notation to dynamically access key/value pairs
// basically like using an index but with an attribute name

const statePopulation = {
  alaska: 738737,
  hawaii: 1432820,
};

const theStateToGet = "alaska";
statePopulation[theStateToGet];
// 738737

// ARRAYS

// data structures - they are ordered (there is a first and a last item) - they have indexes (indices)

const myNewArray = [100, 200, 300, 400];

// zero indexed - starts counting from 0 instead of 1
myNewArray[0]; // 100
myNewArray[1]; // 200
myNewArray[2]; // 300
myNewArray[3]; // 400
myNewArray[4]; // undefined

myNewArray[1] = 600;
// [100, 600, 300, 400]

// ARRAY METHODS

myNewArray.push(500);
// [100, 600, 300, 400, 500]
// add to the end

myNewArray.pop();
// [100, 600, 300, 400]
// remove from the end

myNewArray.unshift(0);
// [0, 100, 600, 300, 400]
// add to the beginning

myNewArray.shift();
// [100, 600, 300, 400]
// remove from the beginning

function callback(item) {
  console.log(item);
}

// loop through array and do the callback for each item
myNewArray.forEach(callback);
// 100
// 600
// 300
// 400

// with arrow fn
myNewArray.forEach((item) => console.log(item));

myNewArray.sort();
// myNewArray --> [100, 300, 400, 600]
// this sorts the array in place a.k.a. it changes the original array

myNewArray.filter((item) => item > 200);
// filteredArray --> [ 300, 400, 600 ]
// filters out items for a new array based on whether a callback returns `true` or `false`

myNewArray.find((item) => item > 200);
// foundItem --> 300
myNewArray.find((item) => item > 700);
// foundItem --> undefined
// .find returns the first item in the array that matches the callback criteria

myNewArray.map((item) => item ** 2);
// const squaredArray = myNewArray.map(item => item ** 2)
// squaredArray --> [ 10000, 90000, 160000, 360000 ]
// iterates through the array and returns a new array based on what the callback in the .map returns

myNewArray.slice(1, 3);
// [300, 400]
myNewArray.slice(1);
// [300, 400, 600]
myNewArray.slice(4);
// []
myNewArray.slice(0, 2);
// [ 100, 300 ]
// slice returns a sliced up version of the array starting at the first argument [index] and ending before the second argument [index]

// FOR LOOPS

// for (starting point; until the finishing point; add 1 each time)
for (let i = 0; i < myNewArray.length; i++) {
  const itemToLog = myNewArray[i];
  console.log(itemToLog);
}

// reverse for loop
for (let i = myNewArray.length - 1; i >= 0; i--) {
  const itemToLog = myNewArray[i];
  console.log(itemToLog);
}

// `myNewArray.length - 1` gets the last index in the array [3]

// for of
for (item of myNewArray) {
  console.log(item);
}

// CONDITIONALS A.K.A. IF / ELSE STATEMENTS

let myBoolean = true;
myBoolean = false;

// if (something is true) {
// do something
// } else {
// do another thing
// }

// you don't need an else
if (2 + 3 > 5) {
  console.log("2 + 3 is greater than 5");
}

function howHighIsTheNumber() {
  const whatIsThisNumber = Math.ceil(Math.random() * 100);

  // if you would like to check multiple things after the first if you can use an if else
  if (whatIsThisNumber > 90) {
    console.log("really high number");
  } else if (whatIsThisNumber > 70) {
    console.log("pretty high number");
  } else if (whatIsThisNumber > 50) {
    console.log("sort of high number");
  } else if (whatIsThisNumber > 30) {
    console.log("kind of low number");
  } else if (whatIsThisNumber > 10) {
    console.log("pretty low number");
  } else {
    console.log("really low number");
  }
}

// truthiness
// all variables are either truthy (they feel like they are true)
// OR falsey (they feel like they are false)

if (0) {
  console.log("yes");
} else {
  console.log("no");
}

// falsey values:
// 0
// NaN
// undefined
// null
// ""
// false

// some seemingly empty values are actually truthy:
// []
// {}
// " "

// when defining things with no value use `null` instead of `undefined`
const thingThatDoesNotExist = null;

// DOM MANIPULATION

// DOM - document object model

// DOM is on the page
// HTML is the blueprint to build the DOM

// QUERYSELECTOR & QUERYSELECTORALL

// uses the same selection syntax as css

// find an element by its tag name
document.querySelector("img");

// find an element by its id
document.querySelector("#contact-form");

// find an element by its class
const textGreen = document.querySelector(".text-green");

// querySelector gets the first element it finds

// querySelectorAll gets every element it finds

const allTextGreen = document.querySelectorAll(".text-green");

// CHANGE ELEMENT ATTRIBUTES

let allPTags = document.querySelectorAll("#sandbox p");
const secondPTag = allPTags[1];

secondPTag.textContent = "Regal cat incoming below";

secondPTag.style.color = "yellow";
secondPTag.style.backgroundColor = "black";

// CHANGING IMAGES

const catImage = document.querySelector("#sandbox img");

catImage.src =
  "https://upload.wikimedia.org/wikipedia/commons/4/4c/Blackcat-Lilith.jpg";

catImage.alt = "black cat";

// ADDING / REMOVING CLASSES TO ELEMENTS

textGreen.classList;
// [ "text-green", "bg-yellow" ]
textGreen.classList.remove("bg-yellow");
// [ "text-green" ] --> now no longer has bg-yellow
textGreen.classList.add("bg-yellow");
// [ "text-green", "bg-yellow" ] --> added the class to the element

// REMOVING ELEMENTS

allPTags = document.querySelectorAll("#sandbox p");
const pTagToRemove = allPTags[2];
pTagToRemove.remove();

// once we have found an element we may .remove() it to take it off the page

// CREATING NEW ELEMENTS

function addNewListItem(text) {
  // 1. Create the element so it exists
  const li = document.createElement("li");

  // 2. Change the element's attributes
  li.textContent = text;

  // 3. Place the element somewhere
  const ul = document.querySelector("#sandbox ul");
  ul.append(li);
}

// DOM EVENTS

const meowButton = document.querySelector("#sandbox button");

meowButton.addEventListener("click", () => alert("meow see, meow"));
// element.addEventListener("event flavor", callbackFunction)

// get element
const checkMeBox = document.querySelector("#check-me-box");

// CAT URLS
const loafCatURL =
  "https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg";
const blackCatURL =
  "https://upload.wikimedia.org/wikipedia/commons/4/4c/Blackcat-Lilith.jpg";

// listen for the when the checkbox "changes"
// what that means is when the checkbox gets checked or unchecked
checkMeBox.addEventListener("change", toggleCatImage);

// callback that triggers when the "change" occurs
function toggleCatImage() {
  // check whether it's checked or not
  if (checkMeBox.checked) {
    catImage.src = loafCatURL;
    catImage.alt = "loaf cat";
  } else {
    catImage.src = blackCatURL;
    catImage.alt = "black cat";
  }
  // change src depending on whether it's been checked or unchecked
}

// CHANGING BACKGROUND IMG WITH A DROPDOWN

const sphynxImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Sphynx_-_cat._img_031.jpg/960px-Sphynx_-_cat._img_031.jpg";

const maineCImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/M%C3%A2le_Black_Silver_Blotched_Tabby.jpeg/250px-M%C3%A2le_Black_Silver_Blotched_Tabby.jpeg";

const persianImg =
  "https://moderncat.com/wp-content/uploads/2025/03/ss_2510990453_Akifyeva-S-1-940x640.jpg";

// get the dropdown
const bgCatDropdown = document.querySelector("#bg-cat-dropdown");

// put cat images into an object
const catImagesObject = {
  persian: persianImg,
  "maine-coon": maineCImg,
  sphynx: sphynxImg,
};
// if a key has an illegal character like a hyphen we can make it a string and it becomes a valid key

// attach callback that changes the image
bgCatDropdown.addEventListener("change", () => {
  // get the value from the select tag
  // the value changes depending on what's been selected
  const catValue = bgCatDropdown.value;
  // based on the catValue ("persian", "maine-coon", "sphynx")...
  // access the catImagesObject and get the corresponding img
  // this is using [bracket] notation
  const chosenImage = catImagesObject[catValue];
  // find sandbox and change image
  const sandbox = document.querySelector("#sandbox");
  sandbox.style.backgroundImage = `url(${chosenImage})`;
});

// SUBMIT EVENT

const contactForm = document.querySelector("#contact-form");
const emailInput = document.querySelector("#email-input");

contactForm.addEventListener("submit", handleContactForm);

// the event is what that triggered
function handleContactForm(event) {
  // by default a form will go somewhere or refresh the page
  // preventDefault makes it so we don't do normal `submit` functionality
  event.preventDefault();
  // to get user input we target the input.value
  const email = emailInput.value;
  // once we have a value we do something with it
  alert(email);
}
