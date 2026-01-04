"use strict";

// Object literals
const eph = {
    firstName: "Ephraim",
    lastName: "S",
    age: 2037 - 1988,
    job: "Web-Dev",
    friends: ["Michael", "Steven", "Bob"],
};

console.log(eph);

// Accessing object property
console.log(eph.firstName);
console.log(eph["lastName"]);

const nameKey = "Name";
console.log(eph["first" + nameKey]);
console.log(eph["last" + nameKey]);

/* const interestedIn = prompt(
    `What do you want to know about Ephraim? Choose between firstName, lastName, age, job and friends`
);
const wrongRequest = prompt(
    `Wrong request! Please choose between firstName, lastName, age, job and friends...`
);

if (eph[interestedIn]) {
    console.log(eph[interestedIn]);
} else {
    wrongRequest;
} */

// Add new Property
eph.location = "BD";
eph["twitter"] = "@eph23";

console.log(eph);

// Challenge
// Ephraim has 3 friends and his best friend is called Michael
console.log(
    `${eph.firstName} has ${eph.friends.length} friends and his best friend is called ${eph.friends[0]}`
);
