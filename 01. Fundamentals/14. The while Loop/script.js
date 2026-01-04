"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1988,
    "Web-Dev",
    ["Michael", "Steven", "Bob"],
];

// The while loop
let rep = 1;

while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}
console.log(`End of Exercise`);

let dice = Math.floor(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.floor(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`WOW You rolled a ${dice}...`);
    }
}
