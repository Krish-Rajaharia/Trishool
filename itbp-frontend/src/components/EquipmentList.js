// src/components/EquipmentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EquipmentList() {
  const [equipment, setEquipment] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/equipment')
      .then(response => setEquipment(response.data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div>
      <h2>Equipment List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {equipment.map(item => (
          <li key={item._id}>{item.name} - {item.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default EquipmentList;