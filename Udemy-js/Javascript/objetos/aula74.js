// construtora -> molde
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome    
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

//instancia
const pessoa1 = new Pessoa('Diego', 'Cardoso')
const pessoa2 = new Pessoa('Yasmin', 'Gabrielly')

console.log(pessoa1.nomeCompleto())

