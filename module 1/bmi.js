// input from terminal

const weight = process.argv[2]
const height = process.argv[3]

console.log(weight, height)

function calculateBmi(weight, height) {
    const bmi = weight / (height * height)
    return bmi

}

calculatedBmi = calculateBmi(weight, height)

console.log(`BMI = ${calculatedBmi}`)

// Depending on BMI, according to WHO, show if the person is underweight, fit, overweight.

if (calculatedBmi < 18.5) {
    console.log("You are underweight")
} else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
    console.log("You are fit")
} else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
    console.log("You are overweight")
}

