function problem(lines) {
  const chica = 225;
  const [curupiraQuant, boitataQuant, botoQuant, mapinguariQuant, iaraQuant] = lines;

  const curupira = curupiraQuant * 300;
  const boitata = boitataQuant * 1500;
  const boto = botoQuant * 600;
  const mapinguari = mapinguariQuant * 1000;
  const iara = iaraQuant * 150;

  const total = curupira + boitata + boto + mapinguari + iara + chica
  console.log(total)
}

problem([1,1,1,1,1])