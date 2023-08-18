import cn from 'classnames';

import styles from './Cashback.module.css';

const Cashback = () => {

  //TODO one component maybe

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.block}>
          <h4 className={styles.title}>
                        For food delivery, cafes and restaurants
          </h4>
          <p className={styles.text}>
                        5%
          </p>
        </div>
        <div className={cn(styles.block, styles.color__green)}>
          <h4 className={styles.title}>
                        In supermarkets with our subscription
          </h4>
          <p className={styles.text}>
                        5%
          </p>
        </div>
        <div className={styles.block}>
          <h4 className={styles.title}>
                        In clothing stores and children's goods
          </h4>
          <p className={styles.text}>
                        2%
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={cn(styles.block, styles.color__green)}>
          <h4 className={styles.title}>
                        Other purchases and payment of 
                        services and fines
          </h4>
          <p className={styles.text}>
                        1%
          </p>
        </div>
        <div className={styles.block}>
          <h4 className={styles.title}>
                        Shopping in online stores
          </h4>
          <p className={styles.text}>
                        up to 3%
          </p>
        </div>
        <div className={cn(styles.block, styles.color__green)}>
          <h4 className={styles.title}>
                        Purchases from our partners
          </h4>
          <p className={styles.text}>
                        30%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cashback;