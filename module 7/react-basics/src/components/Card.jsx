import { useState } from "react"
import "./Card.css"

// React hook
// 1. Must use in component top level
// 2. Must use inside React component

export default function Card({ name, age }) {

    const [member, setMember] = useState("")

    const clickHandler = (memberName) => {
        setMember(memberName)
    }

    console.log(member)

    // const anotherClickHandler = () => {
    //     console.log("Another greetings")
    // }

    // const greetings = (name) => {
    //     clickHandler(name)
    //     anotherClickHandler()
    // }

    return (
        <div onClick={() => clickHandler(name)} className = "card">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            {member && <p>Greetings {member}</p>}
        </div>
    )
} 

