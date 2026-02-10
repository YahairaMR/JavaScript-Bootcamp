// Review

// 1. Choose one of the sharks in the `sharksArray` as your featured shark. Accessing that shark, change each section of the "featured-shark" section so that it has the details for that shark including <li> elements for the "featured-diet" and "featured-habitats" sections. Do this using Javascript DOM manipulation.

// 2. For each shark object in the sharksArray append a new <li> in the "shark-facts-list" with that shark's `funFact`. Do this using Javascript DOM manipulation.

const sharksArray = [
  {
    name: "Great White Shark",
    species: "carcharodon carcharias",
    diet: ["fish", "cephalopods", "marine mammals", "sea birds", "sea turtles"],
    funFact: `Great white sharks communicate with each other through a complex array of body language. Most behaviors have been observed at aggregations around seal rookeries shortly after peak hunting periods, where sharks engage in extensive socializing. At least 20 unique forms of body language are known, most of which consist of two sharks swimming with or around each other in passing, parallel, or in circles to examine the other in a ritualized manner.`,
    habitats: [
      "Northwest Pacific",
      "Northeast Pacific",
      "Northwest Atlantic",
      "Mediterranean",
      "South Africa",
      "Oceania",
    ],
  },
  {
    name: "Largetooth Sawfish",
    species: "pristis pristis",
    diet: ["fish", "molluscs", "crustaceans"],
    funFact: `The "saw" can be used both to stir up the bottom to find prey and to slash at groups of fish. Sawfish are docile and harmless to humans, except when captured where they can inflict serious injuries when defending themselves with the "saw".`,
    habitats: ["tropical waters", "sub-tropical waters", "freshwater rivers"],
  },
  {
    name: "Nurse Shark",
    species: "ginglymostoma cirratum",
    diet: ["small fish", "crustaceans", "molluscs", "algae"],
    funFact: `The name "nurse" may have originated from antiquated spelling conventions. The Oxford English Dictionary notes that, in medieval times, the "n" of the word "an" was frequently transferred to a following word that began with a vowel. Huss, husse and hurse were antiquated names for dogfish and other sharks.`,
    habitats: ["Eastern Atlantic", "Western Atlantic", "East Pacific"],
  },
];

const featuredShark = sharksArray[2];

const featuredName = document.querySelector("#featured-name");
const featuredSpecies = document.querySelector("#featured-species");
const featuredFact = document.querySelector("#featured-fact");
const featuredDiet = document.querySelector("#featured-diet");
const featuredHabitats = document.querySelector("#featured-habitats");

featuredName.textContent = featuredShark.name;
featuredSpecies.textContent = featuredShark.species;
featuredFact.textContent = featuredShark.funFact;

// ADD DIET FOR FEATURED SHARK

function createDietLi(dietItem) {
  const newLi = document.createElement("li");
  newLi.textContent = dietItem;
  featuredDiet.append(newLi);
}

featuredShark.diet.forEach((dietItem) => createDietLi(dietItem));

// ADD HABITATS FOR FEATURED SHARK

function createHabitatLi(habitatItem) {
  const newLi = document.createElement("li");
  newLi.textContent = habitatItem;
  featuredHabitats.append(newLi);
}

featuredShark.habitats.forEach((habitatItem) => createHabitatLi(habitatItem));

// SHARK FACTS UL

const sharkFactsList = document.querySelector("#shark-facts-list");

function createFactLi(sharkFact) {
  const newLi = document.createElement("li");
  newLi.textContent = sharkFact;
  sharkFactsList.append(newLi);
}

sharksArray.forEach((shark) => createFactLi(shark.funFact));
