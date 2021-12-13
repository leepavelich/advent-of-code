const fs = require("fs");
const input = fs.readFileSync("input", 'utf-8').split('\n')

  let [hor, dep, aim] = [0, 0, 0]

  for (let line of input) {
    let [command, n] = line.split(' ')
    n = parseInt(n)
    switch(command) {
      case 'forward': hor += n; dep += aim * n; break
      case 'down'   : aim += n; break
      case 'up'     : aim -= n; break
    }
  }

  console.log('Part 1:', hor * aim, 'Part 2:', hor * dep)
