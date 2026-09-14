import './App.css'
import Card from "./components/Card.jsx"

const members = [
  { name: "John", age:  32 },
  { name: "Rusty", age:  22 },
  { name: "Rodes", age:  45 },
  { name: "Monty", age:  42 },
]

function App() {

  return (
    <div>
      {/* <Card name={members[0].name} age={members[0].age}/>
      <Card name={members[1].name} age={members[1].age}/>
      <Card name={members[2].name} age={members[2].age}/>
      <Card name={members[3].name} age={members[3].age}/> */}

      {
        members
        .filter((member) => member.age > 30)
        .sort((a, b) => a.age - b.age)
        .map(member => <Card name={member.name} age={member.age} />)
      }

    </div>
  )
}

export default App
