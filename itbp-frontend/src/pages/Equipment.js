// src/pages/Equipment.js
import React from 'react';
import EquipmentList from '../components/EquipmentList';
import CreateEquipment from '../components/CreateEquipment';

function Equipment() {
  return (
    <div>
      <h2>Equipment</h2>
      <CreateEquipment />
      <EquipmentList />
    </div>
  );
}

export default Equipment;