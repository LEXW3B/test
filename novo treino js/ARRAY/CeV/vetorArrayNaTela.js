//codigo de execução de percurso dos vetores
let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
for ( let c = 0; c < valores.length; c++) {
    console.log(`A posição ${c} tem um valor ${valores[c]}`)
}

for (let pos  in valores ) {
    console.log(`${pos}-=-=-=${valores[pos]}`)
}

//valores.indexOf(2) procura dentro da array o numero que esta no parametro para dizer qual é sua posição

console.log(valores.indexOf(2))







