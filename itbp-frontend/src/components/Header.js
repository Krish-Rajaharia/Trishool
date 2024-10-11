// src/components/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import styles from './Header.module.css';

function Header() {
  const { currentUser, logout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1><Link to="/" className={styles.title}>ITBP Operational Management System</Link></h1>
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/" className={styles.link}>Home</Link></li>
            {currentUser ? (
              <>
                <li><Link to="/users" className={styles.link}>Users</Link></li>
                <li><Link to="/incidents" className={styles.link}>Incidents</Link></li>
                <li><Link to="/equipment" className={styles.link}>Equipment</Link></li>
                <li><button className={styles.logoutBtn} onClick={logout}>Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login" className={styles.link}>Login</Link></li>
                <li><Link to="/register" className={styles.link}>Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;