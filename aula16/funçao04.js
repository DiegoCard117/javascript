//5! = 5x4x3x2x1

function fatorial(n) {
    let fat = 1  //fat recebe um para nao ficar vazio
    for(let c = n;c > 1; c--) { //c recebe n, enquanto c for menor que 1, c perde 1
        fat *= c
    }
    return fat
}

console.log(fatorial(5))