import styles from './GetCard.module.css';

const GetCard = () => {
  //TODO  it`s required to create separate component for li
  //TODO line of number width=???
  //TODO container for li text is understandable for me
  return (
    <section className={styles.GetCard}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
                    How to get a card
        </h2>
        <ul className={styles.list}> 
          <li className={styles.item}>
            <span className={styles.number}>1</span>
            <p className={styles.text}>
                            Fill out an online application - you do not
                            need to visit the bank
            </p>
          </li>
          <li className={styles.item}>
            <span className={styles.number}>2</span>
            <p className={styles.text}>
                            Find out the bank's decision immediately after
                            filling out the application
            </p>
          </li>
          <li className={styles.item}>
            <span className={styles.number}>3</span>
            <p className={styles.text}>
                            The bank will deliver the card free of charge, wherever
                            convenient, to your city
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default GetCard;