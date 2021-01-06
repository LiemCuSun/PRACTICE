

class View {
    static show(data) {
        console.log('-=-=TODO LIST=-=-')
        // console.log(data, 'VIEW')
        data.forEach(item => {
            console.log(`${item.name} :`, item.isCompleted ? 'Complete' : 'Not Complete')
        });
    }
}

module.exports = View