    var a = document.getElementById(parseInt(a1))
    var b = document.getElementById(parseInt(b1))
    var c = document.getElementById(parseInt(c1))

    var delta = b * b - (4 * a * c)

    if (delta > 0){
        window.alert('Nao existe X valido')
    } else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a)
        var x2 = (-b - Math.sqrt(delta)) / (2 * a)
        window.alert(`X1 é ${x1} e X2 é ${x2}`)
    }