/*
some faz uma verificação de toda a array e retorna um booleano, porem se aprenas um resultado for verdadeiro entao tudo e verdadeiro.
*/

const arr = [1,5,10,'ola', true]

let soNumeros = arr.some(function (el){
    return typeof el === 'number'
})
console.log(soNumeros)