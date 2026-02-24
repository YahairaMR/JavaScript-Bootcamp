// using query selector, we can access to our page elements
const h1Element = document.querySelector("h1");

// modify a text
h1Element.textContent = "Javascript DOM Review 1";
h1Element.innerText = "New Text";
h1Element.innerHTML = "This too!";

const languageHeader = document.querySelector("#language");
languageHeader.style.color = "blue";
languageHeader.style.backgroundColor = "yellow";

// create a list element with the content "Java"
const javaElement = document.createElement("li");
javaElement.textContent = "Java";

// add that element to our languages list
const languageList = document.querySelector("ul");

// parentElement.append(childElement)
languageList.append(javaElement);

// click the add button

// add additional elements to our list
const addButton = document.querySelector(".add");
addButton.addEventListener("click", function () {
  console.log("Add!");
  // add additional element to our list
  const newElement = document.createElement("li");
  newElement.textContent = "C#";
  languageList.append(newElement);
});

// remove element from DOM
javaElement.remove();

// remove entire list
// languageList.remove();

// get input from te form
// create a new li based on the input
// add that input to our list

//input and form
const form = document.querySelector("#languageForm");
const input = document.querySelector("#languageInput");

// callback function bc it passed as a parameter
form.addEventListener("submit", (event) => {
  //prevents form submit event from refreshin the page
  event.preventDefault();

  // console.log("form clicked");

  // get access to user input and put it inside a new li element
  const listItem = document.createElement("li");
  listItem.textContent = input.value;

  languageList.append(listItem);

  // clearing the input - access the value of the input and set it equal to an empty string
  input.value = "";
});

// access MULTIPLE elements of the same type with querySelectorAll
// document.querySelectorAll ("parent childType")
// months will grab all <li> elements inside the #months <ol>
const months = document.querySelectorAll("#months li");

console.log(months);

// forEach
// for loop
// for of

//forEach - array method (Higher Order Function) that goes through each element in the array
// you cna use this whenever you need a loop that goes through every element in the array
//months.forEach((element) => {
//    console.log(element.textContent)

//   element.style.color = "red";
//})

// for of (modified for loop)
// loop that works like forEach
// goes through each element in an array
// for (cosnt yourElement of array){}
//for(let element of months){
//    console.log(element.textContent)
//    element.style.clor = "orange"
//}

for (let i = 0; i < months.length; i++) {
  console.log(months[i].textContent);
  months[i].style.color = "lime";
}
