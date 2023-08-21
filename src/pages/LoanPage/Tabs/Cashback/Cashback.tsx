import cn from 'classnames';

import CashbackItem from '../CashbackItem';

import { DATA_CASHBACK_UPPER, DATA_CASHBACK_DOWN } from './data';

import styles from './Cashback.module.css';

const Cashback = () => {

  const isGreen = (num: string[], key: number) => {
    return num.includes(String(key)) ? styles.green : '';
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {DATA_CASHBACK_UPPER.map(({title,text}, key) => {
          return (
            <div className={cn(styles.block, isGreen(['1'], key))} key={title}>
              <CashbackItem
                title={title}
                text={text}
              />
            </div>
          );
        })
        }
      </div>
      <div className={styles.container}>
        {DATA_CASHBACK_DOWN.map(({title,text}, key) => {
          return (
            <div className={cn(styles.block, isGreen(['0','2'], key))} key={title}>
              <CashbackItem
                title={title}
                text={text}
              />
            </div>
          );
        })
        }
      </div>
    </div>
  );
};

export default Cashback;