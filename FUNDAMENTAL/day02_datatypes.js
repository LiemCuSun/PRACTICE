// 📝javascript ada 2 main data types
/**Primitive data type
 * String 
 * Number
 * Boolean
 * Null
 * Undifine
 */
/**Reference data type
 * array
 * object
 * date
 * etc
 */

// String adalah text biasa, cirinya dibuat menggunakan "....", '....', '....' (backtic)
let nama = "cusun" // string
nama = 'alian'
nama = 'alien'

let usia = '20' // number di bungkus dengan menggunakan simbol diatas tersebut dapat disebut sebagai string
let hobby = 'gaming'
let job = 'codder'

let perkenalan = 'nama saya : ' + nama + ' , ' + 'usia: ' + usia
console.log(perkenalan)

// string template literal = syarat harus pake backtic `...`
// kalau mau akses variable menggunakan string dollar ${}
console.log(`nama saya : ${nama} dan usia saya ${usia}`)

// STRING PROPERTY & METHODS = properti dan metode untuk memanipulasi string
// property = lenght, untuk menghitung panjang string

let kenalan = "nama saya adalah " + nama
console.log(kenalan)
console.log(kenalan.length)

console.log(kenalan.toUpperCase)
console.log(kenalan.toLocaleLowerCase)
console.log(kenalan.repeat (3))

let sekolah = "Purwadhika"
console.log(sekolah)
console.log(sekolah.indexOf("P"))
console.log(sekolah.indexOf("p")) // tidak ada p maka outputnya -1
console.log(sekolah.slice(3)) // misahin


// perbedaan string dan substring ??
console.log(sekolah.substring(0, 3))
console.log(sekolah) // sama aja, hanya disarankan pakai substring

// Number
// punya kategori dari int, BigInt
// special data types in number infinity and NaN (Not A Number)

let usiaku = 26 // number
let angka = 0.1 // floating number
let takterhingga = Infinity
let idunno = NaN

// Properties and Methods
// methods
console.log(angka.toFixed(0)) //pembulatan angka
console.log(usiaku.toExponential())
console.log(isNaN(angka))
console.log(isNaN(idunno))
console.log(isFinite(angka))
console.log(isFinite(takterhingga))

