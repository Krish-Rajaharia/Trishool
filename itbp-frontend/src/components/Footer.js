// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h5 className={styles.title}>About Us</h5>
            <p>This system is designed to manage the operational activities of the ITBP.</p>
          </div>
          <div className={styles.column}>
            <h5 className={styles.title}>Useful Links</h5>
            <ul className={styles.list}>
              <li className={styles.listItem}><Link to="/" className={styles.link}>Home</Link></li>
              <li className={styles.listItem}><Link to="/users" className={styles.link}>Users</Link></li>
              <li className={styles.listItem}><Link to="/incidents" className={styles.link}>Incidents</Link></li>
              <li className={styles.listItem}><Link to="/equipment" className={styles.link}>Equipment</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h5 className={styles.title}>Contact Us</h5>
            <p>
              For any inquiries or support, please contact us at{' '}
              <a href="mailto:support@example.com" className={styles.link}>support@example.com</a>.
            </p>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© 2024 ITBP Operational Management System</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;