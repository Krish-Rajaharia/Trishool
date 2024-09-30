// src/components/IncidentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IncidentList() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/incidents')
      .then(response => setIncidents(response.data))
      .catch(error => console.error('Error fetching incidents:', error));
  }, []);

  return (
    <div>
      <h2>Incident List</h2>
      <ul>
        {incidents.map(incident => (
          <li key={incident._id}>{incident.title} - {incident.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default IncidentList;