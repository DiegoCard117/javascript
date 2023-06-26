//filter
//map  
//reduce
//retorna os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const menor10 = numeros.filter(valor => valor > 10)
console.log(menor10)

console.log('------------------------------------')
//retorne as pessoas que tem nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Diego', idade: 21},
]
/*
const pessoaNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5)

console.log(pessoaNomeGrande)

console.log('--------------------')

const idadeMaior50 = pessoas.filter((obj) => obj.idade > 50)

console.log(idadeMaior50)
*/

const finalA = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith('a'))  
console.log(finalA)