// add to cart
function OnButtonAddToCart (index) {
    // console.log(`button ke-${index} add to cart di klik`)
    console.log("data yang mau dimasukan", dataProduk[index].name)
    let produk = {...dataProduk[index]} 
    // saya mau copy semua properties dari dataProduk[index]
    console.log(produk)
    let cartIndex // variable ini akan dipakai untuk menampung index dari data produk yang sudah ada di cart

    // cari data produk yang sama di user cart
    for (let i = 0; i < userCart.length; i++) {
        if (userCart[i].name === produk.name) {
            cartIndex = i
        }
    }

    // check apakah stok produk yang ingin kita masukan
    // ke dalam cart masih ada
    if (dataProduk[index].stok === 0) {
        alert("⚠ stock kosong.")
    } else {
        // add produk ke cart
        if (cartIndex !== undefined) {
            userCart[cartIndex].quantity += 1
        } else {
            userCart.push(
                new ProdukCart (
                    userCart.length + 1,
                    dataProduk[index].name, 
                    dataProduk[index].img, 
                    dataProduk[index].harga,
                    1
                )
            )
        }

        // kita kurangi stok
        dataProduk[index].stok -= 1
    }


    console.log("cart setelah di add", userCart)

    // enable button cetak receipt
    let button = document.getElementById("cetak")
    if (button.disabled === true) {
        button.disabled = false
    }

    // tampilkan data userCart di HTML
    ShowProducts()
    ShowUserCart()
}

// show user cart
function ShowUserCart () {
    // get access table body
    let table = document.getElementById("user-cart")
    let tbody = table.getElementsByTagName("tbody")[0]
    // console.log(table)
    // console.log(tbody)

    // tambahkan baris baru sesuai banyaknya produk di userCart
    let tr = ""
    for (let i = 0; i < userCart.length; i++) {
        tr += `
            <tr>
                <td>${i + 1}</td>
                <td>${userCart[i].name}</td>
                <td>
                    <img src="${userCart[i].img}" height="60px">
                </td>
                <td>${userCart[i].harga}</td>
                <td>${userCart[i].quantity}</td>
                <td>${userCart[i].total()}</td>
                <td>
                    <button class="delete-cart" onclick="OnButtonDeleteCart(${i})">DELETE</button>
                </td>
            </tr>
        `
    }

    // tambahkan ke tbody
    tbody.innerHTML = tr
}

// delete produk di cart
function OnButtonDeleteCart (index) {
    console.log(`button ke-${index} delete cart di klik`)

    // cari index dari nama produk yang ada di cart index ke-index
    // di daftar produk
    let idxProduk = dataProduk.findIndex((item) => item.name === userCart[index].name)
    // for (let i = 0; i < dataProduk.length; i++) {
    //     if (dataProduk[i].name === userCart[index].name) {
    //         idxProduk = i
    //         break
    //     }
    // }


    // delete produk yang ada id cart
    // check apakah quantity produk di userCart masih ada
    if (userCart[index].quantity === 1) {
        userCart.splice(index, 1) // hapus produk di cart
    } else {
        userCart[index].quantity -= 1 // kurangi quantity produk di cart by 1
    }

    // balikin stok ke daftar produk
    dataProduk[idxProduk].stok += 1

    // disable button cetak receipt jika cart kosong
    let button = document.getElementById("cetak")
    if (userCart.length === 0) {
        button.disabled = true
    }

    

    // tampilkan ulang cart
    ShowProducts()
    ShowUserCart()
}
