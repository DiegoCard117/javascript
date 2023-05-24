let num = [4, 5, 8, 9, 1]
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`o primeiro vetor é ${num[0]}`)
let pos = num.indexOf(3)
if (pos == -1) {
    console.log('O valor nao foi encontrado')
} else {
console.log(`valor  ${pos}`)
}