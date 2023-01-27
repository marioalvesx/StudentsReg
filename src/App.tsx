import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div> 
        <input placeholder="Mathematics" />
        <button>Add</button>
      </div>
    </div>
  )
}

export default App
