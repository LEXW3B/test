//recursividade
function fatorial (n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n -1)
    }
}
console.log(fatorial(5))

/*
5! = 5x4x3x2x1  ou
5! = 5 x 4!
então
!n = !n x (n-1)
O número 1 não tem fatorial
!1 = 1


*/






