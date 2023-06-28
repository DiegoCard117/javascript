/* 705.484.450-52  070.980.720-03
//se o digito der mais que 10 ele é 0
7x 0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2 == 237

11 - (237 % 11) = 5 (primeiro digito)

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2 == 284

11 - (284 % 11) = 2 (segundo digito)
*/
//tem que ser uma string
//RegEx cpf.replace(/\D+/g, '')

function ValidaCpf(cpf) {
    Object.defineProperty(this, 'cpfClean', {
        get: function() {
            return cpf.replace(/\D+/g, '')
        }
    })
}

ValidaCpf.prototype.valida = function(){
    if(typeof this.cpfClean === 'undefined') return false
    if(this.cpfClean.length !== 11) return false
    if(this.isSequencial()) return false

    const cpfParse = this.cpfClean.slice(0, -2) 
    const digit1 = this.Digito(cpfParse)
    const digit2 = this.Digito(cpfParse + digit1)
    //console.log(`${digit1}${digit2}`)
    const cpfValid = cpfParse + digit1 + digit2
    return cpfValid === this.cpfClean
}

ValidaCpf.prototype.Digito = function(cpfParce) {
    const cpfArray = Array.from(cpfParce)
    let regress = cpfArray.length + 1
    const total = cpfArray.reduce((acumulador, valor) =>{
        acumulador += (regress * Number(valor))
        regress--
        return acumulador
    }, 0)
    
    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)    //se o digito for maior que 9 retorna 0, senao retorna o digito
}

ValidaCpf.prototype.isSequencial = function() {
    const sequencia = this.cpfClean[0].repeat(this.cpfClean.length)
    return sequencia === this.cpfClean
}

const cpf = new ValidaCpf('139.904.806-69')

if(cpf.valida()) {
    console.log('Cpf Valido')
} else {
    console.log('Cpf Invalido')
}
