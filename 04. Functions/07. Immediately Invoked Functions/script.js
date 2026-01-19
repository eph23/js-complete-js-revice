'use strict';

const runOnce = function () {
  console.log(`This will never run again`);
};

runOnce();

// Immediately invoked function
(function () {
  console.log(`THIS IS A IIFE`);
  const isPrivate = 23;
})();
// console.log(isPrivate)

(() => console.log(`THIS IS an arrow IIFE `))();

{
  const isPrivate = 23;
  let isThisPrivate = 23;
  var isNOTPrivate = 23;
}
console.log(isNOTPrivate);
console.log(isThisPrivate);
console.log(isPrivate);
