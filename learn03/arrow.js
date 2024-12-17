const user = {
    username :"amitesh" ,
    price : 999 , 

    welcomeMessage : function() {
         console.log(`${this.username}, welcome to website `);
          console.log(this);
    
        }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this);

// function apple(){
//     let userName = "ama"
//     console.log(this.username);
// }
// chai()


// const chai = function (){
//     let username ="ama"
//     console.log(this.username);
// }
// chai()

// const chai =  () => { //this is arrow function
//     let username ="ama"
//     console.log(this.username);

// }

// chai()

const addTwo = (num1,num2) => {  //this is basic use of arrow function
    return num1 + num2
}
console.log(addTwo(3,4));

//we have one more using technique --> implicit return
const addtwo = (num1,num2) =>  num1 + num2  //this is basic use of arrow function
console.log(addTwo(3,4)); 
