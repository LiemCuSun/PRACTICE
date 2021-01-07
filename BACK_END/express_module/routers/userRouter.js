let router = require('express').Router()

// NOTE use body for express validator
let { body } = require('express-validator')

// NOTE import controller yang dibutuhkan
const { userController } = require('../controllers')

let regValidator = [
    body('username')
        .notEmpty()
        .withMessage('Username can\'t be empty')
        .isLength({ min: 6 })
        .withMessage('Username lenght at least 6 character'),
    body('password')
        .notEmpty()
        .withMessage('Password can\'t be empty')
        .isLength({ min: 6 })
        .withMessage('Password lenght at least 6 character')
        .matches(/[0-9]/)
        .withMessage('Password must include a number')
        .matches(/[!@#$%^&*]/)
        .withMessage('Password must include symbol'),
    body("email")
        .isEmail()
        .withMessage("Email format is not correct")


]


// NOTE create router
router.get('/getUser', userController.getUser)
router.post('/login', userController.login)
router.post('/register', regValidator , userController.register) // NOTE bisa pake put juga
router.post('/edit/:index', userController.edit) // NOTE bisa pake patch juga
router.delete('/delete/:index', userController.delete)

// NOTE export router
module.exports = router