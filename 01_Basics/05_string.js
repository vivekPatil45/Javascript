const name = "hitesh"
const repoCount = 50

console.log(`Hello my name is ${name} and My repo count is ${repoCount}`)

const game = new String("vivek-rp")

console.log(game[0])
console.log(game.__proto__)

console.log(game.length)
console.log(game.toUpperCase())
console.log(game.charAt(2))
console.log(game.indexOf('k'))

const str = game.substring(0,4)
console.log(str)

const str2 = game.slice(-8,2)
console.log(str2)

const str3 = "     bisvjs"
console.log(str3)
console.log(str3.trim())

const url = "https://www.youtube.com/"

console.log(url.replace('com',"pc"))

console.log(url.includes('com'))

console.log(game.split('-'))

