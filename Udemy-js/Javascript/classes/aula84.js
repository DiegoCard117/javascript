class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }
    //instacia
    aumentarVolume() {
        this.volume++
        console.log(this.volume)
    }
    //estatico -- nao tenho "tv e nome"
    static Switch() {
       console.log('troquei')
    }
}

const control = new ControleRemoto('samsung') 
console.log(control)
control.aumentarVolume()
console.log(control)

ControleRemoto.Switch()