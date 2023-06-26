//defineProperty - defineProperties

function Produto(nome, preço, estoque) {

    Object.defineProperties(this, { //mais de uma propriedade
        nome: {
            enumerable: true, //mostra chave
            value: nome, //valor da chave
            writable: true,  //controla se pode ou nao ser alterado
            configurable: true //apagar, reconfigurar chave
        },
        preço: {
            enumerable: true, //mostra chave
            value: preço, //valor da chave
            writable: false,  //controla se pode ou nao ser alterado
            configurable: true //apagar, reconfigurar chave
        }
    })
    Object.defineProperty(this, 'estoque', { 
        enumerable: true, //mostra chave
        value: estoque, //valor da chave
        writable: false,  //controla se pode ou nao ser alterado
        configurable: true //apagar, reconfigurar chave
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 5
console.log(p1)