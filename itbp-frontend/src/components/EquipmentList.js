// src/components/EquipmentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EquipmentList() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/equipment')
      .then(response => setEquipment(response.data))
      .catch(error => console.error('Error fetching equipment:', error));
  }, []);

  return (
    <div>
      <h2>Equipment List</h2>
      <ul>
        {equipment.map(item => (
          <li key={item._id}>{item.name} - {item.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default EquipmentList;