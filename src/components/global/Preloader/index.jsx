import React from 'react';
import styles from "./styles.module.scss";
import preloader from '../../../assets/preloader.svg';

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img className={styles.preloader__icon} src={preloader} alt="preloader"/>
    </div>
  )
}
export default Preloader;