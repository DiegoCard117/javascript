//callback - chama uma quando a outra termina de acontecer

function rand(min = 1000, max = 3000) { //criar numero aleatorio entre 1000 e 3000
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

function f1(callback) {
    setTimeout(function(){
        console.log('f1')
        if(callback) callback()
    }, rand())
}

function f2(callback) {
    setTimeout(function(){
        console.log('f2')
        if(callback) callback()
    }, rand()) 
}

function f3(callback) {
    setTimeout(function(){
        console.log('f3')
        if(callback) callback()
    }, rand())  
}

//callback hell
/*
f1(function(){
    f2(function(){
        f3(function(){
            console.log('ola mundo')
        })
    })
})
*/

// mesma coisa da de cima
f1(f1Callback)

function f1Callback(){
    f2(f2Callback)
}

function f2Callback() {
    f3(f3Callback)
}

function f3Callback() {
    console.log('ola mundo')
}