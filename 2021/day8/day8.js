const fs = require("fs")
const lines = fs.readFileSync('input', 'utf-8').split('\n')

//console.log(input)

const day8_1 = () => {
  let count = 0
  for(let line of lines) {
    output = line.match(/\|(.*)$/)[0].split(' ')
    count += output.filter(x => x.length === 2 || x.length === 4 || 
                           x.length === 3 || x.length === 7).length
  }
  return count
}

console.log('Part 1:', day8_1())