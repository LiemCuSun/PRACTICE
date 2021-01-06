let fs = require('fs')


class Model {
    static getData() {
        // console.log('Model')
        let data = fs.readFileSync('./database.json', 'utf-8')
        console.log(data)
        data = JSON.parse(data)

        console.log(data)

        return data
    }
    static createData(input) {
        // console.log(input, 'Model')
        let data = JSON.parse(fs.readFileSync('./database.json', 'utf-8'))

        console.log(data, 'BEFORE')

        let newDAta = {
            id: data[data.length - 1].id + 1,
            name: input,
            isCompleted: false
        }
        data.push (newDAta)

        const res = fs.writeFileSync('./database.json', JSON.stringify(data))

        console.log(newDAta)

        
        
    }
    static updateData(input) {
        let data = JSON.parse(fs.readFileSync('./database.json', 'utf-8'))

        console.log(data, 'BEFORE')

        let newData = data.map(item => {
            if(item.id === Number(id)){
                return {
                    ...item,
                    name = input
                }
            }
            return item
        })

        console.log(newData)
        fs.writeFileSync('./database.json', JSON.stringify(newData, null, 2)) // JSON.stringify(newData, null, 2) yang 2 ini untuk format tulisan aja biar rapih

        return { id, input }
    }
    static deleteData(input) {
        let data = JSON.parse(fs.readFileSync('./database.json', 'utf-8'))

        console.log(data, 'BEFORE')

        let newData = data.map(item => {
            if(item.id === Number(id)){
                return {
                    ...item,
                    name = input
                }
            }
            return item
        })

        console.log(newData)
        const res = fs.writeFileSync('./database.json', JSON.stringify(newData, null, 2))

        return { id, input }
    }
}

module.exports = Model