// src/components/Register.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../authService';
import { UserContext } from '../UserContext';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await authService.register({ name, email, password });
      login(userData);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;