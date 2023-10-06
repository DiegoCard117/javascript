function problem(lines) {
  const [filo, classe, alimento] = lines;

  if (filo == 'vertebrado') {
    if (classe == 'ave') {
      if (alimento == 'carnivoro') {
        console.log('aguia');
      } else {
        console.log('pomba');
      }
    } else if (classe == 'mamifero') {
      if (alimento == 'onivoro') {
        console.log('homem');
      } else {
        console.log('vaca');
      }
    }
  }

  else if (filo == 'invertebrado') {
    if (classe == 'inseto') {
      if (alimento == 'hematofago') {
        console.log('pulga');
      } else {
        console.log('lagarta');
      }
    } else if (classe === 'anelidio') {
      if (alimento === 'hematofago') {
        console.log('sanguessuga');
      } else {
        console.log('minhoca');
      }
    }
  }
}


problem(['invertebrado', 'anelidio', 'onivoro'])