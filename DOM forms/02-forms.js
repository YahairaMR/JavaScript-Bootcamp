const sharkSightingForm = document.querySelector("#shark-sighting-form");
const sharkSpeciesInput = document.querySelector("#shark-species-input");
const sharkLocationInput = document.querySelector("#shark-location-input");
const sharkDateInput = document.querySelector("#shark-date-input");
const sharkSightingsList = document.querySelector("#shark-sightings-list");

function handleSightingSubmit(event) {
  // preventDefault will keep the page from refreshing on submit
  event.preventDefault();

  // event.target is what TRIGGERED the event
  console.log(event.target);

  // to get information from an input we access the .value
  const sharkSpecies = sharkSpeciesInput.value;
  const sharkLocation = sharkLocationInput.value;
  const sharkDate = sharkDateInput.value;

  // create the new element
  const newLi = document.createElement("li");
  newLi.textContent = `${sharkSpecies} - ${sharkLocation} - ${sharkDate}`;
  sharkSightingsList.append(newLi);
}

// submit is a special form event that happens when you click the submit button OR submit the form in any other way
sharkSightingForm.addEventListener("submit", handleSightingSubmit);

// 1. Create a comment box <form> for adding comments. This comment form only has inputs for a comment and a submit. You may add this directly to the html OR if you're feeling spicy you may add this using Javascript.

// SPICY ROUTE
const body = document.body;

const commentForm = document.createElement("form");
commentForm.id = "commentForm";
body.append(commentForm);

const commentBoxLabel = document.createElement("label");
commentBoxLabel.for = "commentBox";
commentBoxLabel.textContent = "Content:";
commentForm.append(commentBoxLabel);

const commentBoxInput = document.createElement("textarea");
commentBoxInput.id = "commentBox";
commentBoxInput.name = "commentBox";
commentForm.append(commentBoxInput);

const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Submit";
commentForm.append(submitButton);

// 2. Add a "comments-section" <ul> below the <form> in order to see comments.

const commentList = document.createElement("ul");
commentList.id = "comments-section";
body.append(commentList);

// 3. Create an event listener for the form. When the form is submitted, create a new <li> for the "comments-section" with `textContent` based on the submitted form and append the <li> to the "comments-section".

function handleCommentSubmit(event) {
  event.preventDefault();

  const commentContent = commentBoxInput.value;

  const newLi = document.createElement("li");
  newLi.textContent = commentContent;
  commentList.append(newLi);

  // resets all the inputs in the form
  commentForm.reset();
}

commentForm.addEventListener("submit", handleCommentSubmit);
