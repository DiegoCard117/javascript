function calc() {
    let numero1 = document.querySelector('#num1')
    let numero2 = document.querySelector('#num2')
    let num1 = Number(numero1.value)
    let num2 = Number(numero2.value)
    let result = num1 + num2
    alert(`resultado é ${result}`)
}