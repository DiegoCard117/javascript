/*
const ObjA = {
    chaveA: 'A'
}

const ObjB = {
    chaveB: 'B'
}

const ObjC = {
    chaveC: 'C'
}

Object.setPrototypeOf(ObjB, ObjA) //o prototype de A fica sendo A (antes era Object.prototype)
Object.setPrototypeOf(ObjC, ObjB)

console.log(ObjC.chaveA)
*/

function Produto(nome, preço) {
    this.nome = nome
    this.preço = preço
}

Produto.prototype.desconto = function(percentual) {
    this.preço = this.preço - (this.preço * (percentual / 100))
}

const p1 = new Produto('Camiseta', 100)
//p1.desconto(50)

//setar o prototype
const p2 = {
    nome: 'Caneca',
    preço: 15
}
Object.setPrototypeOf(p2, Produto.prototype)


//criar ja setando o prototype
const p3 = Object.create(Produto.prototype, {
    preço: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 110
    }
})

console.log(p3)

