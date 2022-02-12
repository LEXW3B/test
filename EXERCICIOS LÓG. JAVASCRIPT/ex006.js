//formula da baskara (- b +- raiz((b*b)-4*a*c))/2*a
let a = 1
let b = 8
let c = -9
let delta = Math.pow(b, 2)-4*a*c
console.log(delta)
let x1 = (-b + Math.sqrt(delta)) / (2*a)
let x2 = (-b - Math.sqrt(delta)) / (2*a)
console.log(`x1 = ${x1} \nx2 = ${x2}`)


