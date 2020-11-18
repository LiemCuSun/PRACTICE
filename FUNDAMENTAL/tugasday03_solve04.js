// variable 1 bulan = 30 hari dan 1 tahun = 360
// CASE nyatakan 485 hari dalam tahun, bulan dan hari

let tahun = 360
let bulan = 30
let minggu = 7
let hari = 1

let hitungTanggal = 485
let hitungTanggalBulan = 485 - tahun
console.log(hitungTanggalBulan)
let hitungTanggalMinggu = 485 - tahun - hitungTanggalBulan
console.log(hitungTanggalMinggu)
let hitungTanggalHari = 485 - tahun - hitungTanggalBulan - hitungTanggalMinggu
console.log(hitungTanggalHari)

// Output 485 hari di convertion langsung di hitung dengan 1 log
console.log(`485 hari adalah ${Math.round(hitungTanggal/tahun)} tahun, 
${Math.round(hitungTanggalBulan/bulan)} bulan,
${Math.round(hitungTanggalMinggu/minggu)} minggu dan
${Math.round(hitungTanggalHari/hari)} hari`)