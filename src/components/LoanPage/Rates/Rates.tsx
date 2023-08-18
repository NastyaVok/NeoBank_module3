import styles from './Rates.module.css';

const Rates = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h4 className={styles.title}>
                        Card currency
          </h4>
          <p className={styles.text}>
                        Rubles, dollars, euro
          </p>
        </li>
        <li className={styles.item}>
          <h4 className={styles.title}>
                        Interest free period
          </h4>
          <p className={styles.text}>
                        0% up to 160 days
          </p>
        </li>
        <li className={styles.item}>
          <h4 className={styles.title}>
                        Payment system
          </h4>
          <p className={styles.text}>
                        Mastercard, Visa
          </p>
        </li>
        <li className={styles.item}>
          <h4 className={styles.title}>
                        Maximum credit limit on the card
          </h4>
          <p className={styles.text}>
                        600 000 ₽
          </p>
        </li>
        <li className={styles.item}>
          <h4 className={styles.title}>
                        Replenishment and withdrawal
          </h4>
          <p className={styles.text}>
                        At any ATM. Top up your credit card 
                        for free with cash or transfer from 
                        other cards
          </p>
        </li>
        <li className={styles.item}>
          <h4 className={styles.title}>
                        Max cashback per month
          </h4>
          <p className={styles.text}>
                        15 000 ₽
          </p>
        </li>
        <li className={styles.item}>
          <h4 className={styles.title}>
                        Transaction Alert
          </h4>
          <p className={styles.text}>
            <span className={styles.text__span}>
                            60 ₽ — SMS or push notifications
            </span>
            <span className={styles.text__span}>
                        0 ₽ — card statement, information 
                        about transactions in the online bank
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Rates;