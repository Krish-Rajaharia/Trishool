// src/components/EquipmentManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EquipmentManagement() {
  const [equipment, setEquipment] = useState([]);
  const [error, setError] = useState(null);
  const [newEquipmentName, setNewEquipmentName] = useState('');
  const [newEquipmentType, setNewEquipmentType] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/equipment')
      .then(response => setEquipment(response.data))
      .catch(error => setError(error.message));
  }, []);

  const createEquipment = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/equipment', {
        name: newEquipmentName,
        type: newEquipmentType
      });
      setEquipment([...equipment, response.data]);
      setNewEquipmentName('');
      setNewEquipmentType('');
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteEquipment = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/equipment/${id}`);
      setEquipment(equipment.filter(item => item._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Equipment Management</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {equipment.map(item => (
          <li key={item._id}>
            {item.name} - {item.type}
            <button onClick={() => deleteEquipment(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={createEquipment}>
        <label>
          Name:
          <input 
            type="text" 
            value={newEquipmentName} 
            onChange={(event) => setNewEquipmentName(event.target.value)} 
          />
        </label>
        <br />
        <label>
          Type:
          <input 
            type="text" 
            value={newEquipmentType} 
            onChange={(event) => setNewEquipmentType(event.target.value)} 
          />
        </label>
        <br />
        <button type="submit">Create Equipment</button>
      </form>
    </div>
  );
}

export default EquipmentManagement;