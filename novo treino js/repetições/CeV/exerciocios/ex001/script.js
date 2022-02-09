

function contador(){
    //manipulando a arvore DOM
    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let pula = document.querySelector('#pula')
    let resp = document.querySelector('#resp')
//1° validação do código
    if (inicio.value.length == 0 || fim.value.length == 0 || pula.value.length == 0) {
        resp.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        resp.innerHTML = 'contando: <br>'
//Reatriduir nomes menores a variavéis já existentes
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pula.value)
//2° validação do código
        if (p <= 0) {
            window.alert('Passo inválido!')
        }

        if (i < f ) {
            //contagem crescente
            for(let c = i; c <= f; c += p){
                resp.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem decrescente
            for (let c = i; c >= f; c -= p) {
                resp.innerHTML += ` ${c} \u{1F449}`
            }
        }
        //a bandeira de final
        resp.innerHTML += `\u{1F3C1}`
    }      
}
