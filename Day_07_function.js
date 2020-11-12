// ** FUNCTION
// ** didefinisikan sebagai block kode yan berisi perintah yang bisa dipakai berkali-kali


// ** CASE : tampilkan "Saya belajar JavaScript" 10x
let msg = "Saya belajar JavaScript"
for(let i = 0; i < 10; i++) {
    console.log(msg)
}

// ** Output sama dengan menggunakan function
// ** FUNCTION DECLARATION
function PrintPesan () {
    for(let i = 0; i < 10; i++) {
        console.log("Saya hobby coding JS")
    }
}

// ** function setelah di declare / dibuat tidak akan sampai berfungsi / running sampai function tersebut dipanggil lagi
// ** Invoke a function / memanggil . menjalankan function => namaFungsi()
PrintPesan()

// ! CASE : buat fungsi untuk memperkenalkan diri !
function Kenalan () {
    console.log(`Nama saya Liem Cu Sun`)
    console.log(`saya suka coding dan gaming`)
    console.log(`sekian`)
}

Kenalan()

// ** Function with parameter / function dengan input
// ** parameter berfungsi sebagai input di sebuah fungsi
// ** parameter seperti sebuah variable yang berfungsi untuk menyimpan input dari user

function KenalanV2 (name) {
    console.log(`Hello, nama saya ${name}`)
    console.log(`saya suka anime`)
    console.log(`sekian yo`)
}

// ** value dari input yang diberikan oleh user akan dimasukan ke dalam parameter name
KenalanV2(`Chooson`)

// ** PARAMETER atau INPUT lebih dari satu => nama parameter di pisah dengan koma " , "
function KenalanV3 (name, hobby) {
    console.log(`Hello, my name is ${name}`)
    console.log(`saya suka ${hobby}`)
    console.log(`bye bye`)
}

KenalanV3(`Chooson`,`RUSUH`)

// ** NOTE : urutan dari parameter itu penting urutannya harus pas !
// ** Jika function dipanggil tanpa isi parameter nanti akan jadi undifined
// ** Misal KenalanV3() = ini jadi undifined nantinya cuy

// ! CASE : buatlah fungsi untuk menghitung penjumlahan 2 buah bilangan, a dan b
function Penjumlahan (a, b) {
    console.log(a + b)
}

Penjumlahan(10, 9)
Penjumlahan(7, 5)

// ** RULE PENAMAAN :
// ** mirip dengan variable : tidak bileh diawali dengan angka = function 0kosong () {....} ❌
// ** nama fungsi tidak boleh menggunakan kata kunci / keyword yg sudah dipakai js
// ** => function function () { ... } ❌ , function var () { ... } ❌
// ** kalau nama function lebih dari satu kata gunakan aturan :
// ** - Pisah dengan , underscore ( _ ) atau negatif ( - )
// ** - lower or upper camelCase

// ! CASE : variable vs function name
// let pengurangan = 3 - 5
// function pengurangan (a, b) {
//     console.log(a - b)
// }
// pengurangan (5, 4) // => ini tidak bisa karena variable vs function priority ke variable

// ** NOTE : nama variable tidak boleh sama dengan nama function yang sudah dibuat !!

//  ** LOCAL SCOPE => { ... }
//  ** Variable yang ada di dalam function tidak dapat di console.log, contoh:
function Perkalian (a, b) {
    let hasil = a * b // ** hanya bisa dipakai / diakses di dalam function
    console.log(hasil)
}

// console.log(hasil) // ! ini akan error cuy !! ❌

// ! NOTE : solusi untuk masalah diatas adalah dengan fungsi RETURN !!!
// ** FUNCTION WITH RETURN VALUE
// ** function yang menghasilkan suatu value yang bisa diakses / dipakai untuk next perintah

function PerkalianV2 (a, b) {
    let hasil = a * b // ** local variable
    console.log(hasil)
    return hasil // ** give return value => supaya value dapat dipakai di global scope
}

PerkalianV2 (9, 9)

let hasil
hasil = 99 + 1
console.log (hasil) // ** kalau ini boleh karena let yg didalam function tidak berpengaruh

// ** CASE : verifikasi input user saat login atau register
//  ** username & password harus lebih dari 6 karakter
// ** username & password harus unique, include number & special character

















// ! CASE: Buatlah sebuah fungsi untuk check apakah suatu bilangan itu ganjil !
// ! input berupa number => output berupa boolean (true or false)
// ! contoh IsOdd(6) => false Is0dd(7) => false

function IsOdd (a) {
    if (a%2 == 0) {
        console.log("Bilangan Genap")
    } else {
        console.log("Bilangan Ganjil")
    }
    return 
}

IsOdd (6)


// ! CASE : buatlah fungsi untuk membalik suatu string
// ! input : string => output : string hasil dibalik
// ! BalikString ("alee") > "eela"

function rVs (a) {
    let huruf = "ayam"
    console.log(huruf.split("").reverse("").join(""))

}

rVs ()




