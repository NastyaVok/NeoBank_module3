import styles from './RatesItem.module.css';

interface IProps {
    title: string,
    text?: string,
    texts?: string[],
}

const RatesItem = ({title, text, texts}: IProps) => {
  return (
    <>
      <h4 className={styles.title}>
        {title}
      </h4>
      {text && <p className={styles.text}>
        {text}
      </p>
      }
      {texts &&
        <div className={styles.text}>
          {texts.map((el) => {
            return(
              <span className={styles.span} key={el}>
                {el}
              </span>
            );
          })}
        </div>
      }
    </>
  );
};

export default RatesItem;