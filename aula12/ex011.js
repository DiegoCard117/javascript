let idade = 61
console.log(`${idade} anos`)
if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade > 60){
    console.log('voto opcional')
} else{
    console.log('voto obrigatorio')
}