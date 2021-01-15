// NOTE setup mysql
let mysql = require('mysql') // NOTE untuk menyambungkan api dengan mysql database
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'liemcusun',
    password: 'liemcusun',
    database: 'db_api_fullstack'
});

module.exports = connection