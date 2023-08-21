import styles from './Email.module.css';

const Email = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        The preliminary decision has been sent to your email.
      </h2>
      <p className={styles.text}>
        In the letter you can get acquainted with the preliminary decision on the credit card.
      </p>
    </div>
  );
};

export default Email;