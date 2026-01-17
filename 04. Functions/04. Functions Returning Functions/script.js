'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greetHey = greet('Hey');
greetHey('Eph');

greet('Hello')('Adam');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Howdy')('Antu');
