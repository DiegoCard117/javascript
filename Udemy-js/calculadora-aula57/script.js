/*
function criaCalculadora() {
    return {
        display: document.querySelector('#display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.cliqueBtn()  //nao funciona sem o this pois esta dentro do objeto
            this.Enter()
        },

        Enter(){
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.fazConta()
                }
            })
        },

        clearDisplay() {
            this.display.value = ''
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1) //tamanho da string menos 1
        },

        fazConta(){
            let conta = this.display.value
            try {
                conta = eval(conta)
                if(!conta){
                    alert('conta invalida')
                    return
                }

                this.display.value = conta
            } catch(e) {
                alert('conta invalida')
                return
            }
        },

        cliqueBtn(){
            document.addEventListener('click', (e) =>{
                const el = e.target
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)  //this aqui se refere ao document
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')){
                    this.deleteOne()
                }

                if(el.classList.contains('btn-equal')) {
                    this.fazConta()
                }
            })
        },

        btnParaDisplay(valor){
            this.display.value += valor
        },
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()
*/


//funçao construtora

function Calculadora(){
    this.display = document.querySelector('#display');
    this.btnClear = document.querySelector('.btn-clear');

    this.iniciar = function(){
        this.cliqueBtn();  //nao funciona sem o this pois esta dentro do objeto
        this.Enter(); 
    };

    this.Enter = function(){
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.fazConta();
            };
        })
    };

    this.clearDisplay = function(){
        this.display.value = '';
    };

    this.deleteOne = function(){
        this.display.value = this.display.value.slice(0, -1);//tamanho da string menos 1
    };

    this.fazConta = function(){
        let conta = this.display.value;
        try {
            conta = eval(conta)
            if(!conta){
                alert('conta invalida');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert('conta invalida');
            return;
        }
    };

    this.cliqueBtn = function(){
        document.addEventListener('click', (e) =>{
            const el = e.target
            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText)  //this aqui se refere ao document
            }

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay()
            }

            if(el.classList.contains('btn-del')){
                this.deleteOne()
            }

            if(el.classList.contains('btn-equal')) {
                this.fazConta()
            }
        })
    };

    this.btnParaDisplay = function(valor){
        this.display.value += valor
    }
}

const calc = new Calculadora
calc.iniciar()

