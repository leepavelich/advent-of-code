const fs = require("fs")
const lines = fs.readFileSync('input', 'utf-8').split('\n')

const day8_1 = () => {
  let count = 0
  for(let line of lines) {
    [input, output] = line.split('|')
    output = output.split(' ')
    count += output.filter(x => x.length === 2 || x.length === 4 || 
                           x.length === 3 || x.length === 7).length
  }
  return count
}

const day8_2 = () => {
  let count = 0
  for(let line of lines) {
    let digits = []
    let [inputs, output] = line.split('|')
    const input = inputs.trim().split(' ')
    let zero  = new Set()
    let one   = digitSet(input.find(x => x.length === 2))
    let two   = new Set()
    let three = new Set()
    let four  = digitSet(input.find(x => x.length === 4))
    let five  = new Set()
    let six   = new Set()
    let seven = digitSet(input.find(x => x.length === 3))
    let eight = digitSet(input.find(x => x.length === 7))
    let nine  = new Set()

    let fiveDig = input.filter(x => x.length === 5)
    let sixDig  = input.filter(x => x.length === 6)
    for (let i = 0; i < fiveDig.length; i++) {
      fiveDig[i] = digitSet(fiveDig[i])
      sixDig[i]  = digitSet(sixDig[i])
    }
    for (let pattern of fiveDig) {
      if (intersection(pattern, seven).size == 3) {
        three = pattern
      } else if (intersection(pattern, four).size == 3) {
        five = pattern
      } else {
        two = pattern
      }
    }
    for (let pattern of sixDig) {
      if (intersection(pattern, four).size == 4) {
        nine = pattern
      } else if (intersection(pattern, seven).size == 3) {
        zero = pattern
      } else {
        six = pattern
      }
    }

    let decode = [zero, one, two, three, four, five, six, seven, eight, nine]
    let sevenSeg = output.trim().split(' ').map(x => digitSet(x))
    for (let digit of sevenSeg) {
      for (let pattern of decode) {
        if (setsEqual(pattern,digit)) digits.push(decode.indexOf(pattern))
      }
    }
    count += parseInt(digits.join(''))
  }
  return count
}

const digitSet = inp => {
  const digit = new Set()
  for(let char of inp) digit.add(char)
  return digit
}

const intersection = (a, b) => {
  let intersection = new Set()
  for (let elem of b) {
    if (a.has(elem)) intersection.add(elem)
  }
  return intersection
}

const setsEqual = (a,b) => {
  if (a.size !== b.size) return false
  for (let as of a) if (!b.has(as)) return false
  return true
}

console.log('Part 1:', day8_1(), 'Part 2', day8_2())