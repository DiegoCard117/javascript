function problem(lines) {
  const [seconds] = lines
  for(minutes = 0; seconds > 60; minutes++) {
    console.log(minutes)
  }
}

problem([556])