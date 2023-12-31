import { setLocalStorage } from '../../utils/localStore';

import Cards from './Cards';
import Exchange from './Exchange';
import Features from './Features';
import Services from './Services';
import News from './News';
import Support from './Support';

import styles from './MainPage.module.css';

const MainPage = () => { 
  setLocalStorage('PrescoringStep', {PrescoringStep: 0});

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