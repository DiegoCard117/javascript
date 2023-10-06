function problem(lines) {
  const [total] = lines;
  let valorRestante = total;
  let cem = Math.floor(valorRestante / 100);
  valorRestante %= 100;

  let cinquenta = Math.floor(valorRestante / 50);
  valorRestante %= 50;

  let vinte = Math.floor(valorRestante / 20);
  valorRestante %= 20;

  let dez = Math.floor(valorRestante / 10);
  valorRestante %= 10;

  let cinco = Math.floor(valorRestante / 5);
  valorRestante %= 5;

  let dois = Math.floor(valorRestante / 2);
  valorRestante %= 2;

  valorRestante *= 100;

  let umReal = Math.floor(valorRestante / 100);
  valorRestante %= 100;

  let cinquentaCents = Math.floor(valorRestante / 50);
  valorRestante %= 50;

  let vinteCincoCents = Math.floor(valorRestante / 25);
  valorRestante %= 25;

  let dezCents = Math.floor(valorRestante / 10);
  valorRestante %= 10;

  let cincoCents = Math.floor(valorRestante / 5);
  valorRestante %= 5;

  let umCent = Math.floor(valorRestante);

  console.log('NOTAS:');
  console.log(`${cem} nota(s) de R$ 100.00`);
  console.log(`${cinquenta} nota(s) de R$ 50.00`);
  console.log(`${vinte} nota(s) de R$ 20.00`);
  console.log(`${dez} nota(s) de R$ 10.00`);
  console.log(`${cinco} nota(s) de R$ 5.00`);
  console.log(`${dois} nota(s) de R$ 2.00`);
  console.log('MOEDAS:');
  console.log(`${umReal} moeda(s) de R$ 1.00`);
  console.log(`${cinquentaCents} moeda(s) de R$ 0.50`);
  console.log(`${vinteCincoCents} moeda(s) de R$ 0.25`);
  console.log(`${dezCents} moeda(s) de R$ 0.10`);
  console.log(`${cincoCents} moeda(s) de R$ 0.05`);
  console.log(`${umCent} moeda(s) de R$ 0.01`);
}

problem([576.73]);