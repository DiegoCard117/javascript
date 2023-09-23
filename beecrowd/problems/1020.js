function problem(lines) {
  const [dias] = lines;
  const anos = Math.floor(dias / 365);
  const diasRestantes = dias % 365;
  const meses = Math.floor(diasRestantes / 30);
  const diasRestantesFinais = diasRestantes % 30;

  console.log(`${anos} ano(s)`);
  console.log(`${meses} mes(es)`);
  console.log(`${diasRestantesFinais} dia(s)`);
}

problem([30]);
