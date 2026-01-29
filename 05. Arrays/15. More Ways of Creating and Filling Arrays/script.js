'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  // movements: [200, -200, 340, -300, -20, 50, 400, -460],
  movements: [],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Creating arrays
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6));

let x = new Array(7);
console.log(x);

x.fill(1);
console.log(x);

x.fill(23, 1, 5);
console.log(x);

x.fill(55, 0, 5);
console.log(x);

// from method
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

