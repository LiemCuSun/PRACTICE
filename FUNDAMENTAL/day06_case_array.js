//  CASE 1 => tolong balik atau reverse()
let str = "javascript" // result => "tpircsavaj"

//  convert from string to array
let strArray = str.split("") // ["j", "a"....] hasilnya di split gini
console.log(strArray)
strArray.reverse()
console.log(strArray)

// convert to string
console.log(strArray.join(""))

//  SHORTCUT => chaining method
console.log(str.split("").reverse().join(""))

// CASE 2 => filter bilangan genap di array berikut ini
let angkaRandom = [1, 12, 3, 4, 1, 5, 7, 9]
let angkaGenap = []

//  for loop
for (let i = 0; i < angkaRandom.length; i++) {
    if (angkaRandom[i] % 2 == 0) {
        angkaGenap.push(angkaRandom[i])
    }
}
console.log(angkaGenap)

// Shortcut => .filter()
let angkaGenapHasilFilter = angkaRandom.filter(item => item % 2 == 0)
console.log(angkaGenapHasilFilter)