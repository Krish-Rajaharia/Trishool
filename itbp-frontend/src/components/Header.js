// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1><Link to="/">ITBP Operational Management System</Link></h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/incidents">Incidents</Link></li>
            <li><Link to="/equipment">Equipment</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;