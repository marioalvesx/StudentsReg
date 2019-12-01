import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [matricula, setMatricula] = useState('');
  
  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { matricula });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }

  return (
    // Fragment - Tag vazia para não aparecer no html
    <>  
      <p>
        Cadastro de <strong>estudante</strong>
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Matricula *</label>
        <input 
          id="matricula" 
          type="number" 
          placeholder="Sua matricula"
          value={matricula}
          onChange={event => setMatricula(event.target.value)}
        />

        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}