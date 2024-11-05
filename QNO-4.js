// Question 4: Merge Two Objects
// Problem: Write a function that merges two objects into one.
// Input: { a: 1, b: 2 }, { b: 2, c: 4 }
// Output: { a: 1, b: 2, c: 4 }
// Use Case: This can be used in a web application to combine user profile settings from different
// sources.


function mergeObjects(object1, object2) {
    // Step 1: Merging object1 and object2 using spread operator
    const mergedObject = { ...object1, ...object2 };
    
    // Step 2: Return merged result
    return mergedObject;
}

// Input objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, c: 4 };

// Step 3: Calling the function and storing result
const result = mergeObjects(obj1, obj2);

// Step 4: Print result in console
console.log(result); // Expected Output: { a: 1, b: 2, c: 4 }


// Explanation :

// mergeObjects function create pannuvom, rendu objects object1 and object2 a oru object la merge panna.

// Step by step purinjukkalam:

// Step 1: Function Definition
// Function name: mergeObjects
// Parameters: object1, object2 (ivanga rendu objects ah pass pannurom)
// Step 2: Merging Objects
// Javascript la Object.assign() method or spread operator (...) use panni merge panna mudiyum. Spread operator romba simple, so atha use pannuvom.
// Step 3: Return Result
// Merged result ah return pannuvom.
// Step 4: Console Output
// Console la output check panna console.log use pannuvom.

// Function call panna: mergeObjects(obj1, obj2) nu call pannuvom. Idhula obj1 and obj2 merge panna try pannrom.
// Spread operator (...): { ...object1, ...object2 } nu kodutha, object1 oda values first include aagum, apram object2 oda values. b: 2 value rendula irundhaalum, object2 oda value tha last la irukku, so athu final result la save aagum.
// Return and print: console.log(result) nu kodutha result { a: 1, b: 2, c: 4 } nu print aagum.

// Use Case Explanation
// Itha user profile merge panna use panna mudiyum:

// Oru source la { name: "Ramesh" }, innooru source la { age: 25 } nu irundha, rendu data combine panna mergeObjects use pannalam.