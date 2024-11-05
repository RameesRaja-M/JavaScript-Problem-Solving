// Question 6: Group Array of Objects by Property
// Problem: Write a function that groups an array of objects by a specific property.
// Input: [ { id: 1, category: 'fruit' }, { id: 2, category: 'vegetable' }, { id: 3, category: 'fruit' } ]
// Output: {
// fruit: [ { id: 1, category: 'fruit' }, { id: 3, category: 'fruit' } ],
// vegetable: [ { id: 2, category: 'vegetable' } ]
// }
// Use Case: Useful for organizing products by category in an e-commerce applicatio

// Code :

function groupBy(items, property) {
    return items.reduce((result, item) => {
      // Step 1: Get the property value to group by
      const key = item[property];
      
      // Step 2: Check if this key exists in result; if not, initialize it as an empty array
      if (!result[key]) {
        result[key] = [];
      }
  
      // Step 3: Push the item to the appropriate group
      result[key].push(item);
  
      return result;
    }, {}); // Initialize result as an empty object
  }
  
  // Test the function
  const products = [ 
    { id: 1, category: 'fruit' }, 
    { id: 2, category: 'vegetable' }, 
    { id: 3, category: 'fruit' } 
  ];
  
  const groupedProducts = groupBy(products, 'category');
  console.log(groupedProducts);
  
//   Explanation :

//   Step 1:
// reduce function start aagum with an empty object {}.
// For each item, category property value retrieve pannikittu key variable la store pannrom.

// Step 2:
// Check if result la key irukkaa nu paakuradhukku, !result[key] use pannrom. 
// Irundha direct push pannalam, illa na result[key] = [] vechu pudhu array create pannalam.

// Step 3:
// result[key].push(item) vechu key la irukura array ku item ah add panniduvom.

// // Final :

// Explanation of Console Output:
// fruit category ku 2 items irukku, so adha array la add panniduchu.
// vegetable category ku oru item irundhudhu, adha separate ah array la group panniduchu.