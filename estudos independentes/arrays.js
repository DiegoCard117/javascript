//Array
/*
let nome = ["Yasmin", "Ray", "Diego"]
nome.push("Marcio")
nome.sort()
console.log(typeof(nome))
console.log(nome)


for(let i = 0;i < nome.length; i++){
    console.log(nome[i])
}


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

let array = ["Yasmin", "Diego", "Ray", "Marcio", "Thais", "Lurdes"]

array.sort()
array.splice(1, 0, "Lucas")
console.log(array.indexOf("Diego"))
array.splice(2, 1)
for (let i = 0; array.length > i; i++) {
    let indice = i+1
    console.log(`${indice}-${array[i]}`)
}