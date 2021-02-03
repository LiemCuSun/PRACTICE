const { generateQuery, asyncQuery } = require('../helpers/queryHelp')
const db = require('../database')

module.exports = {
    getAllProd: async (req, res) => {
        try {
            const queryCate = 'SELECT * FROM products'
            const result = await asyncQuery(queryCate)

            res.status(200).send(result)
        }
        catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    },
    getCateProd: async (req, res) => {
        try {
            const Query = `select id_products,name,category_id, c1.title as category_name,price,stock from products p1
            left join category c1
            on p1.category_id = c1.id`

            const result = await asyncQuery(Query)

            res.status(200).send(result)
        }
        catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    },
    addProduct: async (req, res) => {
        const { name, category_id, price,stock } = req.body

        try {
            const addQuery = `INSERT INTO products (name, category_id, price,stock) 
            VALUES (${db.escape(name)}, ${db.escape(category_id)}, ${db.escape(price)},${db.escape(stock)})`

            const result = await asyncQuery(addQuery)

            const getQuery = `select id_products,name,category_id, c1.title as category_name,price,stock from products p1
            left join category c1
            on p1.category_id = c1.id`

            const resultUpdate = await asyncQuery(getQuery)
            console.log(`Product ${db.escape(name)} has been added successfully`)

            res.status(200).send(resultUpdate)
        }
        catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    },
    deleteProd: async (req, res) => {
        try {
            console.log(req.params.id)
            const delQuery = `DELETE FROM products WHERE id_products = ${db.escape(parseInt(req.params.id))}`

            const result = await asyncQuery(delQuery)
            
            const getQuery = `select id_products,name,category_id, c1.title as category_name,price,stock from products p1
            left join category c1
            on p1.category_id = c1.id`

            const resultUpdate = await asyncQuery(getQuery)
            console.log(`Product ID ${db.escape(parseInt(req.params.id))} has been deleted`)

            res.status(200).send(resultUpdate)
        }
        catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    },
    editProduct: async (req, res) => {
        try {
            const query = `UPDATE products SET${generateQuery(req.body)} where id_products = ${db.escape(parseInt(req.params.id))}`
            // console.log(query)

            const result = await asyncQuery(query)

            const getQuery = `select id_products,name,category_id, c1.title as category_name,price,stock from products p1
            left join category c1
            on p1.category_id = c1.id`

            const resultUpdate = await asyncQuery(getQuery)
            console.log(`Product with ${generateQuery(req.body)} has been edited`)

            res.status(200).send(resultUpdate)
        }
        catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    }
}