// declaraçao Function hosting(pode ser chamada de qualquer lugar pois o js eleva ela)
function falaOi() {
    console.log('oi')
}

falaOi()

//first class objects
//arrow function
const soma = (a, b) => {
    console.log(a + b)
}
soma(3, 7)

//function expression
const ola = function() {
    console.log("ola")
}
ola()

//Dentro do objeto 
const obj = {
    falar(e) {
        console.log(`esta falando: ${e}`)
    }
}
obj.falar('Ai meu deus')