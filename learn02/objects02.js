//both below declaration are correct but
const appleUser=new Object() // --> singleton object
const applleUser={}         //  --> non singleton object

appleUser.id = "216wef"
appleUser.name = "jem"
appleUser.isLoggedIn = false
//console.log(appleUser);

const regUser = {
    email : "sam@gamil.com",
    fullname: {
        userfullname :{
            firstname: "amitesh",
            lastname: "rajput"
        }
    }
}
console.log(regUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = {obj1,obj2}


const obj3 = Object.assign({}, obj1, obj2) //(target,source)
console.log(obj3);

const obj4 = {...obj1, ...obj2}
console.log(obj4);

//this tjype is used when we hsve to take values from DB
const users=[
    {
        id:1,
        email:"kjhbf.com"
    },{
        id:1,
        email:"kjhbf.com"
    },{
        id:1,
        email:"kjhbf.com"
    }
]

users[1].email
console.log(appleUser);

console.log(Object.keys(appleUser));
console.log(Object.values(appleUser));
console.log(Object.entries(appleUser));

console.log(appleUser.hasOwnProperty('isLoggedIn'));