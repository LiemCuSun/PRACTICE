// NOTE :
// CREATE OBJECT USING FUNCTION
// CONSTRUCTOR FUNCTION => membuat object dgn function

// NOTE : function yg dibuat hny boleh dipakai dengan kata kunci 'new'
// BIKIN NAMA NYA HARUS PAKE HURUF BESAR

let Person = function (nama, usia, hobi) {
    // this = {}, scr tidak lgsg bikin object this {}

    this.nama = nama,
    this.usia = usia,
    this.hobi = hobi
    
    //nge return this
}

// CREATE OBJECT USING Person
let orang1 = new Person('anang', 22, 'coding')
console.log(orang1)

let orang2 = new Person()
console.log(orang2)

let orang3 = Person()
console.log(orang3)

Person.prototype.sayName = function () {
    console.log(`Hello, nama saya ${this.nama}`)
}

let orang4 = new Person('Andre', 19, 'MC')
console.log(orang4)
orang4.sayName()

// NOTE :
// CREATE CUSTOM FUNCTION THAT RETURN AS AN OBJECT

function ObjectSepeda (merk, harga, jenis) {
    // create object kosong
    let obj = {}

    // buat prop/key object
    obj.merk = merk,
    obj.harga = harga,
    obj.jenis = jenis

    //return obj
    return obj
}

let SepedaLipat = ObjectSepeda('Brompton', 12000000, 'Sepeda Lipat')
console.log(SepedaLipat)