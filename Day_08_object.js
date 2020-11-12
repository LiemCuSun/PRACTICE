//  HOW TO CREATE OBJECT USING CLASS ?
// * Syntax : key class

class Manusia {
    constructor(nama, hobby, tahun) {
        this.nama = nama,
        this.hobby = hobby,
        this.tahun = tahun
    }
}

let orang1 = new Manusia("Cusun", "Gaming", 1994)
let orang2 = new Manusia("elsa", "menyanyi", 1997)
let orang3 = new Manusia("olaf", "merusuh")

console.log(orang3)

// ! CLASS WITH METHOD 
class Student {
    constructor(namaDepan, namaBelakang, tahun, alamat, program) {
        this.namaDepan = namaDepan,
        this.namaBelakang = namaBelakang,
        this.tahun = tahun,
        this.alamat = alamat,
        this.program = program
    }

    // ! Create Metthod
    namaLengkap = function () {
        console.log("nama lengkap : " + this.namaDepan + " " + this.namaBelakang)
    }
    umur = function () {
        let today = new Date().getFullYear()
        let age = today - this.tahun
        console.log("umur : " + age)
        return age
    }

}

let Student1 = new Student("andre", "taulani", 1990, "BSD", "JCWM")
console.log(Student1)
Student1.namaLengkap()
Student1.umur()

// insert new properties
Student1.hobby = "codding"
console.log(Student1)

// delete props
delete Student1.alamat
console.log(Student1)

// nheritance/Pewarisan ?
// 