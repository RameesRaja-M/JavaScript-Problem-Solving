// Question 10: Calculate Average of an Array
// Problem: Write a function that calculates the average of all numbers in an array.
// Input: [1, 2, 3, 4, 5]
// Output: 3
// Use Case: This function is useful in educational applications where you need to compute the
// average score of students from an array of their grades

// Code :

function calculateAverage(numbers) {
    // Step 1: Add all numbers in the array
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    // Step 2: Divide the sum by the length of the array
    let average = sum / numbers.length;
    return average;
}

// Testing the function
let grades = [1, 2, 3, 4, 5];
let averageGrade = calculateAverage(grades);
console.log("The average is:", averageGrade); // Output: The average is: 3


// Explanation :

// Define Function

// First, oru function calculateAverage create pannanum, indha function la numbers nu oru array as input kudukkom.
// Initialize Sum

// sum nu oru variable create panni, initial value 0 set pannuvom. Idha ellaa numbers oda total sum store panna use pannurom.
// Loop through Array

// Oru for loop use panni array la irukkura elements anaithiyum iterate pannurom. Loop la i nu oru variable initialize pannuvom (i = 0).
// numbers.length use pannitu array la evalo elements irukkudho andha length varaikkum loop poidum.
// Add Each Element to Sum

// Loop la sum += numbers[i]; nu kuduthu, array la irukkura each number ah sum la add pannuvom.
// Calculate Average

// Loop mudinja piragu, sum la irukkura total value ah array oda length la divide panni, average kandupidichu, average nu oru variable la store pannuvom.
// Return Average

// average return pannuvom.
// Print Result

// Ipo, calculateAverage function ah grades array oda call pannuvom.
// console.log("The average is:", averageGrade); nu kuduthu, output ah print pannuvom.
// Example
// Input: [1, 2, 3, 4, 5]
// Calculation:

// Sum: 1 + 2 + 3 + 4 + 5 = 15
// Average: 15 / 5 = 3

// += nu oru shorthand operator.
//  Idhoda purpose enna na, left side la irukkura variable kulla right side value ah add panni store pannum.

//  et sum = 0;
// sum += 5;  Inga sum = sum + 5 nu artham
// console.log(sum);  Output: 5

// let sum = 0;
// let numbers = [1, 2, 3];

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];  sum = sum + numbers[i] nu artham
// }

// console.log(sum);  Output: 6
