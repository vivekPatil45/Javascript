//singleton
//object create


//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym] : "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser[mySym])

// JsUser.email = "vievekiaka"
// Object.freeze(JsUser)
// JsUser.email = "3778848843"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello")
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User ,${this.name}`)
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greeting2())
