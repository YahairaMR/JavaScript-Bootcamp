// ARRAYS //

// data structure --> it contains and organize data

const myNewArray = []

myNewArray.push("Item 1")
myNewArray.push("Item 2")
myNewArray.push("Item 3")

myNewArray[1] // "Item 2"

myNewArray[1] = "new string"

myNewArray.pop() // removes the last item

myNewArray.unshift("Item 0") // adds to the beginning of the array
myNewArray.shift() // removes the first item

// methods --> a function that is called on a javascript object or entity using dot notation

"I am downcased".toUpperCase()

// reassignment WILL NOT WORK WITH CONSTANTS!!!
// myNewArray = ["Item 99", "Item 100", "Item 101"]

const dogNames = [
    "Brandy",
    "Neville",
    "Doughnut",
    "Theodore"
]

// callback function
// someFunction is the callback function!
// it gets passed as a parameter
function forEach( array, someFunction ) {
    for (let i = 0; i < array.length; i++) {
        someFunction( array[i] )
    }
}

function sayName(doggoName) {
    console.log(doggoName + " is a good doggo")
}

function sayDoggoNames1() {
    // i stands for index
    for (let i = 0; i < dogNames.length; i++) {
        sayName(dogNames[i])
    }
}

function sayDoggoNames2() {
    for (dName of dogNames) {
        sayName(dName)
    }
}

function sayDoggoNames3() {
    dogNames.forEach(sayName)
}

// EXERCISES

// 1. Create a new array of sodas - make sure there are at least 2 sodas in the array.

const sodasArray = [
    "Dr Pepper",
    "Coca Cola",
    "Cream Soda",
    "Root Beer",
    "Cherry Cola",
    "Mountain Dew"
]

// 2. Use a for loop to console.log each soda.toUpperCase.

for (let i = 0; i < sodasArray.length; i++) {
    // console.log( sodasArray[i].toUpperCase() )
}

for (soda of sodasArray) {
    console.log( soda.toUpperCase() )
}

// 3. Use a .forEach to iterate through the sodas and print out "{soda} is super fizzy"

function fizz(soda) {
    console.log(`${soda} is super fizzy`)
}

sodasArray.forEach(fizz)

// 4. Use any loop of your choice and if the soda has the word "cola" inside of it, console.log that soda name.

function printColaName(soda) {
    if ( soda.toLowerCase().includes("cola") ) {
        console.log(soda)
    }
}

sodasArray.forEach( printColaName )

// ARROW FUNCTION

// normal function declaration

function functionName(parameters) {
    body
}

// arrow function declaration

(parameters) => { body }

sodasArray.forEach( function(soda) { console.log(soda) } )

const normalFunk = function(soda) { console.log(soda) }

const arrowFunk = (soda) => { console.log(soda) }

// if you have only a single line of code in your arrow function
// you can get rid of the {} brackets
const arrowFunk2 = (soda) => console.log(soda)

// if you have only one argument / parameter you don't need the () parentheses
sodasArray.forEach( soda => console.log(soda) )

// by default if you don't have the {} brackets the arrow function will implicitly (automatically) return the result of its only line


const groceries = ["banana", "apple", "banana", "pasta", "pasta", "marinara", "pasta", "alfredo", "chicken", "banana", "cereal"]

// alphabetize
const copyOfGroceries = [...groceries] // destructuring
copyOfGroceries.sort()
// destructive - mutation action - will change copyOfGroceries FOREVER

// remove duplicates
function removeDuplicates(array) {
    const newSet = new Set(array)
    return Array.from(newSet)
}

// filtering items - non-destructive - not going to change the original array
const filterGroceries = groceries.filter( (item) => item.length > 5 )

const findGroceries = groceries.find( (item) => item.length === 5 )

// gets a sub array from index 6 through 10 (stops right before 11)
// does not change the original array
groceries.slice(6,11)

function tooExpensive() {
    return groceries.map( item => `${item} is too expensive` )
}

function upcaseItems() {
    return groceries.map( item => item.toUpperCase() )
}


// EXERCISES

const clients = [
    "john smith", // 0
	"jane smith", // 1
	"john doe", // 2
	"jane doe", // 3
	"john carpenter", // 4
	"jane fonda" // 5
]
// 1. Write a function `printAllNames` which uses a .forEach to console.log each of the client names 

function printAllNames() {
    clients.forEach( (dispName) => console.log(dispName) )
}

// 2. Write a function `filterJohns()` which uses .filter to return an array of all `clients` with the name "john"

function filterJohns() {
    return clients.filter( (clientName) => clientName.includes("john") )
}

// 3. Write a function `findJane()` which uses .find to return the first person with a name of "Jane" in `clients`

function findJane() {
    return clients.find( clientName => clientName.includes("jane") )
}

// 4. Write a function `secondHalf()` which uses .slice to return a new array of only the second half of `clients`

function secondHalf() {
    return clients.slice(clients.length / 2)
}

// 5. Write a function `capitalizedNames()` which returns a new array using .map based on the `clients` array with every first name properly capitalized

function capitalizedNames() {
    return clients.map( clientName => clientName[0].toUpperCase() + clientName.slice(1) )
}

// BONUS - Both the first and last names are properly capitalized when `capitalizedNames()` is called

function capitalizedNames() {
    return clients.map( clientName => {
        const lowerCaseNames = clientName.split(" ")
        const upperCaseNames = lowerCaseNames.map(name => name[0].toUpperCase() + name.slice(1))
        return upperCaseNames.join(" ")
    } )
}

// 6. Write a function `sortNames()` which alphabetically sorts the names in `clients`

function sortNames() {
    return clients.sort()
}

// BONUS - `sortNames()` does not alter the original array but instead creates a copy of the array and returns a sorted copy

function sortNames() {
    const newClientList = [...clients]
    return newClientList.sort()
}

// .map --> create a new array that is a transformation of an old array

//1. Create a new array called 'plusOne' which is every number in 'number' mapped so that it is + 1

//plusOne = [ 2, 3, 4, 5, 6, 7]

const plusOne = numbers.map(number => number + 1); 


//2. Create a new array called 'squared' which is every number in 'numbers' mapped so they are squared

//squared --> [1,4,9,16,25,36]

const squared = numbers.squared(number => number * number);

// number ** 2 will square the number as well

//3. Create a new array called 'isEven' which maps each items in 'numbers' to a new array and returns whether that items is even or odd with 'true' / 'false', to determine even or odd you can use the '%' operator

//isEven --> [false, true, false, true, false, true]

const isEven = numbers.map (number => number % 2 === 0)
    

