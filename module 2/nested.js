let user = {
    name: "Shafayet",
    age: 25,
    address: {
        city: "Dhaka",
        area: "Mirpur",
        zipcode: 1216
    }
}

console.log(user["address"])
console.log(user["address"].zipcode)
console.log(user["address"]["zipcode"])
console.log(user.address.zipcode)

let entry = Object.entries(user)

console.log(entry[0])
console.log(entry[0][0])
console.log(entry[0][1])

let students = [
    {
        name: "John",
        id: 101
    },
    {
        name: "Tom",
        id: 102
    },
    {
        name: "Harry",
        id: 103,
        address: {
            area: "Badda",
            thana: "Vatara",
            lane: "Embassy lane",
            option: ["Victor", "Dhaka Chaka"]
        }
    }
]

console.log(students)

console.log(students[2])

console.log(students[2].name)

console.log(students[2].address)

console.log(students[2].address.thana)

console.log(students[2].address.option[1])

students[2].address.option[1] = "Premium"

console.log(students[2].address.option[1])