// HANDLING EVENTS

// GOAL: build a stopwatch

// EVENTS

const catHelloButton = document.querySelector("#cat-hello-button")
catHelloButton.addEventListener( "click", () => alert("MEOW") )

// event listener is waiting for a specific event to happen and then it calls a callback function

// get the stopwatch button and text
const stopwatchButton = document.querySelector("#stopwatch-button")
const stopwatchText = document.querySelector("#stopwatch-text")

// make variables for the time and whether it's running
// state - a changeable variable that tracks something important
let stopwatchTime = 0
let isStopwatchRunning = false

// add event listener which starts the process when the button is clicked
stopwatchButton.addEventListener("click", startStopwatch)

// setInterval
// two parts - callback, time between calls

function startStopwatch() {
    // checking to make sure the stopwatch isn't running yet
    if ( isStopwatchRunning === false ) {
        // if false let's run it
        setInterval(incrementStopwatch, 1000)
        // since the stopwatch is starting we change the value here to true so that we can't attempt to start it again
        isStopwatchRunning = true
    }
}

// this function happens every 1000ms when the stopwatch has started
function incrementStopwatch() {
    // increment the variable
    stopwatchTime += 1
    // change what shows up on the page
    stopwatchText.textContent = stopwatchTime
}

// EXERCISES

// 1. Create two buttons in the html, one for blue, one for red

// 2. When the red button is clicked, change the color of the <h1> to "red"

const redButton = document.querySelector("#red-button")

redButton.addEventListener("click", changeToRed)

function changeToRed() {
    const h1 = document.querySelector("h1")
    h1.style.color = "red"
}

// 3. When the blue button is clicked, change the color of the <h1> to "blue"

const blueButton = document.querySelector("#blue-button")

blueButton.addEventListener("click", changeToBlue)

function changeToBlue() {
    const h1 = document.querySelector("h1")
    h1.style.color = "blue"
}

// 4. BONUS - Instead of just changing the color of the h1, change the color for ALL the text on the page

// const redButton = document.querySelector("#red-button")

// redButton.addEventListener("click", changeToRed)

// function changeToRed() {
//     const allElements = document.querySelectorAll("*")
//     allElements.forEach( element => element.style.color = "red")
// }