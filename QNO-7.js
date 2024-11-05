// Question 7: Find the Intersection of Two Arrays
// Problem: Write a function that returns the intersection of two arrays.
// Input: [1, 2, 3], [2, 3, 4]
// Output: [2, 3]
// Use Case: This can be used in social media applications to find mutual friends between users.

//Code :

function getIntersection(array1, array2) {
    // Step 1: Filter array1 with values present in array2
    const intersection = array1.filter(value => array2.includes(value));

    // Step 2: Print result to verify
    console.log("Intersection result:", intersection);

    // Step 3: Return the final result
    return intersection;
}

// Test the function with the example inputs
const result = getIntersection([1, 2, 3], [2, 3, 4]);

// Step 4: Print final output
console.log("Final Output:", result);

// Explanation :

// Define the Function

// Oru function create pannuvom, per getIntersection.
// Indha function la rendu arrays (array1 and array2) pass pannuvom.
// Function array1 and array2 la irukkura common elements return pannum.
// Find Common Elements

// filter method use panni, array1 la irukkura values laam array2 la irukkara nu check pannuvom.
// Indha filter method la oru condition set pannuvom:

// array2.includes(value)

// Indha includes method true kudutha, value array2 la irukku nu artham.
// Return the Result

// Common elements irukkura result array la store panni, adha return pannuvom.

// Explanation of Each Step:
// array1.filter:

// array1 la irukkura values la array2 la irukkura values thaaan intersection la add pannum.
// For example: array1 la [1, 2, 3] irukku, array2 la [2, 3, 4] irukku.
// So, array2.includes(value) condition 2 and 3 ku true kudukkum.
// console.log("Intersection result:", intersection);:

// Inge, intermediate result intersection la console la print pannuvom, to see common values.
// Final Output:

// Finally getIntersection([1, 2, 3], [2, 3, 4]); output [2, 3] nu console la print pannum.

// Explanation of Use Case:
// Social media apps la, array1 and array2 va ithu users oda friend lists a eduthukko. Indha code vachu,
//  rendu user ku common friends nu mutual friends a kandupudikka mudiyum.