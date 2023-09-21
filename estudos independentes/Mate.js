

function getTipsRating(amount) {
  if (amount === 0) {
    return 'terrible'
  }
   if (amount >= 1 && amount <= 10) {
    return 'poor'
  }
   if (amount >= 11 && amount <= 20) {
    return 'good'
  }
   if (amount >= 21 && amount <= 50) {
    return 'great'
  }
  if ( amount > 50) {
    return 'excellent'
  }
}

console.log(getTipsRating(11))



function calculateTaxes(income) {
  if(income <= 1000) {
    return income * 0.02
  }
  if(income >= 1001 && income <= 10000) {
    return income * 0.03
  }
  if(income >= 10000) {
    return income * 0.05
  }
}

console.log(calculateTaxes(1000))



function getLargestExpressionResultOfTwo(a, b) {
  const totalPositivo = a + b 
  const totalNegativo = a - b 
  if (totalPositivo > totalNegativo) {
    return totalPositivo
  }
  if (totalNegativo > totalPositivo) {
    return totalNegativo
  }  
}

console.log(getLargestExpressionResultOfTwo(20, -5))

function getLargestExpressionResultOfThree(a, b) {
  const totalPositivo = a + b 
  const totalNegativo = a - b
  const totalMulti = a * b 
  if (totalPositivo > totalNegativo && totalPositivo > totalMulti) {
    return totalPositivo
  }
  if (totalNegativo > totalPositivo && totalNegativo > totalMulti) {
    return totalNegativo
  }
  if (totalMulti > totalPositivo && totalNegativo < totalMulti) {
    return totalMulti
  }   
}
console.log(getLargestExpressionResultOfThree(10, -5))


function getLargestNumber(numbers) {
  if (numbers.length === 0) {
    return undefined
  }

  let largestNumber = numbers[0]

  for(let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i]
    }
  }
  return largestNumber
}
 
console.log(getLargestNumber([3, 8, 5, 7]))


function getLastCharacter(input) {
  return input[input.length - 1]
}
console.log(getLastCharacter('Diego'))

function removeNomesDuplicados(arrayDeNomes) {
  // Crie um conjunto (Set) para armazenar nomes únicos
  const nomesUnicos = new Set(arrayDeNomes);

  // Converta o conjunto de volta para um array
  const arraySemDuplicatas = [...nomesUnicos];

  return arraySemDuplicatas;
}

// Exemplo de uso:
const nomes = ["João", "Maria", "João", "Pedro", "Maria"];
const nomesSemDuplicatas = removeNomesDuplicados(nomes);

console.log(nomesSemDuplicatas);


function validatePassword(password) {
  if (password.length < 8) {
  return false;
}

// Verificar se a senha contém pelo menos uma letra maiúscula
if (!/[A-Z]/.test(password)) {
  return false;
}

// Verificar se a senha contém pelo menos uma letra minúscula
if (!/[a-z]/.test(password)) {
  return false;
}

// Verificar se a senha contém pelo menos um número
if (!/\d/.test(password)) {
  return false;
}

// Verificar se a senha contém apenas letras e números latinos
if (!/^[a-zA-Z0-9]+$/.test(password)) {
  return false;
}

// Se todas as verificações passarem, a senha é válida
return true;
}

console.log(validatePassword("123")); // Deve retornar true

let sum = 0;
for (let i = 1; i <= 4; i = i + 1) {
  sum += i;
  console.log(sum)
}

const set = new Set()
set.add(5)
set.add('Hello')
set.add({name: 'Scaler'})
for(let item of set) {
  console.log(item + 6)
}



addAndLog(['A', 'B', 'C'])

saida
AA
AB
AC
BA
BB
BC
CA
CB
CC
function addAndLog(array) {
  for (var i = 0; i < array.length; i++) {
    var valueI = array[i]; // Armazena o valor array[i] em uma variável temporária
    for (var j = 0; j < array.length; j++) {
      console.log(valueI + array[j]); // Usa o valor armazenado para evitar cálculos redundantes
    }
  }
}

function addAndLog(array) {
  for (var i = 0; i< array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      console.log(array[i] + array[j])
    }
  }
}


addAndLog(['A', 'B', 'C', 'D', 'E', 'F'])


function binarySearch(array, value) {
  let firstVal = 0; 
  let lastVal = array.length - 1;
  let statBool = false;

  while (firstVal <= lastVal && statBool == false) {
    let midVal = (firstVal + lastVal) / 2;
    if (array[midVal] == value) {
      statBool = true
      return statBool
    } else if (value > array[midVal]) {
      firstVal = midVal + 1
    } else {
      lastVal = midVal - 1
    }
  }
  return statBool
}

let array = [1,2,3,4,5,6,7,8,9]
let value = 7

let isfound = binarySearch(array, value)

console.log(isfound)

//sempre receber um lines
function somar(lines) {
  const a = lines[0]
  const b = lines[1]

  const soma = Number(a) + Number(b)
  console.log("SOMA " + soma )
}



function problem(lines) {
  const soma = (a, b) => a + b;
  const resultado = lines.map(Number).reduce(soma);
  console.log(`Soma = ${resultado}`);
}

function prod(lines) {
  const PROD = (a, b) => a * b;
  const resultado = lines.map(Number).reduce(PROD);
  console.log(`PROD = ${resultado}`);
}

prod(3,9)


function somar(lines) {
  const a = lines[0];
  const b = lines[1];

  const PROD = Number(a) * Number(b);
  console.log(`PROD = ${PROD}`);
}

somar([3, 9]);


function problem(lines) {
  const a = lines[0]
  const b = lines[1]

  const media = ((Number(a) * 3.5) + (Number(b) * 7.5)) / (3.5 + 7.5)

  console.log(`MEDIA = ${media.toFixed(5)}`)
}

problem([0.0, 7.1])


function problem(lines) {
  const a = lines[0]
  const b = lines[1]
  const c = lines[2]

  const media = ((Number(a) * 2) + (Number(b) * 3) + (Number(c) * 5)) / (2 + 3 + 5)

  console.log(`MEDIA = ${media.toFixed(1)}`)
}

problem([5, 6, 7])


function problem(lines) {
  const a = lines[0]
  const b = lines[1]
  const c = lines[2]
  const d = lines[3]

  const diferenca = ((a* b) - (c * d))
  console.log(`DIFERENCA = ${diferenca}`)
}

problem([0,0,7,8])


function problem(lines) {
  const number = lines[0]
  const horasTrabalhadas = lines[1]
  const valorHora = lines[2]

  console.log(`NUMBER = ${number}`)
  console.log(`SALARY = U$ ${(horasTrabalhadas * valorHora).toFixed(2)}`)
}

problem([1, 200, 20.50])


function problem(lines) {
  const [ nome, salarioFixo, totalVendido] = lines

  const comissao = 0.15

  const total = Number(salarioFixo) + (Number(totalVendido) * comissao) 

  console.log(`TOTAL = R$ ${total.toFixed(2)}`)
}

problem(['JOAO', 700, 0])



//codigo de uma peça * total de peças + codigo de uma peça 2 + total de peças

function problem(lines) {
  const [codigo1, quantidade1, valor1] = lines[0].split(' ');
  const [codigo2, quantidade2, valor2] = lines[1].split(' ')
  const total1 = Number(quantidade1) * Number(valor1)
  const total2 = Number(quantidade2) * Number(valor2)

  const somaFinal = total1 + total2;
  console.log(`VALOR A PAGAR: R$ ${somaFinal.toFixed(2)}`);
}

problem('12, 1, 5.30', '16, 2, 5.10');