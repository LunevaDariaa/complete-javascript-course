'use strict';
//This is a practice of DOM manipulation
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 30;

document.querySelector('.guess').value = 23;
document.querySelector('.guess').value;

document.querySelector('.');
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.getElementById('cryImage').style.display = 'none';
document.getElementById('happyImage').style.display = 'none';

//Creating a function for message to reduce repeating the same line
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// We created a random number from 1 to 20

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // Creation of guess number

  //When there is no input
  if (!guess) {
    displayMessage('No number!');

    //When players wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.getElementById('happyImage').style.display = 'block';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High !' : 'Too low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //displayMessage('You lose the game(');
      document.getElementById('cryImage').style.display = 'block';
      displayMessage('');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Settle AGAIN Button
document.querySelector('.again').addEventListener('click', function () {
  document.getElementById('cryImage').style.display = 'none';
  document.getElementById('happyImage').style.display = 'none';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '16rem';
});
