//factory functions + prototypes
const action = {
    falar() {
        console.log(`${this.nome} está falando`)
    },
    comer() {
        console.log(`${this.nome} está comendo`)
    }  
}

const pessoaPrototypes = {...action}

function criaPessoa(nome, sobrenome, idade) {
    return Object.create(pessoaPrototypes, {
        nome: {value: nome},
        sobrenome:  {value: sobrenome},
        idade:  {value: idade},
    })
}

const p1 = criaPessoa('Diego', 'Cardoso', 21)
console.log(p1)
p1.comer()