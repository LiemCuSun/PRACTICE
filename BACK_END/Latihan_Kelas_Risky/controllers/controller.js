const Model = require('../Models/model')
const View = require('../views/view')



class Controller {
    static getData() {
        console.log('Controller get')
        let res = Model.getData()
        View.show(res)
        // console.log(res, 'controller')
    }

    static createData(data) {
        let res = Model.createData(data)
        View.createData(res)
    }
    
    static updateData(id, input) {
        let res = Model.updateData(id, input)
        View.updateData(res)
    }
    static deleteData(id) {
        let res = Model.deleteData(id)
        View.deleteData(res)
    }

}


module.exports = Controller