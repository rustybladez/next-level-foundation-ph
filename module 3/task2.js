let products = [
    {title: "Mouse", price: 500, inStock: true, quantity: 1},
    {title: "Keyboard", price: 1200, inStock: false, quantity: 0},
    {title: "Monitor", price: 8000, inStock: true, quantity: 1},
    {title: "Headphone", price: 1500, inStock: true, quantity: 1},
]

// only In-Stock Product, sort according to ascending Price, only print Title + price, calculate total bill for making it stock out

function filterStockIn(products) {

    return products.filter((p) => p.inStock === true)
    
}

function sortAscending(products) {

    return products.sort((a, b) => a.price - b.price)
    
}

function printTitleAndPrice(products) {
    
    return products.map((p) => `Product: ${p.title}, Price: ${p.price}`)
}

function calculateTotalBill(products) {

    let totalBill = 0

    products.forEach((p) => {
        totalBill += p.price * p.quantity
    })

    return totalBill
    
}

console.log(`Product list in ascending price: ${printTitleAndPrice(sortAscending(filterStockIn(products))).join("\n")}`)
console.log(`Total bill for stocking out: ${calculateTotalBill(products)}`)
// console.log(`Products list (title and price): ${printTitleAndPrice(products)}`)
/*
let finalProducts = products
    ?.filter((p) => p.inStock === true)
    ?.sort((a, b) => a.price - b.price)
    ?.map((p) => `Product: ${p.title}, Price: ${p.price}`)
    // ?.forEach((p) => {
        
    //     totalBill += p.price * p.quantity
    // })

let totalBill = products
    ?.filter((p) => p.inStock === true)
    ?.sort((a, b) => a.price - b.price)
    ?.reduce((acc, current) => {
        return acc += (current.price * current.quantity)
    }, 0)

console.log(finalProducts)
console.log(totalBill)

*/