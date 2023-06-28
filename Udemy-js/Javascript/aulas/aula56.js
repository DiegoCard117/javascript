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

/*
console.log(Bmw1)
console.log(Bmw1.ligar())
*/

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
        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)

        },

        get imc(){  // getter "finge ser um atributo do objeto" nao usasse () quando for chamar
            return (this.peso / (this.altura ** 2)).toFixed(2)
        }
    }
}

const pessoa1 = criaPessoa ('Diego', 'Cardoso', 1.9, 83)
//console.log(pessoa1)
console.log(pessoa1.imc)
pessoa1.nomeCompleto = 'Ray Alcidio Cardoso Chagas'
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)