// Question 3: Check for Duplicates
// Problem: Write a function that checks if an array contains duplicates.
// Input: [1, 2, 3, 4, 5, 1]
// Output: true
// Input: [1, 2, 3, 4, 5]
// Output: false
// Use Case: Can be used to validate user inputs in forms, such as ensuring usernames are unique during registration



// Define the function
function checkDuplicates(array) {
    let uniqueValues = new Set();

    for (let value of array) {
        if (uniqueValues.has(value)) {
            return true; // Duplicate found, so 'true' return
        }
        uniqueValues.add(value);
    }

    return false; // No duplicates found, so 'false' return
}

// Test cases
let array1 = [1, 2, 3, 4, 5, 1]; // Duplicate irukku, so 'true' expected
let array2 = [1, 2, 3, 4, 5];    // Duplicate illa, so 'false' expected

// Console log output
console.log(checkDuplicates(array1)); // Output: true
console.log(checkDuplicates(array2)); // Output: false




// Explanation:

// checkDuplicates function la true or false return panna irukkom, based on duplicate irukka illaya nu.

// checkDuplicates(array1)

// array1 la [1, 2, 3, 4, 5, 1] irukku.
// Duplicate 1 irukku, so true output varum.
// Console output: true
// checkDuplicates(array2)

// array2 la [1, 2, 3, 4, 5] irukku.
// Duplicate illa, so false output varum.
// Console output: false

// Idha console la run pannina, neenga true and false values output ah paapinga.

// JavaScript la Set object use pannumbothu, has method irukkum. Idhu specific value Set la irukkaa nu check panrathukku use aagum.

// has Method Explanation
// Syntax: set.has(value)
// has method oru Boolean value (true/false) return pannum.
// true - Set la andha value irundhaa.
// false - Set la andha value illa na.

// Example:
// uniqueValues is a Set.
// uniqueValues.has(value) nu check panna:
// Andha value Set la irundhaa, true return pannum (duplicate found).
// Illaina false return pannum (unique ah irukku nu artham).
// Idhu namma duplicate irukkaa nu kandupidikkum. has method inga main purpose na, Set la irukura oru element irukka illaya nu check panradhu dhaan.