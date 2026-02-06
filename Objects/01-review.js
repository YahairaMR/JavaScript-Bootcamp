// Review

// Array.slice

const myArray = [
    100,  // 0
    200,  // 1
    300,  // 2
    400,  // 3
    500,  // 4
    // STOP BEFORE INDEX 5
    600   // 5
]

const slicedArray = myArray.slice(3, 5)

// myArray.slice( start, end=optional )

// Array.map

const multiplesOfFive = [5, 10, 15, 20, 25]

const doubledMultiplesOfFive = multiplesOfFive.map( n => n * 2 ) // <<< callback fn defined inside .map as an arrow fn

function doubleNumber(n) { // <<< named fn to be used as a callback fn
    return n * 2
}

const doubledMultiplesOfFive2 = multiplesOfFive.map( doubleNumber ) //<<< we pass the callback fn to .map

// Exercises

const tvShows = ["The Pitt", "Game of Thrones", "Attack on Titan", "Cheers", "Bobs Burgers", "Friends", "The Witcher"]

// 1. Return a new array of each of the string lengths for each of the tv shows using .map:
const tvShowTitleLengths = tvShows.map( show => show.length )

// 2. Return an new array of all tv shows excluding the first and the last tv show using .slice:
const middleShows = tvShows.slice(1, -1)

// 3. Return a new array of filtered tv shows that have titles that are 8 characters or less using .filter:
const eightCharactersOrLess = tvShows.filter( show => show.length < 9 )