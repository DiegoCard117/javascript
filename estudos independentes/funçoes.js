//funçao vazia
function somar() {
    let n = 20
    n++
    console.log(`funçao somar() da ${n}`)
}

somar()

//funçao com parametro
function soma(n1, n2) {
    let total = n1 + n2
    console.log(`funçao somar() da ${total}`)
}

soma(3, 6)

//return
function multiplicar(num1, num2) {
    let total = num1 * num2
    return total
}

let multi = multiplicar(6, 8)
console.log(`funçao multi() da ${multi}`)

//arrow
//variavel dividir recebe funçao
const dividir = (numero1, numero2) => {
    let divisao = numero1 / numero2
    return divisao
}

let divi = dividir(10, 2)
console.log(`funçao dividir() da ${divi}`)

//as duas funçoes sao iguais mas a debaixo é resumida
const dividir2 = (numero1, numero2) => numero1 / numero2

let divi2 = dividir(10, 2)
console.log(`funçao dividir2() da ${divi2}`) 