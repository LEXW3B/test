
function carregar() {
    "use strict";
    let msg = document.getElementById('msg')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    let data = new Date()
    let hora = data.getHours()
    msg.style.textAlign = 'center'
    msg.innerHTML = `Agora são ${hora} horas.`
    msg.appendChild(img)

    if(hora>=0 && hora<12){
        img.setAttribute('src', 'img/manha.png')
        document.body.style.background='#e2cd9f'
    }else if(hora>=12 && hora<=18){
        img.setAttribute('src', 'img/tarde.png')
        document.body.style.background='#b9846f'
    }else{
        img.setAttribute('src', 'img/noite.png')
        document.body.style.background='#515154'
    }
}
















