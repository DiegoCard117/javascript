function tabuada() {
    let num = document.querySelector('#numero')
    let tab = document.querySelector('#tabuada')
    if (num.value.length == 0) {  //se nao tiver numero
        alert('Digite um numero')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''  // limpar o select
        while (c <= 10) {
            let item = document.createElement('option') //criar as options dentro de select
            item.text = `${n} x ${c} = ${n*c}`  
            item.value = `tab${c}` // criar as value dentro de options
            tab.appendChild(item) 
            c++
        }
    }
}