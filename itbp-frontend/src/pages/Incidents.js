// src/pages/Incidents.js
import React from 'react';
import IncidentList from '../components/IncidentList';
import CreateIncident from '../components/CreateIncident';

function Incidents() {
  return (
    <div>
      <h2>Incidents</h2>
      <CreateIncident />
      <IncidentList />
    </div>
  );
}

export default Incidents;