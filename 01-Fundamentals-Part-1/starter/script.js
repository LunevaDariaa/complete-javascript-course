/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);
let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let country = "Russia";
let continent = "Europe";
let population = "145 million";

console.log(country);
console.log(continent);
console.log(population);

/////////////////////////////////////////////
//Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 'Jonas');
console.log(typeof 23);

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(typeof year);


let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof language);
console.log(typeof country);

////////////////////////////////////////
//let,const and var

let age = 30;
age = 31;
const birthYear = 1991;

let language = Turkish;
const motherName = Tatiana;

/////////////////////////////////////////
//Basic Operators

//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Daria';
const lastName = 'Luneva';
console.log(firstName + ' ' + lastName);

//Assigment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 =100
x++;
x--;
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

//HomeWork
const population = 146;
console.log(population / 2);
//population++;
console.log(population);

const finlandPopulation = 6000000;
console.log(population > finlandPopulation);


const averagePopulation = 33000000;
console.log(population < averagePopulation);


const country = 'Portugal';
const continent = 'Europe';
const population1 = '11';
const language = 'Portugese';
const description = country + ' is in ' + continent + ", and it's " + population1 + ' million people speak ' + language;
console.log(description);

////////////////////////////////////
//Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

///////////////////////////////////////
//Strings and Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm" + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\ multiple \n\ lines');

console.log(`String
multiple
lines`);

//Homework

const country = 'Russia';
const continent = 'Europe';
const population = 146; //in millions
const language = 'Russian';

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

///////////////////////////////////////
//Taking Decisions: if/else statemens

const age = 17;
const isoldEnough = age >= 18;

if (isoldEnough) {
    console.log('Sarah can start driving licence')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//CHALLENGE 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

//HomeWork

const country = 'Russia';
const population = 146; //in millions
const averagePopulation = 33;
if (population > averagePopulation) {
    console.log(`Russia's population above average`);
} else {
    console.log(`Russia's population is ${averagePopulation - population} million below average`)
}

/////////////////////////////////////
//Type Convercion and Coercion

//type convercion
const inputYear = '1991';
console.log(inputYear + 18);//string +18
console.log(Number(inputYear) + 18);//numb +18

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);
//type coercion
console.log('I am' + 23 + 'years old');
console.log('23' - '10' - 3);//10
console.log('23' + '10' + 3);//23103
console.log('23' / '2');//11,5


/////////////////////////////////
// TRUTHY AND FALSY VALUES
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all:)");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED!');
}
///////////////////////////////////////
//EQUALITY OPERATORS:== vs. ===

const age = 18;
if (age === 18) console.log('You just became an adult(strict)');
if (age == 18) console.log('You just became an adult(loose)');

const favourite = Number(prompt("What's your favourite number?"));//Prompt looks like a pop-up window with a question. If we don't add convertion Number, the result will be a string
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('Cool! 7 is an amazing number!');
} else if (favourite === 8) {
    console.log('Cool! 8 is an amazing number!');
} else {
    console.log('Number is not 23, 7 or 8');
}

if (favourite !== 23) console.log('Why not 23?')

//HomeWork
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));//If we delete Number from here, after reolad webpage and type 1, in console will be "no borders". because === is strict and 1 is a string.
if (numNeighbours === 1) {
    console.log('Only one neighbour');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders!');
}
/////////////////////////////////////////
//logical operators
const hasdriversLicence = true;// A
const hasGoodVision = true;// B

console.log(hasdriversLicence && hasGoodVision);
console.log(hasdriversLicence || hasGoodVision);
console.log(!hasdriversLicence)

// if (hasdriversLicence && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; //C
console.log(hasGoodVision && hasdriversLicence && isTired);

if (hasdriversLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}

//Homework
const language = 'english';
const population = 40;
const isIsland = false;

if (language === 'english' && population < 50 && !isIsland) {
    console.log('You should live in Canada');
} else {
    console.log('Canada does not meet your criteria');
}

//////////////////////////////////
//CHALLENGE 3

const scoreDolphins = Number(97 + 112 + 101) / 3;
const scoreKoalas = Number(109 + 95 + 123) / 3;

console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy");
} else {
    console.log("Both teams have not enough points")
}

///////////////////////////////////////////////
//The switch statement
const day = 'monday';

switch (day) {
    case 'monday': //day === monday
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednsday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Recording videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}

//CHALLENGE. The same data but if else
const day = 'saturday'
if (day === "monday") {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples')
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'suturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('not a valid day');
}


//Homework
const language = 'mandarin'
switch (language) {
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of navive speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

///////////////////////////////////////////
//The conditional (Ternary) operator
const age = 20;
//age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
//how the same code would look like in if else format
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

//Homework
const population = 146
console.log(`Russia population is ${population >= 33 ? 'above' : 'below'} average`);
*/
//////////////////////////////
//CHALLENGE #4
//Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
const bill = 400
const tip = bill <= 300 && bill >= 50 ? 15 / 100 * bill : 20 / 100 * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



