// NOTE :
// DATA COLLECTION => COllection of object inside and array
// CASE : simpanlah data user dgn data (username, email, password)

class User {
    constructor (username, email, password) {
        this.username = username,
        this.email = email,
        this.password = password
    }
}

let users = []
users.push({username : 'alee', email : 'alee@gmail.com', password : '1234'})
console.log(users)

users.push(new User('olaf', 'olaf@gmail.com', 'olaf123'))
console.log(users)

users.push (new User('elsa', 'elsa@gmail.com', 'olala'))
//SAMA AJA TINGGAL PREFER YG MANA CARANYA

console.log(users[1])
console.log(users[1].username)
console.log(users[1].email)

// menampilkan semua data username
console.log(users)

for (let i = 0; i < users.length; i++) {
    console.log(users[i].username)
}

// saya mau delete password user index ke 2
delete users[2].password
console.log(users[2])

//function callback () {}
//users.forEach({}, {})