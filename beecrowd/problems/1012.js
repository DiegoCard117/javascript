export function problem (lines) {
  const [a, b, c] = lines[0].split(' ');
  const pi = 3.14159;
  console.log(a)
  const triangulo = (a * c) / 2;
  const circulo = pi * Math.pow(c, 2)
  const trapezio = ((Number(a) + Number(b) * c)) / 2;
  const quadrado = b * b;
  const retangulo = a * b;

  console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
  console.log(`CIRCULO: ${circulo.toFixed(3)}`);
  console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
  console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
  console.log(`RETANGULO: ${retangulo.toFixed(3)}`);
}
