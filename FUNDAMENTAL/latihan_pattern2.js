// Pattern
/**1 0 0 0 0
 * 0 2 0 0 0
 * 0 0 3 0 0
 * 0 0 0 4 0
 * 0 0 0 0 5
 */

let n = 5
let pattern = ""
for (let g = 1; g <= n; g++) {
    for (let a = 1; a <= n; a++) {
        if(a === g) {
        pattern += `${g} `
    } else {
        pattern += '0 '
    }
    }
pattern += "\n"
}
console.log(pattern)

// Pattern 2
/**1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5 
 */

let pattern1 = ""
for (let g = 1; g <= n; g++) {
    for (let a = 1; a <= g; a++) {
        if(a === g) {
            pattern1 += `${g} `
        } else {
            pattern1 += `${a} `
        }
    }
    pattern1 += "\n"
}
console.log(pattern1)


// Pattern 3
/**1
 * 1 2
 * 1 2 3
 * 1 2 3 5
 * 1 2 3 5 8
 */

let pattern2 = ""
let initial = 0
let current = 1

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        let temp = current
        current += initial
        initial = temp
        pattern2 += `${current} `
    }

    // reset current value
    pattern2 += "\n"
    initial = 0
    current = 1
}

console.log(pattern2)

// ** Pattern4
/** Input 5 => output below :
 *      * * * * a
 *      * * * b a
 *      * * c b a
 *      * d c b a
 * *    e d c b a
 */

let pattern4 = ""
let output = "* "
for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(j >= n - i - 1) {
            output = String.fromCharCode(96 + (n - j)) + " "
        }
        pattern4 += output
    }
    output = "* "
    pattern4 += "\n"
}
console.log(pattern4)

// ! CASE: Input 7
//*          *
//*         1 2
//*        * * *
//*       1 2 3 4
//*      * * * * *
//*     1 2 3 4 5 6
//*    * * * * * * *

let N = 7
let pattern5 = ""

for(let i = 0; i < N; i++) {
    for(let j = N; j > i; j--) { 
        pattern5 += " "
    }
    for(let k = 0; k < i; k++) {
        if(i%2==0) {
            pattern5 += k+1+" "
        } else {
            pattern5 +="* "
        }
    }
    pattern5 += "\n"
}
console.log(pattern5)

