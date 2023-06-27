// closure

function criaOutra(nome) {
    return function(){
        return nome
    }
}

const funcao = criaOutra('Diego')

console.dir(funcao) //dir para ver informaçoes no navegador