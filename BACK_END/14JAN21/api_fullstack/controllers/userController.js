// NOTE ini validator yang dibuat di routes
let { validationResult } = require('express-validator')
const cryptojs = require('crypto-js')
const SECRET_KEY = process.env.CRYPTO_KEY

// NOTE import database
const connection = require("../database");
const { generateQuery, asyncQuery } = require('../helpers/query')
const { createToken } = require('../helpers/jwt')

// NOTE database:

module.exports = {
    getUser: (req, res) => {
        let queryUser = 'select * from users'
        connection.query(queryUser, (err, result) => {
            // NOTE check error
            if (err) return res.status(400).send('Oops something wrong!', err)
            // IF success
            res.status(200).send(result)
        })

    },
    login: (req, res) => {
        console.log(req.body)
        let { username, password } = req.body
        const hashpass = cryptojs.HmacMD5(password, SECRET_KEY)
        let queryUser = `SELECT * FROM users where username = ${connection.escape(username)} 
        and password = ${connection.escape(hashpass.toString())}`
        console.log(queryUser)
        console.log(password)
        // NOTE pake connection.escape untuk menyesuaikan format, jadi gausah " " lagi

        connection.query(queryUser, (err, result) => {
            // NOTE check error
            if (err) return res.status(500).send(err)
            // NOTE untuk check apakah login berhasil
            if (result.length === 0) return res.status(200).send('username or password did not match')
            let token = createToken({ id: result[0].id_users, username: result[0].username })

            // console.log(result[0])

            // input token to result
            result[0].token = token

            // console.log(result[0])

            res.status(200).send(result[0])
        })
    },
    edit: (req, res) => {
        let paramsIndex = connection.escape(+req.params.index)
        let querySearchID = `SELECT id_users FROM users WHERE id_users = ${paramsIndex};`

        let errors = validationResult(req)
        // console.log(errors)
        // console.log(errors.array())

        // NOTE mengambil msg error dari express-validator
        const msg = errors.array().map(
            (item) => item.msg
        )
        console.log(msg)

        // console.log(req.body)
        let { username, password, email } = req.body

        // if (!errors.isEmpty()) return res.status(400).send(msg)
        if (!errors.isEmpty()) return res.status(400).send(errors.array()[0].msg)

        // encrypt password with crypto js
        // data yang sudah di encrypt oleh crypto js, TIDAK BISA di decrypt
        const hashpass = cryptojs.HmacMD5(password, SECRET_KEY)
        console.log('password : ', hashpass.toString())

        // kalau tidak ada error, proses penambahan data user baru berjalan
        const checkUser = `SELECT * FROM users 
                          WHERE username=${connection.escape(username)}
                          OR email=${connection.escape(email)}`
        connection.query(querySearchID, (err, result) => {
            if (err) return res.status(500).send(err)
            console.log('error 1:', err)

            // cek apakah di database ada user id yang ingin di edit
            if (result.length === 0) return res.status(400).send(`user with id = ${paramsIndex} is not found`)

            connection.query(checkUser, (err2, result2) => {
                if (err2) return res.status(500).send(err2)
                console.log('error 2:', err2)

                // cek apakah di database ada user dengan username atau email yang sama
                if (result2.length !== 0) return res.status(400).send('Username or Email is already exist')
                let queryUpdate = `UPDATE users SET${generateQuery(req.body)} WHERE id_users=${paramsIndex}`
                connection.query(queryUpdate, (err3, result3) => {
                    if (err3) res.status(500).send(err3)
                    console.log('error 3:', err3)

                    res.status(200).send(result3)
                    console.log(result3)
                })
            })

        })
    },
    editPass: (req, res) => {
        const id = parseInt(req.params.id)

        // validation input from user
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).send(errors.array()[0].msg)

        const checkUser = `SELECT * FROM users WHERE id_users=${connection.escape(id)}`
        // console.log(checkUser)

        connection.query(checkUser, (err, result) => {
            if (err) return res.status(500).send(err)

            // if id_users not found
            if (result.length === 0) return res.status(200).send(`User with id : ${id} is not found`)

            const hashpass = cryptojs.HmacMD5(req.body.password, SECRET_KEY)

            // query change password
            const editPassword = `UPDATE users SET password=${connection.escape(hashpass.toString())} WHERE id_users=${id}`
            // console.log(editPassword)

            connection.query(editPassword, (err2, result2) => {
                if (err2) return res.status(500).send(err2)

                res.status(200).send(result2)
            })
        })
    },
    delete: (req, res) => {
        let paramsIndex = connection.escape(+req.params.index)
        let queryDelete = `DELETE FROM users WHERE id_users = ${paramsIndex};`
        let querySearchID = `SELECT id_users FROM users WHERE id_users = ${paramsIndex};`


        connection.query(querySearchID, (err, result) => {
            if (err) return res.status(500).send(err)

            // cek apakah di database ada user id yang dimaksud
            if (result.length === 0) return res.status(400).send(`index of the user (${paramsIndex}) is not found`)

            connection.query(queryDelete, (err2, result2) => {
                if (err2) res.status(500).send(err2)
                console.log(err2)

                res.status(200).send(result2)
                console.log(result2)
            })
        })
    },
    register: (req, res) => {
        let errors = validationResult(req)
        // console.log(errors)
        // console.log(errors.array())

        // NOTE mengambil msg error dari express-validator
        const msg = errors.array().map(
            (item) => item.msg
        )
        console.log(msg)

        // console.log(req.body)
        let { username, password, email } = req.body

        // if (!errors.isEmpty()) return res.status(400).send(msg)
        if (!errors.isEmpty()) return res.status(400).send(errors.array()[0].msg)

        // encrypt password with crypto js
        // data yang sudah di encrypt oleh crypto js, TIDAK BISA di decrypt
        const hashpass = cryptojs.HmacMD5(password, SECRET_KEY)
        console.log('password : ', hashpass.toString())

        // kalau tidak ada error, proses penambahan data user baru berjalan
        const checkUser = `SELECT * FROM users 
                          WHERE username=${connection.escape(username)}
                          OR email=${connection.escape(email)}`
        connection.query(checkUser, (err, result) => {
            if (err) return res.status(500).send(err)

            // cek apakah di database ada user dengan username atau email yang sama
            if (result.length !== 0) return res.status(400).send('Username or Email is already exist')

            const regQuery = `INSERT INTO users (username, password, email)
                              VALUES (${connection.escape(username)}, ${connection.escape(hashpass.toString())}, ${connection.escape(email)})`
            connection.query(regQuery, (err2, result2) => {
                if (err2) res.status(500).send(err2)
                console.log(err2)

                res.status(200).send(result2)
                console.log(result2)
            })
        })
    },
    keepLogin: async(req, res) => {
        console.log(req.user)

        try {
            // query to get data from database
            const getUser = `SELECT id_users, username, email FROM users
                             WHERE id_users=${req.user.id}`
            
            const result = await asyncQuery(getUser)
            console.log('result dari query', result[0])

            res.status(200).send(result[0])
        }
        catch(err) {
            console.log(err)
            res.status(400).send(err)
        }
    }
}