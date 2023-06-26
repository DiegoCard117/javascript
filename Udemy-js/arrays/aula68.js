//filter + map + reduce
//filtrar pares
//dobrar
//somar tudo

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const pares = numeros
    .filter((valor) => valor % 2 === 0)
    .map((par) => par *= 2)
    .reduce((acumulador, num) => acumulador += num)


//pares[ 50, 80, 2, 8, 22 ]
//dobro[ 100, 160, 4, 16, 44 ]
//somatotal 324

//const dobrar = pares.map((par) => par *= 2)
//console.log(dobrar)
/*
const somaTudo = dobrar.reduce((acumulador, num) =>{
    acumulador += num
    return acumulador
})
console.log(somaTudo)
*/
console.log(pares)