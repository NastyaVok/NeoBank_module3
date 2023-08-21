import RatesItem from '../RatesItem';

import { DATA_RATES } from './data';
import styles from './Rates.module.css';

const Rates = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {DATA_RATES.map(({title,text,texts}) => {
          return (
            <li className={styles.item} key={title}>
              {<RatesItem 
                title={title}
                text={text}
                texts={texts}
              />}
            </li>
          );
        })
        }
      </ul>
    </div>
  );
};

export default Rates;