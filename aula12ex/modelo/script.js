function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.querySelector('#idade')
    const res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Verifique os dados')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-h.jpg')
            } else if (idade < 24) {
                //Adolescente
                img.setAttribute('src', 'adole-h.jpg')
            } else if (idade < 55){
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }

        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-m.jpg')
            } else if (idade < 21) {
                //Adole
                img.setAttribute('src', 'adole-m.jpg')
            } else if (idade < 55){
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}