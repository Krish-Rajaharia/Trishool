// src/components/CreateEquipment.js
import React, { useState } from 'react';
import axios from 'axios';

function CreateEquipment() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/equipment', {
        name,
        type,
      });
      window.location.href = '/equipment';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Create Equipment</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Type:
          <input type="text" value={type} onChange={(event) => setType(event.target.value)} />
        </label>
        <br />
        <button type="submit">Create Equipment</button>
      </form>
    </div>
  );
}

export default CreateEquipment;