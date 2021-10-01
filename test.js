const fs = require('fs')

const readInputs = fs.readFileSync('inputs.txt', 'utf8')
const readPatterns = fs.readFileSync('patterns.txt', 'utf8')

const writeNewFile = fs.writeFileSync('writeNewFile.txt', `${readInputs}`)
const completeNewFile = fs.appendFileSync('writeNewFile.txt', `${readPatterns}`)

console.log('_________')
console.log(readInputs)
console.log(readPatterns)