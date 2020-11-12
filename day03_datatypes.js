// BOOLEAN : data type yang hanya mempunyai 2 value (true or false)
let boolean = true
boolean = false

// null and undefined
//  null => value null (kosong) => object
// undefined => value belum terisi / belum ada value
let number // ini belum ada value = undefined

// check data type ? => typeOf
let angka = 100
let pecahan = 3.14
let kata = "Purwadhika"
let idunno = null

console.log(typeof(number))
console.log(typeof angka)
console.log(typeof pecahan)
console.log(typeof kata)
console.log(typeof idunno)

console.log(typeof(number + angka)) // undefined + number = number

//  type conversion => konversi dari satu data type ke data type lainnya
//  KONVERSI TO STRING
//  - method .toString()
//  - apapun jika ditambah string maka hasilnya akan string
let ganjil = 3 // number
let stringGanjil = ganjil.toString() // data type => string
console.log(ganjil)
console.log(typeof ganjil)
console.log(stringGanjil)
console.log(typeof stringGanjil)

//  BOOLEAN to String
let salah = false
let benar = true
let strSalah = salah.toString()  // => "false" / 'false' / `false`
console.log(typeof strSalah)

// cara ke-2 dan ke -3
console.log(typeof(ganjil + ""))
console.log(typeof(benar + ``))
console.log(typeof(`${benar}`))

console.log(ganjil + "") // hasil ganjil tetap 3, tapi data jadi string untuk typenya

//  KONVERSI KE NUMBER => parseInt()
// rulesnya adalah string merupakan angka, contoh "26"
// kalau misalnya yg di konversi bukan merupakan string "angka" maka akan jadi NaN (Not a Number)
let angkabenar = "100"
let konversiangkabenar = 
let angkasalah = "34B"
console.log(typeof()) // liat catatan lectur, ketinggalan gw gara2 AIA BANGSAT TELPON BIKIN KESEL





