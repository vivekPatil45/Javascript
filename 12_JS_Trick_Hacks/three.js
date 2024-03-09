// 21. Using ^ for Swapping Values
// Swap the values of two variables without a temporary variable using the XOR bitwise operator.

let a = 1, b = 2;
a ^= b; b ^= a; a ^= b; // a = 2, b = 1

// 22. Flattening Arrays with flat()
// Easily flatten nested arrays using the flat() method, with the depth of flattening as an optional argument.

let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(Infinity);

// 23. Converting to Numbers with Unary Plus
// Quickly convert strings or other values to numbers using the unary plus operator.

let str = "123";
let num = +str; // 123 as a number

// 24. Template Strings for HTML Fragments
// Use template strings to create HTML fragments, making dynamic HTML generation cleaner.

let items = ['apple', 'orange', 'banana'];
let html = `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;

// 25. Using Object.assign() for Merging Objects
// Merge multiple source objects into a target object, effectively combining their properties.

let obj1 = { a: 1 }, obj2 = { b: 2 };
let merged = Object.assign({}, obj1, obj2);


// 26. Short-circuiting for Default Values
// Utilize logical operators to assign default values when dealing with potentially undefined or null variables.

let options = userOptions || defaultOptions;

// 27. Dynamically Accessing Object Properties with Bracket Notation
// Access properties of an object dynamically using bracket notation, useful when the property name is stored in a variable.

let property = "name";
let value = person[property]; // Equivalent to person.name

// 28. Using Array.includes() for Presence Check
// Check if an array includes a certain value with includes(), a clearer alternative to indexOf.

if (myArray.includes("value")) {
    // Do something
}

// 29. The Power of Function.prototype.bind()
// Bind a function to a context (this value) and partially apply arguments, creating more reusable and modular code.

const greet = function(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
};
const greetJohn = greet.bind({name: 'John'}, 'Hello');
console.log(greetJohn('!')); // "Hello, John!"

// 30. Preventing Object Modification
// Prevent modifications to an object using Object.freeze(), making it immutable. For deeper immutability, consider libraries that enforce immutability more thoroughly.

let obj = { name: "Immutable" };
Object.freeze(obj);
obj.name = "Mutable"; // Fails silently in non-strict mode
