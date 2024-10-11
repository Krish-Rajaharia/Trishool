// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Users from './pages/Users';
import Incidents from './pages/Incidents';
import Equipment from './pages/Equipment';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import CreateIncident from './components/CreateIncident';
import CreateEquipment from './components/CreateEquipment';
import IncidentManagement from './components/IncidentManagement';
import EquipmentManagement from './components/EquipmentManagement';
import UserManagement from './components/UserManagement';
import { UserContext } from './UserContext';

function App() {
  return (
    <Router>
      <UserContext.Provider value={{ currentUser: null }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
          <Route path="/incidents" element={<ProtectedRoute><Incidents /></ProtectedRoute>} />
          <Route path="/equipment" element={<ProtectedRoute><Equipment /></ProtectedRoute>} />
          <Route path="/incidents/create" element={<ProtectedRoute><CreateIncident /></ProtectedRoute>} />
          <Route path="/equipment/create" element={<ProtectedRoute><CreateEquipment /></ProtectedRoute>} />
          <Route path="/incident-management" element={<ProtectedRoute><IncidentManagement /></ProtectedRoute>} />
          <Route path="/equipment-management" element={<ProtectedRoute><EquipmentManagement /></ProtectedRoute>} />
          <Route path="/user-management" element={<ProtectedRoute><UserManagement /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;