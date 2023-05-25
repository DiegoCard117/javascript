let amigo = {
nome: "jose",
sexo: "M",
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p //aumentar peso
}}  
amigo.engordar(5)  //aumenta o peso
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)