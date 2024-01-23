//array

const  a = [0,1,2,3,4,5]
const b = ["shaktiman","om"]

const c = new Array(1,2,3,4)

console.log(a[0])

//methods

a.push(6)
console.log(a)
a.pop()
console.log(a)

a.unshift(9)
console.log(a)

a.shift()
console.log(a)

console.log(a.includes(9))
console.log(a.indexOf(9))

const newa = a.join()
console.log(newa)
console.log(typeof newa)


//slice ,splice

console.log("A",a);
const  a1 = a.slice(1,3)
console.log(a1)


console.log("B",a);
const  a2 = a.splice(1,3)
console.log(a2)
console.log("C",a);




