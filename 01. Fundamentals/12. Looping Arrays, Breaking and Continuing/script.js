"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1988,
    "Web-Dev",
    ["Michael", "Steven", "Bob"],
];

const types = [];

for (let i = 0; i <= eph.length - 1; i++) {
    console.log(eph[i], typeof eph[i]);
}

for (let i = 0; i <= eph.length - 1; i++) {
    types.push(typeof eph[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    let age = 2037 - years[i];

    ages.push(age);
}

console.log(years);
console.log(ages);

// Continue
console.log("===Continue===");

for (let i = 0; i <= eph.length - 1; i++) {
    if (typeof eph[i] !== "string") continue;
    console.log(eph[i], typeof eph[i]);
}

// Break
console.log("===Break===");

for (let i = 0; i <= eph.length - 1; i++) {
    if (typeof eph[i] === "number") break;
    console.log(eph[i], typeof eph[i]);
}
