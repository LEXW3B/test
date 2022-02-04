//textContent não aceita tags
//innerHTML aceita tags

(function(){
    const nomeUsuario = 'Alex'
    //document.querySelector('.top-bar p').innerHTML=`Bem-vindo(a), <b>${nomeUsuario}</b>`

//ou

    const elemento = document.querySelector('.top-bar p')
    //elemento.textContent = elemento.textContent + nomeUsuario
    elemento.innerHTML+= '<b>' + nomeUsuario + '</b>'
})()










