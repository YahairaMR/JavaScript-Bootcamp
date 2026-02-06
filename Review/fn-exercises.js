// 1. Define a function helloWorld() which returns "hello world!"
function helloWorld() {
    return "hello world!"
}

// 2. Define a function today() which gets the current date ( you can use new Date() ) and returns "Today is: { currentDate }". You don't need to format the date nicely unless you feel like, look up Date.toLocaleString if you're curious!
function today() {
    const date = new Date()
    const formattedString = `Today is: ${ date }`
    return formattedString
}

// 3. Define a function sayMyName() which has a parameter `name` and returns "My name is { name }"
function sayMyName( name ) {
    const formattedString = `My name is ${name}`
    return formattedString
}

// 4. Define a function alterString() which has two parameters `string` and `transformation`. If `transformation` is `uppercase` it returns the string.toUpperCase(), if `transformation` is `lowercase` it returns the string.toLowerCase(), if the transformation is `first` it returns the first letter of the string (you'll have to look that last part up!)
function alterString(string, transformation) {
    if (transformation === "uppercase") {
        return string.toUpperCase()
    } else if (transformation === "lowercase") {
        return string.toLowerCase()
    } else if (transformation === "first") {
        return string.charAt(0)
        // OR
        // return string[0]
    }
}

// 5. Define a function `sing()` which has a parameter `songTitle` and returns "Now singing: {songTitle}". If no song title are given, the default parameter should be "Never Gonna Give You Up".
function sing(songTitle="Never Gonna Give You Up") {
    const formattedString = `Now singing: ${songTitle}`
    return formattedString
}

// SCOPE

// 1. Define a changeable variable `currentTime` if you haven't already.

// let currentTime = "4:44"

// 2. Define a function `updateCurrentTime` which gets the current hour and minute and changes the currentTime variable so that it reads: "{hour}:{minute}", for example "10:52". You can get the current hour and minute with: 
// const time = new Date() 
// const hour = time.getHours()
// const minute = time.getMinutes() 

function updateCurrentTime() {
    const time = new Date()
    const hour = time.getHours()
    const minute = time.getMinutes()
    let currentTime = `${hour}:${minute}`
    console.log(currentTime)
}

console.log(currentTime)