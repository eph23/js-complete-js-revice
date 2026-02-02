'use strict';

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const eph = new PersonCl('Eph', 1988);
console.log(eph);
eph.calcAge();

console.log(eph.__proto__ === PersonCl.prototype);

eph.greet();
