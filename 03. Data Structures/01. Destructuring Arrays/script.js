'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring arrays
const arr = [2, 3, 4];
const [a, b, c] = arr;

console.log(arr);
console.log(a);
console.log(b);
console.log(c);

// Skipping a value
const [first, , second] = restaurant.categories;
console.log(first, second);

// Switching values
let [primary, secondary] = restaurant.categories;
console.log(primary, secondary);

[secondary, primary] = [primary, secondary];
console.log(primary, secondary);

// Destructuring returned values of a function
console.log(restaurant.order(2, 0));
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Nested arrays
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

// Deep nested arrays
const deepNested = [5, 6, [7, 8]];
const [k, , [l, m]] = deepNested;
console.log(k, l, m);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
