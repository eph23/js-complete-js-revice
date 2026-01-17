'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...otherWords] = str.split(' ');

  return [firstWord.toUpperCase(), ...otherWords].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformer function: ${fn.name}`);
  console.log(`----`);
};

transformer('JavaScript is the best', oneWord);
transformer('JavaScript is the best', upperFirstWord);

const hi5 = function (name) {
  console.log( `Hi ${name}👋🏻`);
};

document.body.addEventListener('click', hi5);
['Ephraim', 'Martha', 'Adam'].forEach(name => {
  return hi5(name);
});
