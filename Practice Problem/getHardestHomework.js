/*

Write a function, getHardestHomework that takes in an array of homework objects and returns the name of the hardest homework assignment. The hardest homework will be the one that has the lowest average score. 

If the array contains no homeworks, return an empty string.

getHardestHomework([
    { name: 'homework 1', averageScore: 99 },
    { name: 'homework 2', averageScore: 1 }
])
=> 'homework 2'


getHardestHomework([
    { name: 'arrays', averageScore: 12 },
    { name: 'objects', averageScore: 100 },
    { name: 'strings', averageScore: 25 },
    { name: 'ifs', averageScore: 5 },
])
=> 'ifs'

let hardestHomework = ?
// loop

// parameters
array of HW objects

HW Object :
{
    name: string,
    averageScore: number
}

// return
HWname string

*/

const getHardestHomework = (array) => {
    if (array.length === 0) {
        return '';
    }
    // variable to keep track of hardest HW object
    // { name: "hw2", average: 0} - can't use a custom object as default!!! in this case, 0 is very likely to be lower than any other average score and hw2 is NOT in the list!  returning this would be bad!!
    // array[0] is guarunteed to be in the array!
    let hardestHomework = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i].averageScore < hardestHomework.averageScore) {
            // we found the new hardest homework!! so update our variable!!
            hardestHomework = array[i]
        }
    }

    return hardestHomework.name;
};

console.log(
    getHardestHomework([]),
)











