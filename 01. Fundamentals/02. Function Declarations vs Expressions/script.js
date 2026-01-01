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
