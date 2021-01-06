const express = require('express')
const router = express.Router()
const fs = require('fs')



router.get('/', (req, res) => {
    res.send('ok')
})
router.get('/home', (req, res) => {
    res.json({
        status: 'home'
    })
})
router.get('/info', (req, res) => {
    res.json({
        status: 'info'
    })
})
router.get('/home/user', (req, res) => {
    res.json({
        status: "home user",
    })
})

router.post('/', (req, res) => {
    // console.log(req.body)
    const data = req.body

    const db = JSON.parse(fs.readFileSync('./database.json', 'utf-8'))
    const newData = {
        id: db[db.length - 1].id + 1,
        ...data, 
        isCompleted:false
    }

    db.push(newData)

    console.log(db)

    fs.writeFileSync('./database.json', JSON.stringify(db, null, 2))

    res.json({
        message: 'data has been added',
        ...newData
    })

    
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    console.log(id)
    const db = JSON.parse(fs.readFileSync("./database.json", 'utf-8'))
    newData = db.filter(data => data.id !== Number(id))
    fs.writeFileSync('./database.json', JSON.stringify(newData, null, 2))

    res.json({
        message: `data with id= ${id} has been deleted`
    })
})

router.put('/:id', (req,res) => {
    const {id} = req.params
    console.log(id)
    const data = req.body
    const db = JSON.parse(fs.readFileSync("./database.json", 'utf-8'))
    const newData = db.map((item => {
        if (item.id === Number(id)) {
            return {
                ...item,
                ...data
            }
        }
        return item
    }))
    fs.writeFileSync('./database.json', JSON.stringify(newData, null, 2))

    res.json({
        message: `data with id= ${id} has been updated`
    })
})


module.exports = router