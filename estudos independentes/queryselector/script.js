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
/*
let button = document.querySelector('#btn')
container.removeChild(button)
*/

let h3 = document.createElement('h3')
h3.classList = 'title3'
let text3 = document.createTextNode('Titulo em H3')

let paragrafo1 = document.querySelector('#paragrafo')
h3.appendChild(text3)
container.replaceChild(h3, paragrafo1)

//trocando atributos

let carro = document.querySelector('#imgcar')

function trocar() {
    carro.setAttribute('src', 'cruzever.jpg')
}

function trocar2() {
    carro.setAttribute('src', 'cruze.png')
}

//onload
/*
window.onload = function() {
    prompt('carregou?')
}
*/
//addEventListener

let btn2 = document.querySelector('#btn2')

btn2.addEventListener('click', function(){
    if(this.style.background != 'red'){
        this.style.borderRadius = '10px'
        this.style.background = 'red'
    } else if (this.style.background != 'white'){
        this.style.background = 'white'
    }
})

//keydown 
//keydown ou keyup(melhor usar o keyup pois so se repete uma vez)

document.addEventListener('keyup', (event) => {
    let body = document.querySelector('body')
    if(event.key === 'Enter') {
        if (body.style.background != 'grey') {
            body.style.background = 'grey'
        } else if (body.style.background != 'white') {
            body.style.background = 'white'
        }
    }
})

