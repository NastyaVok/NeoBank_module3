import styles from './AboutCardItem.module.css';

interface IProps {
    title: string,
    text: string,
    img: string,
}

const AboutCardItem = ({title, text, img}: IProps) => {
    
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

export default AboutCardItem;