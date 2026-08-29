// Destructuring

const student = {
    name: "John",
    age: 20,
    address: "Dhaka"
}

// old

const OldName = student.name

// new

const {age, address, name} = student

console.log(age, address, name)

const student1 = {
    name: "Tom",
    age: 20,
    address: {
        city: "Dhaka",
        zip: 1216
    }
}

const {name: stdName, address:{city, zip}} = student1

console.log(stdName, city)

const arr = ["Red", "Green", "Blue"]

const [, , third] = arr

console.log(third)

const student2 = {
    name: "Harry",
    age: 25,
    address: {
        city: "London",
        zip: 10001
    },
    hobbies: ["Gardening", "Gaming"]
}

const {name: std2Name, address: {city: std2City}, hobbies: [firstHobby]} = student2

console.log(firstHobby, std2City)