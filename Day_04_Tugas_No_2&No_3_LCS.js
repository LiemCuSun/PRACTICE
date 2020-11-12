// Tugas no 2
// CASE: buat program untuk menampilkan deret fibonanci, dimulai dari 0 - 25
// 0, 1, 1, 2, 3, 5, 8, 13, ...

let number = 9
let n1 = 0, n2 = 1, nextTerm;

//Output
console.log('fibonaci')
for (let a = 1; a <= number; a++) {
    console.log(n1)
    nextTerm = n1 + n2
    n1 = n2
    n2 = nextTerm
}

// Cara kedua fibonaci
let initialValue = 0
let currentValue = 1
console.log(initialValue)
console.log(currentValue)

while (true) {
    // ** simpan old current value
    let temp = currentValue

    // ** update value
    currentValue += initialValue // ** artinya currentValue = currentValue + initialValue
    initialValue = temp
    // ** check value
    if (currentValue > 25) {
        break
    }
    console.log(currentValue)
}



// Tugas no 3
// CASE : buat program untuk menampilkan angka genap dan angka ganjil, dari 0 - 25

for (let i = 0; i <= 25; i++) {
    if (i % 2 == 0) {
        console.log(i + ' adalah angka bilangan genap')
    } else {
        console.log(i + ' adalah angka bilangan ganjil')
    }
}

