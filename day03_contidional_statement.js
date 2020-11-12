//  CONDITIONAL STATEMENT : if... else...
// program juga perlu untuk melaksanakan perintah berdasarkan kondisi
//  syntax
/**  if (conditional) {perintah di dalam {} akan dijalankan} else {} jalan ketika condition not met / false*/
//case : ganjil atau genap ?
let angka = 19
if (angka % 2 == 0) {
console.log("ini angka genap")
} else {console.log("ini angka ganjil")}

//  CASE : check angka lebih besar dari 0
let number = 0
if (number >0) {
    console.log("ini angka positif.")
} else {
    console.log("ini angka negatif.")
}

// Multiple Condition
// CASE : menampilkan grade : excelent (>= 80) , Good (>= 60), Bad (<= 60)

let nilai = 55
if (nilai >= 80) {
console.log("Excelent")
} else if (nilai >= 60) {
 console.log("Good") }
  else {
            console.log("Bad")
        }

// NOTE : else tidak membutuhkan kondisi

// CASE 2: check umur untuk masuk bioskop untuk nonton film genre action 18+
// input : tahun lahir
// output : umur > 18 : console boleh masuk, < 18, tidak boleh masuk
let tahunLahir = 2005

// hitung umur
let date = new Date() // get waktu saat ini
let umur = date.getFullYear() - tahunLahir

// check condition
if (umur >= 18) {
    console.log("Boleh Masuk")
} else {
    console.log("Tidak Boleh Masuk")
}
//  tugas no 2,4,6,10,13