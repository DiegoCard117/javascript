
//            0 , -4    1 , -3    2 , -2    3  , -1
const nomes = ['Maria', 'Diego', 'Yasmin', 'Eduardo']
//pop
//const removidos = nomes.splice(2, 2) //remove indice do 2 pra frente e 2 elementos
//const removidos = nomes.splice(-1, 1) //remove o ultimo
//const adicionar = nomes.splice(2, 0, 'Marcio') //adiciona Marcio no indice 2 e empurra os outros pra frente

//shift
//const removidos = nomes.splice(0, 1) //remove o primeiro e um elemento


//push
nomes.splice(nomes.length, 0, 'Luiz') //melhor usar o push

console.log(nomes)