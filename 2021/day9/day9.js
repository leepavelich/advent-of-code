const fs = require("fs")
const lines = fs.readFileSync('input', 'utf-8').split('\n')

const day9_1 = () => {
  let sum = 0
  let heightMap = []

  heightMap.push(new Array(lines[0].length + 2).fill(Infinity))
  for (let line of lines) {
    let depths = line.split('').map(x => parseInt(x))
    depths.unshift(Infinity)
    depths.push(Infinity)
    heightMap.push(depths)
  }
  heightMap.push(new Array(lines[0].length + 2).fill(Infinity))

  for (let i = 1; i < heightMap[0].length - 1; i++) {
    for (let j = 1; j < heightMap.length - 1; j++) {
      if (heightMap[j][i] < heightMap[j][i-1] &&
          heightMap[j][i] < heightMap[j][i+1] &&
          heightMap[j][i] < heightMap[j-1][i] &&
          heightMap[j][i] < heightMap[j+1][i]) {
            sum += heightMap[j][i] + 1
          }
    }
  }
  return sum
}

const day9_2 = () => {
  let heightMap = new Array(lines.length)
  for (let i = 0; i < heightMap.length; i++) {
    heightMap[i] = lines[i].split('').map(x => parseInt(x))
  }
  let rows = heightMap.length
  let cols = heightMap[0].length

  const exploreBasin = (row, col) => {
    if (row < 0 || col < 0 || row >= rows || col >= cols || heightMap[row][col] === 9) return 0
    heightMap[row][col] = 9
    return 1 + exploreBasin(row + 1, col) + exploreBasin(row - 1, col) 
             + exploreBasin(row, col + 1) + exploreBasin(row, col - 1)
  }

  let basins = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (heightMap[row][col] !== 9) {
        basins.push(exploreBasin(row,col))
      }
    }
  }
  return basins.sort((a,b) => b - a).slice(0,3).reduce((a,b) => a * b)
}

console.log('Part 1:', day9_1(), 'Part 2:', day9_2())