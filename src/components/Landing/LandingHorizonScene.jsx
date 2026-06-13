import React from 'react';
import styles from './LandingHorizonScene.module.css';

const LandingHorizonScene = ({ children }) => {
  return (
    <div className={styles.scene}>
      {children}
      <div className={styles.earth}></div>
    </div>
  );
};

export default LandingHorizonScene;
