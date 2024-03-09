// 1. Using !! to Convert to Boolean
let truthyValue = !!1; // true
let falsyValue = !!0; // false

// 2. Default Function Parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// 3. The Ternary Operator for Short If-Else
let price = 100;
let message = price > 50 ? "Expensive" : "Cheap";

// 4. Template Literals for Dynamic Strings
let item = "coffee";
let p = 15;
console.log(`One ${item} costs $${p}.`);

//5. Destructuring Assignment
let [x, y] = [1, 2];
let {name, age} = {name: "Alice", age: 30};


// 6. The Spread Operator for Array and Object Cloning
// Clone arrays or objects without referencing the original.

let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];

// 7. Short-circuit Evaluation
let isValid = true;
isValid && console.log("Valid!");

// 8. Optional Chaining (?.)
// Safely access nested object properties without an error if a reference is nullish.

// let user = {name: "John", address: {city: "New York"}};
console.log(user?.address?.city); // "New York"


// 9. Nullish Coalescing Operator (??)
// Use ?? to provide a default value for null or undefined.
let username = null;
console.log(username ?? "Guest"); // "Guest"


// 10. Using map, filter, and reduce for Array Manipulation
// Elegant ways to handle arrays without traditional loops.
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(x => x * 2);

// Filter
const evens = numbers.filter(x => x % 2 === 0);

// Reduce
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
