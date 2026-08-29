// foreach, map

// foreach

let fruits = ["Apple", "Banana", "Mango", "Jackfruit"]

let newFruits = fruits.forEach((f, idx) => {
    console.log(`${idx + 1} -> ${f}`)
})

// foreach CANNOT return

let newFruits2 = fruits.map((f, idx) => {

    return `${idx + 1} -> ${f}`

})

console.log(newFruits2)

let newFruits3 = fruits.map((f) => f.toLowerCase())

console.log(newFruits3, "\n", fruits)

let customFruits = fruits.filter((f) => f.length > 5)

console.log(customFruits)