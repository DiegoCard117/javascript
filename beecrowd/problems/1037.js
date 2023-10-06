function problem(lines) {
  const [number] = lines;

  if (number <= 25 && number >= 0) {
    console.log('Intervalo [0,25]');
  } else if (number > 25 && number <= 50) {
    console.log('Intervalo [25,50]');
  } else if (number > 50 && number <= 75) {
    console.log('Intervalo [50,75]');
  } else if (number > 75 && number <= 100) {
    console.log('Intervalo [75,100]');
  } else {
    console.log('Fora de intervalo')
  }
}

problem([1])