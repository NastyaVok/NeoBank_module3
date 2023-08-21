import styles from './StepItem.module.css';

interface IProps {
    num: number,
    text: string,
}

const StepItem = ({num, text}: IProps) => {

  return (
    <>
      <span className={styles.number}>{num}</span>
      <p className={styles.text}>
        {text}
      </p>
    </>
  );
};

export default StepItem;