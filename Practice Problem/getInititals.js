/*

getInitials.js
Given a list of name objects, return their names with only the initials in the following format: 

[ { first: "Bob",  last: "Michaels"}, { first: "Sam", last: "Fritz" }, { first: "Dan", last: "Kustin"} ] => ["B.M.", "S.F.", "D.K."]

parameter
[object]

return
[strings]

*/

const getInitials = (arr) => {
    let results = [];

    for (let i = 0; i < arr.length; i++) {
        let firstInitial = arr[i].first[0];
        let lastInitial = arr[i].last[0];

        let initials = `${firstInitial}.${lastInitial}.`;

        console.log(initials);
        results.push(initials);
    }

    return results;
};

console.log(
    getInitials([
        { first: 'Bob', last: 'Michael' },
        { first: 'Sam', last: 'Fritz' },
        { first: 'Dan', last: 'Kusting' },
        { first: 'Erin', last: 'Lynn' },
    ])
);