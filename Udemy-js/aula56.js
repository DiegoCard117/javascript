// factory functions

function criaBmw(modelo, ano) {  
    return {
        marca: 'Bmw',
        modelo,
        ano,
        ligar(){
            return `${this.marca} ${modelo} esta ligado`
        },
    }
}

const Bmw1 = criaBmw('M3', 2020)

console.log(Bmw1)
console.log(Bmw1.ligar())


//factory de um perfil de pessoas
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura: altura,
        peso: peso,
        fala(assunto){
            return `${this.nome} está ${assunto}`
        },
        get imc(){  // getter "finge ser um atributo do objeto"
            return (this.peso / (this.altura ** 2)).toFixed(2)
        }
    }
}

const pessoa1 = criaPessoa ('Diego', 'Cardoso', 1.9, 83)
console.log(pessoa1)
console.log(pessoa1.imc)