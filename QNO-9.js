// Question 9: Remove Falsy Values from an Array
// Problem: Write a function that removes all falsy values from an array.
// Input: [0, 1, false, 2, '', 3]
// Output: [1, 2, 3]
// Use Case: This function can be used to clean up user inputs or configuration arrays.


// Code :

function removeFalsyValues(arr) {
    // Falsy values remove panna filter use pannrom
    const result = arr.filter(Boolean); // Boolean function falsy values ah eliminate pannum
    return result;
}

// Input Array
const inputArray = [0, 1, false, 2, '', 3];

// Function call pannitu result-a console la print pannuvom
console.log(removeFalsyValues(inputArray));



// Explanation :

// falsy values na, value illaama irukkara mathiri pona values.
//  JavaScript la 0, false, '' (empty string), null, undefined,
//   NaN laam falsy values aagum. 
//   Ippadi irukkira values remove panna filter() function use pannalam.

// Steps
// Function Define Panradhu:

// removeFalsyValues nu oru function define pannalam.
// Indha function oru array-a input ah eduthukkum.
// Filter Method Use Panradhu:

// filter() method array oda elements ah oru condition a base panni filter pannum.
// Namma condition na, element falsy a illa na retain pannum. Adha Boolean function use panni check pannalam.
// Boolean(value) false kudutha, adha remove panrom.
// Console Log Pannalam:

// Function call panni, output console la print panni paarpom.

// arr.filter(Boolean);: filter() la Boolean function condition use pannom. Boolean(value) check pannum,
//  and adha true kodutha values retain pannum, falsy values like 0, false, '' laam remove pannidum.

