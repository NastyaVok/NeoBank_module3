import GetCardItem from '../GetCardItem/GetCardItem';

import { DATA_GET_CARD } from './Data';

import styles from './GetCard.module.css';

const GetCard = () => {
  
  return (
    <section className={styles.GetCard}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          How to get a card
        </h2>
        <ul className={styles.list}> 
          {DATA_GET_CARD.map(({num, text}) => {
            return (
              <li className={styles.item} key={num}>
                {
                  <GetCardItem
                    num={num}
                    text={text}
                  />
                }
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default GetCard;