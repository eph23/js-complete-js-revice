'use strict';

const flight = 'LH234';
const eph = {
  name: 'Ephraim S',
  passport: 'BD22222222',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 'BD22222222') {
    console.log('Checked in');
  } else {
    console.log('Wrong Passport');
  }
};

checkIn(flight, eph);
console.log(eph);
console.log(flight);

const newPassport = function (person) {
  person.passport = 'BD' + Math.floor(Math.random() * 1000000000);
};

newPassport(eph);
checkIn(flight, eph);
console.log(eph);
