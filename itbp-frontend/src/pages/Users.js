// src/pages/Users.js
import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setUsers(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <UserList users={users} />
    </div>
  );
}

export default Users;