import AboutCardItem from '../AboutCardItem';

import { DATA_CARD_SMALL, DATA_CARD_BIG } from './Data';

import styles from './AboutCard.module.css';

const AboutCard = () => {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.upper}>
        {DATA_CARD_SMALL.map(({title, text, img}) => {
          return (
            <div className={styles.small} key={title}> 
              {
                <AboutCardItem
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
                <AboutCardItem
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

export default AboutCard;