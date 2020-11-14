// NOTE :
// 2ND METHOD IN OBJECT CLASS
// CLASS => cetakan untuk membuat object yang sama
// CASE : kalau misal saya ingin membuat object dengan bentuk, props/key dan methods yg sama persis
//        maka saya bikin object pakai CLASS

// SYNTAX HOW TO CREATE OBJECT USING CLASS
// syntax : key class
// mau bikin class, disarankan awalan pake huruf besar

class Manusia {
    // create object properies
    constructor (nama, hobi, tahun) {
        this.nama = nama,
        this.hobi = hobi,
        this.tahun = tahun
    }
}

// cara bikin objectnya pakai class
let orang1 = new Manusia('alee', 'dance', 1998)
console.log(orang1)

let orang2 = new Manusia('elsa', 'menyanyi', 1997)
console.log(orang2)

let orang3 = new Manusia('olaf', 'ngerusuh')
console.log(orang3) // tahun : undefined

// CLASS WITH METHOD, HOW ?
class Student {
    constructor (namaDepan, namaBelakang, tahun, alamat, program) {
        this.namaDepan = namaDepan,
        this.namaBelakang = namaBelakang,
        this.tahun = tahun,
        this.alamat = alamat,
        this.program = program
    }
    //CREATE METHOD
    namaLengkap = function () {
        console.log('nama lengkap :' + this.namaDepan + " " + this.namaBelakang)
    }
    umur = function () {
        let today = new Date().getFullYear()
        let age = today - this.tahun
        console.log('umur :' + age)
        return age
    }
}

let student1 = new Student('andre', 'taulany', 1990, 'BSD', 'JCWM')
console.log(student1)
student1.namaLengkap()
student1.umur()

// mau nambahin properti baru (insert new properti)
student1.hobi = 'coding'
console.log(student1)

//delete props
delete student1.alamat
console.log(student1)

// NOTE :
// INHERITANCE = PEWARISAN
// 1. CASE OUTPUT OBJECT TANPA INPUT
// OBJECT secara umum : manusia
// manusia ada 2 jenis : laki laki & perempuan
class Human {
    constructor () {
        this.kepala = true,
        this.mata = 2,
        this.telinga = 2,
        this.kaki = 2
    }
}

// NOTE : 
// Jika saya ingin object yg saya buat pakai class LakiLaki mempunyai props/key dan method
// yg ada di class human, maka sy bisa mewariskan/memberi props/key & method tsb ke class
// LakiLaki
// DENGAN TEKNIK INHERITANCE

class LakiLaki extends Human{
  constructor () {
      super() //kalo mau inherit human ke lakilaki, dlm constructor harus ada super()
      this.gender = 'laki - laki',
      this.berkumis = true
  }
}

let Andre = new LakiLaki ()
Andre.kaki = 'Ada'
console.log(Andre)

// 2. CASE KALAU OBJECT DENGAN INPUT
class Mobil {
    constructor (merk, warna) {
        this.merk = merk,
        this.warna = warna,
        this.roda = 4,
        this.spion = 2
    }
}

class MobilSport extends Mobil {
    constructor (merk, warna) {
        super(merk, warna)
        this.pintu = 2
    }
}

let MobilSport1 = new MobilSport ('Ferrari', 'Red')
console.log(MobilSport1)

let MobilSport2 = new MobilSport ('Lamborghini', 'Black')
console.log(MobilSport2)

let car = new Mobil ('Audi', 'Blue')
console.log(car)