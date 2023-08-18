import man from './img/man.png';
import mark from './img/mark.png';

import styles from './Features.module.css';

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <img className={styles.inner__img} src={man} alt="man-img" />
          <div className={styles.column}>
            <h2 className={styles.title}>
                            We Provide Many Features You Can Use
            </h2>
            <p className={styles.subtitle}>
                            You can explore the features that we 
                            provide with fun and have their own 
                            functions each feature
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img className={styles.img} src={mark} alt="mark-img"/>
                <span className={styles.text}>Powerfull online protection.</span>
              </li>
              <li className={styles.item}>
                <img className={styles.img} src={mark} alt="mark-img"/>
                <span className={styles.text}>Cashback without borders.</span>
              </li>
              <li className={styles.item}>
                <img className={styles.img} src={mark} alt="mark-img"/>
                <span className={styles.text}>Personal design</span>
              </li>
              <li className={styles.item}>
                <img className={styles.img} src={mark} alt="mark-img"/>
                <span className={styles.text}>Work anywhere in the world</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;