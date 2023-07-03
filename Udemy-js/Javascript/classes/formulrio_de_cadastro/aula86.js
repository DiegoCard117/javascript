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
        const senhaValida = this.senhaValidMethod()

        if(fieldValid && senhaValida) {
            alert('ok')
            this.formulario.submit()
        }
    }

    senhaValidMethod() {
        let valid = true

        const senha = this.formulario.querySelector('.password')
        const reSenha = this.formulario.querySelector('.repassword')

        if(senha.value !== reSenha.value) {
            valid = false
            this.criaErro(senha, 'Campo senha e repetir senha precisam ser iguais')
            this.criaErro(reSenha, 'Campo senha e repetir senha precisam ser iguais')
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres')
        }

        return valid
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
                if(!this.validaCpf(campo)) valid = false
            }
            if(campo.classList.contains('usuario')){
                if(!this.validaUser(campo)) valid = false
            }
        }

        return valid
    }

    validaUser(campo) {
        const usuario = campo.value
        let valid = true
        if(usuario.length < 3 || usuario > 12) {
            this.createError(campo, 'Usuario precisa ter entre 3 e 12 caracteres')
           valid = false
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(campo, 'Usuario precisa conter apenas letras e numeros')
            valid = false
        }
        return true
    }

    validaCpf(campo) {    
        const cpf = new ValidaCpf(campo.value)
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