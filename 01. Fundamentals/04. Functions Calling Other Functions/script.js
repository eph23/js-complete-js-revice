"use strict";

// Helper Function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

// Function Calling the Helper Function
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange`;

    return juice;
}

console.log(fruitProcessor(2, 3));
console.log(fruitProcessor(5, 0));
