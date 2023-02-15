import { useState, ChangeEvent, useEffect } from "react";
import { StudentTodo } from '../../App'
import "./ModalStudent.css"

type StudentModalProps = {
  // studentTodo: StudentTodo;
  closeModal: (id: boolean) => void;
}

function Modal({ closeModal }: StudentModalProps ) {
  // const [openModal, setOpenModal] = useState(true);
  const [studentTodoInput, setTodoInput] = useState('');
  const [studentsTodos, setStudentsTodos] = useState<StudentTodo[]>([]);

  useEffect(() => {
    localStorage.setItem('@studentList:studentsTodos', JSON.stringify(studentsTodos))
  }, [studentsTodos])

  function addStudentTodo() {
    setStudentsTodos((previousTodos) => 
      [...previousTodos, { id: Math.random(), title: studentTodoInput, completed: false }]
    );
    setTodoInput('');
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setTodoInput(e.target.value);
  }

  return (
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button onClick={() => closeModal(false)}> x </button>
      </div>
      <div className="title">
        <h1>Add a student</h1>
      </div>
      <div className="body">
        <form
          className="flex flex-col stylesInputsField"
        >
          <div className="add-student">
            <input 
              placeholder="Student task" 
              value={studentTodoInput}  
              required
              onChange={handleInputChange}
            />          
          </div>
        </form>
      </div>
      <div className="footer">
        <button className="add-button" onClick={addStudentTodo} type="submit">Add a student</button>
      </div>
    </div>
  );
}

export default Modal;