//const nome = document.querySelector('#nome').value
//const aviso = document.querySelector('#aviso')
//onst btn = document.querySelector('#btn').addEventListener('click', function(){
//   vazio()
//})
//
//function vazio() {
//    if(nome.value = 'undefined') {
//        aviso.textContent = `O campo Nome esta vazio`
//    } else {
//        aviso.textContent = ''
//    }
//}


class Validaçao {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const fieldValid = this.validCheck()
    }

    validCheck() {
        let valid = true

        for(let error of this.formulario.querySelectorAll('.error')) {
            error.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText
            if(!campo.value) {
                this.createError(campo, `Campo "${label}" não pode estar em branco`)
                valid = false
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false
            }
        }
    }

    validaCPF(campo) { 
        
        const cpf = new ValidaCPF(campo.value)
        if(!cpf.valida()) {
           this.createError(campo, 'Cpf invalido')
           return false
        }

        return true
    }

    createError(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error')
        campo.insertAdjacentElement('afterend', div)
    }

}



const valida = new Validaçao()