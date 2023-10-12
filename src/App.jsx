
import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5

  const addValue = () => {
    counter = counter + 1
    console.log("Clicked for add value", counter)
    setCounter(counter)
  }

  const removeValue = () => {
    setCounter(counter - 1)
    console.log("Clicked for remove value", counter)
  }
  
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
