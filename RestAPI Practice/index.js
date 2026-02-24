// https://699cb3bf83e60a406a443bb9.mockapi.io/Users

const userURL = 'https://699cb3bf83e60a406a443bb9.mockapi.io/Users'

// utilizing our GET button, when we click the button, we make an API call that prints out all of our users

const getButton = document.querySelector('#get');

const userList = document.querySelector('#userList');

getButton.addEventListener('click', () => {
  console.log('GET')

  const getUsers = async () => {
    // 1. fetch the data
    const response = await fetch(userURL)
    // 2. json-ify the data
    const users = await response.json()

    //console.log(users);

    //display all users

    users.forEach(user => {
      console.log(user)

      const userElement = document.createElement('li')
      /*
          Username: their username
          City: their city
      */
      userElement.innerHTML =
        `<div>
          <h4>Username: ${user.name}</h4>
          <p>City: ${user.city}city</p>
        </div>`

      userList.append(userElement)
    })
  }

  getUsers()
});

/*
REST APIs
Representational State Transfer protocol

REST API Methods
// GET - allows end users to read data from an API

// POST - allows end users to create data and send it to an API. Purpose to send data

// PUT - allows end users to update data in an API

// DELETE - allows users to delete data in an API

*/

// POST
const postButton = document.querySelector('#post')


postButton.addEventListener('click', () => {
  const postNewUser = async () => {
    const response = await fetch(userURL, {
      // which method we want to use
      method: 'POST',
      // tells the server that we are sending JSON data
      headers: {
        'Content-Type': 'application/json'
      },
      // body - where we specify the data we want to send to the API
      // JSON.stringify - converts an object into a string that is formatted like a JSON object (required!)
      body: JSON.stringify({ name: 'JS-user201', city: 'New York' }),
    })

    const data = await response.json()

    console.log(data)
  }

  postNewUser()

})

// Create a new event listener for your form that will utilize the data from our inputs.
// we want to send this data to our API
// after clicking submit, the inputs should clear what the user had previously typed
// create whatever variables you think you'll need!


const form = document.querySelector('#post-form')
const username = document.querySelector('#username')
const city = document.querySelector('#city')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const postUser = async () => {
    const response = await fetch(userURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name: username.value, city: city.value })
    })
    const data = await response.json()
    console.log(data)

    username.value = ''
    city.value = ''
  }

  postUser()
})

// PUT - update 
const putButton = document.querySelector('#put')

putButton.addEventListener('click', () => {
  const updateUser = async () => {
    // PUT fetch(URL/{userId}) - MUST specify the user we are updating ir our URL
    const response = await fetch(`${userURL}/3`, {
      // we put our object inside the curly braces
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      // we still send updated data via the body
      body: JSON.stringify({ name: 'CodeWizard96', city: 'Denver' })
    })
    const data = await response.json();
    console.log(data);
  }

  updateUser();
})

// DELETE
const deleteButton = document.querySelector('#delete')

deleteButton.addEventListener('click', () => {
  const deleteuser = async () => {
    // Delete only needs the ID of the item you are trying to remove (no additional body!)
    const response = await fetch(userURL + '/1', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }
  deleteuser()
})