// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

function ProtectedRoute({ children }) {
  const { currentUser } = useContext(UserContext);

  return currentUser ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;