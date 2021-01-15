// NOTE import database
const connection = require("../database");

module.exports = {
    getAllProducts : (req, res) => {
        let queryProduct = 'select * from products'
        connection.query(queryProduct, (err, result) =>{
            // NOTE check error
            if (err) return res.status(400).send('Oops something wrong!', err)
            // IF success
            res.status(200).send(result)
        } )
    },
    getProductByName: (req, res) => {
        let queryProduct = 'select * from products'
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
