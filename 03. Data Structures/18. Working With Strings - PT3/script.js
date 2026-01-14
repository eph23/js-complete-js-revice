'use strict';

// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Ephraim S'.split(' '));

const [firstName, lastName] = 'Ephraim S'.split(' ');
console.log(firstName);
console.log(lastName);

const passengerName = ['Mr.', firstName.toUpperCase(), lastName].join(' ');
console.log(passengerName);

const capitalizedName = function (name) {
  const splittedName = name.split(' ');
  const correctedName = [];

  for (let name of splittedName) {
    correctedName.push(`${name[0].toUpperCase()}${name.slice(1)}`);
  }

  console.log(correctedName.join(' '));
};
capitalizedName('jessica ann smith davis');
capitalizedName('john smith');

// padStart and padEnd
const message = 'Go to gate no 23!';
console.log(message.padStart(25, '+'));
console.log('Ephraim'.padStart(25, '-'));

console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Ephraim'.padStart(25, '-').padEnd(35, '-'));

const maskCreditCard = function (num) {
  const numStr = num + '';

  console.log(numStr.slice(-4).padStart(numStr.length, '*'));
};

maskCreditCard(156541564);
maskCreditCard(70707080088);
maskCreditCard(4564564545654545);

// repeat
const messageBoard = 'Bad weather... All Departures Delayed... ';
console.log(messageBoard.repeat(2));

const planesInLine = function (num) {
  console.log(`There are ${num} planes in the line ${'🛬'.repeat(num)}`);
};

planesInLine(5);
planesInLine(15);
