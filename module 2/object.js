// object

let user = {
    name: "Shafayet",
    age: 25,
    address: "Dhaka"
}

console.log(user)

console.log(user.name)

console.log(user["name"]) // user[`${}`]

delete  user.address
console.log(user)

user.address = "Bangladesh"

console.log(user)

user.address = {
    city: "Dhaka",
    area: "Mirpur"
}

console.log(user)

console.log(Object.entries(user))
console.log(Object.keys(user))
console.log(Object.values(user))