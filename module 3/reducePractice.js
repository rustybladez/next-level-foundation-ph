let numbers = [10, 20, 30, 40]

let total = numbers.reduce(function(acc, current) {
    console.log("acc is:", acc, " | current is:", current)
    return acc + current
}, 0)

console.log("Final total:", total)