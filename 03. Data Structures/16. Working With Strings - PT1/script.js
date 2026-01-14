'use strict';

const airline = 'Bangladesh Biman';
const plane = 'A320';
console.log(airline);
console.log(plane);

// Accessing string character of an index
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

// String property
console.log(airline.length);
console.log('B737'.length);

// String methods
//indexOf and lastIndexOf
console.log(airline.indexOf('a'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('bangladesh'));
console.log(airline.indexOf('Bangladesh'));

// slice method
console.log(airline.slice(4));
console.log(airline.slice(0, 10));

console.log(airline.slice(airline.indexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E') {
    console.log(`You got a middle seat`);
  } else {
    console.log(`You got licky!`);
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
