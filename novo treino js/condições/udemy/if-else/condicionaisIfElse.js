
let idade = 17
let paisPresentes = false
let comprouBilhete = true
const podeViajar = (idade >= 12 || paisPresentes) && comprouBilhete

console.log(`Pode viajar: ${podeViajar}`)
if(!comprouBilhete){
    console.log(`Não comprou o bilhete.`)
}else{
    if(idade >= 18){
        console.log(`É maior de idade pode viajar.`)
    }else{
        console.log(`Opa! É menor de idade.`)
    }
}

n1 = 10
n2 = 10
let media = (n1 + n2) / 2
console.log(` Média: ${media}`)
if(n1===0||n2===0){
    console.log(`Reprovado.`)
}else if(media<7){
    console.log(`Reprovado, ,as há como recuperar.`)
}else{
    console.log(`Aprovado.`)
}
console.log(`Saiu do bloco if`)
















