// reduce, sort, chaining

let products = [
    {title: "Mouse", price: 500, inStock: true},
    {title: "Keyboard", price: 1200, inStock: false},
    {title: "Monitor", price: 8000, inStock: true},
    {title: "Headphone", price: 1500, inStock: true},
]

let totalPrice = products.reduce((acc, current) => {
    return (acc += current.price)
}, 0)

console.log(totalPrice)

let sortedList1 = [10, 30, 600, 35, 900, 20].sort((a, b) => a - b) // ascending
let sortedList2 = [10, 30, 600, 35, 900, 20].sort((a, b) => b - 1) // descending

let sorted = products.sort((a, b) => a.price - b.price) // ascending

let estPrice = products.filter((p) => p.inStock == true).reduce((acc, curr) => {
    return acc += curr.price
}, 0)

console.log(estPrice)