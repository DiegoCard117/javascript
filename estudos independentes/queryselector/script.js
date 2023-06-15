let lista2 = document.querySelectorAll('#lista2 li')
console.log(lista2)

function red() {
    let item2 = document.querySelector('.item2')
    if ( item2.style.background != 'red' ) {
        item2.textContent ='Ficou vermelho'
        //textContent altera so o texto (recomendam essa)
        item2.style.background = 'red'
        item2.style.border = '1px solid black'
    }
    else if (item2.style.background != 'white') {
        item2.style.background = 'white'
        item2.innerHTML ='Ficou Branco'
        //innerHTML pode alterar as tags

    }
}

let div = document.querySelector('div')

let paragrafo = document.createElement('p')

let texto = document.createTextNode("dentro da div, dentro do paragrafo")

paragrafo.appendChild(texto)
div.appendChild(paragrafo)
