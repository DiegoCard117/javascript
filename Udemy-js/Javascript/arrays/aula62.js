
//valor por referencia
//  
/*             0         1       2        3
const nome = ['Diego', 'Yasmin', 'Ray', 'Marcio']
const novo = nome.slice(1, 3) // pega o indice 1 e 2

const novo1 = [...nome] //agora nao interfere mais pois é uma copia
const novo = nome // ainda interfere mesmo depois de ter sido incluido em uma variavel

const removido = nome.pop()  //removeu "Ray" e adicionou na variavel
const removidoPrimeiro = nome.shift()  //remove o indice 0 e o de indice 1 vira o 0, ou seja, diminui um indice de cada elemento


nome.push() // adiciona mais um indice
nome.unshift('joao') //adiciona no indice 0  "pouco utilizado"

console.log(novo)
*/
//separar as strings e transformar em array
//const nome = 'Diego Cardoso Chagas'
//const nomes = nome.split(' ')


//transformar array em string
const nomes = ['Diego', 'Cardoso', 'Chagas']
const nome = nomes.join(' ')
console.log(nome)

