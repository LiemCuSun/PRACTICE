// NOTE express sebagai penggatin http
let express = require('express')
// NOTE bodypanser untuk mengambil data body dari request, langsung berupa object tidak perlu ditampung ke chunk dulu
let bodyPanser = require('body-parser')
// NOTE cors sebagai izin access
let cors = require('cors')
let port = 2000

// NOTE make server
let server = express()

// NOTE use module
server.use(bodyPanser.json())
server.use(cors())

// NOTE route untuk tampilan home
server.get('/home', (req, res) => {
    res.status(200).send('<h1> Hello this is HOME </h1>')
})

// NOTE connect to all routers
const { userRouter, productRouter } = require('./routers')
server.use('/user' ,userRouter, productRouter)


// // NOTE route untuk login
// server.post('/login', )

// // NOTE route untuk register
// server.post('/register', )

// // NOTE route untuk users
// server.get('/users', )

// // NOTE route untuk edit
// server.post('/edit/:index', )

// // NOTE route untuk delete
// server.delete("/delete/:index", )

server.listen(port, () => console.log(`Connected to port : ${port}`))
