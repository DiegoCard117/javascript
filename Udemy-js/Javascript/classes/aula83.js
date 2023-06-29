//herança

class Dispositivo {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + 'Ja ligado')
            return
        }
        this.ligado = true
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + 'Ja desligado')
            return
        }
        this.ligado = false
    }
}

//herdando
class Smartphone extends Dispositivo {
    constructor(nome, cor, modelo) {
        super(nome) //reutilizando o nome da classe Dispositivo
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new Smartphone('Samsung', 'white', 'Galaxy fold')
s1.ligar()
console.log(s1)