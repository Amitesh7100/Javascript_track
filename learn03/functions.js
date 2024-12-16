function sayname(){
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayname()

function addNums(num1,num2){//parameters
    console.log(num1 + num2);
}
const answer = addNums(3,4)//arguments


function addtwonums(num1,num2){
    let result =num1+num2
    return result
}
const result = addtwonums(10,5)
console.log(result);

function loginusermsg(username = "sam"){//default value
    if(username === undefined){ // !username (same output)
        console.log(" pls enter username");
        return
    }
    return `${username} just loggedIn`
}
console.log(loginusermsg("Amitesh"));
console.log(loginusermsg(""));
console.log(loginusermsg());


function calculatecartprice(val1, val2, ...num1){ // ... --> rest operator
    return num1
}
console.log(calculatecartprice(200,300,400, 2000)); 

const user={
    username : "amir",
    price: 233
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
handleObject({
    username: "sam",
    price :455
})

const myArray = [200,400,600]

function returnSecondValue(getArray){
      return getArray[1]
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,400,500,1000]));


