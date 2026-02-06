// SELECTORS

// DOM - Document Object Model
// vs
// HTML

// HTML is a blueprint, the DOM is a living version that has been built off the HTML

// the DOM is a tree with nodes
// - document --> this is the root of the whole tree
//     - html
//         - head
//             - meta
//             - meta
//             - title
//             - link
//         - body
//             - h1
//             - p
//             - p - .removeable-item
//             - p - .removeable-item
//             - p - .removeable-item
//             - ul
    //              - li
    //              - li
    //              - li
    //              - li
    //              - li
    //              - li
//             - img
//             - div 

// selecting --> reading the page, finding elements

// querySelector returns the FIRST element it finds that matches

const mainHeader = document.querySelector("h1")

const noteToRemove = document.querySelector("#note-to-remove")

const pTagWithClass = document.querySelector(".removeable-item")

// querySelectorAll gets all items that match

const allPTagsWithClass = document.querySelectorAll(".removeable-item")

// returns a NodeList which is similar to an array

// manipulating styles...

mainHeader.style.color = "blue"
mainHeader.style.textAlign = "center"

noteToRemove.textContent = "Where cats rule the world!"
noteToRemove.style.textAlign = "center"

// change things about an img

const gifURL = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGpmcG42NmF3NXFjZHV2eTRvZnJ0NXVzM3licGlzc3Fndm96OXhtMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h6AMD4GXFxO2k/giphy.gif"

const headlinerImg = document.querySelector("#headliner-meme")

headlinerImg.src = gifURL
headlinerImg.alt = "cat on a roomba"

// remove elements from the page

noteToRemove.remove()

allPTagsWithClass.forEach( item => item.remove() )

// EXERCISES

// 1. Create an <h2> beneath the <h1>. Select the <h2> and change its `textContent` to be "Where cats rule the world". Also change its `color` to "red". Additionally center the text.

const subTitle = document.querySelector("#sub-title")
subTitle.textContent = "Where cats rule the world"
subTitle.style.color = "red"
subTitle.style.textAlign = "center"

// 2. Create a <ul> with a series of <li> items detailing things about cats. Select each of the <li> elements and remove them.

// const removeList = document.querySelectorAll("#remove-list li")
// removeList.remove()

const removeListItems = document.querySelectorAll("#remove-list li")
removeListItems.forEach( item => item.remove() )

// 3. Find a cat meme on the internet and change the `#headliner-meme` element so that its `src` is that new cat meme.

const headlinerMeme = document.querySelector("#headliner-meme")

headlinerMeme.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHBsZHhxaXFobnVjaDNzdTdtbmJrNzlueHc1djZoMzBneDhxbHZxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ngs9Nqu0pqkec/giphy.gif"