//Array
let nome = ["Yasmin", "Ray", "Diego"]
nome.push("Marcio")
nome.sort()
console.log(typeof(nome))
console.log(nome)


for(let i = 0;i < nome.length; i++){
    console.log(nome[i])
}

/*
let i = 0
while (i < nome.length) {
    console.log(nome[i++])
}


//mesmo de cima mas usando callback
nome.map(function(n){
    console.log(n)
})

//obj
var pessoa = {
    nome: "Diego",
    idade: 21,
    profissao: "Dev"
}

console.log(pessoa.idade)

pessoa.tamanho = 1.89

console.log(pessoa)

*/