// const nomes = ['joao', 'maria', 'jose', 'helena']

// for (let i = 0; i < nomes.length; i++) {
//     console.log(`${i}: Nome é ${nomes[i]}`)
// }

const pessoa = {
    nome: 'Maria',
    idade: 28,
    'Email': 'ela@serve.com'
}
console.log(pessoa)
for(let prop in pessoa){
    console.log(prop)
    console.log(pessoa[prop])
    console.log('-=-=-=-=-=-=')
}









