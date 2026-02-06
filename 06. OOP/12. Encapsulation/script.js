'use strict';

// Public fields
// Private fields
// Public methods
// Private methods

class Account {
  // Public fields
  locale = navigator.language;
  bank = 'Bankist';

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.#pin = pin;
    this.owner = owner;
    this.currency = currency;

    console.log(`Thank you for opening an account ${this.owner}`);
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Your loan of ${val} has been approved`);
    }
  }
}

const acc1 = new Account('Ephraim', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(500);

console.log(acc1);
console.log(acc1.getMovements());
