
function tabuada () {
    //manipulação da arvore DOM
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#tab')

//1° validação do código
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ' '
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n*c} `
            tab.appendChild(item)
            c++
        }
    }
}
