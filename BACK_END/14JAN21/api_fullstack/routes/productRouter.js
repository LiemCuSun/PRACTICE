const connection = require("../database");

let router = require('express').Router()

// NOTE use body for express validator
let { body } = require('express-validator')

let regValidator = [
    body('name')
        .notEmpty()
        .withMessage('Product name can\'t be empty')
        .isLength({ min: 3 })
        .withMessage('Product name lenght at least 3 character'),
    body('id')
        .notEmpty()
        .withMessage('Product id can\'t be empty')
        .isLength({ min: 1 })
        .withMessage('Product id lenght at least 1 character'),
    body('price')
        .notEmpty()
        .withMessage('Price can\'t be empty')
        .isNumeric()
        .withMessage('Price can\'t be other than number')
]


let {productController} = require('../controllers')

// NOTE create router
router.get('/getProducts', productController.getAllProducts)
router.post('/getProductName', productController.getProductByName)
router.post('/getProductID', productController.getProductByID)
router.post('/regProduct', regValidator , productController.register) // NOTE bisa pake put juga
router.post('/editProd/:index', regValidator , productController.edit) // NOTE bisa pake patch juga
router.delete('/deleteProd/:index', productController.delete)

// NOTE export router
module.exports = router