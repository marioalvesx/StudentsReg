import Student from './components/Student/index'
import './App.css'
import { ChangeEvent, useEffect, useState } from 'react'

export type StudentTodo = {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [studentTodoInput, setTodoInput] = useState('');
  const [studentsTodos, setStudentsTodos] = useState<StudentTodo[]>(() => {
    const storedTodos = localStorage.getItem('@studentList:studentsTodos');

    if (storedTodos) {
      return JSON.parse(storedTodos);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@studentList:studentsTodos', JSON.stringify(studentsTodos))
  }, [studentsTodos])

  function addStudentTodo() {
    setStudentsTodos((previousTodos) => 
      [...previousTodos, { id: Math.random(), title: studentTodoInput, completed: false }]
    );
    setTodoInput('');
  }

  function completeTodo(id: number) {
    setStudentsTodos((previousTodos) => 
      previousTodos.map((todo) => todo.id !== id ? todo : { ...todo, completed: !todo.completed })
    );
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setTodoInput(e.target.value);
  }

  function deleteTodo(id: number) {
    setStudentsTodos((previousTodos) => previousTodos.filter((studentsTodos) => studentsTodos.id !== id));
  }

  return (
    <div className="App">
      <h1>📖 Student Register</h1>
      <br /><hr /><br />
      <div className="add-student">
        <input placeholder="Student Name" value={studentTodoInput} onChange={handleInputChange}/>
        <button onClick={addStudentTodo}>Add</button>
      </div>
      {
        studentsTodos.map((student) => (
          <Student key={student.id} studentTodo={student} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        ))
      }
    </div>
  )
}

export default App
