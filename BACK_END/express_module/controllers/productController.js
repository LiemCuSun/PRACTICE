// NOTE ini validator yang dibuat di routes
let { validationResult } = require('express-validator')




let products = [
    {
        id:1,
        name: 'nike-01',
        price: 2000,
    },
    {
        id:2,
        name: 'nike-02',
        price: 3000,
    },
    {
        id:3,
        name: 'nike-03',
        price: 4000,
    }
]

module.exports = {
    getProduct: (req, res) => {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(products))
    },
    getProductByName: (req, res) => {
        // NOTE inputan dari user, akan masuk ke dalam req.body
        console.log(req.body)
        const { name } = req.body

        let userIndex = products.findIndex((item) => item.name === name)

        // NOTE kita bisa kasih respon ketika ada kesalahan
        if (userIndex === -1) return res.status(400).send('Invalid product name')

        res.status(200).send(products[userIndex])
    },
    getProductByID: (req, res) => {
        // NOTE inputan dari user, akan masuk ke dalam req.body
        console.log(req.body)
        const { id } = req.body

        let userIndex = products.findIndex((item) => item.id === id)

        // NOTE kita bisa kasih respon ketika ada kesalahan
        if (userIndex === -1) return res.status(400).send('Invalid product ID')

        res.status(200).send(products[userIndex])
    },
    edit: (req, res) => {
        // NOTE ambil data user yang mau diedit
        let tempProduct = products[parseInt(req.params.index)]

        // NOTE kalau user nya tidak ada
        if (!tempProduct) return res.status(400).send(`index of the product ${req.params.id} is not found`)

        console.log(tempProduct)
        console.log(req.body)

        // looping untuk mengedit data user
        for (let key in req.body) {
            for (let key2 in tempProduct) {
                if (key === key2) {
                    tempProduct[key2] = req.body[key]
                }
            }
        }

        res.status(200).send(products)
    },
    delete: (req, res) => {
        let tempProduct = products[+req.params.index] // NOTE maksud dari +req.params.index adalah parseInt(si param)
        if (!tempProduct) return res.status(400).send(`index of the product (${req.params.id}) is not found`)

        products.splice(parseInt(req.params.index), 1)
        res.status(200).send(products)
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

        products.push(req.body)
        res.status(200).send(products)
    }
}

// ! TUGAS => get product, get product by id, route & CRUD (regist,edit,delete)