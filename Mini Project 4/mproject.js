const prompt = require("prompt-sync")({ sigint: true });

/*
fish - {
    name: string
    weight: number
    value: number
}

*/

const generateRandomName = () => {
    const adj1Arr = ["Large", "Small", "Scaly", "Slimy", "Quick"];
    const adj2Arr = ["Smooth", "Wild", "Slippery", "Gentle", "Striped"];
    const typeArr = ["Salmon", "Trout", "Catfish", "Bass", "Cod"];

    // adj1 adj2 type
    // get random adj1 - get a random item from an array
    // 0 - 1 * 5   0 - 5 -> Math.floor -> 0 - 4
    let adj1Index = Math.floor(Math.random() * adj1Arr.length);
    let adj2Index = Math.floor(Math.random() * adj2Arr.length);
    let typeIndex = Math.floor(Math.random() * typeArr.length);

    let adj1 = adj1Arr[adj1Index];
    let adj2 = adj2Arr[adj2Index];
    let type = typeArr[typeIndex];

    return `${adj1} ${adj2} ${type}`;
}

const generateRandomWeight = () => {
    // .toFixed(num) - returns a (string) decimal based on how many specified places (num) that you pass in
    // .toFixed(2) -> 2 decimal places
    // .toFixed(3) -> 3 decimal places etc.
    return Number((Math.random() * 5).toFixed(2));
}

const generateRandomValue = () => {
    return Number((Math.random() * 15).toFixed(2));
}

const generateRandomFish = () => {
    // random name
    let fishName = generateRandomName();
    // random weight
    let fishWeight = generateRandomWeight();
    // random value
    let fishValue = generateRandomValue();

    // our new fish object
    let newFish = {
        name: fishName,
        weight: fishWeight,
        value: fishValue
    }

    console.log(newFish)
}

generateRandomFish();

// creating a UI with console.logs/prompts like we did for the to-do list
// make it so player can catch OR release fish
// 6 turns long
