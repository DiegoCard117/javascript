let num = document.querySelector('#numero')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

function numero(n){
    // se N foi maior ou igual a 1 e menor ou igual a 100, retornar true, senao retornar false
    if(Number(n) >=1 && Number(n) <= 100) { 
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    //se na lista. indexOf(buscar valor) o n for diferente de -1 (-1 significa que o valor nao foi encontrado na lista)
    if (l.indexOf(Number(n)) != -1) {  
        return true
    } else {
        return false
    }
}

function adicionar() {
    //se é um numero e se ele nao( ! ) tiver em lista e em valores
    if (numero(num.value) && !inLista(num.value, valores)) {  
        valores.push(Number(num.value)) //adicionar no vetor
        let item = document.createElement('option') //cria a opçao em html
        item.text = `Valor ${num.value} adicionado.` 
        lista.appendChild(item) //adiciona o child item
        res.innerHTML = ''
    }else {
        alert('Valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus() //voltar o foco no input
}

function finalizar() {
    if (valores.length == 0 ) {  
        alert('Adicione valores na lista')
    } else {
        let total = valores.length
        let maior = valores[0] //se apenas um numero, ele é o maior e o menor
        let menor = valores[0] 
        let soma = 0
        let media = 0
        //para cada posiçao em valores
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) 
                maior = valores[pos]

            if (valores[pos] < menor) 
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }
}