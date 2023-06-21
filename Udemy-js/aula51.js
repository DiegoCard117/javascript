//return
//retorna um valor
//termina a funçao

const soma = (a, b) => a + b

let dobro = soma(2,2)

console.log(dobro)

function pessoa(nome, sobrenome){
    return {nome, sobrenome}
}

const pessoa1 = pessoa('Diego' , 'Cardoso')

console.log(pessoa1)


function criaMulti(multi) {
    return function(n) {
        return n * multi
    }
}

const x2 = criaMulti(2)
console.log('4 x2')
console.log(x2(4))