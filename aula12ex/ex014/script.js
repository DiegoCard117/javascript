
function carregar() {
let msg = document.querySelector('#msg') 
let img = document.querySelector('#imagem')
const hora = new Date()
let agora = hora.getHours()
//let agora = 20
msg.innerHTML = `Agora são ${agora} horas.`
if (agora >= 0 && agora < 12){
    img.src = 'img/manha.jpg'
    document.body.style.backgroundImage = 'linear-gradient(to right, #F2836B, #F2BC79)'
} else if (agora >= 12 && agora <= 18) {
    img.src = 'img/tarde.jpg'
    document.body.style.backgroundImage = 'linear-gradient(to right, #F25C05, #F2A516)'
} else {
    img.src = 'img/noite.jpg'
    document.body.style.backgroundImage = 'linear-gradient(to right, #011126, #8A99A6)'
}
}
