function problem(lines) {
  const [time] = lines;
  const hour = Math.floor(time / 3600);
  const minutes = Math.floor((time / 60) % 60);
  const seconds = time % 60;
  console.log(`${hour}:${minutes}:${seconds}`);
}

problem([140153]);