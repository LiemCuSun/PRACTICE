class Products {
    constructor(namaproduk, harga, stock) {
        this.namaproduk = namaproduk,
            this.harga = harga,
            this.stock = stock
    }
}

let produk = []
produk.push(new Products("Apple 🍎", 20000, 30))
produk.push(new Products("Orange 🍊", 15000, 25))
produk.push(new Products("Grape 🍇", 21000, 28))

console.log(produk)

produk[0].namaproduk = "Ayam"

console.log(produk)

console.log(null === undefined)

let x = 6

console.log(x +++ 3, x+++ 1, x)