// src/components/UserManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'user',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const createUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users', newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '', role: 'user' });
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} - {user.email} - {user.role}
            <button onClick={() => deleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Create User</h3>
      <form onSubmit={createUser}>
        <label>
          Name:
          <input
            type="text"
            value={newUser.name}
            onChange={(event) => setNewUser({ ...newUser, name: event.target.value })}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={newUser.email}
            onChange={(event) => setNewUser({ ...newUser, email: event.target.value })}
          />
        </label>
        <br />
        <label>
          Role:
          <select
            value={newUser.role}
            onChange={(event) => setNewUser({ ...newUser, role: event.target.value })}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <br />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default UserManagement;