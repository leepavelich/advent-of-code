const fs = require("fs");
const input = fs.readFileSync('input', 'utf-8').split('\n')

const day5_1 = () => {
  let ventMap = outMapPrep(1000)
  let vents   = ventsPrep(input)
  for(let vent of vents) {
    updateMap(ventMap, vent, false)
  }
  // console.table(ventMap)
  return overlap(ventMap)
}

const day5_2 = () => {
  let ventMap = outMapPrep(1000)
  let vents   = ventsPrep(input)
  for(let vent of vents) {
    updateMap(ventMap, vent, true)
  }
  // console.table(ventMap)
  return overlap(ventMap)
}

const ventsPrep = lines => {
  let vents = []
  for(let line of lines) {
    vent = line.split(' -> ')
    vents.push([vent[0].split(',').map(e => parseInt(e)),
                vent[1].split(',').map(e => parseInt(e))])
  }
  return vents
}

const outMapPrep = n => {
  let outMap = []
  for(i = 0; i < n; i++) {
    outMap.push(Array(n).fill(0).slice())
  }
  return outMap
}

const updateMap = (map, vent, diag) => {
  if(!diag) {
    let [x1,y1] = vent[0]
    let [x2,y2] = vent[1]
    if(x1 === x2) {
      if(y1 > y2) [y1,y2] = [y2,y1]
      for(let y = y1; y <= y2; y++) {
        map[y][x1]++
      }
    }
    if(y1 === y2) {
      if(x1 > x2) [x1,x2] = [x2,x1]
      for(let x = x1; x <= x2; x++) {
        map[y1][x]++
      }
    }
  } else {
    // modified from Stack Overflow answer
    // determine the distance between [x1,y1] and [x2,y2]
    let delta     = vent[0].map((v,i) => vent[1][i] - v)
    let distance  = Math.max(...delta.map(v => Math.abs(v)))
    // determine the unit vector to move each iteration
    let direction = delta.map(v => v / distance)
    // beginning from [x1,y1], move `distance` iterations in `direction`
    let mapUpdates = [...Array(distance + 1)]
          .map((_,i) => vent[0].map((v,j) => v + direction[j] * i))
    for(let coord of mapUpdates) {
      let x = coord[1]
      let y = coord[0]
      map[y][x]++
    }
  }
  return map
}

// naive and fast solution
// const overlap = map => {
//   let sum = 0
//   for(i = 0; i < map.length; i++) {
//     for(j = 0; j < map.length; j++) {
//       if(map[i][j] > 1) sum++
//     }
//   }
//   return sum
// }

// functional and slow solution
const overlap = map => map.flat().filter(x => x > 1).length

console.log('Part 1:', day5_1(), 'Part 2:', day5_2())