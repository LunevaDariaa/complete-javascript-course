// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//Challenge + tha material of problem-solving course
/*
//PROBLEM:
//We work for a company building a smart home thermometer. Our most recent task is this:" Given an array of tempertures of one day, calculate the temperature amtitude. Keep in mind that sometimes these might be a sensor error."

const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) Understanding the problem
// -- What is temp amtitude? It is difference between highest and lowest temp
// --How to compute max and min temp?
// -- What is a sensor error? And what to do?

//2) Breaking up into sub-problems
//-- How to ignore errors?
//-- Find max value in temp array
//-- Find min in temp array
//-- Substract min from max(amptitude) and return it

const calcAmptitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
    if (typeof temps[i] !== 'string') continue;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcAmptitude(temps);
console.log(amplitude);

//////////////////////////////////////////////
 //Challenge 1
Given an array of forecasted maximum tempertures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print '...17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days...'

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem- solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1:[17,21,23]
TEST DATA 2:[12, 5, -5, 0, 4]

1) Understanding the prolem:
-Array transformaed to string, separated by ...
-what is X days? Answer: index + 1
2) breaking up into sub-problems
-Transform array into string
- Transform each element to string with °C 
- string needs to contain day/ index +1
-add ...
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
