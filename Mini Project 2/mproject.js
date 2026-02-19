// BASE URLS
const DOGS_BASE_URL = "http://localhost:3000/dogs"

// DOM ELEMENTS
const dogButtons = document.querySelector("#dog-buttons")
const dogBreed = document.querySelector("#dog-breed")
const dogTemperament = document.querySelector("#dog-temperament")
const dogLifeSpan = document.querySelector("#dog-life-span")
const dogImage = document.querySelector("#dog-image")

async function fetchAllDogs(id){
    const response = await fetch(DOGS_BASE_URL)
    const data = await response.json()

    data.forEach(createDogButton)
}

function createDogButton(dogObj){
    const button = document.createElement("button")
    button.textContent = dogObj.name
    dogButtons.append(button)

    button.addEventListener("click", () => fetchDog(dogObj.id))

    
}