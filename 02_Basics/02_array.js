const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// console.log(marvel_heros[3])


// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros)

//spread operaton

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

const a = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const b = a.flat(Infinity)
console.log(b)

console.log(Array.isArray("vivek"))
console.log(Array.from("vivek"))
console.log(Array.from({name:"vivek"})) //intresting interview que

// Array.of()


