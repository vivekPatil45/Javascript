//singleton
//object create


const tinderUser  = new Object()

tinderUser.id ="123abc"
tinderUser.name = "vivek"
tinderUser.isloggein = false

const regularuser = {
    email:"vivek@gmail.com",
    fullname: {
        userFullname:{
            firstname:"vivek",
            lastname:"patil"
        }
    }
}


console.log(tinderUser)
console.log(regularuser.fullname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 =  Object.assign({},obj1,obj2)
const obj3 =  {...obj1,...obj2}


console.log(obj3)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('id'))


// *******************************************************
// destructure
const course = {
    coursename:"js in hindi" ,
    price:"999",
    instruct:"vivek"

}

const {instruct:a} = course
console.log(a)

// *******************************************************
