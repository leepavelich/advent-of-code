const fs = require("fs");
const numbers = fs.readFileSync('numbers', 'utf-8').split(',').map(x => parseInt(x))
const boardIn = fs.readFileSync('boards',  'utf-8').split('\n')

const day4_1 = () => {
  let boards = boardPrep(boardIn)
  for(let num of numbers) {
    boards.map(board => updater(num, board))
    for(let board of boards) {
      if(bingoChecker(board)) return solution(num, board)
    }
  }
}

const day4_2 = () => {
  let boards = boardPrep(boardIn).slice()

  for(let num of numbers) {
    boards.map(board => updater(num, board))
    for(let board of boards) {
      if(bingoChecker(board) && boards.length === 1) {
        return solution(num, board)
      } else if(bingoChecker(board)) {
        let index = boards.indexOf(board)
        boards.splice(index,1)
      }
    }
  }
}

const boardPrep = boards => {
  let boardOut = []
  for(let i = 0; i < boards.length; i += 6) {
    let newBoard = []
    for (let j = 0; j < 5; j++) {
      boardLine = boards[i+j]
        .split(/(\s+)/)
        .filter(x => x.trim().length>0)
        .map(x => [parseInt(x),false])
      newBoard.push(boardLine)
    }
    boardOut.push(newBoard)
  }
  return boardOut
}

const updater = (num, board) => {
  for(let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if(board[i][j][0] === num) board[i][j][1] = true
    }
  }
}

const bingoChecker = board => {
  // check rows
  let test = []
  for(let i = 0; i < 5; i++) {
    if(board[i].reduce((a,b) => a && b[1], true)) return true
  }
  // check columns
  for (let j = 0; j < 5; j++) {
    let test = true
    for(let i = 0; i < 5; i++) {
      test &= board[i][j][1]
    }
    if(test) return true
  }
  return false
}

const solution = (num, board) => {
  let sum = 0
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if(!board[i][j][1]) sum += board[i][j][0]
    }
  }
  return sum * num
}

console.log('Part 1:', day4_1(), 'Part 2:', day4_2())