import Student from './components/Student/index'
import ModalStudent from "./components/Utilities/ModalStudent"
import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'

export type StudentTodo = {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  // const [studentTodoInput, setTodoInput] = useState('');
  const [completedTasks, setCompletedTasks] = useState('');  
  const [openModal, setOpenModal] = useState(false);
  const [studentsTodos, setStudentsTodos] = useState<StudentTodo[]>(() => {
    const storedTodos = localStorage.getItem('@studentList:studentsTodos');

    if (storedTodos) {
      return JSON.parse(storedTodos);
    }
    return [];
  });

  useEffect(() => {
    let completeArray = [];
    studentsTodos.filter((todo) => todo.completed === true && completeArray.push(todo));
    setCompletedTasks(completeArray.length.toString());
  }, [studentsTodos]);

  let Today = new Date().toLocaleDateString('en-us', { weekday: 'long' });
  let day = new Date().toLocaleDateString('en-us', { day: 'numeric' });
  let month = new Date().toLocaleDateString('en-us', { month: 'short' });

  // function addStudentTodo() {
  //   setStudentsTodos((previousTodos) => 
  //     [...previousTodos, { id: Math.random(), title: studentTodoInput, completed: false }]
  //   );
  //   setTodoInput('');
  // }

  function completeTodo(id: number) {
    setStudentsTodos((previousTodos) => 
      previousTodos.map((todo) => todo.id !== id ? todo : { ...todo, completed: !todo.completed })
    );
  }

  // function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
  //   setTodoInput(e.target.value);
  // }

  function deleteTodo(id: number) {
    setStudentsTodos((previousTodos) => previousTodos.filter((studentsTodos) => studentsTodos.id !== id));
  }

  return (
    <div className="App">
      <h1>📖 Student Register</h1>
      <br /><hr /><br />
      <h4 className="date">
        🗓️ {`${Today},`}  <span>{`${day} ${month}`}</span>
      </h4>      
        <div className="add-student-btn">
          {/* <input 
            placeholder="Student task" 
            value={studentTodoInput}  
            required
            onChange={handleInputChange}
          /> */}
          <button className="add-button" onClick={() => {setOpenModal(true)}} type="submit">Add</button>
          { openModal && <ModalStudent closeModal={setOpenModal} />}

        </div>
      <div className="data-card-container">
        <div className="data-card">
          <h5>
            { studentsTodos.length < 10 ? `0${studentsTodos.length}` : studentsTodos.length }
          </h5>
          <p>Created tasks</p>
        </div>
        <div className="data-card">
          <h5>
            {completedTasks.length < 10 ? `0${completedTasks}` : completedTasks}
          </h5>
          <p>Completed tasks</p>
        </div>
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