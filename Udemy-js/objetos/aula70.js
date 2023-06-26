/*
//literal
const pessoa = {
    nome: 'Diego',
    sobrenome: 'Cardoso'
}

delete pessoa.nome
console.log(pessoa)
*/
//construtor

const pessoa1 = new Object()
    pessoa1.nome = 'Diego'
    pessoa1.sobrenome = 'Cardoso'
    pessoa1.idade = 22
    pessoa1.dataDeNascimento = function(){
        let data = new Date()
        return nasc = data.getFullYear() - this.idade
    }
    pessoa1.falarOi = function() {
        return(`${this.nome} fala oi`)
    }

//nao da pra usar com arrow function
/*
pessoa1.falarOi()

for (let chave in pessoa1) {
    console.log(pessoa1[chave])
}
*/
//factory
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const pessoa2 = criaPessoa('Diego', 'Cardoso', 21)
console.log(pessoa2.nomeCompleto)

