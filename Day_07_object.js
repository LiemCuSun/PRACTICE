// ** OBJECT => { ... }
// ** CASE : simpanlah 3 data users yang isinya ada username, age, hobby
// ** SOLVE 1# : variable => Not effective

let users1 = "Lisa"
let ageUser1 = 19
let hobbyUser1 = "Menulis"

let users2 = "Lala"
let ageUser2 = 20
let hobbyUser2 = "Bokep"

let users3 = "Sasa"
let ageUser3 = 29
let hobbyUser3 = "Tidur"

// ** SOLVE 2# : array => [ ... ] => lebih ringkas tapi kalau data banyak harus tau posisi data (ribet) ❌
let users = [ "Lisa", "Lala", "Sasa"]
let ages = [19, 20, 29]
let hobbies = ["Menulis", "Bokep", "Tidur"]

// ** SOLVE 3# : object => { ... } => collection of object
// ** mengkelompokan data yang punya hubungan menjadi satu kelompok object
let user = [
    {
        name : "lisa",
        age : 19,
        hobby : "Menulis"
    },
    {
        name : "Lala",
        age : 20,
        hobby : "Bokep"
    },
    {
        name : "Sasa",
        age : 29,
        hobby : "Tidur"
    },

]
console.log(user)

// ** HOW TO CREATE AN OBJECT
// ** CRUD OPERATION : GET, ADD, EDIT/UPDATE, DELETE
// ** OBJECT USING CLASS AS OBJECT CONSTRUCTOR
// ** PROPERTIES AND METHOD
// ** ..........