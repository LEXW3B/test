function verificar() {
  var data = new Date()
  var ano = data.getFullYear() //por exemplo 2021
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique se os dados está correto e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //crança
        img.setAttribute('src', 'menino.png')
      } else if (idade < 21) {
        //adolecente
        img.setAttribute('src', 'adolecentemasculino.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'homem.png')
      } else {
        //idoso
        img.setAttribute('src', 'velho.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //crança
        img.setAttribute('src', 'menina.png')
      } else if (idade < 21) {
        //adolecente
        img.setAttribute('src', 'adolecentefeminino.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'mulher.png')
      } else {
        //idoso
        img.setAttribute('src', 'velha.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}
