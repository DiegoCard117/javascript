function problem(lines) {
  const [seconds] = lines
  const hours = 0
  let minutes = 0
  for (let i = 0; seconds > 60; i ++) {
    minutes = i
  }
  console.log(minutes)
}

problem([556])