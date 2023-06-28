//map altera valores
//map sempre tem o mesmo indice do original
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const dobro = numeros.map((valor) => valor*2)
//console.log(dobro)
function rand(min = 1, max = 100) { //criar numero aleatorio entre 1000 e 3000
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Diego', idade: 21},
]

const nomes = pessoas.map((obj) => obj.nome)

//console.log(nomes)

const idades = pessoas.map((obj) => {
    return {idade: obj.idade}
})

//console.log(idades)

const id = pessoas.map((obj, indice) => {
    const novoObj = {...obj}  //copiando para nao mexer no original
    novoObj.id = (indice + 1) * rand()
    return novoObj
})
console.log(pessoas)
console.log(id)
