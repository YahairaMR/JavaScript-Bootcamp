// ERROR HANDLING

function addition(x, y) {
    if ( (typeof x) !== "number") {
        // throw is how we can force an error to happen
        throw TypeError("Only accepts numbers")
    }
    
    if ( (typeof y) !== "number") {
        // throw is how we can force an error to happen
        throw TypeError("Only accepts numbers")
    }

    return x + y
}

const person = {
    name: "Chett",
    students: [1,2,3,4,5]
}

const errorLog = []

try {
    // try will be the (possibly faulty) code that initially runs. Try needs to have something that follow it.-
    person.students.forEach( student => console.log(student) )
} catch(error) {
    // catch will trigger if an error occurs
    errorLog.push(error)
} finally {
    // finally happens regardless of whether catch was triggered
    console.log("DONE")
} 

// 1. Create a function called `divide()` which accepts two arguments and divides the first by the second. If the second argument is `0`, throw an error. A generic Error will work if you don't want to use a more specific one.

function divide(x, y) {
    if (y === 0) {
        throw Error("You may not divide by zero")
    }

    return x / y
}

// 2. Create a function `logAll()` which accepts an `array` parameter and then console.logs all the items in the array.

// Use try / catch blocks in case someone gives you something that isn't an array to gracefully avoid having an error on the console.

function logAll(array) {
    try {
        array.forEach( item => console.log(item) )
    } catch( error ) {
        errorLog.push(error)
        console.warn( error.toString() )
    }
}

// for example:
// logAll(true)
// should fail but gracefully