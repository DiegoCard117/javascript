function problem(lines) {
  const [nota1, nota2, nota3, nota4] = lines[0].split(',').map(Number);
  const notaRecuperaçaoLine = lines[1];
  const media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 4) + (nota4 * 1)) / 10;
  console.log(`Media: ${media.toFixed(1)}`);

  if (media >= 7) {
    console.log(`Aluno aprovado.`);
  } else if (media < 5) {
    console.log('Aluno reprovado.');
  } else if (notaRecuperaçaoLine) {
    const notaRecuperaçao = parseFloat(notaRecuperaçaoLine);
    if (media >= 5 && media <= 6.9) {
      const mediaFinal = (media + notaRecuperaçao) / 2;
      console.log('Aluno em exame.');
      console.log(`Nota do exame: ${notaRecuperaçao.toFixed(1)}`);
      console.log(`Aluno aprovado.`);
      console.log(`Media final: ${mediaFinal.toFixed(1)}`);
    }
  }
}

problem(['2.0, 4.0, 7.5, 8.0', '6.4']);