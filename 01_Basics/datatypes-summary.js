//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof outsideTemp); // null->Object
console.log(typeof userEmail)  //undefined->undefined

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ***********************************

// Memory
// Stack(Primitive),Heap(Non-Primitive)

let user = {
    email:"hsb223",
    upi:"ysye"
}
let user1 = user

user1.email="2111234"
console.log(user.email)
console.log(user1.email)
