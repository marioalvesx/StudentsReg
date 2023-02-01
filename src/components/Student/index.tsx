import { StudentTodo } from '../../App'
import './styles.css'

type StudentProps = {
  studentTodo: StudentTodo;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function Student({ studentTodo, completeTodo, deleteTodo }: StudentProps ) {
  function handleCompleteTodo() {
    completeTodo(studentTodo.id)
  }
  
  function handleDeleteTodo() {
    deleteTodo(studentTodo.id)
  }

  return (
    <div className={`student ${studentTodo.completed ? 'done' : ''}`}>
      <h2>{studentTodo.title}</h2>

      <div className="student-buttons">
        <button onClick={handleCompleteTodo}>
          {studentTodo.completed ? 'Resume ✏️' : 'Complete ✅ '}</button>
        <button onClick={handleDeleteTodo}>Delete ❌ </button>
      </div>
    </div>
  )
}