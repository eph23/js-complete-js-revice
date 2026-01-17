'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const book = lufthansa.book;

lufthansa.book(239, 'Ephraim S');
lufthansa.book(635, 'John Smith');

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// The bind method
const bookLH = book.bind(lufthansa);
const bookEW = book.bind(euroWings);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');
bookEW(23, 'Bob Williams');
bookLX(23, 'Charley Harper');
bookLH(222, 'Charley Harper');

console.log(euroWings);
console.log(lufthansa);
console.log(swiss);

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Ephraim S');
bookEW23('Sarah Williams');

// bind method with event listeners
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

// partial Application
const addTax = (rate, value) => {
  return value + value * rate;
};

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(addTax, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

// Challenge
const addVAT2 = rate => value => value + value * rate;
console.log(addVAT2(.23)(100));
console.log(addVAT2(23)(1000));
