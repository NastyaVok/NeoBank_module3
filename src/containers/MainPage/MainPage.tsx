import Cards from '../../components/MainPage/Cards';
import Exchange from '../../components/MainPage/Exchange';
import Features from '../../components/MainPage/Features';
import Services from '../../components/MainPage/Services';
import News from '../../components/MainPage/News';
import Support from '../../components/MainPage/Support';

import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Cards />
      <Features />
      <Exchange />
      <Services />
      <News />
      <Support />
    </div>
  );
};

export default MainPage;