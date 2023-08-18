import loaderImg from './img/loader.svg';

import styles from './UILoader.module.css';

const UILoader = () => {

  return (
    <img className={styles.loader} src={loaderImg} alt="loader"></img> 
  );
};

export default UILoader;