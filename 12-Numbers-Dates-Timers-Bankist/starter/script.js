'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2022-09-18T21:31:17.178Z',
    '2023-10-23T07:42:02.383Z',
    '2023-10-28T09:15:04.904Z',
    '2023-11-04T10:17:24.185Z',
    '2023-12-06T14:11:59.604Z',
    '2023-12-08T17:01:17.194Z',
    '2023-12-09T23:36:17.929Z',
    '2023-12-10T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'ru-RU', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // Static created date
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

//Formatting currency
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value"> ${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  const formattedMov = formatCur(acc.balance, acc.locale, acc.currency);

  labelBalance.textContent = formattedMov;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //in each call, print the remaining time to UI
    labelTimer.textContent = `${min} : ${sec}`;

    //When 0 sec, stop timer and logout user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    //Decrese 1 sec
    time--;
  };
  //set time to 5 min
  let time = 120;

  //call timer every sec
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
  console.log(account1);
};

///////////////////////////////////////
// Event handlers
let currentAccount;
let timer;
// //FAKE always lodin
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current date and time
    const now1 = new Date();
    const options = {
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'short',
    };

    //Find language info from the User's browser
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now1);
    //Create good looking date
    // //day/month/year
    // const now1 = new Date();
    // const day = `${now1.getDate()}`.padStart(2, 0);
    // const month = `${now1.getMonth() + 1}`.padStart(2, 0);
    // const year = now1.getFullYear();
    // const hour = `${now1.getHours()}`.padStart(2, 0);
    // const min = `${now1.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      //Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2000);

    // Reset Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
//////////////////////////////////
// Check number or convert to Num
console.log(3 / 10);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); //false :(

console.log(Number('23'));
console.log(+'23');

//Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23'));
console.log(Number.parseFloat('2.5rem')); // -> 2.5
console.log(Number.parseInt('2.5rem')); //->2

//isNan
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'E20'));
console.log(Number.isNaN(20 / 0));

//Checking if value is a num
console.log(Number.isFinite(20)); // --> TRUE
console.log(Number.isFinite('20')); // --> FALSE
console.log(Number.isFinite(+'20o')); // --> FALSE
console.log(Number.isFinite(20 / 0)); // --> FALSE

//Math and Rounding
console.log(Math.sqrt(25)); // --> 5
console.log(25 ** (1 / 2)); // --> 5

console.log(Math.max(3, 5, 6, 1, 14, '54'));
console.log(Math.min(3, 5, 6, 1, 14, '54'));

console.log(Math.PI); // --> 3.141592653589793
console.log(Math.PI * Number.parseInt('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

//func to get random num bettwen given numbers
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(20, 200));

//Rounding Integers
console.log(Math.trunc(23.8));

console.log(Math.round(23.3));
console.log(Math.round(23.8));

console.log(Math.ceil(23.2));
console.log(Math.ceil(23.8));

console.log(Math.floor(23.2));
console.log(Math.floor(23.8));

//negative numbers
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

/////////////////////////////////////
//Remainder Operator
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'red';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

//////////////////////////////////////////////////
//Numeric Separator

//294,848,400,000
const diameter = 294_848_400_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

//const PI = 3._14_15; Not allowed
//console.log(PI);

console.log(Number('2300_00')); //Also not working
console.log(parseInt('230_000')); // --> 230

////////////////////////////////////////////////
//BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(58435848549931420349848n);
console.log(BigInt(58435848549931420349848n));

//Operations
console.log(10000n + 10000n);
console.log(475890345868493984758987893268594045n * 1000000n);

const huge = 345678987654346787654345676n;
const num = 23;
//console.log(huge * num); //won't work
//console.log(Math.sqrt(16n))// won't work eather
console.log(huge + BigInt(num));

//Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);

console.log(huge + 'is a really BIG ');

//Division
console.log(11n / 3n);
console.log(10 / 3);

///////////////////////////////////////////
//Creating Dates (4 ways)

//1
const now = new Date();
console.log(now);

//2
console.log(new Date('Sun Dec 10 2023 18:18:54 '));
//3
console.log(new Date('December 24, 2015'));

console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31, 15, 23, 5));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Working with dates
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142274985000));
console.log(Date.now());

future.setFullYear(2040);
console.log(future);


////////////////////////////////////////////////
// Operations with Dates

//Create good looking date
    //day/month/year
    const now1 = new Date();
    const day = `${now1.getDate()}`.padStart(2, 0);
    const month = `${now1.getMonth() + 1}`.padStart(2, 0);
    const year = now1.getFullYear();
    const hour = `${now1.getHours()}`.padStart(2, 0);
    const min = `${now1.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const daysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
const days1 = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 25));
console.log(days1);

const daysDating = (start, end) =>
  Math.abs((end - start) / (1000 * 60 * 60 * 24));
const numOfDates = daysDating(new Date(2014, 11, 9), new Date(2023, 12, 10));
console.log(numOfDates);

///////////////////////////////////////////////
//Internationalizing Dates (Intl)
//examples in the Bankist code

///////////////////////////////////////////
//Internationalizing Numbers (Intl)
const num = 46467474.45;

const options = {
  style: 'currency',
  //unit: 'mile-per-hour',
  unit: 'celsius',
  currency: 'EUR',
  //useGrouping:false,
};
console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log(
  'Germany:      ',
  new Intl.NumberFormat('de-DE', options).format(num)
);
console.log(
  'Russia:      ',
  new Intl.NumberFormat('ru-RU', options).format(num)
);
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);

/////////////////////////////////////////////
//Timers: setTimeout and setInterval
//setTimeout(() => console.log('Here is your pizza'), 3000);
//console.log('waiting');

//We can pass arguments to the function after millis:

//SetTimeout
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  'olives',
  'ananas'
);
console.log('waiting');

//New example how to cancel timer befor delay:

const ings = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ings
);
console.log('waiting');

if (ings.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval
setInterval(function () {
  const now = new Date();
  const hours = now.getHours();
  const mitute = now.getMinutes();
  const sec = now.getSeconds();
   return console.log(`${hours} : ${mitute} : ${sec}`);
}, 1000);
*/

////////////////////////////////////////////////
//Implementing a Countdown Timer
