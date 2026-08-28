// loop -> for while

for(let i = 0; i < 5; i++) {
    console.log(`Count: ${i}`)
}

console.log("--------------------------------")

for(let i = 4; i >= 0; i--) {
    console.log(`Count: ${i}`)
}

console.log("--------------------------------")

let fruits = ["Mango", "Jack", "Apple", "Orange"]

for(let i = 0; i < fruits.length; i++) {
    console.log("Khabo:", fruits[i])
}

console.log("--------------------------------")

let j = 0

while(j < fruits.length) {
    console.log("Khabo:", fruits[j])
    j++
}