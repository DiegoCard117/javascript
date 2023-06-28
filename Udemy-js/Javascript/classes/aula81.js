//nao precisasse de prototypes pois as classes ja fazem isso sozinha
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} esta falando`)
    }
}

const p1 = new Pessoa('Diego', 'Cardoso')

console.log(p1)
p1.falar()
/*
p1.comer = function() {
    console.log('Estou comendo')
}
*/
