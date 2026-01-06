'use strict';
const secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
document.querySelector('.score').textContent = score;

document.querySelector('.number').textContent = secretNumber;

const message = document.querySelector('.message');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '🚫 No number!';
  } else if (guess === secretNumber) {
    message.textContent = '🍾 Correct Number! 🎉';
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '🤯 YOU LOST THE GAME...';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '🤯 YOU LOST THE GAME...';
      document.querySelector('.score').textContent = 0;
    }
  }
});
