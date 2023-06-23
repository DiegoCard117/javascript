const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
//const a3 = a1.concat(a2, [7, 8, 9], 'Luiz') //concatenar os dois arrays

const a3 = [...a1, ...a2] //mesma coisa de cima usando spread
console.log(a3)
