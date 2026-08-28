let student = {
    name: "John",
    id: 102,
    marks: {
        Bangla: 75,
        English: 82,
        Math: 90
    }
}

let totalMarks = 0
let totalSubject = 0

for (const subject in student.marks) {
    totalMarks += student.marks[subject]
    totalSubject++
}

console.log(totalMarks, totalSubject)

let avg = (totalMarks / totalSubject).toFixed(2)

console.log(avg)

if (avg >= 80) {
    console.log("Passed with distinction. Got", avg, "%")
} else {
    console.log("Failed. Need to focus on studies.")
}