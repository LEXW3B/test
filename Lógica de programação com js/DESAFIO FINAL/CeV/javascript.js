
let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let resp = document.querySelector('#resp')
let valores = []

//let final = document.querySelector('#finalizar')
    
function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}    
    
function isLista (n, l) {
    if (l.indexOf(Number(n))!= - 1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    if (isNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resp.innerHTML = ' '
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }     
    num.value = ''
    num.focus()
}

function finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        //vai análisar qual número e maior e ou menor.
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        resp.innerHTML = ' '
        resp.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        resp.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
        resp.innerHTML += `<p>O menor número informado foi ${menor}.</p>`
        resp.innerHTML += `<p>A soma entre todos os valores, temos ${soma}.</p>`
        resp.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
