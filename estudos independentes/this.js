let pessoa = {
    nome: "Diego",
    idade: 21,
    altura: 1.90,
    peso: "82kg",
    namorando:true,
    falar: function(fala) {
        console.log(`${pessoa.nome} disse: ${fala}`)
    },
    soma: function(n1, n2) {
        return n1 + n2
    },
    dizerNome: function() {
        console.log(this.nome)
    }
}

pessoa.dizerNome()
pessoa.falar("to ficando doidinho")

