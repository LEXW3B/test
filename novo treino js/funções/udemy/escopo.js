//Escopo global
let g = 'global'

function mostrarN () {
    //Escopo local
    let g = 'local' 
    console.log(`O valor de global dentro da função: ${g}`)
}
mostrarN()
console.log(`O valor de global fora da função: ${g}`)





