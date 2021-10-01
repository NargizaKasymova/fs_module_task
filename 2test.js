const fs = require('fs')

const readInputs = fs.readFile('inputs.txt', 'utf8', (err, data) => {
    if(err) {
        throw err
    }
    console.log(data)
})

const readPatterns = fs.readFile('patterns.txt', 'utf8', (err, data) => {
    if(err) {
        throw err
    }
    console.log(data)
    const writePatterns = fs.appendFileSync('newFile.txt', data)
})

