// const fs = require('fs')
// const Controller = require('./controllers/controller')

// const command = process.argv[2]
// const input = process.argv[3]
// const controller = require('./controllers/controller')
const express = require('express')
const port = 8000
const app = express()
const routes = require('./routes')



app.use(express.json())
app.use(routes)
app.listen(port, () => console.log('Server hosted: ', port))


// console.log(process.argv)
// switch (command) {
//     case 'get':
//         console.log('get data')
//         controller.getData()
//         break
//     case 'create':
//         console.log('create data')
//         Controller.createData(input)
//         break
//     case 'update':
//         console.log('update data')
//         Controller
//         break
//     case 'delete':
//         console.log('delete data')
//         break
//     default:
//         console.log("Wrong Input")
//         break
// }