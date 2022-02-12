

function sum(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw Error('sum aceita apenas números')
    }
    return n1 + n2
}

let soma = ''
try {
    soma = sum(3, 'a')
    
} catch(error) {
    console.log('Ocorreu um erro.')
    console.log(error.message)
}
console.log(soma)










