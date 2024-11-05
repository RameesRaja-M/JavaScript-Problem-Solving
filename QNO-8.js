// Question 8: Calculate the Sum of Array Elements
// Problem: Write a function that calculates the sum of all numbers in an array.
// Input: [1, 2, 3, 4, 5]
// Output: 15
// Use Case: Useful in financial applications to calculate the total expenses or revenue

// Code :

// Step 1: Define the function sumArray
function sumArray(numbers) {
    // Step 2: Initialize sum variable to 0
    let sum = 0;

    // Step 3: Loop through each number in the array
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // Add each number to sum
    }

    // Step 4: Return the sum
    return sum;
}

// Step 5: Test the function
const numbers = [1, 2, 3, 4, 5];
console.log("Total Sum:", sumArray(numbers)); // Output: 15

// Explanation :

// Function Definition (sumArray):

// Indha function ku numbers array (e.g., [1, 2, 3, 4, 5]) as input kudukkom.
// Variable Initialization:

// sum = 0 vaachu oru variable declare pannuvom, sum eduthathu ellaa values-um total panna.
// Loop Use Panni Numbers Add Pannuvom:

// Array la irukura numbers-oda values eduthuttu sum ku add pannuvom.
// Return Final Sum:

// Ellaa numbers add aana piragu sum return pannuvom.
// Console La Result Print:

// Function call panni result-a console.log la print pannuvom.

// Indha logic use pannina, array-la irukura any set of numbers-oda sum calculate panna easy-aagum.