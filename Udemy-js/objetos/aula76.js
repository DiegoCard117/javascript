//Herança

//Produtos -> aumento e desconto de preço, cor
//Camisetas = tamanho, caneca = material

function Produto(nome, preco, cor) {
    this.nome = nome
    this.preco = preco
    this.cor = cor
}
Produto.prototype.aumento = function(valor) {
    this.preco += valor
}
Produto.prototype.desconto = function(valor) {
    this.preco -= valor
}

function Camiseta(nome, preco, cor, tamanho) {
    Produto.call(this, nome, preco, cor)
    this.tamanho = tamanho
}
Camiseta.prototype = Object.create(Produto.prototype) //o construtor passa a ser o Produto
Camiseta.prototype.constructor = Camiseta //o construtor volta a ser Camiseta

const camiseta = new Camiseta('T-shirt', 15, 'vermelha', 'G')
camiseta.aumento(10)
console.log(camiseta)



//Caneca
function Caneca(nome, preco, cor, material) {
    Produto.call(this, nome, preco, cor)
    this.material = material
}
Caneca.prototype = Object.create(Produto.prototype) //o construtor passa a ser o Produto
Caneca.prototype.constructor = Caneca

const caneca = new Caneca('Jujutsu', 20, 'branco', 'porcelana')
console.log(caneca)