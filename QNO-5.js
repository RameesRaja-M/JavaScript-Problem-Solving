// Question 5: Find the Maximum Number in an Array
// Problem: Write a function that finds the maximum number in an array.
// Input: [1, 3, 2, 8, 5]
// Output: 8
// Use Case: This function can help in analytics dashboards to find the highest sales figure or user
// activity.

function findMax(arr) {
    // 1. Array-oda first element eduthutu `max` la store pannrom
    let max = arr[0]; 
    
    // 2. Array-oda values ellathayum loop panna porom
    for (let i = 1; i < arr.length; i++) { 
        // 3. `arr[i]` irukkira value `max` vida perusa irundha
        // `max` la store panniduvom
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    // 4. Loop mudinjadhum `max` la irukkira highest value return aagum
    return max;
}

// Example array
let numbers = [1, 3, 2, 8, 5];

// Function-a call pannuvom and result print pannuvom
console.log("Maximum number:", findMax(numbers)); // Output: Maximum number: 8

// Explanation :

// Array-la irukkira values-la maximum number ah kandupidikkura function epdi eludhuradhu nu step-by-step paakalaam

// Function Definition:

// Oru function create pannuvom findMax nu.
// Input ah oru array edukka porom. Example array: [1, 3, 2, 8, 5].
// Initialize Maximum Variable:

// Array-la irukkira values compare pannittu, highest number therinja vecha, maximum variable update pannuvom.
// Starting-la, maximum variable la array-oda first element-a vechikkalam (max = array[0]).
// Loop Through Array:

// Array-la irukkira elements ah oru oru item ah loop panni, max variable kitta irundhu compare pannuvom.
// Athu vida perusa irundhaa max value update aagum.
// Return Maximum Value:

// Loop mudinjudhum, maximum value edhu update aanadho, adha return pannuvom.

// Explanation :

// findMax function ah define pannirukom.
// Array oda first element ah eduthutu, adha max nu oru variable la store pannom.
// for loop la array la irukkira ellaa values ai max oda compare pannuvom.
// Athu vida perusa irundha, adha max la update pannuvom.
// Finally, loop mudinju highest value aana max ah return pannuvom.

// Output:
// Ithu console.log() la print panna, output-la namakku Maximum number: 8 nu varum,
//  which is the highest number in the given array.