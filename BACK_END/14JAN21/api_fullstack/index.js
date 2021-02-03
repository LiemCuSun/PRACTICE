// import module
let express = require('express') // NOTE pembuat server pengganti http module
let bodyParser = require('body-parser') // NOTE untuk menampung req.body
let cors = require('cors') // NOTE izin sharing data / authorization 
require('dotenv').config()

// NOTE create app
let app = express()

// NOTE import Connection MySql
const connection = require('./database')
// NOTE untuk check database
// console.log(connection)

// NOTE apply middleware
app.use(cors())
app.use(bodyParser.json())


// NOTE import router
let {productRouter, userRouter, profileRouter, categoryRouter} = require('./routes')
app.use('/product', productRouter)
app.use('/user' ,userRouter)
app.use('/profile', profileRouter)
app.use('/cate', categoryRouter)
app.use(express.static('./public'))


// NOTE connect database
connection.connect((err) => {
    if (err) return console.log(`Oops something wrong ! error code: ${err.stack}`)
    console.log(`connected as id : ${connection.threadId}`)
})

// NOTE create home route
app.get('/', (req, res) => {
    res.status(200).send(`<h1>This is Home</h1>`)
})


let PORT = 2000
app.listen(PORT, () => console.log(`Connected to PORT: ${PORT}`))
