'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // Destructuring returned value (array destructuring)
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring function arguments value (object destructuring)
  orderDelivery: function ({
    time = '20:00',
    address,
    mainIndex = 1,
    starterIndex = 0,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered on ${time} to ${address}`
    );
  },

  // Spread operator as function argument
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  // Rest parameters
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

const rest1 = {
  name: 'Capri',
  numGuests: 0,
  // numGuests: 20
};
const rest2 = { name: 'La Pizza', owner: 'Giovanni Rossi' };

/* rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10; */

// Logical assignment operator OR operator
/* rest1.numGuests ||= 10;
rest2.numGuests ||= 10; */

// Logical nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// Logical AND assignment operator
/* rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>'; */

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
