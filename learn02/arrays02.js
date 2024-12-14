const marvel_heros = ["ironman","thor","spiderman"]
const dc_heros = ["batman","flash","superman"]

//marvel_heros.push(dc_heros)

const all_heros=marvel_heros.concat(dc_heros)
//console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros]  //spread method
console.log(all_new_heros);

const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr);

console.log(Array.isArray("Amitesh"))
console.log(Array.from("Amitesh"))
console.log(Array.isArray({name: "Amitesh"}))// interesting case ---> gives [] empty array b/c it cannot convert directly

let score1= 100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));