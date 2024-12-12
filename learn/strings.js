const name="amitesh"
const repoCount =50

//console.log(name+repoCount);   ----> is old fashioned one format

console.log(`Hello my name is ${name} and my repo  count is ${repoCount}`); //this is string interpolation

const gameName = new String('amiteshsc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString= gameName.substring(0,4); //0 is inclusive but 4 is not
console.log(newString);

const anotherString= gameName.slice(-8,4); //when we give neg value slicing will start in reverse string manner
console.log(anotherString);

const newStringOne = "   amitesh   "
console.log(newString);
console.log(newStringOne.trim());

const url="https://amitesh.com/amitesh%20rajput"
console.log(url.replace('%20','-'));