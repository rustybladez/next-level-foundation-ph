// Optional Chaining & Nullish Coalescing (?., ??, Safe Property Access)

let user1 = {
    name: "John",
    address: {
        city: "Dhaka"
    }
}

let user2 = {
    name: "Doe"
    // no address
}

// optional chaining ?

console.log(user1.address.city) // Dhaka
console.log(user2?.address?.city)

// nullish coalescing ??         used in case of undefined or null

console.log(user2?.address?.city ?? "Bogura")