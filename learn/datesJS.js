// Date

let myDate = new Date()
console.log("toDateString ---> " + myDate.toDateString());
console.log("toISOString ---> "+myDate.toISOString());
console.log("toJSON ---> " + myDate.toJSON());
console.log("toLocaleDateString ---> " + myDate.toLocaleDateString());
console.log("toLocaleString ---> " + myDate.toLocaleString());

let myCreatedDate = new Date(2023, 0 , 23)
console.log("myCreatedDate --->"+myCreatedDate.toDateString());

let myTimeStamp=Date.now()

console.log(myTimeStamp);