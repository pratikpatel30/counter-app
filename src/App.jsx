
import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5

  const addValue = () => {
    if(counter<=19){

      setCounter(counter+1)
      console.log("Clicked when add value", counter)
    }
  }

  const removeValue = () => {
    if(counter>=1){

      setCounter(counter - 1)
      console.log("Clicked when remove value", counter)
    }
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
