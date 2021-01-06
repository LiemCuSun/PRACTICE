const fs = require('fs')


fs.readFile('./database.json', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data, 'ASYNC')
})

const data = fs.readFileSync('./database.json', 'utf-8')

console.log(JSON.parse(data), 'SYNC')