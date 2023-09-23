function problem(lines) {
  const [distancia, combustivelGasto] = lines;
  const media = distancia / combustivelGasto;
  console.log(`${media.toFixed(3)} km/l`);
}

problem([500, 35.0]);