// menampilkan data ke table => access table
function ShowProducts(index) {
    console.log("index", index)
    let table = document.getElementById("daftar-produk")
    console.log(table)

    let tbody = table.getElementsByTagName("tbody")[0]
    console.log(tbody)

    let tr = ""
    for (let i = 0; i < dataProduk.length; i++) {
        if (index === i) {
            tr += `
                <tr>
                <td>#</td>
                <td>
                <input id="edit-nama" type="text" value="${dataProduk[i].name}">
                </td>
                <td>
                <input id="edit-img" type="text" value="${dataProduk[i].img}">
                </td>
                <td>
                <input id="edit-harga" type="number" value="${dataProduk[i].harga}">
                </td>
                <td>
                <input id="edit-stock" type="number" value="${dataProduk[i].stok}">
                </td>
                <td>
                <button onclick="OnButtonSave(${i})">SAVE</button>
                <button onclick="OnButtonCancel()">CANCEL</button>
                </td>
                </tr>`
        } else {
            tr += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${dataProduk[i].name}</td>
                    <td>
                        <img src="${dataProduk[i].img}" height="60px">
                    </td>
                    <td>${dataProduk[i].harga}</td>
                    <td>${dataProduk[i].stok}</td>
                    <td>
                        <button onclick="OnButtonDelete(${i})">DELETE</button>
                        <button onclick="OnButtonEdit(${i})">EDIT</button>
                        <button class="add-to-cart" onclick="OnButtonAddToCart(${i})">ADD TO CART</button>
                    </td>
                </tr>
            `
        }
    }
    tbody.innerHTML = tr
}
ShowProducts()

// add new produk saat button add di klik
// dataProduk.push(new Produk(dataProduk.length + 1, "Samsung Galaxy Fold 2", "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold2-5g-2.jpg", 29000000, 2))
// console.log(dataProduk)
// ShowProducts()

function OnButtonAdd(e) {
    console.log("event", e)
    e.preventDefault()
    console.log("add button di klik")

    // get input value
    let form = document.getElementById("produk-baru")
    console.log(form)
    console.log(form["nama"].value)


    // check input value => tidak boleh ada value yang kosong
    // check value dari harga dan stok tidak boleh < 0 atau negatif
    let nama = form["nama"].value
    let img = form["img"].value
    let harga = form["harga"].value
    let stok = form["stok"].value

    if (nama === "" || img === "" || harga === "" || stok === "") {
        alert("input tidak boleh kosong")
    } else {
        // masukan semua value ke daftar produk dalam bentuk object
        dataProduk.push(new Produk(
            dataProduk.length + 1,
            form["nama"].value,
            form["img"].value,
            parseInt(form["harga"].value),
            parseInt(form["stok"].value)
        ))
        console.log(dataProduk)

        // tampilkan ulang produk
        ShowProducts()

        // reset value di form
        form["nama"].value = ""
        form["img"].value = ""
        form["harga"].value = ""
        form["stok"].value = ""
    }

}

// ShowProducts()
function OnButtonDelete(index) {
    console.log(`button index ke-${index} di klik`)

    // delete produk
    dataProduk.splice(index, 1)

    // tampikan ulang produk
    ShowProducts()
}

// edit produk
function OnButtonEdit(index) {
    console.log(`button edit index ke-${index}`)

    // tampilkan table
    ShowProducts(index)
}

// save edited produk
function OnButtonSave(index) {
    console.log("button save di klik")

    // get value dari input data yang mau di edit
    let editNama = document.getElementById("edit-nama").value
    let editImg = document.getElementById("edit-img").value
    let editHarga = parseInt(document.getElementById("edit-harga").value)
    let editStock = parseInt(document.getElementById("edit-stock").value)
    console.log(editNama)
    console.log(editImg)
    console.log(editHarga)
    console.log(editStock)

    // edit daftar produk dengan value baru
    dataProduk[index].name = editNama
    dataProduk[index].img = editImg
    dataProduk[index].harga = editHarga
    dataProduk[index].stok = editStock
    console.log(dataProduk)

    // tampilkan ulang table produk
    ShowProducts()
}

// cancel edit
function OnButtonCancel() {
    console.log("button cancel di klik")

    // tampilkan ulang table produk
    ShowProducts()
}

// add fitur sorting
function OnButtonSort() {
    console.log("button sort di klik")
    let select = document.getElementsByTagName("select")[0].value
    console.log(select)
    // get value dari option
    // let option = "harga"

    // sorting data
    // method .sort() akan jalan untuk array yang isinya number
    if (select == 0) {
        // callback function, untuk sorting by harga
        function sorting(a, b) {
            if (a.harga > b.harga) {
                return 1
            }
            if (a.harga < b.harga) {
                return -1
            }
            return 0
        }
    } else {
        function sorting(a, b) {
            if (a.harga > b.harga) {
                return -1
            }
            if (a.harga < b.harga) {
                return 1
            }
            return 0
        }
    }
    dataProduk.sort(sorting)

    // tampilan ulang produk
    ShowProducts()
}