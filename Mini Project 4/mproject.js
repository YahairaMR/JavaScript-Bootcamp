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
};

const generateRandomWeight = () => {
  // .toFixed(num) - returns a (string) decimal based on how many specified places (num) that you pass in
  // .toFixed(2) -> 2 decimal places
  // .toFixed(3) -> 3 decimal places etc.
  return Number((Math.random() * 5).toFixed(2));
};

const generateRandomValue = () => {
  return Number((Math.random() * 15).toFixed(2));
};

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
    value: fishValue,
  };

  //   console.log(newFish);
  return newFish;
};

generateRandomFish();

// creating a UI with console.logs/prompts like we did for the to-do list
// make it so player can catch OR release fish
// 6 turns long

console.log(`You've gone fishing! Try to maximize the value of your caught fish. You can fish
for six hours (till 12:00pm) and can catch at most 10 lbs of fish.`);

console.log("\n==========================================\n");

let hour = 6;

// Array to keep track of caught fish
let caughtArray = [];
let totalWeight = 0;
let totalValue = 0;

while (hour < 12) {
  // total weight and total value
  console.log(`The time is ${hour}:00am. So far you've caught:
${caughtArray.length} fish, ${totalWeight} lbs, $${totalValue}`);
  let currentFish = generateRandomFish();

  console.log(`You caught a '${currentFish.name}' weighing ${currentFish.weight} lbs
and valued at $${currentFish.value}\n`);

  // currentFish
  // totalWeight
  // checking to see if current fish would put you over the weight limit
  if (currentFish.weight + totalWeight > 10) {
    // would exceed limit - skip current fish
    console.log(`This fish would put you over 10 lbs, so you release it.`);

    console.log(`Press [enter] to continue.`);
    prompt("> ");
  } else {
    // would not exceed limit - play game as normal
    console.log(`Your action: [c]atch or [r]elease?`);
    let choice = prompt("> ");

    if (choice === "c") {
      console.log("\nYou chose to catch the fish");
      caughtArray.push(currentFish);

      totalWeight = Number((totalWeight + currentFish.weight).toFixed(2));
      totalValue = Number((totalValue + currentFish.value).toFixed(2));
    } else {
      console.log("\nYou chose to release the finish");
    }
  }

  console.log("\n==========================================\n");
  hour++;
}

console.log("The time is 12:00pm. Times up!\n");

console.log(`You caught ${caughtArray.length} fish: `);

for (let fish of caughtArray) {
  console.log(`* ${fish.name}, ${fish.weight} lbs, $${fish.value}`);
}

console.log(`\nTotal weight: ${totalWeight} lbs`);
console.log(`Total value: $${totalValue}`);


// keep track of fish caught
// keep track of totals that need to be displayed to player every turn

// totals for when the game is over
// prevent the user from catching over 10 lbs

/*
The time is 12:00pm. Times up!
You caught 2 fish:
* Slimy Scaly Bass, 0.24 lbs, $3.12
* Grey Bottom-dwelling Angler, 9.56 lbs, $22.18
Total weight: 9.8 lbs
Total value: $25.30
*/