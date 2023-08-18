import CardItem from '../CardItem';
import UIButton from '../../UI/UIButton';

import { DATA_ITEMS } from './Data';
import card from './img/card.png';

import styles from './CreditCard.module.css';

const CreaditCard = () => {

  return (
    <section className={styles.CreaditCard}>
      <div className={styles.wrapper}>
        <div className={styles.content__container}>
          <h2 className={styles.title}>
                        Platinum digital credit card
          </h2>
          <div className={styles.text}>
            <p>Our best credit card. Suitable for everyday spending and shopping.</p><br />
            <p>Cash withdrawals and transfers without commission and interest.</p>
          </div>
          <ul className={styles.list}>
            {DATA_ITEMS.map(({title, text, hiddenText}, key) => {
              return(
                <CardItem 
                  key={key}
                  title={title}
                  text={text}
                  hiddenText={hiddenText}
                />
              );
            })}
          </ul>
          <div className={styles.btn}> 
            <a href="#form">    
              <UIButton text={'Apply for card'}/>
            </a>   
          </div>
        </div>
        <div className={styles.img__container}>
          <img  className={styles.img} src={card} alt="card-img" />
        </div>
      </div>
    </section>
  );
};

export default CreaditCard;