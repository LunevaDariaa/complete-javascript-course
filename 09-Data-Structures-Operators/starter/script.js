'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
///////////////////////////////////////////
// DESTRUCTURING ARRAYS
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// We are using ,_, to skip some elements
//  const [first, ,second] = restaurant.categories;
//  console.log(first, second);

//Switcing variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested array destructuring( array within another array)
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


//////////////////////////////////////
//Destructuring objects

const restaurant = {
  name1: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delitious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Destructuring

//Rest Pattern and parameters
//Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('murshroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('murshroom');

//////////////////////////////////////////////
//Short Circuiting && and ||

//-------OR----------
console.log('-----OR------');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || null);

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('-----AND------');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

//Practical example
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

////////////////////////////////////////
//Logical Assignment operator
const rest1 = {
  name: 'Capri',
  numGuests: 0,
  //numGuests: 20,
};

const rest2 = {
  name: 'Lalalla',
  owner: 'Giovanni Rassi',
};

//Short Circuiting
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// //OR assignment Operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nullish Assignment Operator(nuull or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND Short Circuiting
//rest1.owner = rest1.owner && '<ANONIMOUS>';
//rest2.owner = rest2.owner && '<ANONIMOUS>';

//AND Assignment Operator

rest1.owner &&= '<ANONIMOUS>';
rest2.owner &&= '<ANONIMOUS>';
console.log(rest1);
console.log(rest2);

/////////////////////////////////////
//Nullish operator

restaurant.numGuests = 7;
//const guests = restaurant.numGuests || 10;
//console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name1, openingHours, categories } = restaurant;
console.log(name1, openingHours, categories);

const {
  name1: resaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(resaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating(reverse) variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/////////////////////////////////////
// THE SPREAD OPERATOR '...' (REST SYNTAX)
const arr = [7, 8, 9];

//How would we do earlier
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//The spread operator
const newArr = [1, 2, ...arr];

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays or more
const restaurantsMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(restaurantsMenu);

//Iterables: arrays, strings, sets, maps. NOT objects!

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// Spread operator and function. Real-world example
// const ingrediens = [
//   prompt("Let's make pasta! Ingredient 1? "),
//   prompt(' Ingredient 2? '),
//   prompt(' Ingredient 3? '),
// ];
//console.log(ingrediens);

// restaurant.orderPasta(ingrediens[0], ingrediens[1], ingrediens[3]); // What would we do before
//restaurant.orderPasta(...ingrediens);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name1 = 'Ristorane Roma';
console.log(restaurantCopy.name1);
console.log(restaurant.name1);


////////////////////////////////////////////////
// CODING CHALLENGE #1

// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Start
//1
const [players1, players2] = game.players;
console.log(players1);
//2
const [gk, ...fieldPlayers] = players1;

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4 'Thiago', 'Coutinho','Perisic'
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

//5
const { team1, x: draw, team2 } = game.odds;
console.log(draw);

//6
const printGoals = function () {
  const winners = game.scored;
  return winners.length;
};

console.log(printGoals());

//7
team1 > team2 || console.log('Team 1 More likely to win');
team1 < team2 || console.log('Team 2 More likely to win');

/////////////////////////////////////////////////
//My practicing
//1. Swap Values: Write a function that takes two variables and swaps their values using destructuring.
function swap(a, b) {
  [b, a] = [a, b];
  return a;
}
console.log(swap(4, 8));
// 2. Extract First and Rest: Write a function that extracts the first element of an array and returns the rest of the elements as an array.

function extractFirstAndRest() {
  const [first, ...rest] = numbers;
  return [first, rest];
  //return as an object:
  //return { first, rest };
}
const numbers = [1, 2, 3, 4, 5];
console.log(extractFirstAndRest());

// 3.Extract Object Properties: Write a function that takes an object with properties name and age and extracts these properties using object destructuring.

function extractInfo(person) {
  const { names, age } = person;
  return { names, age };
}

const person = { names: 'Alice', age: 30 };
const extractedInfo = extractInfo(person); // Call the function and store the result
console.log(extractedInfo.names); // Should print 'Alice'
console.log(extractedInfo.age); // Should print 30

//Merge Arrays: Write a function that merges two arrays into a single array using the spread operator.

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Example usage:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = mergeArrays(arr1, arr2);
console.log(merged); // Should print [1, 2, 3, 4, 5, 6]

//Looping Arrays: for-of Loop

// We got loop of value of all elements
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

//This is the way to get both- index and value
// Old way to get list of positions in menu
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// Cool list through destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//console.log([...menu.entries()]){
//}

////////////////////////////////////////////
//Optional Chaining
//It useful when you don't know and want to check is the property exist or no.
// In this case we got the eeror, cause mon is undefined, and undefined.open shows us error
//console.log(restaurant.openingHours.mon.open);
// The way we could check for existance of object's propery before:
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
} //let's pretend we don't know any property of restaurant

//With Optional chaining:
console.log(restaurant.openingHours.mon?.open);

//Multiple checking as in "if" before
console.log(restaurant.openingHours?.mon?.open);

//Methods
//Does exist
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//doesn't exist
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');

///////////////////////////////////////////////////////////
//Looping Objects. Object Keys, Values and Entries
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};
//property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

//Looping an Object
for (const [key, { open, close }] of entries) {
  console.log(` On ${key} we open at ${open} and close at ${close}`);
}

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [goal, scored] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(goal) + 1} : ${scored}`);
}

//2
let sum = 0;
const allOdds = Object.values(game.odds);
for (const x of allOdds) {
  sum += x;
}
const averageOdds = sum / allOdds.length;
console.log(averageOdds);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//Bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

///////////////////////////////////////////
// SETS
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(ordersSet);

// Create set of characters
console.log(new Set('Jonas'));

//vheck the length of the set
console.log(ordersSet.size);

//check if exists
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

//add element
ordersSet.add('Garlic Bread');

//removes element
ordersSet.delete('Risotto');
console.log(ordersSet);

//Delete all elements
//console.log(ordersSet.clear());

//Loop set
for (const order of ordersSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set('jonassmithehfj').size);

/////////////////////////////////////////////////
//Maps Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firence,Italy');
rest.set(2, 'Lissabon, Portugal');
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');

console.log(rest.get(true));
console.log(rest.get('name'));
console.log(rest.get(1));

//Example how to use maps. In this operation we will got true or false --> we already have true and false as a keys inour map. Evantually, it console.log--> We are open
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Check if element exists
console.log(rest.has('categories'));

//delete element
rest.delete(2);
console.log(rest);

//Length
console.log(rest.size);

//Delete all elements
//console.log(rest.clear);

//Array is key:
rest.set([1, 2], 'Test');
console.log(rest); //check it in map
console.log(rest.get([1, 2])); //It returns undefined

//To make it work we need to do next:
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

//Object is map key
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);

///////////////////////////////////////
//Map Ireration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again'],
]);
console.log(question);

//conver object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Maps iteration   // Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question.get(answer === question.get('correct')));

//Conver map to array
console.log([...question]);

//Other things to do with map.
console.log(question.entries());
console.log([...question.keys]);
console.log([...question.values]);
*/
/////////////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
console.log(gameEvents);
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
const eventRate = 90 / gameEvents.size;
console.log(`An event happend, on everage, every ${eventRate} minutes`);

//4
for (const [key, value] of gameEvents) {
  if (key < 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }
}
*/
const airLine = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airLine.length);
console.log('B737'.length);

console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.indexOf('Portugal'));

console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log(`You got the middle seat`);
  else console.log('You got lucky!');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Other wethods for strings
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

//const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// Function that takes any name and return the correct one
let passenger;
const correctName = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  return passengerLower[0].toUpperCase() + passengerLower.slice(1);
};
console.log(correctName('dFdgdKGg'));

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

//const lowerEmail = loginEmail.toLowerCase();
//const trimmedEmail = lowerEmail.trim();

const normalizedemail = loginEmail.toLowerCase().trim();
console.log(normalizedemail);
console.log(email === normalizedemail);

//Replace
const priceGB = '288,96	£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcment = 'All passengers come to barding door 23. Boording door 23';
console.log(announcment.replaceAll('door', 'gate'));

//Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A'));
console.log(plane1.startsWith('A3'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of a new airbus family');
}

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on the board');
  } else {
    console.log('welcome on board');
  }
};
checkBaggage('I have a laptop, some Food a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//////////////////////////////////////////////
//Split a String
console.log('a+very+nice+string'.split('+', 9));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizadName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //   namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizadName('jasseca and smith davis');
capitalizadName('daria luneva');

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(23, '+'));

// How to mask credit card number with .pad
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(456474748489330309));
maskCreditCard('437473575989584950493');

//Repeat()
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line${'✈'.repeat(n)}`);
};
planesInline(6);
planesInline(9);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textArea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (let [i, row] of rows.entries()) {
    const [a, b] = row.trimStart().toLowerCase().split('_');
    const camelCase = b.slice(0, 1).toUpperCase(0) + b.slice(1);
    const correctAll = a + camelCase;

    console.log(`${correctAll.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

/////////////////////////////////////////////////////
// MORE String exercises
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//console.log(flights.split('+'));
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const newType = type.replaceAll('_', ' ').trimStart();
  const newFrom = from.slice(0, 3).toUpperCase();
  const newTo = to.slice(0, 3).toUpperCase();
  console.log(
    `${
      newType.startsWith('Delayed') ? '🔴' : ''
    }${newType} from ${newFrom} to ${newTo} (${time.replace(
      ':',
      'h'
    )}) `.padStart(55)
  );
}
