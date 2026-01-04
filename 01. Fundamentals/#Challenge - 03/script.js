"use strict";

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/* ******************************************** */
/*                   SOLUTION                   */
/* ******************************************** */

// ANCHOR - OBJECTIVE 1
const mark = {
    fullName: "Mark Miller",
    height: 1.69,
    weight: 78,

    // ANCHOR - OBJECTIVE 2
    calcBMI: function () {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    },
};

console.log(mark);
console.log(mark.calcBMI());

const john = {
    fullName: "John Smith",
    height: 1.95,
    weight: 92,

    // ANCHOR - OBJECTIVE 2
    calcBMI: function () {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    },
};

console.log(john);
console.log(john.calcBMI());

// Objective 3
if (mark.BMI > john.BMI) {
    console.log(
        `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`
    );
} else if (john.BMI > mark.BMI) {
    console.log(
        `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`
    );
}
