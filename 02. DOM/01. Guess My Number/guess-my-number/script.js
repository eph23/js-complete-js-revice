'use strict';

const body = document.querySelector('body');
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

let score = 20;
let highScore = 0;

let secretNumber = Math.floor(Math.random() * 20) + 1;

scoreEl.textContent = score;
highScoreEl.textContent = highScore;

function displayMessage(message) {
  messageEl.textContent = message;
}

btnCheck.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  // If there is no number/guess
  if (!guess) {
    displayMessage('🚫 No number!');
  }

  // If guess is correct
  else if (guess === secretNumber) {
    displayMessage('🍾 Correct Number! 🎉');
    body.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
    numberEl.textContent = secretNumber;

    btnCheck.disabled = true;
    guessEl.disabled = true;

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  }
  // if guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('🤯 YOU LOST THE GAME...');
      scoreEl.textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreEl.textContent = score;

  numberEl.textContent = '?';
  guessEl.value = '';

  body.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';

  btnCheck.disabled = false;
  guessEl.disabled = false;
});
