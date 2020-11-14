// NOTE :
// - ECMA Script
//      - TERNARY OPERATOR

// - HIGH ORDER FUNCTION

// NOTE
// 1. TERNARY OPERATOR
// - shortcut if else

//REVIEW :
// CASE : Cek angka ganjil

// PAKAI IF ELSE
let num = 7
if (num %2 !== 0) {
    console.log('angka ganjil')
} else {
    console.log('angka genap')
}

// PAKAI TERNARY OPERATOR => condition/comparison ? case true : case false
num % 2 !== 0 ? console.log('angka ganjil') : console.log('angka genap')

// CASE : Biasanya dipakai untuk cek value sblm disimpan dlm variabel
// CONTOH => input : number (-10 - +10) => output : true/false
// jika positif : simpan value di variabel
let numPositif = num >= 0 ? true : false
console.log(numPositif)

// CASE 2 : numPositif pakai if else
let numPositif2
if (num >= 0) {
    numPositif2 = true
} else {
    numPositif2 = false
}

// NOTE :
// TERNARY OPERATOR WITH MORE THAN ONE CONDITION
// Cek angka, kalau input : 0, console.log('angka nol')
// input > 0, console.log('angka positif') 
// input < 0, console.log('angka negatif')

// KALAU PAKAI IF ELSE
let num2 = -5
if (num === 0) {
    console.log('angka nol') 
} else if (num2 > 0) {
    console.log('angka positif')
} else {
    console.log('angka negatif')
}

// KALAU PAKAI TERNARY
num2 > 0 ? console.log('angka positif') 
: num2 === 0 ? console.log('angka nol') 
: console.log('angka negatif')

// NOTE :
// walau ternary ditulis dlm multiple line, tetap akan dibaca sbg satu statement di javascript

// ARROW FUNCTION :
// shortcut dari function
// CASE : buatlah fungsi u/ mengecek apakah bilangan tersebut bisa habis dibagi 5

// FUNCTION BIASA
function HabisDibagiLima (num) {
    num % 5 === 0 ? console.log('true') : console.log('false')
}
HabisDibagiLima (25)

// ARROW FUNCTION use FUNCTIONAL EXPRESSION 
// Function yg disimpan dalam variabel
const HabisDibagiLimaKah = (num) => num % 5 === 0 ? console.log('true') : console.log('false')
HabisDibagiLimaKah (9)
HabisDibagiLimaKah (15)

//NOTE : ARROW FUNCTION RULES
// 1. Jika Input hanya 1, boleh tidak menggunakan ()
// 2. Jika blok kode lebih dr 1 baris, maka dibungkus dgn {...}
// 3. Jika blok kode 1 baris, arrow function akan otomatis me return value

// RULES 1 : 
//ARROW FUNCTION CEK GANJIL GENAP
const ApakahGanjil = num => num % 2 !== 0 ? console.log('angka ganjil') : console.log('angka genap')
ApakahGanjil(5)

// RULES 2 :
const ApakahGenap = (num) => {
    if (num % 2 === 0) {
        console.log('angka genap')
    } else {
        console.log('angka ganjil')
    }
}

// RULES 3 :
const IsPositive = (num) => num > 0 ? true : false
const temp = IsPositive (-8)
console.log(temp)

// JIKA BLOCK KODE LEBIH DARI 1 BARIS, KALAU MAU ME-RETURN VALUE HARUS PAKE RETURN
const IsPositiveKah = (num) => {
    return num > 0 ? true : false
}

const temp2 = IsPositiveKah(9)
console.log(temp2)

// SPREAD OPERATOR => ...
// CASE 1 : u/ mengcopy isi dari array atau oabject
// Reference Copy VS Full Copy
// u/ ARRAY DAN OBJECT

// NOTE => REFERENCE COPY
let arr1 = [1, 2, 3]
let arr2 = arr1 // SAYA MAU KASIH NAMA BARU array [1, 2, 3] dengan nama arr2
console.log(arr1)
console.log(arr2)

arr2[1] = 5
console.log(arr2) // arr2 [1, 5, 3]
console.log(arr1) //arr1 ikut berubah juga tapi, jadi [1, 5, 3]

// LOGIC NYA :
// [1, 2, 3] => punya nama arr1 dan arr2

// NOTE
// KALAU MAU BENER BENER COPY
// FULL COPY
// memanfaatkan spread operator
let arrayOri = ['a', 'b', 'c']
let arrayCopy = [...arrayOri]
// saya buat array baru,
// dengan element didlmnya, saya isi dari copy element di arrayOri

// kita punya 2 array yg sama
arrayCopy[0] = 'A'
console.log(arrayCopy)
console.log(arrayOri) // tidak keganti karena yg diubah si arrayCopy

//OBJECT
let obj1 = {nama : 'alee', hobi : 'coding'}
let obj2 = {...obj1}
console.log(obj1)
console.log(obj2)


// REVIEW :
// HIGH ORDER FUNCTION :
// => function yg pakai callback, atau function yg me-return function

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// CALLBACK FUNCTION => function yg mjd input di function lain
array.sort((a, b) => b - a) //shortcut pake arrow function jd gausah panjang
console.log(array)

function callback (a, b) {
    return a - b
}
array.sort(callback)
console.log(array)

// atau seperti ini, sama aja sama yg diatas
array.sort(function callback (a, b) {
    return a - b
})
console.log(array)

// NOTE :
// ARRAY METHODS YG AKAN SERING DIPAKAI
// .filter(), .map(), .forEach(), 
// .some(), .every(), .reduce(), 

// REVIEW :
// setTimeOut & setInterval
// Special function
// setTimeOut -> set timer sebelum callback function di jalankan
//setTimeout(() => console.log('Time Out'), 5000) //5 detik = 5000 milidetik
//setTimeout (callback, time), time nya milisekon

// setInterval -> set timer, tetapi callback akan dijalankan berkali kali dengan jeda atau interval waktu
// yang diberikan ( JALAN TIAP INTERVAL BRP DETIK SEKALI)
//setInterval(() => console.log('Hello'), 3000) // Hello jalan 3 detik sekali
// setInterval (callback, time)

// REVIEW :
// FUNCTION THAT RETURN A FUNCTION
// fungsi yg menghasilkan fungsi
// CASE : cek angka apakah habis dibagi dengan 3
function HabisDibagiTiga (num) {
    return num % 3 === 0 ? true : false
}
console.log(HabisDibagiTiga(8))

function HabisDibagiTigaKah (num) {
    return function () {
        return num % 3 === 0
    }
}
console.log(HabisDibagiTigaKah(8)()) //() belakang buat manggil function nya

// VERSI ARROW FUNCTION
const HabisDibagiTigaYa = (num) => () => num % 3 === 0

// REVIEW :
// OBJECT DESTRUCTURING
let mobil = {merk : 'avanze', harga : 109000, warna : 'oceanic blue'}
console.log(mobil)

// CARA 1 = BIASA (MAU AMBIL VALUE)
console.log(mobil.merk)
console.log(mobil.harga)
console.log(mobil.warna)

// CARA 2 = OBJECT DESTRUCTURING
// props/key yg ada di dalam object akan di-destructure atau dipisah mjd individual variabel

//let {merk, harga, warna} = {merk : 'avanze', harga : 109000, warna : 'oceanic blue'} //contoh
let {merk, harga, warna} = mobil // obj destructuring pakai yg ini
console.log(merk)
console.log(harga)
console.log(warna)

