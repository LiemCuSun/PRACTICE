// !tugas day 07 :
// ! No. 1 buatlah sebuah fungsi untuk menghitung huruf vocal => return total huruf vocal
//     - countVocal("Purwadhika") // 3 => u, a, i
//     - countVocal("javascript") // 2 => a, i


function huruf1 () {
    let huruf = "Purwadhika"
    let hurufSplit = huruf.split("")
    let vocal1 = []
    let vocal_count = 0
    for(let i= 0; i < hurufSplit.length; i++) {
    if (hurufSplit[i] == "a" ||hurufSplit[i] == "i" ||hurufSplit[i] == "u" ||hurufSplit[i] == "e" ||hurufSplit[i] == "o") {
        vocal_count++
    }
    }
    console.log(vocal_count)
}

huruf1 ()


// ! No.2 buatlah sebuah function untuk menghapus huruf vocal
//     - removeVocal("reactjs") // "rctjs"
//     - removeVocal("hello") // "hll"

function huruf2 (z) {
    let huruf = z
    let hurufSplit = huruf.split("")
    let vocal1 = []
    let vocal2 = []
    for(let i= 0; i < hurufSplit.length; i++) {
    if (hurufSplit[i] == "a" ||hurufSplit[i] == "i" ||hurufSplit[i] == "u" ||hurufSplit[i] == "e" ||hurufSplit[i] == "o") {
        vocal1.push(hurufSplit[i])
    } else {
        vocal2.push(hurufSplit[i])
    }
    }
    console.log(vocal2.join(""))
}

huruf2 ("Strawberry")

//! No.3 buatlah fungsi untuk alternating case 
//     - input : "heLLO wOlRd" => output : "HEllo WoLrD"

// function huruf3 (z) {
//     let huruf = z
//     let index = 0
//     let hurufSplit = huruf.split("")
//     let word1 = []
//     let word2 = []
//     for(let i= 0; i < hurufSplit.length; i++) {
//         word1.push(hurufSplit[i].codePointAt(index))
//         if (word1[i] > 97) {
//             word1[i].toUpperCase()
//         } else {
//             word1[i].toLowerCase()
//         }
//         }
    
//     console.log(word1)
// }

// huruf3 ("hELLO wOlRd")

function huruf4 (z) {
    let huruf = z
    let res = ""
    let c = ""
    for (let i = 0; i < huruf.length; i++) {
        c = huruf[i]
        if (c == c.toUpperCase()) {
            res += c.toLowerCase()
        } else {
            res += c.toUpperCase()
        }

    } console.log(res)
}

huruf4 ("jaVA SCRipt")

//! No.4 buatlah fungsi untuk menghitung duplicate charcter di dalam sebuah string
//     - input : "i love javascrpt" => output : 2 => ada 2 huruf yg duplicate "a, v"

function huruf5 (z) {
    let huruf = z
    let hurufunik = []
    let hurufunik2 = []
    for (let i = 0; i < huruf.length; i++) {
        if (hurufunik.indexOf(huruf[i]) == -1) {
            hurufunik.push(huruf[i])
        } else {
            hurufunik2.push(huruf[i])
        }
    } console.log(hurufunik2)
}

huruf5 ("i love javascrpt")

