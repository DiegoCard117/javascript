/*

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
*/
for (let i = 4; i <= 7; i--) {
  console.log(i);
}



