function nextInLine(arr, item) {
  // Altere apenas o código abaixo desta linha
  item = arr[item]
  return item;
  // Altere apenas o código acima desta linha
}

// Configuração
let testArr = [1, 2, 3, 4, 5];

console.log(nextInLine(testArr, 1))

// Exibir o código
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));