'use strict';

const airline = 'Bangladesh Biman';
const plane = 'A320';
console.log(airline);
console.log(plane);

// toLowerCase and toUpperCase
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'ePHraIM';
const passengerToLowerCase = passenger.toLowerCase();
const passengerCorrected =
  passengerToLowerCase[0].toUpperCase() + passengerToLowerCase.slice(1);
console.log(passengerCorrected);

const email = 'hello@ephraim.com';
const loginEmail = '   Hello@Ephraim.Com  \n';
console.log(email);
console.log(loginEmail);

const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail);
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replace and replaceAll
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

// includes
const planeNeo = 'Airbus A320neo';
console.log(planeNeo.includes('neo'));
console.log(planeNeo.includes('A320'));
console.log(planeNeo.includes('Boeing'));

// startsWith and endsWith
console.log(planeNeo.startsWith('Boeing'));
console.log(planeNeo.startsWith('Airbus'));

if (planeNeo.startsWith('Airbus') && planeNeo.endsWith('neo')) {
  console.log(`Part of the NEW AIRBUS family`);
}

// Exercise
const checkBaggage = function (items) {
  const scanner = items.toLowerCase();
  console.log(scanner);

  if (scanner.includes('gun') || scanner.includes('knife')) {
    console.log(`You are NOT allowed to board`);
  } else {
    console.log(`WELCOME!!!`);
  }
};

checkBaggage('I have a laptop, some food and a pocket KNIFE');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
