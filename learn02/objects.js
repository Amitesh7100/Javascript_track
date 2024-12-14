//singleton

//object literals

const mySym=Symbol("key1")

const js_user = {
    name : "Amitesh",
    "full name" : "ASR",
    [mySym]:"mykey1",
    age:18,
    location :"USA",
    email : "asr@gmail.com",
    isLoggedIn : false

}

console.log(js_user.email);
console.log(js_user["email"]);
console.log(js_user['full name']);
console.log(js_user[mySym]);

js_user.email = "asr65@gmai.com" // to change value
console.log(js_user);

//Object.freeze(js_user) //using freeze not values can be changed

js_user.greeting = function(){
    console.log("hhello user");
}
js_user.greetingTwo =function(){
    console.log(`hello user , ${this.name}`);
}

console.log(js_user.greeting());
console.log(js_user.greetingTwo());

