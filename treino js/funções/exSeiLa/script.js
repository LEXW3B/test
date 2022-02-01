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
        window.alert('Tudo ok')
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }




}







