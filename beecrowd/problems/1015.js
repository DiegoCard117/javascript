function problem(lines) {
  const [x1, y1] = lines[0].split(' ').map(Number)
  const [x2, y2] = lines[1].split(' ').map(Number)
  
  const primeiraConta = (x2 - x1) ** 2
  const segundaConta = (y2 - y1) ** 2
  const distancia = Math.sqrt(primeiraConta + segundaConta)

  console.log(distancia.toFixed(4)) 
}



