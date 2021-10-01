const fs = require('fs')

const readInputs = fs.readFileSync('inputs.txt', 'utf8')
const readPatterns = fs.readFileSync('patterns.txt', 'utf8')
console.log('_________')
console.log('Inputs: ', readInputs)
console.log('Patterns: ', readPatterns)