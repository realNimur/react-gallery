import React from 'react';
import { useSelector } from 'react-redux';
import styles from './style.module.scss';

const Loader = function Loader() {
  const themeColor = useSelector((store) => store.themeColor);
  return (
    <div className={styles['loader-wrapper']}>
      <div className={styles.loader} style={{ borderColor: themeColor === 'white' ? 'black' : 'white' }} />
      <p style={{ textAlign: 'center', color: themeColor === 'white' ? 'black' : 'white' }}>
        <small>Loading...</small>
      </p>
    </div>
  );
};

export default Loader;
