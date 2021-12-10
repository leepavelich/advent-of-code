const fs = require('fs')
const directions = fs.readFileSync('input', 'utf-8').split(',').map(e => e.trim())

const abs = x => Math.abs(x)

const day1_1 = () => {
  let dir = 'north'
  let [x,y] = [0,0]
  for (let command of directions) {
    let rot = command.slice(0,1)
    let dis = parseInt(command.slice(1))
    dir = changeDir (dir, rot)
    if (dir === 'north') y += dis
    if (dir === 'west')  x -= dis
    if (dir === 'south') y -= dis
    if (dir === 'east')  x += dis
  }
  return abs(x) + abs(y)
}

const day1_2 = () => {
  let dir = 'north'
  let [x,y] = [0,0]
  visited = new Set()
  visited.add([0,0].toString())
  for (let command of directions) {
    let rot = command.slice(0,1)
    let dis = parseInt(command.slice(1))
    dir = changeDir (dir, rot)
    for (let i = 0; i < dis; i++) {
      if (dir === 'north') y++
      if (dir === 'west')  x--
      if (dir === 'south') y--
      if (dir === 'east')  x++
      if (visited.has([x,y].toString())) return abs(x) + abs(y)
      else visited.add([x,y].toString())
      
    }
  }
}

const changeDir = (dir, rot) => {
  switch (dir) {
    case 'north': return rot === 'R' ? 'east'  : 'west'
    case 'west' : return rot === 'R' ? 'north' : 'south'
    case 'south': return rot === 'R' ? 'west'  : 'east'
    case 'east' : return rot === 'R' ? 'south' : 'north'
  }
}

console.log('Part 1:', day1_1(), 'Part 2:', day1_2())