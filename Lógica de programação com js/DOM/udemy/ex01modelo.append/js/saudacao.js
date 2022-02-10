
(function(){
    const nomeUsuario = 'Alex'

    if(nomeUsuario){
        const topBarElemento = document.createElement('div')
        topBarElemento.className = "top-bar"
        topBarElemento.innerHTML = `<p>Seja bem-vindo(a), <b>${nomeUsuario}</b></p>`

        //a sintaxe é: elementoPai.insertBeFore(novoElemento, elementoReferencia)isso quer dizer que o elementoPai vai ser inserido antes do elementoReferencia.
        const elementoPai = document.querySelector('.hero')
        elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)
    }else{
        topBarElemento.remove()
    }
})()









