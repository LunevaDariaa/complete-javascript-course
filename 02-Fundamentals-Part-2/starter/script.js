///////////////////////////////////////////////
// Activating strict mode
'use strict';
/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive');

///////////////////////////////////////////
// Functions
function logger() {
    console.log('My name is John')//Function Bode
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Homework
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const countryRussia = describeCountry('Russia', 146, 'Moscow');
console.log(countryRussia);

const finland = describeCountry('Finland', 6, 'Helsinki');
console.log(finland);

const canada = describeCountry('Canada', 40, 'Ottawa');
console.log(canada);

////////////////////////////////////////////
// Function declaration vs. Expressions

function calAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calAge1(1991);
console.log(age1);// This example and in the "Function" called function declaration

//Function expression
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calAge2(1991);
console.log(age1, age2);

//Homework. Function declaration first
function percentageOfWorld(population) {
    return (population / 7900) * 100
}
const chinaPopulation = percentageOfWorld(1441);
const russiaPopulation = percentageOfWorld(146);
const canadapopulation = percentageOfWorld(40);
console.log(chinaPopulation, russiaPopulation, canadapopulation);

//function expression now
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}
const chinaPopulation2 = percentageOfWorld2(1441);
const russiaPopulation2 = percentageOfWorld2(146);
const canadapopulation2 = percentageOfWorld2(40);
console.log(chinaPopulation, russiaPopulation, canadapopulation);

///////////////////////////////////////////////
//Arrow Function

//Now we compare expression and arrow function.
//  function expression
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}
//Arrow function
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);

// We calculate how many years left until retirement
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


//Homawork
const percentageOfWorld3 = population => (population / 7900) * 100;
const chinaPopulation3 = percentageOfWorld3(1441);
const russiaPopulation3 = percentageOfWorld3(146);
const canadapopulation3 = percentageOfWorld3(40);
console.log(chinaPopulation3, russiaPopulation3, canadapopulation3);


//////////////////////////////////////////
// Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;// adding function to slice our fruits.
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieses of oranges.`;
    return juice
}
console.log(fruitProcessor(2, 3));


//Homework

const percentageOfWorld = population => (population / 7900) * 100;

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
    console.log(description);
}
describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);

//////////////////////////////////////
//Reviewing Functions
const calcAge = function (birthYear, firstName) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;


    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired:)`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Bob'))


////////////////////////////
//CHALLENGE 5
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

let scoreDolphins1 = calcAverage(85, 54, 41);
let scoreKoalas1 = calcAverage(23, 34, 27);


const checkWinner = (avgDolphins, avgKoalas) => {

    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win ( ${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win ( ${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins1, scoreKoalas1);

////////////////////////////////////////////
// Intoduction to Arrays
const friend1 = 'michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
//Instead of doing this we can crete array using 2 ways:
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
// And another way:
const y = new Array(1991, 1984, 2008, 2020);//new is a key word

console.log(friends[0]);
console.log(friends[2]);
// to count elements in the array:
console.log(friends.length);
console.log(friends[friends.length - 1]);

//if we want to replace one friend with another:
friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991,
    'teacher', friends];
console.log(jonas);

// Excercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2001, 2010, 2018];
//We can't do this: console.log(calcAge(years));because we can't do operations with a whole array, but we can with it's elements
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


//HOMEWORK
const population = [146, 40, 360, 90];
console.log(population.length === 4);

const percentageOfWorld = population => (population / 7900) * 100;
const percentages = [
    percentageOfWorld(population[0]),
    percentageOfWorld(population[1]),
    percentageOfWorld(population[2]),
    percentageOfWorld(population[3]),
];
console.log(percentages);


////////////////////////////////////////////////
// BASIC ARRAY OPERATIONS (METHODS)

//Add elements
const friends = ['Michail', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends)

//Remove element
friends.pop();//Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}


////////////////////////////////////////////////
//CHALLENGE 6
const bills = [125, 555, 44];

const calcTip = bill => bill >= 300 || bill <= 50 ? bill * 0.2 : bill * 0.15;

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips);
console.log(totals);

//////////////////////////////////////////////////
//Introduce to Object

const jonasArray = [// this is array
    'Jonas',
    'Shmed',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

//Let's create an object
const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmed',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
//Homework
const myCountry = {
    country:'Russia',
    capital:'Moscow',
    language: 'Russian',
    population: 145,
    neighbours: ['Kazachstan', 'Belarus', 'Finland']
};

///////////////////////////////////////////
// Dots vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmed',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName'])

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong reques! Choose between firstName, lastName, age, job, and friends ');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonas';
console.log(jonas);

//Challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)


///////////////////////////////////////////
//OBJECT METHODS
const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmed',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverslicence: true,

    //calcAge: function (birthYear) {
    //    return 2037 - birthYear;
    //} This is the old version,becase we already have birthYear as a property of object


    //const calcAge = function (birthYear) {
    //   return 2037 - birthYear;
    // }    We can't use this, cause it's function declaration

    // calcAge: function () {
    //     //console.log(this);// this is reffering to the whole object and its properties
    //     return 2037 - this.birthYear;
    //  }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age
    },

    getSummary: function () {
        return `${jonas.firstName} is ${jonas.age}- years old teacher, and he has ${this.hasDriverslicence ? 'a' : 'no'} driver's license `;
    }

};
console.log(jonas.calcAge())
console.log(jonas.age);

//challenge
// 'Jonas is 46-years old teacher, and he has a/no driver's license"

console.log(jonas.getSummary());

//HOMEWORK

const myCountry = {
    country: 'Russia',
    capital: 'Moscow',
    language: 'Russian',
    population: 145,
    neighbours: ['Kazachstan', 'Belarus', 'Finland'],

    describe: function () {
        return `${myCountry.country} has ${myCountry.population} russian-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
    },

    checkIsIsland: function () {
        return this.isIsland = this.neighbours.length === 0 ? true : false;
    }

};

console.log(myCountry.describe());
console.log(myCountry.checkIsIsland());

////////////////////////////////////////////
//CHALLENGE 3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }

};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})! `);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})! `);
}
///////////////////////////////////
// Iteration: The for Loop

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

//Homework
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}
//////////////////////////////////////////
// Looping Arrays, Breaking and Continuing

const jonas = [
    'Jonas',
    'Shmed',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    //Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    //Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
//Continue
console.log('---ONLY STRING---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    // This for loop will only include strings now
    console.log(jonas[i], typeof jonas[i]);
}

//Break
console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    // When the number is found in the loop, BREAK stops all loop
    console.log(jonas[i], typeof jonas[i]);
}


//HOMEWORK
const percentageOfWorld = populations => (populations / 7900) * 100;

const populations = [40, 256, 78, 15];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);

////////////////////////////////////////
//Looping backwards and Loops in Loops
const jonas = [
    'Jonas',
    'Shmed',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
//looping backwards
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}
//Loop in The Loop/ We want to make 3 different exercises but with repetition *5 of each of them
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}
//Homework
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];
for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)

        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

//////////////////////////////////////////
// THE WHILE LOOP

// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    //console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++
}
// Other axample of while loop. we will roll a dice until we roll number 6
//Math.random - randomiser from 0 to 1, which we * 6. Math.trunc- rounds the number(instead of    5.03837678 we got just 5)
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`)
}
*/
////////////////////////////////////////
//CHALLENGE #4

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i])
}
console.log(tips);
console.log(totals);

//bonus

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];//the same as above
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));