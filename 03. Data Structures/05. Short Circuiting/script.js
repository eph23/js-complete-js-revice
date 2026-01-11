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

// Short circuiting
console.log('---OR---');
// The "|| OR " operator returns the first truthy value
console.log(3 || 'Eph');
console.log('' || 'Eph');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23);

// restaurant.numGuests = 23;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

const guestsSC = restaurant.numGuests || 10;

// Short circuiting
console.log('---AND---');
// The "&& AND " operator returns the first falsy value
console.log(0 && 'Ephraim');
console.log(7 && 'Ephraim');

console.log('Hello' && 23 && null && 'Ephraim');
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
