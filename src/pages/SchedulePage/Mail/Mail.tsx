import styles from './Mail.module.css';

const Mail = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
      Documents are formed
      </h2>
      <p className={styles.text}>
      Documents for signing will be sent to your email
      </p>
    </div>
  );
};

export default Mail;