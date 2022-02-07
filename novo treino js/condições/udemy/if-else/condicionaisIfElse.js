
let idade = 18
let paisPresentes = false
let comprouBilhete = true
const podeViajar = (idade >= 12 || paisPresentes) && comprouBilhete
console.log(`Pode viajar: ${podeViajar}`)


///////////////////////////////////////////////////////////////////////////////////////////////////
// operador ternário usado quado se tem apenas duas respostas

// let msgMaiorIdade = " "
// if(msgMaiorIdade >= 18){
//     msgMaiorIdade = 'É maior de idade.'
// }else{
//     msgMaiorIdade = 'É menor de 18 anos.'
// }   OU
let msgMaiorIdade = (idade>=18) ? "É maior de idade porra." : "É menor de 18 anos seu ze-arruela."
console.log(msgMaiorIdade)
//////////////////////////////////////////////////////////////////////////////////////////////////


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
















