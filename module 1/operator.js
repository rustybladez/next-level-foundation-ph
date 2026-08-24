// Arithmetic operators + - * / % ()
// Assignment operators == += -= *= /=
// Comparison operators
// Logical operators && || 


const a = 10
const b = 3

const sum = a + b
// console.log(sum)

const division = a / b

console.log(division)
console.log(division.toFixed(2))
console.log(typeof(division.toFixed(2)))

const rmndr = a % b
console.log(rmndr)

// a + b - (c + f) * d / e

// sum = sum + 10; sum += 10

let c = a>b
console.log(c)
c = a<b
console.log(c)
c = a==b
console.log(c)

let d = a > b && 10
console.log(d)

d = (a < b) && 10
console.log(d)

d = !(a < b) && 10
console.log(d)