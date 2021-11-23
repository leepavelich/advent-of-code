/** Using crypto-js library to generate MD5 hashes
 *  $ npm install crypto-js
 */

let MD5 = require("crypto-js/md5");

const day4 = (leadingZeroes) => {
  const input = 'ckczppom'
  // const input = 'abcdef'
  // const input = 'pqrstuv'

  let i = 1

  while (true) {
    test = input + i
    hash = MD5(test).toString()
    if (hash.substring(0,leadingZeroes) === '0'.repeat(leadingZeroes)) break
    i++
  }

  return test
}

console.log('Hash with 5 leading zeroes: ' + day4(5))
console.log('Hash with 6 leading zeroes: ' + day4(6))