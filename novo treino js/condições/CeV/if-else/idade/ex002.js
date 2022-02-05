// bom dia || boa tarde || boa noite
let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora}hs.`)
if(hora<=12){
    console.log('Bom dia.')
}else if(hora<=18){
        console.log('Boa tarde.')
}else{
    console.log('Boa noite.')
}

















