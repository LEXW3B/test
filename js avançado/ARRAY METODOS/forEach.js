/*
forEach tambem pode receber parametros ate 3, e fora do escopo local da variavel ele sempre retorna undefined mas e bom so pra fazer verificação 
*/
const arr = [1,5,10,'ola', true]

const arr1 = arr.forEach(function(el, i, arr){
    console.log()
})

console.log(arr1)




