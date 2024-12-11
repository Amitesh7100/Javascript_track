// Primitive
//7 types: String,Num , Boolean, Null, Undefined, Symbol, BigInt
const score=100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp =null
let userEmail;

const id= Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);

//const bigNumber = 36594965156n

//Reference(Non premitive)

// Arrays, Objects, Functions

const heros =["ironman", "naljbg","jhfbckma"]

let myobj={
    name:"ekjfhb",
    age: 22,
}

const myFunction = function() {
    console.log("heloooo");
}
console.log(typeof outsideTemp);

//**************************MMEMORY IN JS************************

//Stack(Primitive)  -----> in this we get a copy of value, if value so when any alterations is done in value it donot reflects in original one
//Heap(Non-primitive) ---> in thyis we get a reference, if value so when any alterations is done in value it reflects in original one

let mychannelname="lalalalala"

let anothername= mychannelname
anothername = "hahahaha"

console.log(mychannelname);
console.log(anothername);

let userOne = {
    email: "wekhb.com",
    upi: "wkjhb@ybl"
}
let userTwo = userOne

userTwo.email ="wejhb.com"

console.log(userOne.email);
console.log(userTwo.email);