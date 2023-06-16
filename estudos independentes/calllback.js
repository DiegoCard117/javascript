function exibir(num) {
    console.log('Resultado é ' + num)  //necessario para um codigo maior, para que nao fique repetindo codigos grandes
}

function soma(a, b , cb) {
    let som = a + b
    cb(som)    //cb sendo callback 
}

function mult(a, b, cb) {
    let multi = a * b
    cb(multi)
}

soma(2, 2, exibir)

mult(2, 6, exibir)