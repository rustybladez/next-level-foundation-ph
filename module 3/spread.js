// Spread Operator - three Dot

// let newArr = [...oldArr]
// let newObj = {...oldObj}

let cart = ["fruits", "rice"]

//cart.push("egg")

let cart2 = [...cart, "egg"]

console.log(cart, cart2)

const personalInfo = {
    name: "John",
    age: 22
}

const contactInfo = {
    email: "john@gmail.com",
    phone: "01723438234"
}

const fullProfile = {
    ...personalInfo,
    ...contactInfo,
    zip: 1216
}

console.log(fullProfile)

