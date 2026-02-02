'use strict';

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
}

const jessica = new PersonCl('Jessica Davis', 2000);
console.log(jessica);
console.log(jessica.age);
console.log(jessica.fullName);

const walter = new PersonCl('Walter Scott', 1965);
console.log(walter);
console.log(walter.fullName);
