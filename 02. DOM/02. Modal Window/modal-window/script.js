'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const showBtns = document.querySelectorAll('.show-modal');

for (let i = 0; i < showBtns.length; i++) {
  console.log(showBtns[i].textContent);
}
