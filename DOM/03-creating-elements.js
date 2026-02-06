// CREATING ELEMENTS
const memesContainer = document.querySelector("#memes-container")

function addCatMeme(memeURL) {
    // 1. Create the element based on the type of element we want
    const newImg = document.createElement("img")
    
    // 2. Add texture - changing different attributes
    // for ex. adding style, changing text content, changing the src
    newImg.src = memeURL

    // 3. Put the element somewhere
    // with append I am adding the new item to the container
    memesContainer.append( newImg )
    // append will add this as the LAST child

    // memesContainer.prepend()
    // prepend will add the child as the FIRST child
}

catMemes.forEach( memeObj => addCatMeme( memeObj.img_url ) )

// EXERCISES

// 1. Create a new <ol> called `cat-meme-names`

const catMemeNamesOL = document.createElement("ol")
catMemeNamesOL.id = "cat-meme-names"
document.body.append( catMemeNamesOL )

// 2. Loop over all the cat memes and create a <li> with the textContent of that cat meme's `name` attribute

// 1. Loop over the cat memes
// 2. For each create an li
// 3. change the li's text content to that meme's `name` attribute
// 4. Put the meme in the ol

function addMemeName( name ) {
    const li = document.createElement("li")
    li.textContent = name
    catMemeNamesOL.append( li )
}

catMemes.forEach( memeObj => addMemeName(memeObj.name) )

// ADDITIONAL EXERCISES

// 1. Create a <nav> element and PREPEND it to the page.

const nav = document.createElement("nav")
document.body.prepend( nav )

// 2. Create three <a> elements, "Home", "About", "Contact Us". These should all have an href="#" so that they link back to the current page. Append them to the <nav> element.

const a1 = document.createElement("a")
const a2 = document.createElement("a")
const a3 = document.createElement("a")

a1.textContent = "Home"
a2.textContent = "About"
a3.textContent = "Contact Us"

a1.href = "#"
a2.href = "#"
a3.href = "#"

nav.append(a1, a2, a3)

// 3. Create a <button> that reads "Replace All Images" and append it to the page.

const replaceButton = document.createElement("button")
replaceButton.textContent = "Replace All Images"
document.body.append(replaceButton)

// 4. When the <button> with "Replace All Images" is clicked, it replaces the `src` attribute for every image on the page with an image of your choice.

function replaceCatImage( img ) {
    img.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHhodW84enk4ejB1azRvdjA4NWoycWNlMW04am1uY3lnemlkbDNsdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h6AMD4GXFxO2k/giphy.gif"
}

function replaceAllCatImages() {
    const allImages = document.querySelectorAll("img")
    allImages.forEach( replaceCatImage )
}

replaceButton.addEventListener( "click", replaceAllCatImages )

// 5. Create a <footer> element. Give it a display of "grid" and a gridTemplateColumns of "1fr 1fr". Append it to the body. Feel free to add additional styling as you see fit.

const footer = document.createElement("footer")
footer.style.display = "grid"
footer.style.gridTemplateColumns = "1fr 1fr"
document.body.append( footer ) //Place to put it, in this case in the body

// 6. Create two <p> elements. Inside one add copyright information and inside the other add a phone number (make one up). Append both of them to the <footer> element.

const p1 = document.createElement("p")
const p2 = document.createElement("p")

p1.textContent = "© Cat Memes Super Site 2026"
p2.textContent = "+1 999 888 7777"

footer.append(p1, p2)

// BONUS: Create a <p> element named "clock" and prepend it to the page. Use setInterval to run a callback each second (1000ms / 1s). Each second change the element's `textContent` to the current datetime.
// For the current datetime use this: new Date().toLocaleString("en-US")

const clock = document.createElement("p")
clock.textContent = new Date().toLocaleString("en-US")
document.body.prepend( clock )

function tickTock() {
    clock.textContent = new Date().toLocaleString("en-US")
}

setInterval(tickTock, 1000)