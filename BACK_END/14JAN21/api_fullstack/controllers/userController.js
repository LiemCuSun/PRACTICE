// NOTE ini validator yang dibuat di routes
let { validationResult } = require('express-validator')
const cryptojs = require('crypto-js')
const SECRET_KEY = '!@#$%^&*'

// NOTE import database
const connection = require("../database");

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
        and password = ${connection.escape(hashpass.toString())};`
        console.log(queryUser)
        // NOTE pake connection.escape untuk menyesuaikan format, jadi gausah " " lagi

        connection.query(queryUser, (err, result) => {
            // NOTE check error
            if (err) return res.status(500).send(err)
            // NOTE untuk check apakah login berhasil
            if (result.length === 0) return res.status(400).send('username or password did not match')
            // IF success
            res.status(200).send(result)
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
            console.log(err)

            // cek apakah di database ada user id yang ingin di edit
            if (result.length === 0) return res.status(400).send(`user with id = ${paramsIndex} is not found`)
            
            connection.query(checkUser, (err2, result2) => {
                if (err2) return res.status(500).send(err2)
                console.log(err2)
                
                // cek apakah di database ada user dengan username atau email yang sama
                if (result2.length !== 0) return res.status(400).send('Username or Email is already exist')
                let queryUpdate = `UPDATE users SET username = ${connection.escape(username)}, password = ${connection.escape(hashpass.toString())}, 
                email = ${connection.escape(email)} WHERE id_users = ${paramsIndex};`
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
    }
}