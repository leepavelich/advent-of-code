const fs = require("fs");
const instructions = fs.readFileSync('input', 'utf-8').split('\n')

let = instructionsTest = ['toggle 3,5 through 4,4']

const day6 = () => {
  let grid = gridInitialize(6)
  for(let instruct of instructionsTest) {
    let digits = instruct.match(/([0-9]+).*/g)[0].split(' through ')
    let [x1,y1] = digits[0].split(',').map(x => parseInt(x))
    let [x2,y2] = digits[1].split(',').map(x => parseInt(x))
    let command = instruct.match(/(\D)+/)
    console.log(x1,y1,x2,y2, command)
  }
  console.table(grid)
  return false
}

// TODO: flatten array, apply functions to intervening values, unflatted array

const gridInitialize = n => {
  grid = []
  for(let i = 0; i < n; i++) grid.push(new Array(n).fill(false))
  return grid
}

const turnOn  = (grid, x, y) => grid[y][x] = true
const turnOff = (grid, x, y) => grid[y][x] = false
const toggle  = (grid, x, y) => grid[y][x] = !grid[y][x]


console.log('Part 1', day6())