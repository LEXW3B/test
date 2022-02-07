
function verificar() {
//pegar data e ano atual.
    let data = new Date()
    let ano = data.getFullYear()
//pegar o ano que vem do formulário lá no html. 
    let fano = document.getElementById('txtano')
//ligar a respota para aparecer na tela.
    let resp = document.querySelector('#resp')
//verificar se a caixa está vazia ou se está com a data maior que a data atual.   
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
//construir validador de gênero homem ou mulher: criança, adulto ou idoso com foto.
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ' '
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/menino.png')
            }else if(idade >= 10 && idade < 21){
                //jovem ou adolecente.
                img.setAttribute('src', 'img/adolecentemasculino.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/homem.png')
            }else{
                //idoso.
                img.setAttribute('src', 'img/velho.png')
            }               
            
        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/menina.png')
            }else if(idade >= 10 && idade < 21){
                //jovem ou adolecente
                img.setAttribute('src', 'img/adolecentefeminino.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/mulher.png')
            }else{
                //idoso.
                img.setAttribute('src', 'img/velha.png')
            }
        }
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resp.appendChild(img)
    }
    


}















