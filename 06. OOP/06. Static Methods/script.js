'use strict';

/* ******************************************** */
/*             CONSTRUCTOR FUNCTION             */
console.log(`===============Constructor Function`);
/* ******************************************** */
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

// Static Methods
Person.hey = function () {
  console.log(`Hey 👋🏻👋🏻`);
};

Person.hey();

/* ******************************************** */
/*                     CLASS                     */
console.log(`===============Class===============`);
/* ******************************************** */

const account = {
  owner: 'Ephraim',
  movements: [200, 530, 120, 300],

  // getter
  get latestMovement() {
    return this.movements.slice(-1).pop();
  },

  // setter
  set latestMovement(movement) {
    this.movements.push(movement);
  },
};

console.log(account.latestMovement);
account.latestMovement = 1000;
console.log(account.movements);

// getters and setters with class
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`Not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  // Static methods
  static hey() {
    console.log(`Hey 👋🏻`);
  }
}

const jessica = new PersonCl('Jessica Davis', 2000);
console.log(jessica);
console.log(jessica.age);
console.log(jessica.fullName);

const walter = new PersonCl('Walter Scott', 1965);
console.log(walter);
console.log(walter.fullName);

PersonCl.hey();
