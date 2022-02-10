// uso da estrutura switch

let agora = new Date()
let diaSemana = agora.getDay()

//console.log(`Hoje é ${diaSemana}.`)
switch(diaSemana){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
        default:
            console.log('ERROR, dia inválido.')
}
