function contar() {
    let ini = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Error')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let inicio = Number(ini.value)
        let final = Number(fim.value)
        let pass = Number(passo.value)
        if (pass <= 0) {
            alert('Impossivel contar')
            pass = 1
        }
        let c = inicio  //transformar inicio em c
        if (inicio < final) {
            while (c <= final) { //enquanto c for menor ou igual
                res.innerHTML += ` ${c}, ` //+= para receber o res + o c
                c += pass
            }
        } else {
            while (c >= final) {
                res.innerHTML += ` ${c}, `
                c -= pass
            }
        }
    }
} 
    
