// OBJECT => {...}
// CASE : simpanlah 3 data user yg isinya username, age, hobby

//1. SOLVE DENGAN VARIABEL => tidak efektif dan susah di maintain
let users1 = 'Lia'
let ageUsers1 = 19
let hobbyUsers1 = 'Menulis'

let users2 = 'Elsa'
let ageUsers2 = 25
let hobbyUsers2 = 'Menyanyi'

let users3 = 'Lisa'
let ageUsers3 = 24
let hobbyUsers3 = 'Menari'

//2. SOLVE DENGAN ARRAY => [...]
//kekurangan => kalo user banyak, index nya bingung

let users = ['Lia', 'Elsa', 'Lisa']
let age = [19, 25, 24]
let hobby = ['Menulis', 'Menyanyi', 'Menari']

//3. SOLVE WITH OBJECT !!!
// object {...} => collection of object atau object didalam array
// mengelompokkan data yg punya hubungan menjadi satu kelompok object
// let user = [{x,1,a},{y,2,b},{z,3,c}]
let user = [
    {
        name : 'Lia',
        age : 19,
        hobby : 'Menulis',
    },
    {
        name : 'Elsa',
        age : 25,
        hobby : 'Menyanyi',
    },
    {
        name : 'Lisa',
        age : 24,
        hobby : 'Menari',
    }
]
console.log(user[1])

// BGMN CARA MEMBUAT OBJECT
// CRUD Operation Object => get, add, edit/update, delete
// OBJECT USING CLASS AS OBJECT CONSTRUCTOR
// PROPERTY AND METHOD


//WHAT IS OBJECT 

//OBJECT => di dlm JS everything is an object.
//OBJECT => sebuah tipe data tyg mampu menyimpan multiple value mirip dengan array, tetapi
        //  jika array, data disimpan berdsrkan index, 
        //  namun, OBJECT menggunakan pasangan 'key' : 'value'
        // OBJECT bisa nyimpen data type apapun, trmsk ARRAY dan FUNCTION dan OBJECT itu sndr

// ANALOGI : SEMUA BENDA YG KALIAN LIHAT ADALAH OBJECT
// SETIAP OBJECT PUNYA PROPERTY
// CONTOH : 
// Object => Laptop , 
//Property => 
//  merk : Asus
//  warna : biru
//  layar : 14", etc.

// CRUD OPERATION (CREATE, READ, UPDATE/EDIT, DELETE)
// CREATE => CARA MEMBUAT OBJECT

// NOTE :
// 1ST : SYNTAX LITERAL (SECARA LANGSUNG) => {...} (properti sama, value berbeda)
// Kalo pake SYNTAX LITERAL, BIKIN VALUE NYA BISA BEDA BEDA (STRING, NUMBER, trgtg user yg bikinnya)
let laptop1 = {merk : 'Asus', warna : 'biru', layar : 14}
let laptop2 = {merk : 'Lenovo', warna : 'hitam', layar : 16}
console.log(laptop1)

//let laptop1arr = ['Asus', 'Biru', 14]

// HOW TO READ OBJECT
// Jika di array, kalau mau baca item/element didlmnya, kita gunakan index (mulai dr 0)
// Kalau di OBJECT, kita pakai KEY untuk akses valuenya => object.prop/key
console.log(laptop1.merk)
console.log(laptop1.layar)
console.log(laptop2.merk)
//console.log(laptop1arr[0]) //=> kalo di array, kita gatau korelasi nya apa

// HOW TO INSERT NEW PROPS/KEY
laptop1.harga = 16000000
console.log(laptop1)

laptop2.usb_c = true
console.log(laptop2)

// UPDATE / EDIT OBJECT
laptop1.harga = 15990900
console.log(laptop1)
laptop1.warna = 'black'
console.log(laptop1)

// Jika kita mau nambah property baru, jika prop/key belum ada di object yg ingin diupdate, maka
// Props/key akan dibuat secara AUTOMATIC.
// Jika Prop/key nya udah ada, maka value dr prop/key tersebut akan di UPDATE.

// DELETE PROP/KEY DI OBJECT
delete laptop2.usb_c
console.log(laptop2)

delete laptop1.warna
console.log(laptop1)

