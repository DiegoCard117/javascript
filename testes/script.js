function calc() {
    let res = document.querySelector('#res')
    let a1 = document.querySelector("#a")
    let b1 = document.querySelector("#b")
    let c1 = document.querySelector("#c")
    let a = Number(a1.value)
    let b = Number(b1.value)
    let c = Number(c1.value)
        let delta = (b * b) - (4 * a * c)
    if (delta < 0) {
        res.innerHTML = ('Delta é negativo, logo não possui raíz real')
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x1 = x1.toFixed(2)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        x2 = x2.toFixed(2)
        res.innerHTML = (`<p>O primeiro X é: ${x1}</p><p>O segundo X é: ${x2}</p>`)
    }  
}