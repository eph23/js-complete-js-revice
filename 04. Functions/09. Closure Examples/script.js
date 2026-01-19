'use strict';

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;

  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

const boardPassengers = function (n, wait) {
  const group = n / 3;
  setTimeout(function () {
    console.log(`Wea re now boarding now all ${n} passengers`);
    console.log(`There are 3 groups and each with ${group} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180, 3);
