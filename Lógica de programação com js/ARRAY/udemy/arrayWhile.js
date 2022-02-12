//criar um array com números dandomicos não repetidos

function generateRandomInteger (max) {
    return parseInt(Math.random()*max)
}
let arr = []

while (arr.length <= 20) {
    let randomNumber = generateRandomInteger(30)
    console.log(randomNumber)

    if (arr.indexOf(randomNumber) < 0) {
        arr.push(randomNumber)
    }
}
console.log(arr)














