// mini project

let students = [
    {id: 101, name: "John", age: 20, department: "CSE"},
    {id: 102, name: "Don", age: 22, department: "EEE"}
]

function addStudent(name, age, dept) {
    let newId = students.length > 0 ? students[students.length - 1].id + 1 : 101

    let newStudent = {
        id: newId,
        name: name,
        age: age,
        department: dept
    }

    students.push(newStudent)
    console.log("Student added successfully")
}

addStudent("Harry", 25, "AI")

function getAll() {

    for (let student of students) {
        console.log(student)
    }
    
}

function findStudent(id) {

    let foundStudent = null

    for (let student of students) {
        if (student.id == id) {
            foundStudent = student
            break
        }
    }

    if (foundStudent) {
        console.log("Found student:", foundStudent)
    } else {
        console.log("404 not found")
    }
    
}

getAll()

findStudent(102)

function deleteStudent(id) {

    let targetStudent = -1

    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            targetStudent = i
            break
        }
    }

    if (targetStudent != -1) {
        let deletedStudent = students.splice(targetStudent, 1)
        console.log(`Deleted ${deletedStudent[0].name} id: ${targetStudent} deleted`)
    } else {
        console.log("404 not found")
    }
}

deleteStudent(105)

getAll()