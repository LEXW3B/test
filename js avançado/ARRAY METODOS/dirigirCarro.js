

let statusCar = 'desligado'
let aceleracao = 0
let rotacaoDoVolante = 0

function ligarDesligar () {
    if (statusCar==='desligado') {
        statusCar = 'ligado'
    } else {
        statusCar = 'desligado'
    }
    return statusCar
}
function acelerar (incremento) {
    aceleracao = aceleracao + incremento//incremento e valor passado por parametro

    return 'Acelerando a' + aceleracao + 'm/s²'
}
function frear (decremento) {
    aceleracao = aceleracao - decremento//decremento e valor passado por parametro

    return 'Desacelerando para' + aceleracao + 'm/s²'
}
function girarVolante (anguloRotacao) {
    rotacaoDoVolante = rotacaoDoVolante

    return rotacaoDoVolante + '°'
}




