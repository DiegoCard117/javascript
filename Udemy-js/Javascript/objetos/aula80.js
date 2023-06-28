//Object map ()

const pessoas = [
    {id: 3 , nome: 'Diego'},
    {id: 2 , nome: 'Yasmin'},
    {id: 1 , nome: 'Ray'},
]

//const novasPessoas = {}
//for (const pessoa of pessoas) {
//  const { id } = pessoa
//  novasPessoas[id] = {...pessoa}
//}

const novasPessoas = new Map
for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id, {...pessoa})
}

console.log(novasPessoas.get(3))