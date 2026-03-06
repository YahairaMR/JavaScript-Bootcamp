let saveForm = document.querySelector("#saveForm");
let stringInput = document.querySelector("#stringInput");
let savedString = document.querySelector("#savedString");
let clearButton = document.querySelector("#clear");

// load data
// localStorage.getItem("key")
// returns the data from localStorage associated with the given key
// if the data does NOT exist, return null

// console.log(localStorage.getItem("stringInput"))
let localString = localStorage.getItem("stringInput");

// if we dont have data, set textContent of saved String to "Nothing Saved"
if (localString === null) {
  savedString.textContent = "Nothing Saved";
} else {
  // if we do have data, set textContent = localString
  savedString.textContent = localString;
}

saveForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // localStorage
  // utilizes our browser to store user data in the form of key value pairs

  // save data
  // localStorage.setItem("key", value) - method to save data indefinitely
  // we can define the keys ourselves
  // if data does not exist, the key value pair is set up
  // if data does exist, overwrite with new data
  localStorage.setItem("stringInput", stringInput.value);

  savedString.textContent = stringInput.value;
  stringInput.value = "";
});

// Object
let createUserForm = document.querySelector("#createUserForm");
let usernameInput = document.querySelector("#usernameInput");
let emailInput = document.querySelector("#emailInput");
let userDisplay = document.querySelector("#userDisplay");

// where we'll keep track of user info
let user = {};

let localUser = localStorage.getItem("user");

if (localUser === null) {
  userDisplay.textContent = "Please add a user";
} else {
  // set our user equal to the object we saved in localStorage
  // convert back to an object with
  user = JSON.parse(localUser);
  userDisplay.textContent = `Username: ${user.username} | Email: ${user.email}`;
}

createUserForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // set the user info
  user.username = usernameInput.value;
  user.email = emailInput.value;
  console.log("User Object");
  console.log(user);

  // save that user in local storage
  // localStorage works with strings
  // we need to convert object types into strings using JSON.stringify(object)
  localStorage.setItem("user", JSON.stringify(user));

  // setting up our display
  userDisplay.textContent = `Username: ${user.username} | Email: ${user.email}`;

  // clearing the inputs
  usernameInput.value = "";
  emailInput.value = "";
});

// clear local storage and reset the text
clearButton.addEventListener("click", () => {
  localStorage.clear();
  savedString.textContent = "Nothing Saved";
  userDisplay.textContent = "Please add a user";
});

/*
Challenge 1: Page load counter
Your first challenge is to implement a counter that stores a number indicating how many times the page has been loaded. Every time you refresh the page, this counter should increment by one.

To do this, you'll need to make it so that upon page load, you retrieve a number from localStorage (note: all values will be stored in localStorage as strings so type conversion may be necessary), add one to it, then display it on the page. One special case you'll need to handle is the first page load, when no number has been stored in local storage!
*/

let displayCount = document.querySelector("#loadCount");

let savedCount = localStorage.getItem("savedCount");
console.log(savedCount);

if (savedCount === null) {
  // scount does not exist in local storage yet, let's initialize
  savedCount = 1;
}
displayCount.textContent = savedCount;

savedCount++;
localStorage.setItem("savedCount", savedCount);

/*
Challenge 2: List builder
Your next challenge is to allow the user to store a list of strings.

To do this, once again create a text input and a button in HTML. Additionally, add an ordered list below the input and button.

From here, add JS so that every time the user clicks the button, a new list item is added to ordered list that contains whatever the value of the text input was.

Similar to the previous challenge, these list items should persist between page loads.

The trick here is that you'll need to store an array in local storage. One major challenge here: only strings can be stored in local storage. You can convert an array to a string with JSON.stringify() and you can convert a string to an array with JSON.parse()
*/

let listForm = document.querySelector("#listForm");
let listInput = document.querySelector("#listInput");
let savedList = document.querySelector("#savedList");

let items = localStorage.getItem("items");

const displayList = () => {
  for (let i = 0; i < items.length; i++) {
    // create new elements and display them
    let newElement = document.createElement("li");
    newElement.textContent = items[i];

    savedList.append(newElement);
  }
};

if (items === null) {
  items = [];
} else {
  // set up our item list
  items = JSON.parse(items);
  displayList();
}

listForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // add new string to array
  items.push(listInput.value);

  let newElement = document.createElement("li");
  newElement.textContent = listInput.value;
  savedList.append(newElement);

  localStorage.setItem("items", JSON.stringify(items));

  listInput.value = "";
});
