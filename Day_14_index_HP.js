// menampilkan data ke table => access table
function ShowProducts(idx) {
    let table = document.getElementById("daftar-produk")
    console.log(table)

    let table1 = document.getElementById("daftar-chart")
    console.log(table1)

    let tbody = table.getElementsByTagName("tbody")[0]
    console.log(tbody)

    let tbody1 = table1.getElementsByTagName("tbody")[0]
    console.log(tbody1)

    let tr = ""
    let tr1 = ""
    for (let i = 0; i < dataProduk.length; i++) {
        if (idx === i) {
            tr += `
                    <tr>
                        <td></td>
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
                    </tr>
                `
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
                            <button class="add-to-chart" onclick="OnButtonCart(${i})">ADD TO CART</button>
                        </td>
                    </tr>
                `
        }
    }

    for (let j = 0; j < DataChart.length; j++) {
        if (idx === j) {

            tr1 += `
                    <tr>
                        <td></td>
                        <td>
                            <input id="edit-nama1" type="text" value="${dataProduk[j].name}">
                        </td>
                        <td>
                            <input id="edit-img1" type="text" value="${dataProduk[j].img}">
                        </td>
                        <td>
                            <input id="edit-harga1" type="number" value="${dataProduk[j].harga}">
                        </td>
                        <td>
                            <input id="edit-quantity" type="number" value="1">
                        </td>
                        <td>
                            <input id="edit-total" type="number" value="${dataProduk[j].harga}">
                        </td>
                        <td>
                            <button onclick="OnButtonSave(${j})">SAVE</button>
                            <button onclick="OnButtonCancel()">CANCEL</button>
                        </td>
                    </tr>
                `
        } else {
            tr1 += `
                    <tr>
                        <td>${j + 1}</td>
                        <td>${DataChart[j].name}</td>
                        <td>
                            <img src="${DataChart[j].img}" height="60px">
                        </td>
                        <td>${DataChart[j].harga}</td>
                        <td>${DataChart[j].quantity}</td>
                        <td>${DataChart[j].total()}</td>
                        <td>
                            <button class="delete-chart" onclick="OnButtonDeleteChart(${j})">DELETE</button>
                            <button onclick="OnButtonEditChart(${j})">EDIT</button>
                        </td>
                    </tr>
                `
        }
    }
    tbody.innerHTML = tr
    tbody1.innerHTML = tr1

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

// delete produk
// dataProduk.splice(2, 1)
// console.log(dataProduk)

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

// TUGAS :
// kalau misalkan button add to cart di klik
// tampilkan table user cart
function OnButtonCart(index) {
    if (dataProduk[index].stok != 0) {
        console.log("button cart di klik")
        console.log(index)
        console.log(DataChart.length)

        // copy semua property dari dataProduk[index]
        let produk = { ...dataProduk[index] }
        // bikin variable untuk menampung index dari data produk
        let chartIndex


        // cari data produk yang sama di user cart
        for (let i = 0; i < DataChart.length; i++) {
            if (DataChart[i].name === produk.name) {
                chartIndex = i
            }
        }

        // alert kalau produk == 0 tidak bisa di add to chart

        // add produk ke chart
        if (chartIndex !== undefined) {
            DataChart[chartIndex].quantity += 1
            dataProduk[index].stok -= 1
        } else {
            DataChart.push(new ProdukChart(
                DataChart.length + 1,
                dataProduk[index].name,
                dataProduk[index].img,
                parseInt(dataProduk[index].harga),
                parseInt("1"),
                parseInt(`${dataProduk[index].harga * 1}`)
            ))
            dataProduk[index].stok -= 1
        }


        // tampilkan ulang table produk
        ShowProducts()
    } else if (dataProduk[index].stok == 0) {
        alert("Stock telah habis")
    }
}


// CETAK RECEIPT
function onButtonCetak() {
    console.log("button cetak di klik")
    let userchart = { ...DataChart }
    console.log(userchart)
    let receipt = document.getElementById("receipt")
    // cetak receipt
    let output = "Receipt : <br>"
    let total = 0

    for (let i = 0; i < DataChart.length; i++) {
        output += `${i + 1}. ${userchart[i].name} x ${userchart[i].quantity} = ${userchart[i].total()} <br>`
        total += userchart[i].total()
    }

    output += `<br> Total belanja : Rp ${total},00`
    // tampilkan di HTML
    receipt.innerHTML = output

    // disable button delete and add to chart
    let btnDelete = document.getElementsByClassName("delete-chart") // HTML collection
    for (let i = 0; i < btnDelete.length; i++) {
        btnDelete[i].disabled = true
    }
    let btnAddChart = document.getElementsByClassName("add-to-chart") // HTML collection
    for (let item of btnAddChart) {
        // console.log(item)
        item.disabled = true
    }


}

function OnButtonDeleteChart(index) {
    console.log("delete button executed")
    let userchart = { ...DataChart[index] }
    // console.log(userchart)

    let quantity = userchart.quantity
    // console.log(quantity)
    // copy semua property dari dataProduk[index]
    let produk = { ...dataProduk[index] }
    // bikin variable untuk menampung index dari data produk
    let chartIndex

    // cari data produk yang sama di user cart
    for (let i = 0; i < DataChart.length; i++) {
        if (DataChart[i].name === produk.name) {
            chartIndex = i
        } console.log(chartIndex)
    }

    if (DataChart[index].quantity <= 1) {
        // delete produk yang ada id cart
        DataChart.splice(index, 1)
        dataProduk[chartIndex].stok += 1
    } else {
        DataChart[index].quantity -= 1
        dataProduk[chartIndex].stok += 1
    }

    // disable button cetak ketika chart kosong
    let btnChartKosong = document.getElementById("RECEIPT-BTN") // HTML collection
    console.log(btnChartKosong)
    if (DataChart.length == 0) {
        btnChartKosong.disabled = true
    }
    


    // tampilkan ulang tampilan
    ShowProducts()
}

// Checkout
function OnButtonCheckOut() {
    console.log("button check out executed")
}