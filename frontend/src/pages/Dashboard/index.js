import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id }
      });

      setStudents(response.data);
    }

    loadStudents();
  }, []);
  
  return (
    <>
      <p>
        Estudantes <strong>cadastrados</strong>
      </p>
      <ul className="student-list">
        <p><strong>ID </strong> Nome Nota </p>
        {students.map(student => (
          // prop. Key={} - SetarInfo. única do elemento para facilitar na hora de deletar, alterar etc.
          <li key={student._id}> 
            <header />
            <strong>{student.id} </strong>
            <span> {student.nome}</span>
            <span> {student.nota}</span>
          </li>
        ))}
      </ul>

      <Link to="/new">
        <button className="btn">Cadastrar novo estudante </button>
      </Link>
    </>
  )
}
