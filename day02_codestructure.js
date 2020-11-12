// comment => tidak akan di runnung oleh javascript
// dipakai untuk documentation atau lecture notes
// ada 2 types of comment
// inline comment
/*
 multiple line comment
 can write multiple comment inside javascript
 */

 // javascript statement/pernyataan
 // statement in javascript artinya kita bikin 1 baris code yang menjalankan 1 perintah
 console.log("ini satu statement")
 console.log("ini statement ke dua")
 console.log(
     "ini statement ke tiga"
 )

// semicolon ;, fungsinya untuk membedakan statement 1 dengan statement 2
console.log("Hello"); console.log("My name is Liem Cu Sun")

// dulu setiap baris command harus ditutup dengan semicolon, tapi sekarang tinggal di enter aja udah bisa dibaca sebagai separator command

// Variable = tempat untuk menampung data
// Kasus 1 : client > buatlah program javascript yang menampilkan "Hello, Ale" 10x !!
console.log("Hello, Ale")
console.log("Hello, Ale")
console.log("Hello, Ale")
console.log("Hello, Ale")
console.log("Hello, Ale")
console.log("Hello, Ale")
console.log("Hello, Ale")
console.log("Hello, Ale")
console.log("Hello, Ale")
console.log("Hello, Ale")

// diatas itu cara kuno, kalau ada yang di edit harus edit semua satu2
// how to declare variable ? please see below
// Using keyword of the variable
var nama

// assign the value ! how? dengan tanda "="
nama = "olaf"

// declare variable and assign value
var nama2 = "elsa"

// output hasil di console, see below:
console.log(nama)
console.log(nama2)

// example
var nama3 ="Cusun"
var usia = 26
var hobby = "Games and Coding"

console.log(nama3)
console.log(usia)
console.log(hobby)

// variable value bisa diubah, see below:
usia = 19
nama3 = "Liem"
console.log(usia)
console.log(nama3)

// declare multiple variable at once, see below:
var job, status, bisa
job = "Auditor"
jomblo = false
bias = "Jennie"

var school = "Purwadhika", program = "JCWM15"

console.log(school); console.log(program)

// NOTE: aturan penamaan variable
// - buatlah nama variable sejelas mungkin yang orang lain bisa paham
// contoh yang membingungkan, misal mau bikin var usia > var x = 19 , nah kalau ini kan akan bingung orang 19 itu artinya apa
// harus jelas maksudnya, kalau variable usia yaudah pake usia aja
// Variable tidak boleh menggunakan nama yang sudah dipakai di kata kunci javascript
// Contoh var var , var let, var console, var log, dll
//  nama awal varoable tidak boleh diawali dengan angka, contoh var 1abc (ini tidak boleh) harus depannya huruf, contoh var abc1
// variable juga tidak boleh diawali dengan simbol, contoh var !tidakmungkin
// kalau nama variable lebih dari satu kata maka gunakan aturan dengan penyambung "-" atau "_" , contoh Liem Cu Sun (tidak boleh)
//  yang benar Liem_Cu_Sun atau Liem-Cu-Sun, ga boleh pake space

console.log("Hello World")
// kalau berkali kali lebih baik pakai var
var pesanhomepage = "Hello World"
console.log(pesanhomepage)

// Modern syntax declaration
// cara bikin variable dengan syntax terbaru
let nama_saya = "Liem Cu Sun"
let usiaKu = 26
let hobbi = "Play a game"

let namaAnda, usiaAnda, hobbiAnda
namaAnda = "Sanny"
usiaAnda = 19
hobbiAnda = "Menangis"
hobbiAnda = "tersenyum"

// const atau constant = yang berarti variable yang dibuat dengan kata kunci const nilainya tidak bisa dirubah
const merah = "merah"
merah = "biru" // error, karena merah udah dibikin func const merah
console.log(merah)

// var vs let vs const ??
//  var = bisa dibikin variable dengan nama yang sama lebih dari satu (paling bawah akan mengeliminasi var nama yang atas)
var game = "Genshin Impact"
var game = "PUBG Mobile"
console.log(game)

//  let tidak membolehkan membuat variable dengan nama yang sama
let colour = "yellow"
let colour = "red" // ini akan error saat running karna sudah ada variable colour
console.log(colour)

// const value variable tidak bisa diganti
const pink = "pink"
const pink = "Jennie" // akan error
console.log(pink)

// NOTE : in javascript case is matter
// Apple tidak sama dengan apple
let Apple = "apple"
let apple = "apple"




