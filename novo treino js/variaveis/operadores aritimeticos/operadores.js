// +  -  *  /  %  **
//OPERADORES ARITIMETICOS
let n1 = 10;
let n2 = 5;
console.log(n1 +  n2)
console.log(n1 -  n2)
console.log(n1 *  n2)
console.log(n1 /  n2)
console.log(n1 %  n2)
console.log( 2 ** 3 )

//OPERADORES DE ATRIBUIÇÃO
let n3 = 20;
//n3 = n3 * 2  ou
//n3 *= 2;
n3 %= 2  //resto da divisão
console.log(n3)

//OPERADORES DE INCREMENTO E DECREMENTO

let i = 0
++i
console.log(i)

//OPERADORES DE COMPARAÇÃO
/*
igualdade de valor ==
igualdade de valor e tipo ===
<, >, <=, >=
!= valores diferentes
!== valores e tipos diferentes
*/
let n7 = 10
let n8 = 1
console.log(n7 == '10')
console.log(n8 <= n7)
console.log(10 != n7)
console.log(n7 !== "10")

//OPERADORES LOGICOS
/*
para uma pessoa viajar para o exterior precisa ser maior de 18 anos ou acompanhado com os pais e ter comprado o bilhete.
*/
let idade = 18;
let paisPresentes = true;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`)


console.log(n1, n2, n3)
n1 = 6;
n2 = 8;
let media = (n1 + n2) / 2
console.log(media)






