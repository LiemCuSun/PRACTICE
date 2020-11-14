// class Products {
//     constructor(namaproduk, harga, stock) {
//         this.namaproduk = namaproduk,
//             this.harga = harga,
//             this.stock = stock
//     }
// }

// let produk = []
// produk.push(new Products("Apple 🍎", 20000, 30))
// produk.push(new Products("Orange 🍊", 15000, 25))
// produk.push(new Products("Grape 🍇", 21000, 28))

// console.log(produk)

// produk[0].namaproduk = "Ayam"

// console.log(produk)

// console.log(null === undefined)

// let x = 6

// console.log(x +++ 3, x+++ 1, x)

// TODO task to perform
// * Write program that print following pattern input = -5
/** 1 2 3 4 5
 *  2 3 4 5 1
 *  3 4 5 2 1 
 *  4 5 3 2 1
 *  5 4 3 2 1
 */

let n5 = 5
let a1 = 0
let b1 = 0
let pattern6 = ""

for (let i = n5; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
        pattern6 += j + a1 + 1 + " "
    }
    // for (let k = 0; k <= a1; k++) {
    //     pattern6 += n5 - k +  " "
    // 
    pattern6 += " \n"
    a1 += 1
}
console.log(pattern6)