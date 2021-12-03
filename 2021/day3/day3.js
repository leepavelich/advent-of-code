const fs = require("fs");
const input = fs.readFileSync("input", 'utf-8').split('\n')

const day3_1 = () => {
  rate = digitCount(input)
  let g = ''
  let e = ''
  for (let digit of rate) {
    if(digit[0] > digit[1]) {g += '0'; e += '1'}
    else {g += '1'; e += '0'}
  }
  return parseInt(g,2) * parseInt(e,2)
}

const day3_2 = () => {
  return rating(input, '1', '0') * rating(input, '0', '1')
}

const rating = (inChem, s, n) => {
  let chem = inChem.slice()
  for(let i = 0; i < chem[0].length; i++) {
    let chemRate = digitCount(chem)
    let chemNew  = []
    if(chemRate[i][1] >= chemRate[i][0]) {
      for(let j = 0; j < chem.length; j++) {
        if(chem[j][i] === s) chemNew.push(chem[j])
      }
    }
    else {
      for(let j = 0; j < chem.length; j++) {
        if(chem[j][i] === n) chemNew.push(chem[j])
      }
    }
    if(!chemNew.length) break
    chem = chemNew
  }
  return parseInt(chem,2)
}

const digitCount = lines => {
  let rate = new Array(lines[0].length).fill().map(_ => [0,0])
  for (let line of lines) {
    for (let i = 0; i < line.length; i++) {
      line[i] === '0' ? rate[i][0]++ : rate[i][1]++
    }
  }
  return rate
}

console.log('Part 1:', day3_1(), 'Part 2:', day3_2())