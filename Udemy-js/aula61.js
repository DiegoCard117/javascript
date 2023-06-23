//funçao geradora
//lazy 
function* geradora1(){
    yield 'Valor 1'
    yield 'Valor 2'
}

const g1 = geradora1()

function* contador(){
    let i = 0
    while(true){
        yield i
        i++
    }
}
const g2 = contador()
/*
console.log(g2.next().value)
console.log(g2.next().value)


function* gerador3() {
    yield 0
    yield 1
    yield 2
}

function* gerador4() {
    yield* gerador3()
    yield 3
    yield 4
}

const g4 = gerador4()
*/
function* gerador5() {
    yield function(){
        console.log('essa é yield1')
    }
    return () => {console.log('vim do return')}  //return serve para interromper o codigo
    yield function() {
        console.log('essa é yield2')
    }  
}

const g5 = gerador5()
const func1 = g5.next().value   //chamando a funçao duas vezes em duas variaveis
const func2 = g5.next().value

func1()
func2()
