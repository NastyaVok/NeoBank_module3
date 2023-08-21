import { useNavigate } from 'react-router-dom';

import UIButton from '../../../components/UI/UIButton';

import cards from './img/Cards.png';

import styles from './Cards.module.css';


const Cards = () => {
  const navigate = useNavigate();

  const linkToLoanPage = () => {
    navigate('/loan');
  };

  return (
    <section className={styles.cards}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.title}>
                        Choose the design you like <br/>
                        and apply for card right <br/> 
                        now
          </h2>
          <UIButton text="Choose the card" onClick={() => linkToLoanPage()}/>
        </div>
        <img className={styles.img} src={cards} alt="cards-pic" />
      </div>
    </section>
  );
};

export default Cards;