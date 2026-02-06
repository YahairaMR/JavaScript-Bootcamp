function carFactory(make, model) {

    const car = {
        make: make,
        model: model,
        describeMakeModel: function() { 
            return `${this.make} ${this.model}` 
        },
    }

    return car
}

// CLASS

// ecma organization
// ecmascript --> template for building javascript
// let's add class syntax!

// const klass = "Javascript Bootcamp"

class Car {

    constructor(make, model) {
        this.make = make
        this.model = model
        console.log("Building a new car called a " + make + " " + model)
    }

    describeMakeAndModel() {
        return `${this.make} ${this.model}`
    }

}

// EXERCISE

// 1. Build a `Course` class (for example a javascript course or html course).


// 2. The `Course` is constructed with these attributes:
// - `name`: string
// - `numberOfDays`: number
// - `studentRoster`: []
// - `completed`:  boolean

// 3. Create a method for `Course` called `completeCourse` which changes the `completed` attribute to `true`

// 4. Create a method called `rollCall` which loops through the `studentRoster` and prints the name of each student to the console with console.log

class Course {
    constructor(name, numberOfDays, studentRoster, completed) {
        this.name = name
        this.numberOfDays = numberOfDays
        this.studentRoster = studentRoster
        this.completed = completed
    }

    completeCourse() {
        this.completed = true
    }

    // rollCall() {
    //     this.studentRoster.forEach( student => console.log(student) )
    // }

    rollCall() {
        for ( let i = 0; i < this.studentRoster.length; i++ ) {
            console.log( this.studentRoster[i] )
        }
    }
}