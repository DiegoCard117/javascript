function problem(lines) {
  const codigo = parseInt(lines[0].split(' ')[0]);
  const quantidade = parseInt(lines[0].split(' ')[1]);

  let preço;

  switch (codigo) {
    case 1:
      preço = 4;
      break;
    case 2:
      preço = 4.5;
      break;
    case 3:
      preço = 5;
      break;
    case 4:
      preço = 2;
    case 5:
      preço = 1.5;
      break
  }

  let total = quantidade * preço
  console.log(`Total: R$ ${total.toFixed(2)}`)
}

problem([3, 2])