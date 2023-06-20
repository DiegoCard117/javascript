
// arguments é variavel especial de toda funçao com "function"
function funcao(){
    let total = 0
    for(let argumento of arguments) {
        total += argumento
    }
    console.log(total)
    //usando o arguments podemos por exemplo somar muitos numeros sem passar nenhum numero dentro da funçao
}
funcao(20, 30)