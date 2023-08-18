import styles from './GetCardItem.module.css';

interface IProps {
    num: number,
    text: string,
}

const GetCardItem = ({num, text}: IProps) => {

  return (
    <>
      <span className={styles.number}>{num}</span>
      <p className={styles.text}>
        {text}
      </p>
    </>
  );
};

export default GetCardItem;