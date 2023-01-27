import { useState } from 'react'
import Student from './components/Student'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="add-student">
        <input placeholder="Student Name" />
        <button>Add</button>
      </div>

      <Student title="Student name" />
    </div>
  )
}

export default App
