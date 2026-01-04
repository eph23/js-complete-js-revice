"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1988,
    "Web-Dev",
    ["Michael", "Steven", "Bob"],
];

// Looping backwards
for (let i = eph.length - 1; i >= 0; i--) {
    console.log(eph[i]);
}

// Loops in loops
const exercises = ["Squats", "Lunges", "Push-ups", "Planks", "Jumping Jacks"];
for (let exercise = 0; exercise <= exercises.length - 1; exercise++) {
    console.log(`===Starting Exercise - ${exercises[exercise]}===`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`${exercises[exercise]} Repetition ${rep}`);
    }
}
