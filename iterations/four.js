//const coding = ["js", "ruby", "java", "py"]
// for each do not return any value
// const values = coding.forEach( (item) => {
//     console.log(item);
// } )

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num) => num > 4 )

// const newNums = myNums.filter((num) => {
//     return num > 4  //when we use {} then we have to explicitly return value
// }) 

// console.log(newNums);



const newNums = []

myNums.forEach ((num) => {
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNums);