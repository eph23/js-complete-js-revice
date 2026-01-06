'use strict';
const secretNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber; // TODO: Delete later

let score = 20;
document.querySelector('.score').textContent = score;

const message = document.querySelector('.message');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '🚫 No number!';
  } else if (guess === secretNumber) {
    message.textContent = '🍾 Correct Number! 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // TODO: Uncomment later - document.querySelector('.number').textContent = secretNumber;
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
