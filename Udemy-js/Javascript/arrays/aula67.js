//Reduce (somar todos)


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador
}, 0)

//console.log(total)

//retornar os valore pares(filter)
const pares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0 ) acumulador.push(valor)
    return acumulador  //nao fazer com reduce pois com filter é melhor
}, [])
console.log(pares)

//retornar com dobro(map)

const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2)
    return acumulador  //nao fazer com reduce pois com map é melhor
}, [])
console.log(dobro)

//pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Diego', idade: 21},
]

const velha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador
    return valor
},) 
console.log(velha)

