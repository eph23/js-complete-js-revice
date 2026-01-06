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
console.log(secretNumber); //TODO: Delete

scoreEl.textContent = score;
highScoreEl.textContent = highScore;

btnCheck.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    messageEl.textContent = '🚫 No number!';
  } else if (guess === secretNumber) {
    messageEl.textContent = '🍾 Correct Number! 🎉';
    body.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
    numberEl.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      messageEl.textContent = '📈 Too high!';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = '🤯 YOU LOST THE GAME...';
      scoreEl.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      messageEl.textContent = '📉 Too low!';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = '🤯 YOU LOST THE GAME...';
      scoreEl.textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber); //TODO: Delete

  messageEl.textContent = 'Start guessing...';
  scoreEl.textContent = score;

  numberEl.textContent = '?';
  guessEl.value = '';

  body.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});
