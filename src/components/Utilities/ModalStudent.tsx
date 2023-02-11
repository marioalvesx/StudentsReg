import React from "react";
import "./ModalStudent.css"

type StudentModalProps = {
  closeModal: (id: boolean) => void;
}

function Modal({ closeModal }: StudentModalProps ) {
  return (
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button onClick={() => closeModal(false)}> X </button>
      </div>        
      <div className="title">
        <h1>Add a student</h1>
      </div>
      <div className="body">
        <div className="add-student">
          <input 
            placeholder="Student task" 
            // value={studentTodoInput}  
            required
            // onChange={handleInputChange}
          />          
        </div>
      </div>
      <div className="footer">
        <button>Add a student</button>
      </div>
    </div>
  );
}

export default Modal;