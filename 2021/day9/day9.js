const fs = require("fs")
const lines = fs.readFileSync('input-test', 'utf-8').split('\n')

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

console.log('Part 1:', day9_1())