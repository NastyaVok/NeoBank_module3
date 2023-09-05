import { useNavigate } from 'react-router-dom';

import UIButton from '../../../components/UI/UIButton/UIButton';

import box from './img/box.png';

import styles from './Finish.module.css';

const Finish = () => {
  const navigate = useNavigate();

  const goMainPage = () => {
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <img 
        className={styles.img}
        src={box} 
        alt={box} 
      />
      <h2 className={styles.title}>
            Congratulations! You have completed your new credit card.
      </h2>
      <p className={styles.text}>
            Your credit card will arrive soon. Thank you for choosing us!
      </p>
      <UIButton
        text={'View other offers of our bank'}
        onClick={() => goMainPage()}
      />
    </div>
  );
};

export default Finish;