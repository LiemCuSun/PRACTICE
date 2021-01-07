// NOTE ini validator yang dibuat di routes
let { validationResult } = require('express-validator')

// NOTE database user
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

module.exports = {
    getUser: (req, res) => {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(database))
    },
    login: (req, res) => {
        // NOTE inputan dari user, akan masuk ke dalam req.body
        console.log(req.body)
        const { username, password } = req.body

        let userIndex = database.findIndex(
            (item) => item.username === username && item.password === password
        )

        // NOTE kita bisa kasih respon ketika ada kesalahan
        if (userIndex === -1) return res.status(400).send('Invalid username or password')

        res.status(200).send(database[userIndex])
    },
    edit: (req, res) => {
        // NOTE ambil data user yang mau diedit
        let tempUser = database[parseInt(req.params.index)]

        // NOTE kalau user nya tidak ada
        if (!tempUser) return res.status(400).send(`index of the user ${req.params.id} is not found`)

        console.log(tempUser)
        console.log(req.body)

        // looping untuk mengedit data user
        for (let key in req.body) {
            for (let key2 in tempUser) {
                if (key === key2) {
                    tempUser[key2] = req.body[key]
                }
            }
        }

        res.status(200).send(database)
    },
    delete: (req, res) => {
        let tempUser = database[+req.params.index]
        if (!tempUser) return res.status(400).send(`index of the user (${req.params.id}) is not found`)

        database.splice(parseInt(req.params.index), 1)
        res.status(200).send(database)
    },
    register: (req, res) => {
        let errors = validationResult(req)
        console.log(errors)
        console.log(errors.array())

        // NOTE mengambil msg error dari express-validator
        const msg = errors.array().map(
            (item) => item.msg
        )
        console.log(msg)

        if (!errors.isEmpty()) return res.status(400).send(msg)

        database.push(req.body)
        res.status(200).send(database)
    }
}