//QUESTION NO : 1

// Problem: Write a function that takes an array and returns a new array with the elements in reverse order.
// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]
// Use Case: This function can be used in a web application where user reviews need to be
// displayed in reverse chronological order.


function reverseArray(arr) {
    return arr.reverse();
}

const inputArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(inputArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]


// Explanation :

// Step 1: Function Define Pannunga
// First, oru function create panna porom, reverseArray nu oru peyar vechirukom.
// reverseArray function oru array ah eduththukitu reverse panna porom.

// Step 2: reverse Method Use Pannalaam
// JavaScript la array reverse panna simple reverse() method irukku.
// reverse() method array la values ah reverse pannidum.

// Step 3: Result Check Pannunga
// Ippo reverseArray function ah call pannitu, athu enna output kudukudhu nu check pannalam.
// Example ah [1, 2, 3, 4, 5] nu kuduthu test panna paarpom.

// Step 4: Output Puriyuma Nu Check Pannunga
// Indha output [5, 4, 3, 2, 1] kudutha original input array reverse aachunu artham.

// Explanation:
// reverse() method la, array oda values ah reverse order la mathi kudukkum.
// Ippo reverseArray function kudutha array ah reverse panna output varudhu.
// console.log(reversedArray); statement la final reversed array display aagum.
// Use Case:
// Indha method, web applications la helpful ah irukkum. Example,
//  user reviews ah latest to oldest order la display panna use panna mudiyum.