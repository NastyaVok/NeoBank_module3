import styles from './Mail.module.css';

const Mail = () => {

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
                Wait for a decision on the application
      </h2>
      <p className={styles.text}>
                The answer will come to your mail within 10 minutes
      </p>
    </div>
  );
};

export default Mail;