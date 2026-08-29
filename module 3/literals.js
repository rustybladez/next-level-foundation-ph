// feel the real power of template literals

// Math expression

let price = 500

let quantity = 3

console.log(`Total price: ${price * quantity} taka\nPay the price to get it now`)

// function call

function getDiscount(price) {

    return price * 0.1
    
}

console.log(`You saved: ${getDiscount(price)} taka\nYour total bill is now ${price * quantity - getDiscount(price)}\nUse this as an investment`)

let stock = 5  

console.log(`Status: ${stock > 0 ? "In stock" + " " + stock: "Out of stock" }`)

