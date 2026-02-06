console.log("Day One - Variables and Functions")

const constantGreeting = "Hello world";

// const greeting is a variable definition

// const is short for CONSTANT
//  a constant cannot be changed or reassigned

let currentGreeting = "howdy";
// let is a variable which can be reassigned (it can be changed)

currentGreeting = "hello there";

// "Hello world" is a string --> a string of characters

const concatenatedString = "Hello" + " " + "world"

const interpolatedString = `Today's greeting is: ${ currentGreeting }`

currentGreeting = "howdy"

// interpolated string will still be "Today's greeting is: hello there"

// EXERCISES - STRINGS

// 1. Create a new variable called `currentTime` and assign a string of the current time to that variable --> 10:52am EST
    // - this variable to be changeable

let currentTime = "11:21am Eastern"

// 2. Create a new variable using concatetanation (the `+`) with your currentTime variable and create a string that reads "The current time is now 10:52am EST"

const concatTime = "The current time is now " + currentTime

// 3. Create a new variable using interpolation (`${}`) with your currentTime variable and create a string that reads "The current time is now 10:52am EST"

const interpTime = `The current time is now ${ currentTime }`

// 4. Create a new variable called currentTimeUpcased which uppercases one of the previous either concatenation or interpolation variables

const currentTimeUpcased = interpTime.toUpperCase()


// NUMBERS & BOOLEANS

const someSortOfNumber = 1

let myInteger = 2

const myFloat = 2.0
// a float has a decimal point in it

const isMyFloatBigger = myFloat > myInteger
// false --> boolean

// if (isMyFloatBigger) {
//     console.log("myFloat is the bigger value")
// } else {
//     console.log("myFloat is NOT the bigger value")
// }

// truthiness --> everything is either truthy or falsey

const thumbsUp = "👍"

// if ( "👍" ) {
//     console.log("I AM TRUTHY")
// } else {
//     console.log("I AM FALSEY")
// }

// 0 FALSEY

// "" FALSEY

// undefined FALSEY

// null FALSEY

// NaN FALSEY

myInteger = 1000001

// if (myFloat > myInteger) {
//     console.log(`${myFloat} is bigger than ${myInteger}`)
// } else if (myFloat === myInteger) {
//     console.log(`${myFloat} is equal to ${myInteger}`)
// } else if (myFloat < myInteger) {
//     console.log(`${myFloat} is less than ${myInteger}`)
// } else {
//     console.log("It's not biggers, smaller, equal... these are some weird numbers!")
// }

myFloat > myInteger // greater than
myFloat >= myInteger // greater than or equal
myFloat < myInteger // less than
myFloat <= myInteger // less than or equal

myFloat === myInteger // strict equality --> cares a lot about matching data types
myFloat == myInteger // loose equality --> will compare equality disregarding data types

myFloat !== myInteger // not equal --> will compare and be true if something is NOT strictly equal
myFloat != myInteger // not equal --> will compare and be true if something is NOT loosely equal

// EXERCISES - NUMBERS & CONDITIONAL STATEMENTS

// 1. Create variables `numberOne`, `numberTwo`, `numberThree`, these variables can be any numbers you choose, feel free to change them as you test out things in the exercises.

const numberOne = 100
const numberTwo = 20
const numberThree = 0

// 2. If numberOne is greater than numberTwo, console.log "{numberOne} is greater than {numberTwo}" (use interpolation to add the actual numbers in)

// if (numberOne > numberTwo) {
//     console.log( `${numberOne} is greater than ${numberTwo}` )
// }

// 3. If numberThree is NOT zero, console.log "{numberTwo} divided by {numberThree} is {X}", otherwise console.log "cannot divide {numberTwo} by {numberThree} because {numberThree} is zero!"

// if (numberThree !== 0) {
//     console.log( `${numberTwo} divided by ${numberThree} is ${numberTwo / numberThree}` )
// } else {
//     console.log(`cannot divide ${numberTwo} by ${numberThree} because ${numberThree} is zero!`)
// }

// 4. If numberOne is positive console.log "{numberOne} is positive" otherwise if it's negative console.log "{numberOne} is negative"

// if (numberOne > 0) {
//     console.log(`${numberOne} is positive`)
// } else if (numberOne < 0) {
//     console.log(`${numberOne} is negative`)
// }


// FUNCTIONS

// function definition with a name
function someName() {
    // what the function actually does
    console.log("I AM FUNCTION AND I AM WORKING")
    console.log("I AM THE SECOND LINE OF THE FUNCTION")
    console.log("I AM SOME THIRD THING THE FUNCTION DOES")
}

// number is a parameter
function isItPositive( number ) {
    if (number > 0) {
        return `${number} is positive`
    } else if (number < 0) {
        return `${number} is negative`
    }

    return `${number} is not positive or negative`
    // this will fire if the other conditions don't trigger! otherwise the return statements mean we don't get to this last line
}

// function calls --> execute the code!
isItPositive(100)
isItPositive(-2000)

// function with multiple arguments
function divide(number1, number2) {
    const result = number1 / number2
    // return will be what the function gives when it completes
    return result
}

const divisionResult = divide(100, 3)

// return ENDS the function and no code after it will run
function multipleReturns() {
    return "Hello"
    return "Goodbye"
    return "I'm staying forever"
    console.log("I am a console log after the returns!")
}

// because we're not returning anything we NEED to use an else or else both console.logs will fire
function needsAnElse(greeting) {
    if (greeting === "hey") {
        console.log("hello")
    } 
    console.log("goodbye")
}

function needsAnElse(greeting) {
    if (greeting === "hey") {
        console.log("hello")
    } else {
        console.log("goodbye")
    }
}

// default parameter value

function add(x, y, z=0) {
    return x + y + z
}

// dates
// const today = new Date()

function talkAboutDate( date=new Date() ) {
    return `The year ${date.getFullYear()} has been very good`
}

const twentyTwentyThree = new Date("1/1/2023")
talkAboutDate( twentyTwentyThree )

// with default argument...
talkAboutDate()


// SCOPE

// console.log(thingInTime)

// const thingInTime = "I am happening here and now"

function whatsAtTheEnd() {
    const resultFromTheEnd = atTheEnd()
    return resultFromTheEnd
}





// if you have { } with code to execute inside it's a BLOCK

// global scope - not inside of anything
// global variables can be accessed anywhere
const outside = "I AM OUTSIDE IN THE COLD WHY IS IT SO COLD"

function thingsAreInside() {
    // console.log(outside)
    const inside = "I'm WARM AND TOASTY INSIDE"
    return inside
}

function moreInsideThings() {
    const firstThing = "I am the first"
    console.log(firstThing)
    const secondThing = "I am the second"
    const thirdThing = "I am the third"
}

// you cannot grab variables from outside the scope including inside the scope of another external function!
function getStuffFromAnotherFunction() {
    console.log(firstThing)
}

function outerFunction() {

    const outsideVariable = "I'm an outside variable"

    function innerFunction() {
        const insideVariable = "I'm an inside variable"
    }

    console.log(insideVariable)

    innerFunction()

}

// console.log(inside)






// HOISTING

const resultFromTheEnd = atTheEnd()
console.log(resultFromTheEnd)

function atTheEnd() {
    return "I'm at the end of the code"
}