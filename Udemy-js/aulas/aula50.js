/*
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



function numeros(a, b = 0, c = 0, d = 0, e = 0) {
    console.log(a, b, c, d, e)
}

numeros(1, 2, 3, 4)


function soma(a, b) {  // ou (a, b = 0)
    if (b == undefined) b = 0; //ou b = b || 0 //meio desnecessario mas a logica ta certa
    console.log(a + b);
}

soma(2,)
*/

//pega o operador + - / * faz com o acumulador e depois com cada numero
function conta(operator, acumulator, ...numbers){ //... siginifica resto
    for (let number of numbers) {
        if (operator == '+') {
        acumulator += number
        } else if (operator == '-'){  
            acumulator -= number
        } else if (operator == '*'){  // operador X os numeros x numeros...
            acumulator *= number
        } else {
            acumulator /= number     
        }   
    }
    console.log(acumulator)  
}
conta('+', 100 , 10, 20, 50)