import styles from './CashbackItem.module.css';

interface IProps {
    title: string,
    text: string,
}

const CashbackItem = ({title, text}: IProps) => {
  return (
    <>
      <h4 className={styles.title}>
        {title}
      </h4>
      <p className={styles.text}>
        {text}
      </p>
    </>
  );
};

export default CashbackItem;