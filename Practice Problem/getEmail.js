/*

Write a function called getEmail that takes in a user object that looks like this:
{
 firstName: string,
 lastName: string
}

return the same object with a new email property added
to the object. the email property should be in the following format:
firstname.lastname@gmail.com

getEmail({ firstName: "Will", lastName: "Skill"}) =>
{
 firstName: Will
 lastName Skill
 email: will.skill@gmail.com    
}
 
*/

const getEmail = (person) => {

    let email = `${person.firstName}.${person.lastName}@gmail.com`.toLowerCase();

    // console.log(email)

    // adding email property to our person object and setting it equal to the value we created
    person.email = email;

    return person;
}

getEmail({ firstName: 'Will', lastName: 'Skill' })