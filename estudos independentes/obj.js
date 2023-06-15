let pessoa = {
    nome: "Diego",
    idade: 21,
    altura: 1.90,
    peso: "82kg",
    falar: function(fala) {
        console.log(`${pessoa.nome} disse: ${fala}`)
    }
}

pessoa.falar("Oi, tudo bem?")


