    //copiar com {...Variavel}
const produto = { nome: 'Caneca', preço: 1.8, }
const produtoCopia = {...produto} //pode se colocar mais coisas dentro

    //object.assign
const produtoCopia2 = Object.assign({}, produto) //tbm copia
console.log(produtoCopia2)

    //object.getOwnPropertyDescriptor(o, 'prop)
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) //ver as propriedades(writable, value, enumerable, configurable)

    //object.entries
for(let entry of Object.entries(produto)) {  //retorna em array
    console.log(entry)
}
 