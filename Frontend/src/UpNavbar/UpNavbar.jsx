import React from 'react';
import styles from './UpNavbar.module.css';

function UpNavbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <a href="#" className={styles.logo}>Food</a>
        </div>
      </nav>
    </div>
  );
}

export default UpNavbar;
