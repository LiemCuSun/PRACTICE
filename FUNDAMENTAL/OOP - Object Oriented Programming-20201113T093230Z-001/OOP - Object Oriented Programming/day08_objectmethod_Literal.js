// NOTE :
//METHODS : 
// function yang ada di dalam object

// NOTE :
// ANALOGI METHOD :
// Real object in real world, everything you see is an object
// Properties (lebih ke kata ketenrangan) => 
//              described about the object itself (menggambarkan object yg kitas lihat)
// Method lebih ke sifat dan kata kerja
// OBJECT : Olaf
// PROPERTIES :
// - hidung : wortel
// - pake_baju : false
// - rambut : ranting
// METHODS :
// - bernyanyi
// - menari

// CASE : OBJECT => orang/people/human
//
let orang = {
        nama : 'elsa',
        gender : 'female', 
        age : 17,
        berlari : function () {
            console.log('orang ini bisa berlari')
        }
}
console.log(orang.nama)
orang.berlari() // invoke / memanggil function/method dalam object

// ADD NEW METHOD TO OBJECT orang
orang.bernyanyi = function () {
    console.log('orang ini sedang bernyanyi')
}
console.log(orang)
orang.bernyanyi()

// NOTE :
// KENAPA HARUS PAKE METHOD
// CASE : Simpan data user dalam bentuk object dengan data sbg brkut
// nama : andre, sekolah : purwadhika, tahun-lahir : 1998
//let user = {nama : "andre", sekolah : 'purwadhika', tgl : 1998}

// sometimes, kita mau itung umur tanpa dikasitau tanggal
// method disini bisa dipakai untuk mengkalkulasi atau menghitung value yg suatu saat dibutuhkan
// tetapi valuenya tidak perlu disimpan

// this ? key binding. buat nandain kalau sy mau ambil properti yg ada didlm object ini
// this nandain tahun ini punya object user (kalo gapake this nanti dia narik tahun dr object lain)

let users4 = {
    nama : "andre",
    sekolah : 'purwadhika',
    tahun : 1998,
    umur : function () {
        let today = new Date().getFullYear()
        let umur = today - this.tahun

        // give a return value
        return umur
    }
}
console.log(users4)
console.log(users4.nama)
console.log(users4.sekolah)
console.log(users4.umur())