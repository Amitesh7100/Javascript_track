const userEmail = "enee.com"
//when we assume the value in a STRING is true ---. it is truthy value
if (userEmail) {
    console.log("got user email");
} else {
    console.log("no entry")
}

//falsy values
//false, 0, -0, bigInt 0n, "", null, underfined,  NaN


//truthy values
//"0", 'false', " ", [], {}, function(){}

if (userEmail.length ===0) {
    console.log("array is empty");
}

//for empty objects
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("objects is empty");
}

//nullish cosalescing operator (??): null undefined

// let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 20
// val1 = null ?? 10 ?? 10


console.log(val1);

//Ternary Operator.
// condition ? true:false