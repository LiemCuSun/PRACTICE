// tugas untuk latihan
// - input str = "hello dunia" => output => "eouia"
let str = "hello dunia"
let strSplit = str.split("")
console.log(strSplit)
let vocal = []

for(let i= 0; i < strSplit.length; i++) {
    if (strSplit[i] == "a" ||strSplit[i] == "i" ||strSplit[i] == "u" ||strSplit[i] == "e" ||strSplit[i] == "o") {
        vocal.push(strSplit[i])
    }
}
console.log(vocal)

// - input str = "javascript" => output => 3 (hitung huruf vocalnya)

let vocal1 = []
let vocal_count = 0

for(let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] == "a" ||strSplit[i] == "i" ||strSplit[i] == "u" ||strSplit[i] == "e" ||strSplit[i] == "o") {
        vocal.push(strSplit[i])
        vocal_count++
    }
}
console.log(vocal_count)

// - input str = "purwadhika" => output => "aadhikpruw" (urutkan berdasrkan a-Z)
let kata = "purwadhika"
let splitKata = kata.split("")
splitKata.sort()
console.log(splitKata.join(""))

// - check palindrom ? input string => output => boolean true or false
//     - palindrom = kata kalau misal dibalik bunyinya tetap sama
//     - "wow" <=> "wow"
//     - "katak" <=> "katak"
//     - "takut" <!=> bukan palindrom


// - NOTE : gunakan for/while/do...while

