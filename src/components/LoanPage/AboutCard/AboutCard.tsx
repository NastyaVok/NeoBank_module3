import cn from 'classnames';

import camera from './img/camera.svg';
import calendar from './img/calendar.svg';
import clock from './img/clock.svg';
import bag from './img/bag.svg';
import card from './img/card.svg';

import styles from './AboutCard.module.css';

const AboutCard = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container__small}> 
        <div className={styles.block__small}> 
          <img className={styles.img} src={camera} alt="img-camera" />
          <h4 className={styles.title}>
                        Up to 50 000 ₽
          </h4>
          <p className={styles.text}>
                        Cash and transfers without commission and
                        percent
          </p>
        </div>
        <div className={styles.block__small}> 
          <img className={styles.img} src={calendar} alt="img-calendar" />
          <h4 className={styles.title}>
                        Up to 160 days
          </h4>
          <p className={styles.text}>
                        Without percent on the loan
          </p>
        </div>
        <div className={styles.block__small}> 
          <img className={styles.img} src={clock} alt="img-clock" />
          <h4 className={styles.title}>
                        Free delivery
          </h4>
          <p className={styles.text}>
                        We will deliver your card by courier 
                        at a convenient place and time for you
          </p>
        </div>
      </div>
      <div className={styles.container__big}> 
        <div className={styles.block__big}> 
          <img className={styles.img} src={bag} alt="img-bag" />
          <h4 className={styles.title}>
                        Up to 12 months
          </h4>
          <p className={styles.text}>
                        No percent. For equipment, clothes 
                        and other purchases in installments
          </p>
        </div>
        <div className={styles.block__big}> 
          <img className={styles.img} src={card} alt="img-card" />
          <h4 className={styles.title}>
                        Convenient deposit and withdrawal
          </h4>
          <p className={styles.text}>
                        At any ATM. Top up your credit card 
                        for free with cash or transfer from other cards
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;