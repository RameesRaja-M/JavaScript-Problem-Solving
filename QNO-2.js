//Question 2: Flatten an Array

//Problem: Write a function that takes a nested array and flattens it to a single-level array.
// Input: [1, [2, 3], [4, [5]]]
// Output: [1, 2, 3, 4, 5]
// Use Case: Useful for aggregating user-selected items from multiple categories into a single list for checkout.


function flattenArray(arr) {
    let result = [];  // Output array create pannuvom

    for (let item of arr) {  // Array la item each loop la check pannuvom
        if (Array.isArray(item)) {  // Item array a irundha
            result = result.concat(flattenArray(item));  // Recursive call panni flatten pannuvom
        } else {
            result.push(item);  // Array illa na, appadiye output la add pannuvom
        }
    }

    return result;
}

// Example usage:
const input = [1, [2, 3], [4, [5]]];
console.log(flattenArray(input));  // Output: [1, 2, 3, 4, 5]


// Explanantion:

// thu oru nested array (array kulla array) irukku. Ippo atha oru single-level array ah mathanum. Example la 
// kuduthirukkura maathiri [1, [2, 3], [4, [5]]] nu irundha, output vandhu [1, 2, 3, 4, 5] aagum.

// Step 1: Understand the Problem
// Indha array kulla array irukku.
// Namba goal enna-na, ellathayum oru single-level array ah kondu varanum.

// Step 2: Recursive Function Use Panna
// Recursion use pannina, function repeat pannalam array ellathayum oru single level ah varikkum.
// Recursive function na, andha function thaan appadiye function a repeat pannum nested items check pannidum varikkum.

// Step 3: Flatten Function Create Pannalam
// Function create pannuvom, flattenArray nu.

// Function kulla input array pass pannuvom.

// Loop or iteration la array oda item check pannalam.

// Array.isArray(item) nu check panna, item oru array-a nu therinjirum.
// Array aa irundha, flattenArray(item) nu recursively call pannuvom.
// Array illa na, appadiye output array ku item add pannuvom.

// result array output store panna use pannrom.
// Loop la item check pannuvom.
// Array irundha recursive ah call panni flat pannuvom.
// Array illa na push panni result array la add pannuvom.
// End la result return pannidum, ithu oru single-level array ah irukkum.
// Final Output:
// Input: [1, [2, 3], [4, [5]]]
// Output: [1, 2, 3, 4, 5]
// Ithoda use case, indha mathiri nested arrays ellam single list ah kondu varalaam,
//  unga checkout items laam single list la edukkum. 


