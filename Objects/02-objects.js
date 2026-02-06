// OBJECTS

// objects are data structures --> a data structure is a construct that holds data in a more complex way than a variable

const gameOfThrones = {
    title: "Game Of Thrones",
    numberOfSeasons: 8,
    numberOfEpisodes: 73,

    mainCharacters: [ "Ned Stark", "Sansa Stark", "Arya Stark", "That One Terrible Kid", "That Terrible Kid's Mother" ],

    review: {
        title: "Best Show of All Time OMG",
        reviewer: "Bob from Bob's Burgers",
        content: "I love this show OMG it's soooooooooo good"
    }
}

// each attribute is a KEY / VALUE pair

// title is a key
// "Game of Thrones" is a value

// numberOfSeasons is a key
// 8 is a value

// EXERCISES

// 1. Create an object for your favorite tv show (or just pick one... whatever) and create an object for it

// 2.  That object needs to have a title, a number of seasons, and a number of episodes

// 3. Additionally I'd like you to create a nested object with a review, and that review has a title, a reviewer (can be your name or someone else) and content

// 4. Can you console.log
// - the title
// - the number of episodes
// - a pretty printed version of the review that looks like this: 
// "{review title} by {reviewer name}: {review content}"

const xMen = {
    title: "X-Men: the Animated Series",
    numberOfSeasons: 5,
    numberOfEpisodes: 76,
    review: {
        title: "I like xmen",
        reviewer: "Chett (1990's version)",
        content: "Wolverine is super cool"
    }
}

const robot = {
    name: "WALL-E",
    age: "unknown",
    batteryLife: "1 hour",
    pushBlock: function() { return robot.name + " pushes the block" },
    charge: function() { robot.batteryLife = "24 hours" },
    killAllHumans: function() { return "BEEP BOOP MURDER HUMANS" }
}

// const pretendArray = {
//     0: "I am zero",
//     1: "I am one",
//     2: "I am two",
//     length: 3,
//     map: function() {},
//     slice: function() {},
//     filter: function() {}
// }

// EXERCISES

// 1. Create a new object `car` with these attributes: `make`, `model`, `gallonsInTank`, `maxGallons`, `currentMiles` (you may use the example below or make a new one...)

// 2. Give the `car` a method `describeMakeAndModel` which returns the `make` and `model` for the car. For example: "Ford Taurus"

// 3. Give the `car` a method `fillTank` which sets the `gallonsInTank` to the `maxGallons`

// 4. Give the `car` a method `goForADrive` which sets the `gallonsInTank` to 5 less than it was and also sets `currentMiles` to be 100 more than it was

// 5. Give the `car` a method `rewindMiles` which sets `currentMiles` to 0

// the gauge for a car's mileage is called an odometer for those curious
// rewinding the odometer is illegal btw

const car = {
    make: "Ford",
    model: "Taurus",
    gallonsInTank: 2,
    maxGallons: 10,
    currentMiles: 100000,
    whatIsThis: function() { 
        return this 
    },
    describeMakeModel: function() { 
        return `${this.make} ${this.model}` 
    },
    fillTank: function() { 
        this.gallonsInTank = this.maxGallons 
    },
    goForADrive: function() {
        this.gallonsInTank -= 5
        this.currentMiles += 100
    },
    rewindMiles: function() {
        this.currentMiles = 0
    }
}