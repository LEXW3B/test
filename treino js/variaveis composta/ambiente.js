//num.length() pra saber o tamanho da array
//num.sort() pega todos os elementos e coloca em ordem crescente
//num.push(7) metodo push sempre acrescenta na ultima posição
//num[3] = 10 acrescentando dinamicamente

let num = [2, 8, 6, 9, 3 ]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

