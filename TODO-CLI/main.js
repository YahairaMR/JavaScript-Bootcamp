/*

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

while (choice !== 3) {
    console.log("\n-----------------------------------------\n");

    displayList();

    console.log("\n~ Select an action ~");
    console.log("1. Create a to-do item");
    console.log("2. Complete a to-do item");
    console.log("3. Exit the program");
    choice = Number(prompt("> "));

    if (choice === 1) {
        // console.log("Create a todo");

        console.log("\n~ Creating a new to-do item ~")
        console.log("What is your item called?")

        let todoName = prompt("> ");

        let newTodo = {
            name: todoName,
            completed: false
        }

        todoList.push(newTodo);

    } else if (choice === 2) {
        console.log("Complete a todo");
    } else if (choice === 3) {
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

