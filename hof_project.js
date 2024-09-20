#!/bin/bash

// Higher-Order Function Examples

// 1. Mapping Array Elements: Doubling numbers using the map HOF
function doubleNumbers(input) {
    if (!input || input.trim() === "") {
        return "Input cannot be empty";
    }
    const numbers = input.split(' ').map(Number);
    const doubled = numbers.map(num => num * 2);
    return doubled;
}

// Example usage:
console.log("Doubled Numbers:", doubleNumbers("1 2 3 4"));  // Output: [2, 4, 6, 8]

// 2. Filtering Data: Extracting even numbers using the filter HOF
function filterEvenNumbers(input) {
    if (!input || input.trim() === "") {
        return "Input cannot be empty";
    }
    const numbers = input.split(',').map(Number);
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    return evenNumbers;
}

// Example usage:
console.log("Even Numbers:", filterEvenNumbers("1,2,3,4,5"));  // Output: [2, 4]

// 3. Reducing Arrays: Summing numbers using the reduce HOF
function sumNumbers(input) {
    if (!input || input.trim() === "") {
        return "Input cannot be empty";
    }
    const numbers = input.split(';').map(Number);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
}

// Example usage:
console.log("Sum of Numbers:", sumNumbers("5;10;15"));  // Output: 30
