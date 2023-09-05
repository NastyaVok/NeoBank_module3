import styles from './Mail.module.css';

const Mail = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
      Documents have been successfully signed and sent for approval
      </h2>
      <p className={styles.text}>
      Within 10 minutes you will be sent a PIN code to your email for confirmation
      </p>
    </div>
  );
};

export default Mail;