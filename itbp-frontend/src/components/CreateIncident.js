// src/components/CreateIncident.js
import React, { useState } from 'react';
import axios from 'axios';

function CreateIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/incidents', {
        title,
        description,
      });
      window.location.href = '/incidents';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Create Incident</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <br />
        <button type="submit">Create Incident</button>
      </form>
    </div>
  );
}

export default CreateIncident;