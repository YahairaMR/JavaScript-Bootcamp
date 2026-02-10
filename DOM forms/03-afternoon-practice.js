// MAIN DELIVERABLES //

// Mini project: create a todo list page. This has two main sections: a <form> and an <ol>. You should add these directly in the HTML.

// The form has three inputs: a text input for the name of the task, a number input for the priority of the task, and a submit input.

// When the form is submitted create an <li> with the name and priority of the task appended to the <ol>.

const tasksForm = document.querySelector("#tasks-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority-input");
const tasksList = document.querySelector("#tasks-list");
const completedTasksList = document.querySelector("#completed-tasks-list");

tasksForm.addEventListener("submit", createTask);

function createTask(event) {
  event.preventDefault();

  const li = document.createElement("li");
  li.textContent = `${taskInput.value} - Priority: ${priorityInput.value}`;
  changeLiStyle(li, priorityInput.value);
  tasksList.append(li);
  createDelete(li);
  tasksForm.reset();
}

// As you create the <li> also create a delete <button> and append it to the <li>. Add an event listener to the <button> where when it's clicked, the <li> will `.remove()` from the page. Be mindful of scope... there are multiple ways to target the  <li> and some are easier than others!

// using an arrow fn:
function createDelete(li) {
  const button = document.createElement("button");
  button.textContent = "Delete";
  li.append(button);
  button.addEventListener("click", () => completedTasksList.append(li));
}

// second example using a named callback:
// function createDelete(li) {
//     const button = document.createElement('button')
//     button.textContent = "Delete"
//     li.append(button)
//     button.addEventListener("click", handleDelete)
// }
// function handleDelete( event ) {
//     const li = event.target.parentElement
//     li.remove()
// }

// Add a "delete-all" <button> above the list (you may do this directly in the html). When the button has been clicked, delete all items in the <ol>.

const deleteAllButton = document.querySelector("#delete-all-button");

deleteAllButton.addEventListener("click", handleDeleteAll);

function handleDeleteAll() {
  const taskListLiElements = document.querySelectorAll("#tasks-list li");

  taskListLiElements.forEach((li) => li.remove());
}

// BONUS DELIVERABLES //

// The number for the task priority changes the color of the <li> text. For example, maybe priority 1 causes it to be red, priority 2 makes it yellow, and priority 3 makes it green (you choose the colors and what numbers they correspond to!)

function changeLiStyle(li, priority) {
  console.log(typeof priority, priority);
  if (priority === "1") {
    li.style.color = "red";
  } else if (priority === "2") {
    li.style.color = "yellow";
  } else if (priority === "3") {
    li.style.color = "green";
  } else {
    li.style.color = "";
  }
}

// Make an additional <ul> for completed tasks below the <ol> for completed tasks. When the delete <button> is clicked the button is removed and the task is moved to the <ul> for completed tasks.
// HINT: You may .append an element again to change where it lives...

function completeTask(li) {
  completedTasksList.append(li);
}

// If you have even more time feel free to style the page!
