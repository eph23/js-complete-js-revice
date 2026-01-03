"use strict";

const friends = ["Michael", "Steven", "Bob"];
console.log(friends);

// Add elements at the end of an array - push method
friends.push("Jay");
console.log(friends);

// Remove elements from the end of an array - pop method
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Add elements at the beginning of an array - unshift method
friends.unshift("Sarah");
console.log(friends);

// Remove elements from the beginning of an array - shift method
const shifted = friends.shift();
console.log(shifted);
console.log(friends);

// Finding the index of an element - indexOf method
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Jay"));

// Finding if an array contains/includes an element - includes
console.log(friends.includes("Steven"));
console.log(friends.includes("Jay"));

// Example
if (friends.includes("Ray")) {
    console.log(`You have a friend called Ray`);
} else {
    console.log(`You don't have a friend called Ray`);
}

if (friends.includes("Steven")) {
    console.log(`You have a friend called Steven`);
} else {
    console.log(`You don't have a friend called Steven`);
}
