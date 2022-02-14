
//para por esses caracteres pressiona ALT + 3, ALT + 4, ALT + 5, ALT +6.
const nipes = ['♥', '♦', '♣', '♠']
const faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const nipe = nipes[Math.floor(Math.random()*4)]
const face = faces[Math.floor(Math.random()*faces.length)]
//let resp = document.querySelector('#resp')

document.write("<h1>"+face+nipe+"</h1>")


