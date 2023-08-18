import logo from './img/logo.png';

import styles from './FooterPage.module.css';

const FooterPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content__logo}>
            <img className={styles.img} src={logo} alt="logo-img" />
            <div className={styles.contacts}>
              <h4 className={styles.mobile}>
                <a href="tel:+74959842513">
                                    +7 (495) 984 25 13
                </a>  
              </h4>
              <p className={styles.mail}>
                <a href="mailto:info@neoflex.ru">  
                                    info@neoflex.ru
                </a>  
              </p>
            </div>
          </div>
          <div className={styles.content__about}>
            <ul className={styles.list}>
              <li className={styles.item}>About bank</li>
              <li className={styles.item}>Ask a Question</li>
              <li className={styles.item}>Quality of service</li>
              <li className={styles.item}>Requisites</li>
              <li className={styles.item}>Press center</li>
              <li className={styles.item}>Bank career</li>
              <li className={styles.item}>Investors</li>
              <li className={styles.item}>Analytics</li>
              <li className={styles.item}>Business and processes</li>
              <li className={styles.item}>Compliance and business ethics</li>
            </ul>
          </div>
          <span className={styles.line}></span>
          <p className={styles.content__description}>
                        We use cookies to personalize our services and improve 
                        the user experience of our website. Cookies are small 
                        files containing information about previous visits to a website. 
                        If you do not want to use cookies, please change your browser settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;