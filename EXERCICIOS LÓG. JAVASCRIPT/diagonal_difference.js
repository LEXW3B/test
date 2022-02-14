
let arr = [
    [3],
    [11, 2, 4],
    [4, 5, 6], 
    [10, 8, -12] 
]
let d1 = arr[1][0]
let d2 = arr[2][1]
let d3 = arr[3][2]
let direita = d1+d2-(d3*(-1))

let e1 = arr[1][2]
let e2 = arr[2][1]
let e3 = arr[3][0]
let esquerda = e1+e2+e3

let INTEGER_ARRAY =  ((direita-esquerda)* -1)

console.log(direita)
console.log(esquerda)

console.log(INTEGER_ARRAY)

