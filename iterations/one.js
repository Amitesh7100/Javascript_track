//for

// for (let   i= 0;  i < array.length;  i++) {
//     const element = array[ i];
    
// }

//for of
// const arr= [1,2,3,4,5]
// for (const num of object) {
//     console.log(num);
// }


const greetings= "hello"
for (const greet of object) {
    console.log(`each char is ${greet}`);
}

//Maps -->Objects that holds key value pair

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

for (const key of map) {
    console.log(key);
}

//to destructure map we use
for (const [key, value] of map) {
    console.log(key);
}  

const myObject ={
    'game1': 'NFS',
    'game2': 'GTA'
}
for (const [key,value] of myObject) {
       console.log(key, ':-',value);
       
}