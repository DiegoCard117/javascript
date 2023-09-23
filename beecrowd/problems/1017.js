function problem(lines) {
  const [tempoGasto, veloMedia] = lines;
  const mediaAuto = 12;
  const media = veloMedia * tempoGasto;
  const total = media / mediaAuto;
  console.log(total.toFixed(3));
}

problem([10, 85]);