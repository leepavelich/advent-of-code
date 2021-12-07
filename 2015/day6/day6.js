const fs = require("fs");
const instructions = fs.readFileSync('input', 'utf-8').split('\n')

let GRID_SIZE = 1000

const day6 = (funcIn, funcOut) => {
  let grid = gridInitialize(GRID_SIZE)
  for(let instruct of instructions) {
    let digits = instruct.match(/([0-9]+).*/g)[0].split(' through ')
    let [x1,y1] = digits[0].split(',').map(x => parseInt(x))
    let [x2,y2] = digits[1].split(',').map(x => parseInt(x))
    let command = instruct.match(/(\D)+/)
    
    funcIn(grid, command, [x1, y1, x2, y2])
  }
  return funcOut(grid)
}

const gridInitialize = n => {
  grid = []
  for(let i = 0; i < n; i++) grid.push(new Array(n).fill(0))
  return grid
}

const gridOpsBin = (grid, command, [x1, y1, x2, y2]) => {
  for(let i = x1; i <= x2; i++) {
    for(let j = y1; j <= y2; j++) {
      switch(command[0]) {
        case 'toggle '  : grid[j][i] = !grid[j][i]; break
        case 'turn on ' : grid[j][i] = true; break
        case 'turn off ': grid[j][i] = false; break
      }
    }
  }
}

const gridOpsBright = (grid, command, [x1, y1, x2, y2]) => {
  for(let i = x1; i <= x2; i++) {
    for(let j = y1; j <= y2; j++) {
      switch(command[0]) {
        case 'toggle '  : grid[j][i] += 2; break
        case 'turn on ' : grid[j][i]++; break
        case 'turn off ': (grid[j][i] !== 0) ? grid[j][i]-- : grid[j][i] = 0; break
      }
    }
  }
}

const lightsLit = grid => grid.flat().filter(Boolean).length

const brightness = grid => grid.flat().reduce((a,b) => a + b, 0)


console.log('Part 1:', day6(gridOpsBin, lightsLit), 'Part 2:', day6(gridOpsBright, brightness))