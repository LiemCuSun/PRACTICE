// TODO task to perform
// * Write program that print following pattern input = 9
// * 1 -9 2 -8 3 -7 4 -6 5

let n = 9
let out = -9
let pattern1 = ""
let out2 = 1
for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        pattern1 += out + " "
        out += 1
    } else {
        pattern1 += out2 + " "
        out2 += 1
    }
}

console.log(pattern1)

// TODO task to perform
// * Write program that print following pattern input = 7
/** 7
 * 6 7
 * 5 6 7
 * 4 5 6 7
 * 3 4 5 6 7
 * 2 3 4 5 6 7
 * 1 2 3 4 5 6 7
 */

let n1 = 7
let current = 7
let pattern2 = ""

for (let i = 0; i < n1; i++) {
    for (let j = 0; j <= i; j++) {
        pattern2 += current - i + j + " "

    }
    pattern2 += " \n"
}
console.log(pattern2)

// TODO task to perform
// * Write program that print following pattern input = 7
/**          7
 *         6 6
 *       5 5 5
 *      4 4 4 4  
 *    3 3 3 3 3 
 *   2 2 2 2 2 2
 * 1 1 1 1 1 1 1 */

let n2 = 7
let pattern3 = ""

for (let i = 0; i < n2; i++) {
    for (let j = n2; j > i; j--) {
        pattern3 += " "
    }
    for (let k = 0; k <= i; k++) {
        pattern3 += n2 - i + " "
    }
    pattern3 += "\n"
}
console.log(pattern3)

// TODO task to perform
// * Write program that print following pattern input = 7
/** 1 1 1 1 1 1 1
 *  1 1 1 1 1 2 2
 *  1 1 1 1 3 3 3
 *  1 1 1 4 4 4 4
 *  1 1 5 5 5 5 5
 *  1 6 6 6 6 6 6
 *  7 7 7 7 7 7 7
 */


let n3 = 7
let pattern4 = ""
let output = 1
for (let i = 1; i <= n3; i++) {
    for (let j = 1; j <= n3; j++) {
        if (j > n3 - i) {
            output = i
        }
        pattern4 += `${output} `
    }

    pattern4 += "\n"
    output = 1
}

console.log(pattern4)

// TODO task to perform
// * Write program that print following pattern input = -5
/** 123454321
 *  2345432
 *  34543
 *  454
 *  5
 */

let n4 = 5
let a = 1
let pattern5 = ""

for (let i = n4; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        pattern5 += j + a + " "

    }
    for (let k = 0; k < i - 1; k++) {
        pattern5 += n4 - 1 - k + " "
    }
    pattern5 += " \n"
    a += 1
}
console.log(pattern5)

// TODO task to perform
// * Write program that print following pattern input = -5
/** 1 2 3 4 5
 *  2 3 4 5 1
 *  3 4 5 2 1 
 *  4 5 3 2 1
 *  5 4 3 2 1
 */

let n5 = 5
let a1 = 0
let b1 = 0
let pattern6 = ""

for (let i = n5; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
        pattern6 += j + a1 + 1 + " "
    }
    for (let k = 0; k <= a1; k++) {
        pattern6 += n5 - k +  " "
    }
    pattern6 += " \n"
    a1 += 1
}
console.log(pattern6)
