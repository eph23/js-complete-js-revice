'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const showBtns = document.querySelectorAll('.show-modal');

for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
