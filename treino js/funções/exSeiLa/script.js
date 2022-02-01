//pegar o numero de dentro do input
let num = document.querySelector('input#fnum');
//fazer uma variavel para entrar o select
let lista = document.querySelector('select#flista');
//criar uma variavel para entrar na Resposta
let res = document.querySelector('div#res');
//criar um biblioteca com array
let valores = [];

//criando função isNumero vai receber um número para fazer uma validação
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
//criando função inLista que vai receber um numero e uma lista
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

//criar funcoes para isNumero=número e isLista=lista
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        //adiciona o numero dentro da biblioteca valores
        valores.push(Number(num.value))
        //faz aparecer visualmente dwentro do select
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ' '
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ' '
    num.focus()
}
//criar as funções FINALIZAR
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length
        //criar comparação de maior e menor número
        let maior = valores[0]
        let menor = valores[0]
        //aproveitar este codigo e fazer a soma e média também
        let soma = 0 
        let media = 0 
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = ' '
        res.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong>.</p>`
    }
}






