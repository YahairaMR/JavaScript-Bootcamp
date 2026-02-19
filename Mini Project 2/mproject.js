const DOGS_BASE_URL = "http://localhost:3000/dogs"

// DOM ELEMENTS
const dogButtons = document.querySelector("#dog-buttons")
const dogBreed = document.querySelector("#dog-breed")
const dogTemperament = document.querySelector("#dog-temperament")
const dogLifeSpan = document.querySelector("#dog-life-span")
const dogImage = document.querySelector("#dog-image")

const filteredDogs = dogData.dogs.filter(dog => 
    dog.breed.toLowerCase().includes(searTerm.toLowerCAse()));