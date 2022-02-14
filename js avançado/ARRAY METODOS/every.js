/*
every faz uma verificação de toda a array e retorna um booleano, porem se aprenas um resultado for false entao tudo e false.
*/

const arr = [1,5,10,'ola', true]

let soNumeros = arr.every(function (el){
    return typeof el === 'number'
})
console.log(soNumeros)














