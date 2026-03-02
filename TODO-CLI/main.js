/*

CRUD Application                     REST method
CREATE - add new data                POST
READ - view your data                GET                  
UPDATE - edit existing data          PUT 
DELETE - remove data                 DELETE

// todo item - keep track of the name of the task AND if the task is completed or not
todo: {
    name: string
    completed: boolean
}

todoList - [todo]

ToDo List CLI Project!

Write a program that allows a user to add different tasks to a list.
The tasks added are going to have an attached status to signify if the task has been completed or not
The user should also be able to indicate when a task is completed

The user should be able to exit the program from the main menu

As best as we can for the time being, we want to make it so this code doesn't break based on the user input.  
-prevent user from adding blank tasks

We want to write our code so that it's modular! We should use functions when possible trying our best to make it so all repetive/tedious tasks are kept in their own functions

Showcase the list whenever we are in the main menu OR if the list is empty

//Example
Welcome to the To-Do List Manager Application! 

==============================================

Your to-do list is empty.

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
[3] Exit the program
> 1

~ Creating a new to-do item ~
What is this to-do item called?
> Go to the dentist

==============================================

You have 1 to-do item(s).
1. [incomplete] Go to the dentist

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
[3] Exit the program
> 1

~ Creating a new to-do item ~
What is this to-do item called?
> Buy groceries

==============================================

You have 2 to-do item(s).
1. [incomplete] Go to the dentist
2. [incomplete] Buy groceries

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
[3] Exit the program
> 2

~ Completing a to-do item ~
Which to-do item would you like to complete?
> 2

==============================================

You have 2 to-do item(s).
1. [incomplete] Go to the dentist
2. [complete]   Buy groceries

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
[3] Exit the program
>

*/
const prompt = require("prompt-sync")({ sigint: true });

// 1. setting up the menu
// 2. printing an example list
// -give you time to figure out how to add an item to a list
// 3. go over adding an item to a list

// NEXT WEEK
// 4. completing todo items
// 5. dealing with bad input

console.log("Welcome to the ToDo List App!\n");
// console.log("-----------------------------------------\n");
// console.log("~ Select an action ~");
// console.log("1. Create a to-do item");
// console.log("2. Complete a to-do item");
// console.log("3. Exit the program");

/*
// a way for the user to make a choice
- let choice = Number(prompt("> "));

// a way to keep asking the user to make a choice until they exit the program
- while loop

*/

let todoList = [];

const displayList = () => {
  if (todoList.length === 0) {
    console.log("Your to-do list is empty");
    return;
  }

  console.log(`You have ${todoList.length} item(s) in your list.`);

  for (let i = 0; i < todoList.length; i++) {
    let status = "";

    if (todoList[i].completed === true) {
      // complete
      status = "[complete]";
    } else {
      // incomplete
      status = "[incomplete]";
    }

    console.log(`${i + 1}. ${status} ${todoList[i].name}`);
  }
};

let choice = 0;

while (choice !== 5) {
  console.log("\n-----------------------------------------\n");

  displayList();

  console.log("\n~ Select an action ~");
  console.log("1. Create a to-do item");
  console.log("2. Toggle to-do item completion");
  console.log("3. Edit to-do item");
  console.log("4. Delete to-do item");
  console.log("5. Exit the program");
  choice = Number(prompt("> "));

  if (choice === 1) {
    // console.log("Create a todo");

    console.log("\n~ Creating a new to-do item ~");
    console.log("What is your item called?");

    // .trim() gets rid of leading/trailing spaces in our string in order to enforce the user to enter non-white space characters for their todo name
    let todoName = prompt("> ").trim();

    // check if user did not enter a name
    // if (todoName === "") {
    //   console.log("Item cannot be empty");
    // } else {
    //   let newTodo = {
    //     name: todoName,
    //     completed: false,
    //   };

    //   todoList.push(newTodo);
    // }

    // keep prompting the user until they give us valid (non-empty) input
    while (todoName === "") {
      console.log("Item cannot be empty");
      console.log("Please enter a valid task: ");
      todoName = prompt("> ").trim();
    }

    //if user makes it out of the while loop, they must have entered proper non-empty input

    let newTodo = {
      name: todoName,
      completed: false,
    };

    todoList.push(newTodo);
  } else if (choice === 2) {
    if (todoList.length === 0) {
      console.log("Please add an item before trying to complete");
    } else {
      console.log("~ Completing a to-do item ~");
      console.log("Which to-do item would you like to complete?");

      try {
        let num = Number(prompt("> "));
        // use num to access the proper item in the todoList
        // console.log(todoList[num - 1])

        // while loop that will require user to enter a valid number
        while (num > todoList.length || num <= 0) {
          console.log("Please enter a valid number: ");
          num = Number(prompt("> "));
          // Number on empty string converts to 0
          // console.log("Number: ")
          // console.log(num);
        }

        // change completed status of selected object to true
        // todoList[num - 1].completed = true;

        // if true, make false. if false, make true
        // if(todoList[num - 1].completed === true){
        //     todoList[num - 1].completed = false;
        // } else {
        //     todoList[num - 1].completed = true;
        // }

        // flip the completed status
        todoList[num - 1].completed = !todoList[num - 1].completed;
      } catch (error) {
        console.log("Invalid choice");
      }
    }
  } else if (choice === 3) {
    console.log("~ Editing a to-do item ~");
    console.log("Which to-do item would you like to edit?");

    // task to edit
    let num = Number(prompt("> "));

    console.log("Enter a new task name: ")
    // get our task name
    let newTaskName = prompt("> ")

    // modify task name:
    todoList[num-1].name = newTaskName;    

    console.log("Task successfully edited!")


  } else if (choice === 4) {
    console.log("~ Deleting a to-do item ~");
    console.log("Which to-do item would you like to delete?");

    let num = Number(prompt("> "));

    // let result = [];

    // // go through each item in the todo list
    // // add the items to result list EXCEPT for the one we are trying to delete
    // for (let i = 0; i < todoList.length; i++) {
    //   // skipping the item we want to delete
    //   if (i !== num - 1) {
    //     result.push(todoList[i]);
    //   } else {
    //     console.log(`${todoList[i].name} successfully deleted`)
    //   }
    // }

    // // console.log("RESULT: ");
    // // console.log(result)

    // todoList = result;

    // .splice(startingIndex, deleteCount) - let's you remove item(s) from your array (will modify the original array)
    // startingIndex - where in the array to start the delete process
    // deleteCount - how many items you want to delete
    // splice returns the items that you deleted

    // delete the item
    // let removed = todoList.splice(num-1, 1); // array of 1 item
    // console.log(`"${removed[0].name}" successfully deleted`);

    todoList.splice(num - 1, 1);
  } else if (choice === 5) {
    console.log("Exit");
  } else {
    console.log("Invalid option");
  }
}

/*
-Allow the user to both complete and uncomplete to-do items


-Allow the user to fully delete a to-do item from the list

-Allow the user to edit the text of an existing to-do item
-anything else you can think of!!
*/
