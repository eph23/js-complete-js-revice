"use strict";

// Array literals
const friends = ["Michael", "Steven", "Jay"];
console.log(friends);

// Constructor function
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// Accessing array value
console.log(friends[0]);
console.log(friends[2]);

// Array property
console.log(friends.length);
console.log(friends[friends.length - 1]);

// Mutating array element
console.log(friends);
friends[2] = "Bob";
console.log(friends);

// Arrays can hold any type of data
const firstName = "Ephraim";
const eph = [firstName, "S", 2037 - 1988, "Web Dev", friends];
console.log(eph);

// Exercise
const birthYears = [1990, 1967, 2002, 2010, 2018];
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const ages = [
    calcAge(birthYears[0]),
    calcAge(birthYears[1]),
    calcAge(birthYears[birthYears.length - 1]),
];
console.log(ages);
