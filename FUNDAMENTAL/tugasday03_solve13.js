let massa = 49
let tinggi = 1.60
let IMT = massa / tinggi**2 

console.log(`Massa ${massa} kg & Tinggi ${tinggi} m
IMT = ${IMT}`)

// if(IMT < 18.5) {
//     console.log("BERAT BADAN KURANG !");
// } else if(IMT <= 24.9) {
//     console.log("BERAT BADAN IDEAL !");
// } else if(IMT <= 29.9) {
//     console.log("BB BERLEBIH!");
// } else if(IMT <= 39.9) {
//     console.log("BB SANGAT BERLEBIH !");
// } else {
//     console.log("OBESITAS !!!!");
// }

switch(true) {
    case (IMT < 18.5) :
    console.log('BERAT BADAN KURANG !')
        break
    case (IMT <= 24.9) :
    console.log('BERAT BADAN IDEAL !')
        break
    case (IMT <= 29.9) :
    console.log('BB BERLEBIH!')
        break
    case (IMT <=39.9) :
    console.log('BB SANGAT BERLEBIH !')
        break
    default :
    console.log('OBESITAS !!!!')
}
