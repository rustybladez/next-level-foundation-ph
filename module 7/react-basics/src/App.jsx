import { useState } from 'react'
import './App.css'
import Card from "./components/Card.jsx"
import Counter from './components/Counter.jsx'

const members = [
  { name: "John", age:  32 },
  { name: "Rusty", age:  22 },
  { name: "Rodes", age:  45 },
  { name: "Monty", age:  42 },
]

function App() {

  const [name, setName] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    console.log(name)

  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>

      {
        members.map(member => <Card name={member.name} age={member.age} />)
      }
      {/* <Counter /> */}

    </div>
  )
}

export default App
