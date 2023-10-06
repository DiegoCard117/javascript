function problem(lines) {
  const [ladoA, ladoB, ladoC] = lines[0].split(' ').map(Number)
  const ladosAB = ladoA + ladoB
  if (ladosAB < ladoC) {
    const perimetro = ladoA + ladoB + ladoC
    console.log(`Perimetro = ${perimetro}`)
  } else if (ladosAB > ladoC) {
    const areaTrapezio = ((ladoA + ladoB) * ladoC) / 2
    console.log(`Area = ${areaTrapezio.toFixed(1)}`)
  }
}

problem(['6.0 4.0 2.0'])


//Math.sqrt(altura * (altura - ladoA) * (altura - ladoB) * (altura - ladoC)) const altura = (ladoA + ladoB + ladoC) / 2 const area = (ladoB * altura) / 2
    //console.log(altura, area)