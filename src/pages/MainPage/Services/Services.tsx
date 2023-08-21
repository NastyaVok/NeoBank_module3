import map from './img/map.png';

import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>
                        You can use our services anywhere in the world
          </h2>
          <p className={styles.subtitle}>
                        Withdraw and transfer money online through our application
          </p>
          <img className={styles.img} src={map} alt="map-img" />
        </div>
      </div>
    </section>    
  );
};

export default Services;