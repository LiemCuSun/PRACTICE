// TODO task to perform
// * Write program that print following pattern input = 4
/**        0    
 *       1 0 1
 *     2 1 0 1 2
 *   3 2 1 0 1 2 3
 * 4 3 2 1 0 1 2 3 4
*/

let n6 = 4
let pattern7 = ""
let temp7 = 0
let temp7b = 0
let temp7c = 1

for (let i = n6; 0 <= i; i--) {
    for (let j = 0; j <= n6; j++) {
        if ( j == n6) {
            pattern7 += 0 
        } else if (j < i) {
            pattern7 += " "
        } else if (j === i) {
            pattern7 += temp7
        } else if (j > i) {
            pattern7 += temp7 - 1 - temp7b
            temp7b ++
        }
    }
    for (let k = n6; 0 < k; k--) {
        if (i == n6) {
            pattern7 += " "
        } else if (k > i) {
            pattern7 += temp7c
            temp7c ++
        } else {
            pattern7 += " "
        }
    }
    pattern7 += "\n"
    temp7 += 1
    temp7b = 0
    temp7c = 1
}
console.log(pattern7)


let inp = 7
let pattern = ""

for (let i = 0; i < inp; i++) {
    for (let j = 0; j <= i; j++) {
        if ( i % 2 == 0) {
            pattern += "* "
        } else {
            pattern += "# "
        }
    }
    pattern += "\n"
}
console.log(pattern)