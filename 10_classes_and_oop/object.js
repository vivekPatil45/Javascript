function multipleBy5(num){

    return num*5
}

// function also refrence the object it is also object
multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);