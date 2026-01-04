"use strict";

// Object literals
const eph = {
    firstName: "Ephraim",
    lastName: "S",
    birthYear: 1988,
    job: "Web-Dev",
    friends: ["Michael", "Steven", "Bob"],
    hasDriversLicense: true,

    /*  calcAge: function (birthYear) {
        return 2037 - birthYear;
    }, 
    */

    /*  calcAge: function () {
         console.log("What is this:", this);
         return 2037 - this.birthYear;
     }, 
     */

    calcAge: function () {
        console.log("What is this:", this);
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummery: function () {
        console.log(
            `${eph.firstName} is a ${eph.calcAge()} years old ${
                eph.job
            } and he has ${
                eph.hasDriversLicense ? "a" : "no"
            } driver's license.`
        );
    },
};

// Challenge - write a method getSummery
// `Ephraim is a 49 years old Web-Dev and he has a driver's license.`

console.log(eph);
console.log(eph.calcAge());
eph.getSummery();
