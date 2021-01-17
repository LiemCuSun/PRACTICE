// NOTE import database
const connection = require("../database");
let { validationResult } = require('express-validator');

module.exports = {
    getAllProducts: (req, res) => {
        let queryProduct = 'select * from products'
        connection.query(queryProduct, (err, result) => {
            // NOTE check error
            if (err) return res.status(400).send('Oops something wrong!', err)
            // IF success
            res.status(200).send(result)
        })
    },
    getProductByName: (req, res) => {
        let { product_name } = req.body

        let querySearchName = `SELECT * FROM products 
        WHERE product_name = ${connection.escape(product_name)};`

        connection.query(querySearchName, (err, result) => {
            if (err) return res.status(500).send(err)
            console.log(err)
            res.status(200).send(result)
            console.log(result)
        })
    },
    getProductByID: (req, res) => {
        let paramsIndex = connection.escape(+req.params.index)
        let querySearchID = `SELECT * FROM products 
        WHERE id_products = ${paramsIndex};`

        connection.query(querySearchID, (err, result) => {
            if (err) return res.status(500).send(err)
            console.log(err)
            // cek apakah di database ada product id yang ingin di edit
            if (result.length === 0) return res.status(400).send(`Product with id = ${paramsIndex} is not found`)
            res.status(200).send(result)
            console.log(result)
        })
    },
    edit: (req, res) => {
        let paramsIndex = connection.escape(+req.params.index)
        let querySearchID = `SELECT id_products FROM products WHERE id_products = ${paramsIndex};`

        let errors = validationResult(req)
        // console.log(errors)
        // console.log(errors.array())

        // NOTE mengambil msg error dari express-validator
        const msg = errors.array().map(
            (item) => item.msg
        )
        console.log(msg)

        // console.log(req.body)
        let { product_name, image, price, stock, description } = req.body

        // if (!errors.isEmpty()) return res.status(400).send(msg)
        if (!errors.isEmpty()) return res.status(400).send(errors.array()[0].msg)

        // kalau tidak ada error, proses penambahan data user baru berjalan
        const checkProduct = `SELECT * FROM products 
                          WHERE product_name=${connection.escape(product_name)}`
        connection.query(querySearchID, (err, result) => {
            if (err) return res.status(500).send(err)
            console.log(err)

            // cek apakah di database ada product id yang ingin di edit
            if (result.length === 0) return res.status(400).send(`Product with id = ${paramsIndex} is not found`)

            connection.query(checkProduct, (err2, result2) => {
                if (err2) return res.status(500).send(err2)
                console.log(err2)

                // cek apakah di database ada product dengan nama yang sama persis
                if (result2.length !== 0) return res.status(400).send('This product is already exist')
                let queryUpdate = `UPDATE products SET product_name = ${connection.escape(product_name)}, 
                image = ${connection.escape(image)}, 
                price = ${connection.escape(price)}, 
                stock = ${connection.escape(stock)}, 
                description = ${connection.escape(description)}
                WHERE id_products = ${paramsIndex};`
                connection.query(queryUpdate, (err3, result3) => {
                    if (err3) res.status(500).send(err3)
                    console.log(err3)

                    res.status(200).send(result3)
                    console.log(result3)
                })
            })

        })
    },
    delete: (req, res) => {
        let paramsIndex = connection.escape(+req.params.index)
        let queryDelete = `DELETE FROM products WHERE id_products = ${paramsIndex};`
        let querySearchID = `SELECT id_products FROM products WHERE id_products = ${paramsIndex};`


        connection.query(querySearchID, (err, result) => {
            if (err) return res.status(500).send(err)

            // cek apakah di database ada user id yang dimaksud
            if (result.length === 0) return res.status(400).send(`index of the product (${paramsIndex}) is not found`)

            connection.query(queryDelete, (err2, result2) => {
                if (err2) res.status(500).send(err2)
                console.log(err2)

                res.status(200).send(result2)
                console.log(result2)
            })
        })
    },
    register: (req, res) => {
        // console.log(req.body)
        let { product_name, image, price, stock, description } = req.body
        let errors = validationResult(req)
        console.log(errors)
        console.log(errors.array())

        // NOTE mengambil msg error dari express-validator
        const msg = errors.array().map(
            (item) => item.msg
        )
        console.log(msg)

        if (!errors.isEmpty()) return res.status(400).send(msg)

        const checkProduct = `SELECT * FROM products 
                        WHERE product_name =${connection.escape(product_name)}`
        connection.query(checkProduct, (err, result) => {
            if (err) return res.status(500).send(err)

            // cek apakah di database ada user dengan username atau email yang sama
            if (result.length !== 0) return res.status(400).send('This specify product has been registered')

            const regQuery = `INSERT INTO products (product_name, image, price, stock, description)
                            VALUES (${connection.escape(product_name)}, ${connection.escape(image)}, 
                            ${connection.escape(price)}, ${connection.escape(stock)}, 
                            ${connection.escape(description)})`
            connection.query(regQuery, (err2, result2) => {
                if (err2) res.status(500).send(err2)
                console.log(err2)

                res.status(200).send(result2)
                console.log(result2)
            })
        })
    }

}
