// Promises
function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}


function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad value')
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    }) 
}

espera('aopa1', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return espera('aopa2', rand(1,3))
    })
    .then(resposta => {
        console.log(resposta)
        return espera(2, rand(1,3))
    })
    .then(resposta => {
        console.log(resposta)
        return espera('aopa4', rand(1,3))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .catch( e => {
        console.log('Error', e)
    })