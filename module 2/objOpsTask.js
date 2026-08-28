// task koto gulo item kinechen and koto tk bill hoyeche shese BDT te dekhate hobe print kore

let cart = [
    {name: "Shirt", price: 1200, quantity: 2},
    {name: "Pants", price: 1800, quantity: 1},
    {name: "Socks", price: 150, quantity: 3}
]

let itemsBought = 0
let totalBill = 0

for (let item of cart) {
    console.log(item)
    totalBill += item.price
    itemsBought++
}

console.log(`Total items bought: ${itemsBought}`)
console.log(`Total Bill: ${totalBill} BDT`)

