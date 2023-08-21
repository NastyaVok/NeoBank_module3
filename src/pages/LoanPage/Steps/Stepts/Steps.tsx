import StepItem from '../StepItem/StepItem';

import { DATA_GET_CARD } from './data';

import styles from './Steps.module.css';

const Steps = () => {
  
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
                  <StepItem
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

export default Steps;