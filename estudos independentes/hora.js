
function horario() {
let data = new Date()
let hora = data.getHours()
let min = data.getMinutes()
let seg = data.getSeconds()

console.log(`${hora}:${min}:${seg}`)
}

horario()
