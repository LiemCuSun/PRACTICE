// let z='';
// for (let i=0; i < 5; i++){
//         z += ' * '
// }
// console.log(z)

// let x=''
// for (let a=0; a < 5; a++){
// 	x += ' * ' + '\n' + ' * * *'
// }console.log(x)

let n = 4
let pattern4 = ""
for (let g = 0; g < n; g++) {
    for (let a = 0; a < n; a++) {
        pattern4 += " * "
    }
    pattern4 += "\n"
}
console.log(pattern4)
    
let x = 4
let pattern5 = ""
for (let i = 0; i < x; i++) {
    for (let j = 0; j <= i; j++) {
        pattern5 += " * "
    }
    pattern5 += "\n"
}
console.log(pattern5)




/*     Pattern

    * * * *
    * * *
    * *
    *

*/

let z = 4
let pattern3 = ""
for (let b = z; b > 0; b--) {
    for (let c = b; c > 0; c--) {
        pattern3 += " * "
    }
    pattern3 += "\n"
}
console.log(pattern3)

let pattern2 = ""
for (let b = 0; b < z; b++) {
    for (let c = 3; c >= b; c--) {
        pattern2 += " * "
    }
    pattern2 += "\n"
}
console.log(pattern2)

//  Pattern Pohon Natal

//      *
//     ***
//    *****
//   *******

let pattern1 = ""
for (let i = 0; i < n; i++) {
    //  looping untuk isi spasi
    for (let j= 2; j >= i; j--) {
        pattern1 += " "
    }
    //  looping untuk isi bintang
    for (let k = 0; k < 2 * i + 1; k++) {
        pattern1 += "*"
    }
    // buat baris baru
    pattern1 += "\n"
}

console.log(pattern1)




//   LABEL LOOP = Penamaan LABEL bebas "label" : for

outside : for (let i = 0; i < n; i++) {
    inside : for (let j = 0; j < n; j++) {
        console.log(`${i} ${j}`)
        //  break tanpa pake label
        //  otomatis break akan memberhentikan loop yang akan membungkusnya
        break inside    
    }
}

