//Dates
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toUTCString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(typeof myDate)

let my = new Date(2023,0,23)
console.log(my.toDateString())



let my2 = new Date(2023,0,23,5,3)
console.log(my2.toLocaleString())

let my3 = new Date("2023-01-14")
console.log(my3.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(my.getTime())
console.log(Math.floor(Date.now()/1000)) //mssec

let newd = new Date()
console.log(newd)
console.log(newd.getMonth()+1)
console.log(newd.getDay())

newd.toLocaleString('default',{
    weekday:"long"
})