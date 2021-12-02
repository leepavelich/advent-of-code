const fs = require("fs");
const input = fs.readFileSync("input", 'utf-8').split('\n')

const day2_1 = () => {
  let x = 0
  let y = 0

  for (let line of input) {
    let commands = line.split(' ')
    let command  = parseInt(commands[1])
    switch(commands[0]) {
      case 'forward': x += command; break
      case 'down'   : y += command; break
      case 'up'     : y -= command; break
    }
  }

  return x * y
}

const day2_2 = () => {
  let x = 0
  let aim = 0
  let y = 0

  for (let line of input) {
    let commands = line.split(' ')
    let command  = parseInt(commands[1])
    switch(commands[0]) {
      case 'forward': x += command; y += aim * command; break
      case 'down'   : aim += command; break
      case 'up'     : aim -= command; break
    }
  }
  
  return x * y
}

console.log('Part 1: ', day2_1(), 'Part 2: ', day2_2())