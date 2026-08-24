// scope
let age                 // global scope

{
    let a = 5           // block scope
}

function sayAge() {
    age = 21            // functional scope
}

sayAge()

console.log(age)