let a = 300 //globsl scope

if(true){ //block scope
    let a = 10
    const b = 20
    console.log("Inner: ",a);
}
console.log(a);

function one(){
   const username = "amitesh"

   function two(){
      const websites ="youtube"
   }
   //console.log(websites);

   two()
   
}
//one()

if(true){
    const username = "amitesh"
    if(username === "amitesh"){
        
    }
}

console.log(addOne(5));
function addOne(num){
    return num + 1
}

addTwo(5)  
const addTwo = function(num){//function but prefered as expression
    return num + 2
}
