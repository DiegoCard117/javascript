function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1) //n! = n x (n-1) ---> fatoraçao
    }
}

console.log(fatorial(5))