import styles from './CardItem.module.css';

interface IProps {
    title: string,
    text: string,
    img: string,
}

const CardItem = ({title, text, img}: IProps) => {
    
  return (
    <>
      <img className={styles.img} src={img} alt={'img'} />
      <h4 className={styles.title}>
        {title}
      </h4>
      <p className={styles.text}>
        {text}
      </p>
    </>
  );
};

export default CardItem;