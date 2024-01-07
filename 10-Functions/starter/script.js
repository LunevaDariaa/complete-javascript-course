'use strict';
/*
////////////////////////////////////////////////////
//Default Parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  //ES 5:
  //   numPassenger = numPassenger || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('JH543');
createBooking('KJH76', 2, 400);
createBooking('JHG65', 2);
createBooking('JHG65', 5);
createBooking('JK764', undefined, 1000); // the way to return to default value

//////////////////////////////////////////
//How passing argumets works: VALUE vs. REFERENCE
const flight = 'LKJ56';
const jonas = {
  name: 'Jonas Smedthmann',
  passport: 3628299289,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LK678';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 3628299289) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(jonas);

function modifyValue(x) {
  x = 10;
}

let number = 5;
modifyValue(number);
console.log(number);

/////////////////////////////////////////////
//First-class vs Higher-order functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase;
};
const upperFirstWord = function (str) {
  const [first, ...other] = str.replace(' ');
  return [first.toUpperCase(), ...other].join(' ');
};
//Higher-order function
const transformer = function (str, fn) {
  console.log(`Originalstring:${str}`);
  console.log(`Transformed string; ${fn(str)}`);

  console.log(`Transformed by:${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//Js uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'martha', 'Adam'].forEach(high5);

//Functions returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeter = greet('Hey');
greeter('Jonas');
greeter('Steven');

greet('Hello')('Jonas');

//The same but with arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Daria');

/////////////////////////////////////////////////
//The call and apply methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  //book : function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum},${name}` });
  },
};

lufthansa.book(278, 'Daria Luneva');
lufthansa.book(3894, 'Dima Lunev');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'ED',
  booking: [],
};

// One way to appoint book function on eurowings obj
// eurowings.book = lufthansa.book;
// eurowings.book(23, 'George');

//Way through using a Call method
const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah Jonson');
console.log(eurowings);

book.call(lufthansa, 348, 'Maria Safrina');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss',
  iataCode: 'OH',
  booking: [],
};

book.call(swiss, 501, 'Danila Khmatulin');
console.log(swiss);

//Other method - Apply Method// Not really used now
const flightData = [501, 'Maria Safrina'];
book.apply(swiss, flightData);
console.log(swiss);

//But instead...:
book.call(swiss, ...flightData);

////////////////////////////////////////
// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);
bookEW(256, 'Steven Eogeb');

const bookEW256 = book.bind(eurowings, 23);
bookEW256('Jonas Shmeth');
bookEW256('Martha Koupert');

//With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); // null cause we don't have "this" in addTax function
// console.log(addVAT(100));
// console.log(addVAT(800));

// Function returning oyher function
const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT = addTax(0.23);
console.log(addVAT(100));
console.log(addVAT(23));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question}
  ${poll.options[0]},
  ${poll.options[1]},
  ${poll.options[2]},
  ${poll.options[3]},`)
    );
    //console.log(typeof answer);

    //Register answer
    typeof answer === 'number' && answer < this.answers.length
      ? this.answers[answer]++
      : console.log(`Please, write only numbers from 0 to 3`);
    console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  //3
  displayResults(type = 'array') {
    type === 'string'
      ? console.log(`Pool results are ${this.answers.join(', ')}`)
      : console.log(this.answers);
  },
};

//2

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//Bonus
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


//////////////////////////////////////////
//Immediately Invoked Function Expression(IIFE)

//Regular Fuction Expression
const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

//IIFE
(function () {
  console.log(`This will never run again`);
})();

//IIAF
(() => console.log(`This will ALSO never run again`))();

//Block scope: from outside to the block scope have access only to variable declared with var
{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);


////////////////////////////////////////////////
//Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

/////////////////////////////////////////////
//More closure examples

//Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
//Re-assigning by h
h();
f();
console.dir(f);

//Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are boarding all${n} passengers`);
    console.log(`There are 3 groups , each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boading in ${wait} seconds`);
};

boardPassengers(180, 3);

///////////////////////////////////////
//example how setTimeout works
// setTimeout needs two arguments- function and time(counts in ms)
setTimeout(function () {
  console.log('TIMER');
}, 1000); //That means that after 1 sec function will be executed
*/

///////////////////////////////////////////////////
//CHALLENGE #2
/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = header.style.color === 'red' ? 'blue' : 'red';
  });
})();
