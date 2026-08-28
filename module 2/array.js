// array

let names = ["Shafayet", "Mir", "Imun", "Ravi", "Mezba"]

let number = [100, 200, 250, 300, 600]

console.log(names)
console.log(names[0])
console.log(names[4])

console.log(names[0], number[0])

console.log(names.length)

names.push("Rakib")
names.push("Farsit")
console.log(names)

names.pop()
console.log(names)

names.unshift("Ahmad")

console.log(names)

names.shift()

console.log(names)

// splice(startindex, deleteCount, elements to enter)

names.splice(1, 0, "Farsit")
console.log(names)

names.splice(1, 1, "Amzad")
console.log(names)