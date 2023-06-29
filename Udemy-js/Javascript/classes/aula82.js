const _velocidade = Symbol('velocidade')
class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0 //propriedade privada
    }

    get velocidade() { 
        return this[_velocidade] //nao deixa que modifiquem a velocidade fora do objeto
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return
        if(valor >= 100 || valor <= 0) return
        this[_velocidade] = valor
    }

    acelerar() {
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    freiar() {
        if(this[_velocidade] <= 0) return
        this[_velocidade]--
    }
}

const bmw = new Carro('M3')

for(let i = 0; i <= 200; i++){
    bmw.acelerar()
}
bmw.velocidade = 100
console.log(bmw)