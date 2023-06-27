//funçao construtora
//new pessoa


function Pessoa(nome, sobrenome) {
    const ID = 123456 //const disponivel apenas para essa funçao

    //atribudos ou metodos publicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        
    }
}

const p1 = new Pessoa('Diego', 'Cardoso')
//new cria um novo objeto vazio, this aponta pro objeto e retorna o objeto pra variavel
console.log(p1.nome)