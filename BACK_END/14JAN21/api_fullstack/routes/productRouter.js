const connection = require("../database");

let router = require('express').Router()

// NOTE use body for express validator
let { body } = require('express-validator')

let regValidator = [
    body('product_name')
        .notEmpty()
        .withMessage('Product name can\'t be empty')
        .isLength({ min: 3 })
        .withMessage('Product name lenght at least 3 character'),
    body('price')
        .notEmpty()
        .withMessage('Price can\'t be empty')
        .isNumeric()
        .withMessage('Price can\'t be other than number')
]


let { productController } = require('../controllers')

// NOTE create router
router.get('/getAllProd', productController.getAllProd)
router.get('/getCateProd', productController.getCateProd)
router.post('/addProduct', regValidator, productController.addProduct)
router.post('/editProduct/:id', regValidator, productController.editProduct) // NOTE bisa pake patch juga
router.delete('/deleteProd/:id', productController.deleteProd)

// NOTE export router
module.exports = router