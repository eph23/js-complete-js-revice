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

// The rest pattern with arrays
const arr = [1, 2, ...[3, 4]];
console.log(arr);

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b);
console.log(...others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log([...restaurant.mainMenu, ...restaurant.starterMenu]);
console.log(pizza, risotto);
console.log(otherFoods);

// The rest pattern with objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat);
console.log(weekDays);

// Rest parameter as function parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};

add(2, 3);
add(2, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

// Rest parameters
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
