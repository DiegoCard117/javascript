let nome = ["Yasmin", "Ray", "Diego"]
nome.push("Marcio")
nome.sort()
console.log(typeof(nome))
console.log(nome)

/*
for(let i = 0;i < nome.length; i++){
    console.log(nome[i])
}

let i = 0
while (i < nome.length) {
    console.log(nome[i++])
}
*/

//mesmo de cima mas usando callback
nome.map(function(n){
    console.log(n)
})