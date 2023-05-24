let num = [4, 5, 8, 9, 1 ]
/*


num.sort()
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`o primeiro vetor é ${num[0]}`)


// os abaixo tem a mesma funcionalidade
for (pos = 0; pos < num.length; pos++ ){
    console.log(num[pos])
}
*/

for (let pos in num) {
    console.log(num[pos])
}

