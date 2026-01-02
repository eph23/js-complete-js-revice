"use strict";

// Function Declarations
function calcAgeDeclaration(birthYear) {
    return 2037 - birthYear;
}
console.log("Age from function declarations", calcAgeDeclaration(1988));

// Function Expression
const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
};
console.log("Age from function expressions", calcAgeDeclaration(1988));

// Arrow Function (simple form)
const calcAgeArrow = (birthYear) => 2037 - birthYear;
console.log("Age from arrow function", calcAgeArrow(1988));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    return `${firstName} will retire in ${retirement}-years`;
};

console.log(yearsUntilRetirement(1988, "Ephraim"));
console.log(yearsUntilRetirement(1980, "Bob"));
