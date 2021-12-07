const fs = require('fs');
const gates1 = fs.readFileSync('input', 'utf-8').split('\n')
const gates2 = fs.readFileSync('input-2', 'utf-8').split('\n')


const day7 = gates => {
  let trans = {
    AND:    '&',
    OR:     '|',
    NOT:    '~',
    LSHIFT: '<<',
    RSHIFT: '>>>'
  }
  let sortedGates = []
  for(let gate of gates) {
    gate = replaceAll(gate, trans)
    sortedGates.push(gate.replace(/(.+?) -> (\w+)/, '$2 = $1').toUpperCase())
  }
  // sort first operand by length and then alphabetically
  sortedGates.sort((a,b) => {
    return a.substring(0,a.indexOf('=')).length - b.substring(0,b.indexOf('=')).length || 
    a.localeCompare(b)
  })
  eval(rotate(sortedGates).join(';\n'))
  return A
}

const replaceAll = (str,mapObj) => {
  var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
  return str.replace(re, matched => mapObj[matched])
}

const rotate = (arr, reverse=false) => {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}

console.log('Part 1:', day7(gates1), 'Part 2:', day7(gates2))