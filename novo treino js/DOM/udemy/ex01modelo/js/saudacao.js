//textContent não aceita tags
//innerHTML aceita tags

(function(){
    const nomeUsuario = 'Alex'
    const elemento = document.querySelector('.top-bar p')
    if(nomeUsuario){
        document.querySelector('.top-bar p').innerHTML=`Bem-vindo(a), <b>${nomeUsuario}</b>`        
    }else{
        //elemento.parentElement.style.display='none'//retira o display
        elemento.remove() //esse deixa sem a saudação sem o nome mas fica o display
        // const elementoParaRemover = elemento.parentElement//esse e para IE-11
        // elementoParaRemover.parentElement.removeChild(elementoParaRemover)
    }
})()
