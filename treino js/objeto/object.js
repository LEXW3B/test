/*criar um objeto
let amigo = {}
console.log(typeof amigo) typeof diz o tipo do elemento neste caso é um objeto */

let amigo = { 
    nome:'josé',
    sexo:'M', 
    peso:'85.4',
    engordar(p=0){
        console.log('Engordou!!!')
        this.peso += p
    }}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`)
