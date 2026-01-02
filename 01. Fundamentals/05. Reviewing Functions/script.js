"use strict";

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return `${firstName} will retire in ${retirement}-years`;
    } else {
        return `${firstName} has already retired`;
    }
};

console.log(yearsUntilRetirement(1988, "Eph"));
console.log(yearsUntilRetirement(1970, "Steven"));
