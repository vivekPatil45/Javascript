// 11. Tagged Template Literals

function highlight(strings, ...values) {
    return strings.reduce((prev, current, i) => `${prev}${current}${values[i] || ''}`, '');
}
let price = [10,23];
console.log(highlight`The price is ${price} dollars.`);


// 12. Using Object.entries() and Object.fromEntries()
// Convert objects to arrays and back for easier manipulation.
let person = {name: "Alice", age: 25};
let entries = Object.entries(person);
let newPerson = Object.fromEntries(entries);
console.log(entries);
console.log(newPerson);


// 13. The Set Object for Unique Elements
// Use Set to store unique values of any type.
let numbers = [1, 1, 2, 3, 4, 4];
let uniqueNumbers = [...new Set(numbers)];

// 14. Dynamic Property Names in Objects
// Use square brackets in object literal notation to create dynamic property names.
let dynamicKey = 'name';
let ps = {[dynamicKey]: "Alice"};


// 15. Function Currying Using bind()
// Create a new function that, when called, has its this keyword set to the provided value.
function multiply(a, b) {
    return a * b;
}
let double = multiply.bind(null, 2);
console.log(double(5)); // 10


// 16. Using Array.from() to Create Arrays from Array-like Objects
// Convert array-like or iterable objects into true arrays.
let nodeList = document.querySelectorAll('div');
let nodeArray = Array.from(nodeList);

// 17. The for…of Loop for Iterable Objects
// Iterate over iterable objects (including arrays, maps, sets, etc.) directly.
for (let value of ['a', 'b', 'c']) {
    console.log(value);
}

// 18. Using Promise.all() for Concurrent Promises
// Run multiple promises concurrently and wait for all to settle.

let promises = [fetch(url1), fetch(url2)];
Promise.all(promises)
.then(responses => console.log('All done'));


// 19. The Rest Parameter for Function Arguments
// Capture any number of arguments into an array.
function sum(...nums) {
    return nums.reduce((acc, current) => acc + current, 0);
}

// 20. Memoization for Performance Optimization
// Store function results to avoid redundant processing.
const memoize = (fn) => {
    const cache = {};
    return (...args) => {
        let n = args[0];  // assuming single argument for simplicity
        if (n in cache) {
            console.log('Fetching from cache');
            return cache[n];
        }
        else {
            console.log('Calculating result');
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    };
};