function problem(lines) {
  const [jon, medico] = lines

  if(jon.length > medico.length) {
    console.log('go')
  } else {
    console.log('no')
  }
}

problem(['aaaaaah', 'ah'])