function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}


function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
      if(typeof msg !== 'string') reject('Bad value')
      setTimeout(() => {
          resolve(msg)
      }, tempo)
  }) 
}