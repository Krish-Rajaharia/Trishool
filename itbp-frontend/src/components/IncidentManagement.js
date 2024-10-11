// src/components/IncidentManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IncidentManagement() {
  const [incidents, setIncidents] = useState([]);
  const [error, setError] = useState(null);
  const [newIncidentTitle, setNewIncidentTitle] = useState('');
  const [newIncidentDescription, setNewIncidentDescription] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/incidents')
      .then(response => setIncidents(response.data))
      .catch(error => setError(error.message));
  }, []);

  const createIncident = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/incidents', {
        title: newIncidentTitle,
        description: newIncidentDescription
      });
      setIncidents([...incidents, response.data]);
      setNewIncidentTitle('');
      setNewIncidentDescription('');
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteIncident = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/incidents/${id}`);
      setIncidents(incidents.filter(incident => incident._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Incident Management</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {incidents.map(incident => (
          <li key={incident._id}>
            {incident.title} - {incident.description}
            <button onClick={() => deleteIncident(incident._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={createIncident}>
        <label>
          Title:
          <input 
            type="text" 
            value={newIncidentTitle} 
            onChange={(event) => setNewIncidentTitle(event.target.value)} 
          />
        </label>
        <br />
        <label>
          Description:
          <textarea 
            value={newIncidentDescription} 
            onChange={(event) => setNewIncidentDescription(event.target.value)} 
          />
        </label>
        <br />
        <button type="submit">Create Incident</button>
      </form>
    </div>
  );
}

export default IncidentManagement;