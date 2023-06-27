//Getter e Setters
//maneira de proteger uma propriedade

function Produto(nome, preço, estoque) {

    this.nome = nome
    this.preço = preço
    let estoquePriv = estoque
    Object.defineProperty(this, 'estoque', { 
        enumerable: true, //mostra chave
        configurable: true, //apagar, reconfigurar chave
        //value: estoque, //valor da chave
        //writable: false,  //controla se pode ou nao ser alterado  //nao precisamos dois dois
        get: function(){
            return estoquePriv
        },
        set: function(valor){
            if(typeof valor !== 'number') {
            throw new TypeError('Error')
        }
            estoquePriv = valor
        }
    })
}

function criaProduto(nome){
    return {
        get nome(){
            return nome
        },
        set nome(valor) {
            valor = valor.replace('', 'camiseta')
            nome = valor
        }
    }
}
/*
const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 500
console.log(p1.estoque)
*/

const p2 = criaProduto()
p2.nome = ' vermelha '
console.log(p2.nome)