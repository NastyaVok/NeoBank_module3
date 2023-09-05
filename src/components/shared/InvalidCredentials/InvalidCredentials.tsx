import styles from './InvalidCredentials.module.css';

const InvalidCredentials = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
            Access denied
      </h2>
      <p className={styles.text}>
            Please follow the instructions in the mailbox
      </p>
    </div>
  );
};

export default InvalidCredentials;