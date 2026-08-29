let students = [
    {name: "John", marks: 85},
    {name: "Tom", marks: 45},
    {name: "Jerry", marks: 70}
]

let fruits = ["Apple", "Banana", "Mango", "Jackfruit"]

// find

let customFruit = fruits.find((f) => f.length > 5)

console.log(customFruit)

let findFr = fruits.includes("Mango")

console.log(findFr)

findFr = fruits.includes("Mangoes")

console.log(findFr)

let studentCheck = students.some((s) => s.marks > 80)

console.log(studentCheck)

studentCheck = students.every((s) => s.marks > 80)

console.log(studentCheck)