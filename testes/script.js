function calc() {
    let a1 = (document.querySelector("#a"))
    let b1 = (document.querySelector("#b"))
    let c1 = (document.querySelector("#c"))
    let a = Number(a1.value)
    let b = Number(b1.value)
    let c = Number(c1.value)
        let delta = (b * b) - (4 * a * c)
    if (delta < 0) {
        alert('Delta é negativo, logo não possui raíz real')
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        alert(`O primeiro X é ${x1} e o segundo X${x2}`)
    }  
}