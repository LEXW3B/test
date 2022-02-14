/*
e uma verificação da array que pode passar por parametro ate 3 funções(elemento, indice, array) e atravez da verificação do typeof ele vai alojar o resultado dentro da variavel .
*/
const arr = [1,5,10,'ola', true]

const arr1 = arr.filter(function(el, i, arr){
    return typeof el === 'number'
})
console.log(arr)
console.log(arr1)



