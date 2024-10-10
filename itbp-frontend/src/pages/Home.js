import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to ITBP Operational Management System</h1>
      <p>This system is designed to manage the operational activities of the Indo-Tibetan Border Police.</p>
      <div className={styles.features}>
        <div className={styles.feature}>
          <h2>User Management</h2>
          <p>Manage ITBP personnel and their roles.</p>
          <Link to="/users" className={styles.button}>Go to Users</Link>
        </div>
        <div className={styles.feature}>
          <h2>Incident Reporting</h2>
          <p>Report and track incidents along the border.</p>
          <Link to="/incidents" className={styles.button}>Go to Incidents</Link>
        </div>
        <div className={styles.feature}>
          <h2>Equipment Tracking</h2>
          <p>Monitor and manage ITBP equipment.</p>
          <Link to="/equipment" className={styles.button}>Go to Equipment</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;