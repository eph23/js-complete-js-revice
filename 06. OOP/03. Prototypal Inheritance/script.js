'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const eph = new Person('Eph', 1988);
console.log(eph);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 2017);
console.log(matilda);
console.log(jack);

console.log(eph instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

eph.calcAge();
matilda.calcAge(0);

console.log(eph.__proto__);
console.log(eph.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(eph));
console.log(Person.prototype.isPrototypeOf(matilda));

// Prototype of liked objects
Person.prototype.species = 'Homo Sapiens';
console.log(eph.species);
console.log(matilda.species);

console.log(eph.hasOwnProperty('species'));
console.log(eph.hasOwnProperty('firstName'));

console.log(eph.__proto__);
console.log(eph.__proto__.__proto__);
console.log(eph.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);
