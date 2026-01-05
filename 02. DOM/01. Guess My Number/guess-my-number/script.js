'use strict';

const message = document.querySelector('.message');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '🚫 No number!';
  }
});
