import React, { useState } from 'react';
import api from '../../services/api';

export default function New({ history }) {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [nota, setNota]= useState('');
  
  async function handleSubmit(event) {
    event.preventDefault();

    const user_id = localStorage.getItem('user');

    await api.post('/register', {id, nome, nota}, {
      headers: { user_id }
    })
  
    history.push('/dashboard');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">ID *</label>
      <input
        id="id"
        placeholder="Id do estudante"
        value={id}
        onChange={event => setId(event.target.value)}
      />

      <label htmlFor="id">NOME *</label>
      <input
        id="nome"
        placeholder="Nome do estudante"
        value={nome}
        onChange={event => setNome(event.target.value)}
      />

      <label htmlFor="id">NOTA *</label>
      <input
        id="nota"
        placeholder="Nota do estudante"
        value={nota}
        onChange={event => setNota(event.target.value)}
      />

      <button type="submit" className="btn">Cadastrar </button>
    </form>
  )
}