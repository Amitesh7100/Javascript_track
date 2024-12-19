const myNums = [1,2,3,]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal} `);
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemNmae: "js course",
        price: 2999
    },
    {
        itemNmae: "py course",
        price: 999
    },
    {
        itemNmae: "java course",
        price: 1999
    },
    {
        itemNmae: "DS course",
        price: 12999
    }
]
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);