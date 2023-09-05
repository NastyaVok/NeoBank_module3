import { useNavigate } from 'react-router-dom';

import UIButton from '../../components/UI/UIButton';

import error from './img/errorPage.png';

import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <p className={styles.p}>Oops....</p>
            <p className={styles.p}>Page not found</p>
          </h2>
          <p className={styles.text}>
                        This Page doesn`t exist or was removed! We suggest you go back.
          </p>
          <UIButton
            text={'Go back'}
            onClick={() => goBack()}
            classes={styles.btn}
          />
        </div>
        <div className={styles.img__container}>
          <img className={styles.img} src={error} alt={error}></img>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;