function Conta(agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function(){
    console.log(`Agencia/Conta: ${this.agencia}/${this.conta}`)
    console.log(this.saldo.toFixed(2))
}

const conta1 = new Conta(11, 2222, 1500)
conta1.depositar(150)
conta1.sacar(1660)

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

//POlIMORFISMO -> metodo se comportando de outro jeito
ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        console.log(`Limite insuficiente: ${this.limite + this.saldo}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

const ContaCorrent = new ContaCorrente(22, 3333, 1500, 2000)
//ContaCorrent.depositar(100)


function ContaPoupança(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupança.prototype = Object.create(Conta.prototype)
ContaPoupança.prototype.constructor = ContaPoupança

const contaPoupança = new ContaPoupança(12, 3322, 0)