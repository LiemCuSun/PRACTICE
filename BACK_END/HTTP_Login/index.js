// NOTE import module
const http = require('http')
let fs = require('fs')
let url = require('url')

// NOTE define port
let port = 2000

let database = [
    {
        username: 'liem',
        password: 'liem123',
        email: 'cusunliem@gmail.com',
    },
    {
        username: 'lisa',
        password: 'lisa123',
        email: 'lisa@gmail.com',
    },
    {
        username: 'jenny',
        password: 'jenny123',
        email: 'jenny@gmail.com',
    }
]

const server = http.createServer((req, res) => {
    // NOTE access index untuk edit dari user using url(with Query)
    console.log(req.url)
    const alamat = url.parse(req.url)

    if(req.url === '/home') {
        let home = fs.readFileSync("home.html", "utf-8")
        // NOTE content type biasa kalau ga text/html itu application/json
        res.writeHead(200, {"Content-type" : "test/html"})
        res.end(home)
    }
    else if (req.url === '/users') {
        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(database))
    }
    else if (req.url === '/login') {
        // NOTE get data from user
        let input = ""
        req.on("data", (chunk) => {
            input = chunk.toString()
            console.log(input)
        })
        .on("end", () => {
            let obj = JSON.parse(input)
            console.log(obj)
            let username = obj.username
            let password = obj.password
            console.log(username, password)

            // NOTE untuk mencari data user di database yang sesuai dengan data yang dikirim oleh user
            let userIndex = database.findIndex(
                (item) => item.username === username && item.password === password
            )
            console.log(userIndex)
            res.writeHead(200, {'content-type' : 'application/json'})
            res.end(JSON.stringify(database[userIndex]))
        })
    }
    else if (req.url === '/register') {
        let input
        req.on("data", (chunk) => {
            input = chunk.toString()
            console.log(input)
        })
        .on('end', () => {
            let obj = JSON.parse(input)
            console.log(obj)

            // ambil data dari user
            // let username = obj.username
            // let password = obj.password
            // let email = obj.email
            

            // NOTE push data user baru ke dalam databse
            database.push(obj)
            res.writeHead(200, {'content-type' : 'application/json'})
            res.end(JSON.stringify(database))
        })
    }
    else if (alamat.pathname === '/edit') {
        let input
        req.on('data', (chunk) => {
            input = chunk.toString()
            console.log(input)
        })
        .on('end', () => {
            // NOTE get data user
            let itemUser = database[alamat.query]
            console.log(itemUser)

            let obj = JSON.parse(input)
            console.log(obj)

            // NOTE edit data sesuai keinginan user
            // NOTE for in untuk melooping di dalam object, for of untuk meloopibng didalam array

            for(let key in obj) {
                for(let key2 in itemUser){
                    if (key === key2) {
                        itemUser[key2] = obj[key]
                    }
                }
            }

            // NOTE ganti database
            database.splice(alamat.query, 1, itemUser)

            res.writeHead(200, {'content-type' : 'application/json'})
            res.end(JSON.stringify(database))
        })
    }
})

server.listen(port, () => console.log(`Connected to port: ${port}`))