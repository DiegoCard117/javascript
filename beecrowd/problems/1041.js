function problem(lines) {
  const [x, y] = lines[0].split(' ').map(Number);

  if (x > 0 && y > 0) {
    console.log('Q1');
  }
  if (x < 0 && y > 0) {
    console.log('Q2');
  }
  if (x < 0 && y < 0) {
    console.log('Q3');
  }
  if (x > 0 && y < 0) {
    console.log('Q4');
  }
  if (x == 0 && y == 0) {
    console.log('Origem');
  }
  if (x == 0 && y != 0) {
    console.log('Eixo Y');
  }
  if (x != 0 && y == 0) {
    console.log('Eixo X');
  }
}

problem(['0.0 0.0']);