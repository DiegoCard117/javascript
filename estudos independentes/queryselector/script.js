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
//REMOVENDO
let paradiv = document.querySelector('.para')

let paragrafo = document.createElement('p')

let texto = document.createTextNode("dentro da div, dentro do paragrafo")

paragrafo.appendChild(texto)
paradiv.appendChild(paragrafo)

//removendo filho
let removendo = document.querySelector('.remove')
let p = document.querySelector('.remove p')
removendo.removeChild(p)

//remove o elemento em si
let h2 = document.querySelector('h2')

h2.remove()

//ADICIONANDO COM APPENDCHILD

let divNova = document.createElement('div')
divNova.classList = 'div-nova'

let container = document.querySelector('.container')

container.appendChild(divNova)

//ADICIONANDO COM insertBefore(insere antes)

let divNova2 = document.createElement('div')
divNova2.classList = 'div-before'

container.insertBefore(divNova2, divNova)



