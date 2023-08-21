import CardItem from '../CardItem';

import { DATA_CARD_SMALL, DATA_CARD_BIG } from './data';

import styles from './Card.module.css';

const Card = () => {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.upper}>
        {DATA_CARD_SMALL.map(({title, text, img}) => {
          return (
            <div className={styles.small} key={title}> 
              {
                <CardItem
                  title={title}
                  text={text}
                  img={img}
                />
              }
            </div>
          );
        })}
      </div>
      <div className={styles.lower}> 
        {DATA_CARD_BIG.map(({title, text, img}) => {
          return (
            <div className={styles.big} key={title}> 
              {
                <CardItem
                  title={title}
                  text={text}
                  img={img}
                />
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;